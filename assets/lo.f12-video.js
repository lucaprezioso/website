document.querySelectorAll('.f12Poster').forEach(function(img){
  function fallback(){
    if(img.dataset.fallback)return;
    img.dataset.fallback='1';
    img.src='/media/ferrari-f12-front-480.webp';
  }
  img.addEventListener('error',fallback,{once:true});
  if(img.complete && !img.naturalWidth)fallback();
});
document.querySelectorAll('[data-f12-video]').forEach(function(b){b.hidden=false;});
document.addEventListener('click',function(e){
const button=e.target.closest('[data-f12-video]');if(!button)return;
const stage=button.closest('.f12Video');const frame=document.createElement('iframe');
frame.title=button.dataset.title;frame.src='https://www.youtube-nocookie.com/embed/'+button.dataset.f12Video+'?rel=0';
frame.allow='accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share';
frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
stage.replaceChildren(frame);frame.focus();
});