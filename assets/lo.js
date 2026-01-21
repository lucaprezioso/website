/* Luxury Obsession shared scripts (header and footer) */
(function(){
  "use strict";

  document.documentElement.classList.add("lojs");

  const LANGS = ["en","de","it"];

  function getLang(){
    // 1) URL
    try{
      const p = new URLSearchParams(window.location.search);
      const q = p.get("lang");
      if(q && LANGS.includes(q)) return q;
    } catch(_e) {}

    // 2) localStorage
    try{
      const s = localStorage.getItem("lo_lang");
      if(s && LANGS.includes(s)) return s;
    } catch(_e) {}

    return "en";
  }

  function setLang(next){
    if(!LANGS.includes(next)) return;
    try{ localStorage.setItem("lo_lang", next); } catch(_e) {}

    const u = new URL(window.location.href);
    u.searchParams.set("lang", next);
    // Keep path and hash
    window.location.href = u.pathname + u.search + u.hash;
  }

  function buildUrl(path, lang, hash){
    const effectiveLang = lang || getLang();
    const u = new URL(path, window.location.href);
    u.searchParams.set("lang", effectiveLang);
    if(hash) u.hash = hash;
    return u.pathname + u.search + u.hash;
  }


  // Determine the site root based on where this script is loaded from.
  // This works for:
  // - hosting under a subfolder (e.g. GitHub Pages: /<repo>/...)
  // - local servers
  // - opening files directly (file://)
  function getSiteRootUrl(){
    try{
      const cs = document.currentScript;
      if(cs && cs.src){
        const u = new URL(cs.src, window.location.href);       // .../assets/lo.js
        const assetsDir = new URL("./", u);                    // .../assets/
        return new URL("../", assetsDir);                      // .../
      }
    } catch(_e) {}

    // Fallback: first script that looks like lo.js
    try{
      const s = document.querySelector('script[src*="lo.js"]');
      if(s && s.src){
        const u = new URL(s.src, window.location.href);
        const assetsDir = new URL("./", u);
        return new URL("../", assetsDir);
      }
    } catch(_e) {}

    // Last resort: current directory
    return new URL("./", window.location.href);
  }

  const __LO_SITE_ROOT__ = getSiteRootUrl();

  // Build a URL relative to the site root (not the current page), and keep language.
  function buildRootUrl(path, lang, hash){
    const effectiveLang = lang || getLang();
    const u = new URL(String(path || ""), __LO_SITE_ROOT__);
    u.searchParams.set("lang", effectiveLang);
    if(hash){
      const h = String(hash).replace(/^#/, "");
      if(h) u.hash = h;
    }
    // Keep it same-origin by returning only pathname + search + hash
    return u.pathname + u.search + u.hash;
  }

  function initLangMenu(lang){
    const toggle = document.getElementById("langToggle");
    const menu = document.getElementById("langMenu");
    const codeEl = document.getElementById("langCode");
    if(!toggle || !menu || !codeEl) return;

    const codes = { en:"EN", de:"DE", it:"IT" };
    codeEl.textContent = codes[lang] || "EN";

    menu.querySelectorAll("[data-lang]").forEach(btn => {
      const code = btn.getAttribute("data-lang");
      btn.setAttribute("aria-current", code === lang ? "true" : "false");
    });

    if(toggle.dataset.loBound === "1") return;
    toggle.dataset.loBound = "1";

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
      if(menu.hidden) open();
      else close();
    });

    document.addEventListener("click", () => close(), { passive:true });
    document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });

    menu.querySelectorAll("[data-lang]").forEach(btn => {
      const code = btn.getAttribute("data-lang");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLang(code);
      });
    });
  }

  function initFooterYear(){
    const yearEl = document.getElementById("year");
    if(!yearEl) return;
    yearEl.textContent = String(new Date().getFullYear());
  }

