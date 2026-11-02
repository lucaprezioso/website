/* Load the third-party player only after an explicit visitor action. */
(function(){
  const button=document.querySelector('[data-f8-play]');
  if(!button) return;
  button.addEventListener('click',function(){
    const container=document.querySelector('[data-f8-video]');
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube-nocookie.com/embed/62Wf3GMJzpQ?autoplay=1&playsinline=1';
    frame.title='Throttle House: Ferrari F8 Tributo Review // Hold Me Closer';
    frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen=true;
    frame.referrerPolicy='strict-origin-when-cross-origin';
    container.replaceChildren(frame);
    frame.focus();
  });
})();
