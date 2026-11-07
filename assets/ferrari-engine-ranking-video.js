/* Load the third-party player only after an explicit visitor action. */
(function(){
  const button=document.querySelector('[data-f8-play]');
  if(!button) return;
  button.addEventListener('click',function(){
    const container=document.querySelector('[data-f8-video]');
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube-nocookie.com/embed/Ct9NPXc5GgM?autoplay=1&playsinline=1';
    frame.title=document.querySelector('h1').textContent;
    frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen=true;
    frame.referrerPolicy='strict-origin-when-cross-origin';
    container.replaceChildren(frame);
    frame.focus();
  });
})();
