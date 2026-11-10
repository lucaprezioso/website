/* Load the third-party player only after an explicit visitor action. */
(function(){
  const button=document.querySelector('[data-tr-play]');
  if(!button) return;
  button.addEventListener('click',function(){
    const container=document.querySelector('[data-tr-video]');
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube-nocookie.com/embed/8Xe4ES93nuo?autoplay=1&playsinline=1';
    frame.title='TheCarGuys · Ferrari Testarossa & 512 TR';
    frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen=true;
    frame.referrerPolicy='strict-origin-when-cross-origin';
    container.replaceChildren(frame);
    frame.focus();
  });
})();
