(() => {
  'use strict';

  const shells = Array.from(document.querySelectorAll('[data-lo-youtube]'));
  if (!shells.length) return;

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const prefersReducedData = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-data: reduce)').matches;
  const prefersReducedMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const effectiveType = String(connection?.effectiveType || '').toLowerCase();
  const downlink = Number(connection?.downlink || 0);

  // Network Information is not available in every browser. Where it is available,
  // respect Data Saver and avoid autoplay on clearly constrained connections.
  const manualPlayback = Boolean(
    connection?.saveData ||
    prefersReducedData ||
    prefersReducedMotion ||
    ['slow-2g', '2g', '3g'].includes(effectiveType) ||
    (downlink > 0 && downlink < 1.5)
  );

  let apiPromise;
  function loadYouTubeApi() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (apiPromise) return apiPromise;

    apiPromise = new Promise((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try { if (typeof previousReady === 'function') previousReady(); } catch (_) {}
        resolve(window.YT);
      };

      const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existing) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        script.onerror = () => reject(new Error('YouTube IFrame API failed to load'));
        document.head.appendChild(script);
      }

      window.setTimeout(() => {
        if (window.YT?.Player) resolve(window.YT);
      }, 5000);
    });

    return apiPromise;
  }

  function setNote(shell, key) {
    const note = shell.parentElement?.querySelector('[data-video-note]');
    const text = shell.dataset[key];
    if (note && text) note.textContent = text;
  }

  function setSoundState(shell, muted) {
    const button = shell.querySelector('.phSoundToggle');
    if (!button) return;
    button.hidden = false;
    button.dataset.muted = String(muted);
    button.setAttribute('aria-pressed', String(!muted));
    const label = button.querySelector('.phSoundLabel');
    if (label) label.textContent = muted ? shell.dataset.soundOn : shell.dataset.soundOff;
  }

  function showManualStart(shell, noteKey = 'noteManual') {
    shell.dataset.mode = 'manual';
    const playButton = shell.querySelector('.phPlayOverlay');
    if (playButton) playButton.hidden = false;
    const soundButton = shell.querySelector('.phSoundToggle');
    if (soundButton) soundButton.hidden = true;
    setNote(shell, noteKey);
  }

  function markPlaying(shell) {
    shell.classList.add('is-playing');
    const playButton = shell.querySelector('.phPlayOverlay');
    if (playButton) playButton.hidden = true;
  }

  async function createPlayer(shell) {
    if (shell._loPlayerPromise) return shell._loPlayerPromise;

    shell._loPlayerPromise = loadYouTubeApi().then((YT) => new Promise((resolve, reject) => {
      const mount = shell.querySelector('.phYoutubeMount');
      if (!mount) return reject(new Error('Video mount not found'));

      const videoId = shell.dataset.videoId;
      const iframe = document.createElement('iframe');
      iframe.id = mount.id || `lo-youtube-${Math.random().toString(36).slice(2)}`;
      iframe.title = shell.dataset.videoTitle || 'Luxury Obsession video';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';

      const params = new URLSearchParams({
        autoplay: '0',
        mute: '1',
        playsinline: '1',
        loop: '1',
        playlist: videoId,
        controls: manualPlayback ? '1' : '0',
        rel: '0',
        enablejsapi: '1',
        origin: window.location.origin
      });
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`;
      mount.replaceWith(iframe);

      let resolved = false;
      const player = new YT.Player(iframe, {
        events: {
          onReady: (event) => {
            shell._loPlayer = event.target;
            resolved = true;
            resolve(event.target);

            if (shell.dataset.userStarted === 'true') {
              event.target.unMute();
              event.target.setVolume(100);
              event.target.playVideo();
              setSoundState(shell, false);
              return;
            }

            if (manualPlayback) {
              event.target.mute();
              setSoundState(shell, true);
              showManualStart(shell);
            } else {
              event.target.mute();
              event.target.playVideo();
              setSoundState(shell, true);
              setNote(shell, 'noteAutoplay');
            }
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) markPlaying(shell);
            if (event.data === YT.PlayerState.ENDED) {
              event.target.seekTo(0, true);
              event.target.playVideo();
            }
          },
          onAutoplayBlocked: () => showManualStart(shell, 'noteBlocked'),
          onError: () => {
            if (!resolved) reject(new Error('YouTube player failed to initialize'));
            showManualStart(shell, 'noteError');
          }
        }
      });
      shell._loPlayer = player;
    })).catch(() => {
      showManualStart(shell, 'noteError');
      return null;
    });

    return shell._loPlayerPromise;
  }

  shells.forEach((shell) => {
    const playButton = shell.querySelector('.phPlayOverlay');
    const soundButton = shell.querySelector('.phSoundToggle');

    if (manualPlayback) showManualStart(shell);
    else setNote(shell, 'noteAutoplay');

    playButton?.addEventListener('click', async () => {
      shell.dataset.userStarted = 'true';
      const player = shell._loPlayer || await createPlayer(shell);
      if (!player) {
        const fallback = shell.dataset.youtubeUrl;
        if (fallback) window.open(fallback, '_blank', 'noopener');
        return;
      }
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      setSoundState(shell, false);
      markPlaying(shell);
    });

    soundButton?.addEventListener('click', async () => {
      const player = shell._loPlayer || await createPlayer(shell);
      if (!player || typeof player.isMuted !== 'function') return;
      if (player.isMuted()) {
        player.unMute();
        player.setVolume(100);
        player.playVideo();
        setSoundState(shell, false);
      } else {
        player.mute();
        setSoundState(shell, true);
      }
    });

    const initialize = () => createPlayer(shell);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          initialize();
          obs.disconnect();
        }
      }, { rootMargin: '650px 0px' });
      observer.observe(shell);
    } else {
      initialize();
    }
  });
})();
