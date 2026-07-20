(function(){
  "use strict";
  function init(){
    const page=document.querySelector("[data-gallery-page]");
    if(!page) return;
    const items=Array.from(page.querySelectorAll("[data-gallery-item]"));
    const subjectInputs=Array.from(page.querySelectorAll('input[name="subject"]'));
    const locationInputs=Array.from(page.querySelectorAll('input[name="location"]'));
    const count=document.getElementById("galleryCount");
    const more=document.getElementById("galleryMore");
    const empty=document.getElementById("galleryEmpty");
    const initial=12, stepSize=8;
    let limit=initial;

    function selected(inputs){ return new Set(inputs.filter(i=>i.checked).map(i=>i.value)); }
    function matching(){
      const subjects=selected(subjectInputs), locations=selected(locationInputs);
      return items.filter(item=>subjects.has(item.dataset.subject) && locations.has(item.dataset.location));
    }
    function render(){
      const matches=matching();
      const matchSet=new Set(matches);
      items.forEach(item=>{ item.hidden=!matchSet.has(item); });
      matches.forEach((item,index)=>{ item.hidden=index>=limit; });
      const shown=Math.min(limit,matches.length);
      const template=page.dataset.showingTemplate || "Showing {shown} of {total} photos";
      count.textContent=template.replace("{shown}",String(shown)).replace("{total}",String(matches.length));
      empty.hidden=matches.length!==0;
      if(matches.length<=initial){ more.hidden=true; }
      else { more.hidden=false; more.textContent=limit>=matches.length ? page.dataset.lessLabel : page.dataset.moreLabel; }
    }
    [...subjectInputs,...locationInputs].forEach(input=>input.addEventListener("change",()=>{limit=initial;render();}));
    more.addEventListener("click",()=>{ const total=matching().length; limit=limit>=total ? initial : Math.min(limit+stepSize,total); render(); if(limit===initial) document.querySelector(".galleryFilters")?.scrollIntoView({behavior:"smooth",block:"start"}); });

    const lb=document.getElementById("lightbox"), lbImg=document.getElementById("lbImg"), lbCap=document.getElementById("lbCap");
    const prev=lb.querySelector(".lbPrev"), next=lb.querySelector(".lbNext");
    let lightboxItems=[], index=0, lastFocus=null;
    function refreshLightboxItems(){ lightboxItems=matching(); }
    function openAt(i){
      refreshLightboxItems(); if(!lightboxItems.length) return;
      index=(i+lightboxItems.length)%lightboxItems.length;
      const item=lightboxItems[index], img=item.querySelector("img");
      if(!lb.classList.contains("open")) lastFocus=document.activeElement;
      lbImg.src=item.dataset.full || img.currentSrc || img.src;
      lbImg.alt=img.alt || "Gallery image";
      lbCap.textContent=[item.dataset.caption, `${index+1} / ${lightboxItems.length}`].filter(Boolean).join(" · ");
      lb.classList.add("open"); lb.setAttribute("aria-hidden","false"); document.body.classList.add("galleryLightboxOpen"); lb.focus();
    }
    function close(){ lb.classList.remove("open"); lb.setAttribute("aria-hidden","true"); document.body.classList.remove("galleryLightboxOpen"); if(lastFocus && lastFocus.focus) lastFocus.focus(); }
    function move(delta){ openAt(index+delta); }
    items.forEach(item=>item.addEventListener("click",()=>{refreshLightboxItems();openAt(lightboxItems.indexOf(item));}));
    prev.addEventListener("click",()=>move(-1)); next.addEventListener("click",()=>move(1));
    lb.querySelectorAll("[data-lb-close]").forEach(el=>el.addEventListener("click",close));
    lbImg.addEventListener("click",()=>move(1));
    document.addEventListener("keydown",e=>{ if(!lb.classList.contains("open")) return; if(e.key==="Escape") close(); else if(e.key==="ArrowLeft") move(-1); else if(e.key==="ArrowRight") move(1); });
    let startX=null,startY=null;
    lb.addEventListener("touchstart",e=>{const t=e.touches&&e.touches[0];if(t){startX=t.clientX;startY=t.clientY;}},{passive:true});
    lb.addEventListener("touchend",e=>{if(startX===null)return;const t=e.changedTouches&&e.changedTouches[0];if(!t)return;const dx=t.clientX-startX,dy=t.clientY-startY;startX=startY=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))move(dx>0?-1:1);},{passive:true});
    const year=document.getElementById("year"); if(year) year.textContent=String(new Date().getFullYear());
    render();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
