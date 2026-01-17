(function(){
  const LANGS = ["en","de","it"];

  function getLang(){
    const p = new URLSearchParams(window.location.search);
    const q = p.get("lang");
    if(q && LANGS.includes(q)) return q;
    const s = localStorage.getItem("lo_lang");
    if(s && LANGS.includes(s)) return s;
    return "en";
  }

  function setLang(next){
    if(!LANGS.includes(next)) return;
    localStorage.setItem("lo_lang", next);
    const u = new URL(window.location.href);
    u.searchParams.set("lang", next);
    window.location.href = u.pathname + u.search + u.hash;
  }

  function buildUrl(path, lang, hash){
    const u = new URL(path, window.location.href);
    u.searchParams.set("lang", lang);
    if(hash) u.hash = hash;
    return u.pathname + u.search + u.hash;
  }

  function initLangMenu(lang){
    const toggle = document.getElementById("langToggle");
    const menu = document.getElementById("langMenu");
    const codeEl = document.getElementById("langCode");
    if(!toggle || !menu || !codeEl) return;

    const codes = { en:"EN", de:"DE", it:"IT" };
    codeEl.textContent = codes[lang] || "EN";

    function close(){
      menu.hidden = true;
      toggle.setAttribute("aria-expanded","false");
    }
    function open(){
      menu.hidden = false;
      toggle.setAttribute("aria-expanded","true");
    }

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = !menu.hidden;
      if(isOpen) close();
      else open();
    });

    document.addEventListener("click", () => close(), { passive:true });
    document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });

    menu.querySelectorAll("[data-lang]").forEach(btn => {
      const code = btn.getAttribute("data-lang");
      btn.setAttribute("aria-current", code === lang ? "true" : "false");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLang(code);
      });
    });
  }

  function initHamburger(){
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("mobileMenu");
    if(!btn || !menu) return;

    function close(){
      menu.style.display = "none";
      menu.setAttribute("data-open","0");
      btn.setAttribute("aria-expanded","false");
    }

    btn.addEventListener("click", () => {
      const open = menu.getAttribute("data-open") === "1";
      if(open) close();
      else {
        menu.style.display = "block";
        menu.setAttribute("data-open","1");
        btn.setAttribute("aria-expanded","true");
      }
    });

    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  }

  window.__LO__ = { getLang, setLang, buildUrl, initLangMenu, initHamburger };
})();