function initFooterLegalLinks(lang){
  const footerRight = document.querySelector("footer .footerRight");
  if(!footerRight) return;

  const effectiveLang = lang || getLang();

  const labels = {
    en: { imp:"Impressum", priv:"Privacy", terms:"Terms" },
    de: { imp:"Impressum", priv:"Datenschutz", terms:"AGB" },
    it: { imp:"Impressum", priv:"Privacy", terms:"Termini" }
  };

  const t = labels[effectiveLang] || labels.en;

  const items = [
    { id:"footerImpressum", text:t.imp, href: buildRootUrl("impressum.html", effectiveLang, "top") },
    { id:"footerPrivacy", text:t.priv, href: buildRootUrl("datenschutz.html", effectiveLang, "top") },
    { id:"footerTerms", text:t.terms, href: buildRootUrl("agb.html", effectiveLang, "top") }
  ];

  footerRight.innerHTML = "";
  items.forEach((it, idx) => {
    const a = document.createElement("a");
    a.id = it.id;
    a.textContent = it.text;
    a.href = it.href;
    footerRight.appendChild(a);
    if(idx < items.length - 1){
      footerRight.appendChild(document.createTextNode(" · "));
    }
  });
}

  // Make LUXURY and OBSESSION addressable for wrapping
  function splitBrandWords(){
    const el = document.querySelector(".brandGold");
    if(!el || el.dataset.loSplit === "1") return;

    const raw = (el.textContent || "").trim().replace(/\s+/g," ");
    const parts = raw.split(" ");
    if(parts.length < 2){
      el.dataset.loSplit = "1";
      return;
    }

    const first = parts[0];
    const second = parts.slice(1).join(" ");

    el.textContent = "";
    const s1 = document.createElement("span");
    s1.className = "brandWord brandWord1";
    s1.textContent = first;

    const s2 = document.createElement("span");
    s2.className = "brandWord brandWord2";
    s2.textContent = second;

    el.appendChild(s1);
    el.appendChild(s2);
    el.dataset.loSplit = "1";
  }

  // Request must never be hidden. Promote it out of the nav list into the right cluster.
  function promoteRequest(){
    const navLinks = document.querySelector(".navLinks");
    const navRight = document.querySelector(".navRight");
    if(!navLinks || !navRight) return;

    const alreadyRight = navRight.querySelector("a.navCta, a#navRequest");
    if(alreadyRight && !alreadyRight.closest(".navLinks")) return;

    const req = navLinks.querySelector("a.navCta") || navLinks.querySelector("a#navRequest");
    if(!req) return;

    // Avoid repeated moves
    if(req.dataset.loPromoted === "1") return;
    req.dataset.loPromoted = "1";

    try{ navLinks.removeChild(req); } catch(_e) { return; }

    const langSel = navRight.querySelector(".langSelect");
    const burger = navRight.querySelector("#hamburger");

    if(langSel) navRight.insertBefore(req, langSel);
    else if(burger) navRight.insertBefore(req, burger);
    else navRight.appendChild(req);
  }

  function buildMobileMenu(lang){
    const menu = document.getElementById("mobileMenu");
    const navLinks = document.querySelector(".navLinks");
    if(!menu || !navLinks) return;

    const effectiveLang = lang || getLang();

    // Preserve open state
    const wasOpen = menu.getAttribute("data-open") === "1";

    menu.innerHTML = "";

    // 1) Primary links (exclude Request)
    const links = Array.from(navLinks.querySelectorAll("a"))
      .filter(a => !a.classList.contains("navCta"));

    for(const a of links){
      const clone = a.cloneNode(true);
      clone.removeAttribute("id");
      menu.appendChild(clone);
    }
// 2) Legal links (optional, from footer)
const legalLinks = Array.from(document.querySelectorAll("footer .footerRight a"));
if(legalLinks.length){
  for(const a of legalLinks){
    const clone = a.cloneNode(true);
    clone.removeAttribute("id");
    menu.appendChild(clone);
  }
} else {
  const fallback = [
    { text: "Impressum", href: buildRootUrl("impressum.html", effectiveLang, "top") },
    { text: (effectiveLang === "de" ? "Datenschutz" : "Privacy"), href: buildRootUrl("datenschutz.html", effectiveLang, "top") },
    { text: (effectiveLang === "de" ? "AGB" : (effectiveLang === "it" ? "Termini" : "Terms")), href: buildRootUrl("agb.html", effectiveLang, "top") }
  ];
  for(const it of fallback){
    const a = document.createElement("a");
    a.textContent = it.text;
    a.href = it.href;
    menu.appendChild(a);
  }
}

    // Divider
    const div1 = document.createElement("div");
    div1.className = "mobileMenuDivider";
    menu.appendChild(div1);

    // 3) Language selector inside burger (since top language hides in burger modes)
    const langBlock = document.createElement("div");
    langBlock.className = "mobileLangBlock";

    const title = document.createElement("div");
    title.className = "mobileLangTitle";
    title.textContent = (effectiveLang === "de" ? "Sprache" : (effectiveLang === "it" ? "Lingua" : "Language"));
    langBlock.appendChild(title);

    const list = document.createElement("div");
    list.className = "mobileLangList";

    const choices = [
      { code:"en", label:"English" },
      { code:"de", label:"Deutsch" },
      { code:"it", label:"Italiano" }
    ];

    for(const c of choices){
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mobileLangBtn";
      btn.setAttribute("data-lang", c.code);
      btn.setAttribute("aria-pressed", c.code === effectiveLang ? "true" : "false");
      btn.textContent = c.label;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLang(c.code);
      });
      list.appendChild(btn);
    }

    langBlock.appendChild(list);
    menu.appendChild(langBlock);

    // Divider
    const div2 = document.createElement("div");
    div2.className = "mobileMenuDivider";
    menu.appendChild(div2);

    // 4) Request CTA inside menu (in addition to always-visible one)
    const req = document.querySelector(".navRight a.navCta, .navRight a#navRequest, a.navCta#navRequest");
    if(req){
      const reqClone = req.cloneNode(true);
      reqClone.removeAttribute("id");
      reqClone.classList.add("mobileMenuCta");
      menu.appendChild(reqClone);
    }

    // Restore open state if it was open
    if(wasOpen) menu.setAttribute("data-open","1");
  }

  function initHamburger(){
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("mobileMenu");
    if(!btn || !menu) return;

    if(btn.dataset.loBound === "1") return;
    btn.dataset.loBound = "1";

    function close(){
      menu.setAttribute("data-open","0");
      btn.setAttribute("aria-expanded","false");
    }

    function open(){
      menu.setAttribute("data-open","1");
      btn.setAttribute("aria-expanded","true");
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.getAttribute("data-open") === "1";
      if(isOpen) close();
      else open();
    });

    // Close when clicking outside
    document.addEventListener("click", () => close(), { passive:true });
    document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });

    // Close when clicking an item inside
    menu.addEventListener("click", (e) => {
      const t = e.target;
      if(!t) return;
      const isLink = t.closest && t.closest("a");
      const isLangBtn = t.closest && t.closest("button.mobileLangBtn");
      if(isLink || isLangBtn) close();
    });

    // Ensure closed on init
    close();
  }

  function applyPriorityNav(){
    const header = document.querySelector("header");
    const navInner = document.querySelector(".navInner");
    const navLinks = document.querySelector(".navLinks");
    if(!header || !navInner || !navLinks) return;

    const langSel = document.querySelector(".langSelect");
    const el = (id) => document.getElementById(id);

    const rates = el("navRates");
    const contact = el("navContact");
    const philosophy = el("navPhilosophy");
    const experiences = el("navExperiences");
    const journal = el("navBlog") || el("navJournal");

    const links = Array.from(navLinks.querySelectorAll("a"));

    const setHidden = (node, hidden) => {
      if(!node) return;
      node.setAttribute("data-lo-hidden", hidden ? "1" : "0");
    };

    // We deliberately keep navLinks as non-shrinking (see lo.css) so scrollWidth reflects reality.
    // This avoids the "overlap" bug where the nav shrinks and its children paint over the brand.
    const fits = () => (navInner.scrollWidth <= navInner.clientWidth + 1);

    const reset = () => {
      header.setAttribute("data-brand-wrap", "0");
      header.setAttribute("data-burger", "0");
      for(const a of links) setHidden(a, false);
      if(langSel) setHidden(langSel, false);
    };

    // 1) Full layout (no hamburger on desktop)
    reset();
    if(fits()) return;

    // 2) Enable hamburger and remove low-priority links first
    header.setAttribute("data-burger", "1");

    // Low priority in this exact order:
    // Our Philosophy, Experiences, Journal
    // Fallback: any non-CTA link that is not Rates or Contact.
    const lowPriority = [];
    if(philosophy) lowPriority.push(philosophy);
    if(experiences) lowPriority.push(experiences);
    if(journal) lowPriority.push(journal);
    if(lowPriority.length === 0){
      for(const a of links){
        if(a.classList.contains("navCta")) continue;
        if(a === rates || a === contact) continue;
        lowPriority.push(a);
      }
    }

    for(const node of lowPriority){
      if(fits()) break;
      setHidden(node, true);
    }
    if(fits()) return;

    // 3) Allow the brand to wrap to two lines (Luxury / Obsession)
    header.setAttribute("data-brand-wrap", "1");
    if(fits()) return;

    // 4) Then hide language selector
    if(langSel){
      setHidden(langSel, true);
      if(fits()) return;
    }

    // 5) Then hide Contact
    setHidden(contact, true);
    if(fits()) return;

    // 6) Then hide Rates
    setHidden(rates, true);
  }

  function initSharedUI(lang){
    const effectiveLang = lang || getLang();

    splitBrandWords();
    promoteRequest();

    initLangMenu(effectiveLang);
    initFooterYear();
    initFooterLegalLinks(effectiveLang);

    buildMobileMenu(effectiveLang);
    initHamburger();

    // Apply mode after fonts and translated text settle
    const schedule = () => {
      // Run after layout settles. Two frames catches font swaps and flex recalcs reliably.
      window.requestAnimationFrame(() => {
        applyPriorityNav();
        buildMobileMenu(effectiveLang);
        window.requestAnimationFrame(() => {
          applyPriorityNav();
          buildMobileMenu(effectiveLang);
        });
      });
    };

    // Run now
    schedule();

    // Re-run on resize
    window.addEventListener("resize", schedule, { passive:true });

    // Re-run after fonts load (Cinzel changes width)
    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(schedule).catch(() => {});
    }

    // Re-run when nav text changes (translations)
    const navLinks = document.querySelector(".navLinks");
    if(navLinks){
      const mo = new MutationObserver(schedule);
      mo.observe(navLinks, { subtree:true, childList:true, characterData:true });
    }
  }

  // Auto init
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", () => initSharedUI(), { once:true });
  } else {
    initSharedUI();
  }

  // Public API used by page scripts
  window.__LO__ = {
    getLang,
    setLang,
    buildUrl,
    initLangMenu,
    initFooterYear,
    initFooterLegalLinks,
    initHamburger,
    initSharedUI
  };
})();
