/* Luxury Obsession shared scripts (header and footer) */
(function(){
  "use strict";

  document.documentElement.classList.add("lojs");

  const LANGS = ["en","de","it"];

  const LO_SLUG_MAP = {
    en: {
      "": "", "pricing": "pricing", "gallery": "gallery", "blog": "journal", "journal": "journal", "experiences": "experiences", "philosophy": "philosophy", "locations": "locations", "about-us": "about-us",
      "impressum": "impressum", "datenschutz": "datenschutz", "agb": "agb",
      "ferrari-rental-zurich": "ferrari-rental-zurich", "ferrari-rental-zurich-airport": "ferrari-rental-zurich-airport", "ferrari-rental-lucerne": "ferrari-rental-lucerne", "ferrari-rental-bern": "ferrari-rental-bern", "ferrari-rental-winterthur": "ferrari-rental-winterthur", "ferrari-rental-zug": "ferrari-rental-zug", "ferrari-rental-st-gallen": "ferrari-rental-st-gallen", "ferrari-rental-basel": "ferrari-rental-basel", "ferrari-rental-chur": "ferrari-rental-chur", "ferrari-rental-davos": "ferrari-rental-davos", "ferrari-rental-andermatt": "ferrari-rental-andermatt", "ferrari-rental-aargau": "ferrari-rental-aargau", "ferrari-rental-solothurn": "ferrari-rental-solothurn", "ferrari-rental-biel": "ferrari-rental-biel", "ferrari-rental-naenikon": "ferrari-rental-naenikon", "ferrari-gift-voucher-zurich": "ferrari-gift-voucher-zurich", "ferrari-wedding-car-rental-zurich": "ferrari-wedding-car-rental-zurich", "ferrari-birthday-rental-zurich": "ferrari-birthday-rental-zurich", "ferrari-photoshoot-rental-zurich": "ferrari-photoshoot-rental-zurich", "ferrari-corporate-event-rental-zurich": "ferrari-corporate-event-rental-zurich", "ferrari-458-experiences-video": "ferrari-458-experiences-video"
    },
    de: {
      "": "", "pricing": "preise", "gallery": "galerie", "blog": "journal", "journal": "journal", "experiences": "erlebnisse", "philosophy": "philosophie", "locations": "standorte", "about-us": "ueber-uns",
      "impressum": "impressum", "datenschutz": "datenschutz", "agb": "agb",
      "ferrari-rental-zurich": "ferrari458-mieten-zuerich",
      "ferrari-mieten-zuerich": "ferrari-mieten-zuerich",
      "ferrari-rental-zurich-airport": "ferrari-mieten-zuerich-flughafen",
      "ferrari-rental-lucerne": "ferrari-mieten-luzern",
      "ferrari-rental-bern": "ferrari-mieten-bern",
      "ferrari-rental-winterthur": "ferrari-mieten-winterthur",
      "ferrari-rental-zug": "ferrari-mieten-zug",
      "ferrari-rental-st-gallen": "ferrari-mieten-st-gallen",
      "ferrari-rental-basel": "ferrari-mieten-basel",
      "ferrari-rental-chur": "ferrari-mieten-chur",
      "ferrari-rental-davos": "ferrari-mieten-davos",
      "ferrari-rental-andermatt": "ferrari-mieten-andermatt",
      "ferrari-rental-aargau": "ferrari-mieten-aargau",
      "ferrari-rental-solothurn": "ferrari-mieten-solothurn",
      "ferrari-rental-biel": "ferrari-mieten-biel",
      "ferrari-rental-naenikon": "ferrari-mieten-uster",
      "luxusauto-mieten-zuerich": "luxusauto-mieten-zuerich", "sportwagen-mieten-zuerich": "sportwagen-mieten-zuerich",
      "ferrari-mieten-schweiz": "ferrari-mieten-schweiz", "ferrari-458-italia": "ferrari-458-italia",
      "ferrari-vermietung-zuerich": "ferrari-mieten-zuerich", "ferrari-gift-voucher-zurich": "ferrari-gutschein-zuerich", "ferrari-wedding-car-rental-zurich": "ferrari-mieten-hochzeit-zuerich", "ferrari-birthday-rental-zurich": "ferrari-mieten-geburtstag-zuerich", "ferrari-photoshoot-rental-zurich": "ferrari-mieten-fotoshooting-zuerich", "ferrari-corporate-event-rental-zurich": "ferrari-mieten-firmenanlass-zuerich", "ferrari-458-experiences-video": "ferrari-458-erlebnisse-video"
    },
    it: {
      "": "", "pricing": "pricing", "gallery": "galleria", "blog": "blog", "journal": "blog", "experiences": "experiences", "philosophy": "philosophy", "locations": "locations", "about-us": "chi-siamo",
      "impressum": "impressum", "datenschutz": "datenschutz", "agb": "agb",
      "ferrari-rental-zurich": "noleggio-ferrari-zurigo",
      "ferrari-rental-zurich-airport": "noleggio-ferrari-aeroporto-zurigo",
      "ferrari-rental-lucerne": "noleggio-ferrari-lucerna",
      "ferrari-rental-bern": "noleggio-ferrari-berna",
      "ferrari-rental-winterthur": "noleggio-ferrari-winterthur",
      "ferrari-rental-zug": "noleggio-ferrari-zugo",
      "ferrari-rental-st-gallen": "noleggio-ferrari-san-gallo",
      "ferrari-rental-basel": "noleggio-ferrari-basilea",
      "ferrari-rental-chur": "noleggio-ferrari-coira",
      "ferrari-rental-davos": "noleggio-ferrari-davos",
      "ferrari-rental-andermatt": "noleggio-ferrari-andermatt",
      "ferrari-rental-aargau": "noleggio-ferrari-argovia",
      "ferrari-rental-solothurn": "noleggio-ferrari-soletta",
      "ferrari-rental-biel": "noleggio-ferrari-bienne",
      "ferrari-rental-naenikon": "noleggio-ferrari-uster", "ferrari-gift-voucher-zurich": "buono-regalo-ferrari-zurigo", "ferrari-wedding-car-rental-zurich": "noleggio-ferrari-matrimonio-zurigo", "ferrari-birthday-rental-zurich": "noleggio-ferrari-compleanno-zurigo", "ferrari-photoshoot-rental-zurich": "noleggio-ferrari-fotoshooting-zurigo", "ferrari-corporate-event-rental-zurich": "noleggio-ferrari-evento-aziendale-zurigo", "ferrari-458-experiences-video": "video-esperienze-ferrari-458"
    }
  };

  function loSlugKeyFromSlug(slug){
    slug = String(slug || "").replace(/^\/+|\/+$/g, "");
    for(const lang of Object.keys(LO_SLUG_MAP)){
      const map = LO_SLUG_MAP[lang] || {};
      for(const key of Object.keys(map)){
        if(map[key] === slug || key === slug) return key;
      }
    }
    return slug;
  }

  function loSlugForLang(slugOrKey, lang){
    const key = loSlugKeyFromSlug(slugOrKey);
    const map = LO_SLUG_MAP[lang] || {};
    return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : key;
  }


const __LO_IS_FILE__ = window.location.protocol === "file:";

function loBasePathname(){
  try{
    let p = (__LO_SITE_ROOT__ && __LO_SITE_ROOT__.pathname) ? __LO_SITE_ROOT__.pathname : "/";
    if(!p.endsWith("/")) p += "/";
    const m = p.match(/^(.*\/)(en|de|it)\/$/i);
    if(m) p = m[1];
    return p;
  } catch(_e){
    return "/";
  }
}

function loLangFromPath(){
  if(__LO_IS_FILE__) return null;
  try{
    const base = loBasePathname();
    let p = window.location.pathname || "/";
    if(p.startsWith(base)) p = p.slice(base.length);
    if(p.startsWith("/")) p = p.slice(1);
    const seg = p.split("/").filter(Boolean)[0] || "";
    if(LANGS.includes(seg)) return seg;

    // German-first clean URLs live at root. These pages are intentionally not under /de/.
    const deRootSlugs = new Set([
      "preise", "galerie", "erlebnisse", "philosophie", "journal", "standorte", "ueber-uns",
      "impressum", "datenschutz", "agb", "ferrari-458-italia",
      "ferrari-mieten-zuerich-preise-anforderungen-ablauf", "autostrecken-schweiz-ferrari-zuerich", "ferrari-gutschein-zuerich", "ferrari-mieten-hochzeit-zuerich", "ferrari-mieten-geburtstag-zuerich", "ferrari-mieten-fotoshooting-zuerich", "ferrari-mieten-firmenanlass-zuerich"
    ]);
    if(deRootSlugs.has(seg) || seg.startsWith("ferrari-mieten-") || seg.startsWith("ferrari458-mieten-") || seg.startsWith("sportwagen-mieten-") || seg.startsWith("luxusauto-mieten-") || seg.startsWith("ferrari-vermietung-")) return "de";

    // Legacy root Italian location URLs may still be seen before their 301 redirect.
    if(seg.startsWith("noleggio-ferrari-")) return "it";
  } catch(_e) {}
  return null;
}

function loSlugFromTarget(target){
  let t = String(target || "");
  t = t.split("#")[0].split("?")[0];
  t = t.replace(/^\//, "");
  t = t.replace(/^\.\//, "");
  t = t.replace(/^pages\//i, "");
  const parts = t.split("/").filter(Boolean);
  const last = parts.length ? parts[parts.length - 1] : "";
  if(!last) return "";
  if(last.toLowerCase() === "index.html") return "";
  if(last.toLowerCase().endsWith(".html")) return last.slice(0, -5);
  return last;
}

function loPrettyUrl(target, lang, hash){
  const effectiveLang = lang || getLang();
  const base = loBasePathname();
  const rawSlug = loSlugFromTarget(target);
  const slug = loSlugForLang(rawSlug, effectiveLang);

  let out = base;
  if(effectiveLang !== "de"){
    out += effectiveLang;
    // Language homepages should be /en/ and /it/ rather than /en or /it.
    // This avoids an unnecessary Netlify 301 and prevents local redirect-loop edge cases.
    if(!slug && !out.endsWith("/")) out += "/";
  }
  if(slug){
    if(!out.endsWith("/")) out += "/";
    out += slug;
  }
  out = out.replace(/\/+/g, "/");
  if(!out.startsWith("/")) out = "/" + out;

  if(hash){
    const h = String(hash).replace(/^#/, "");
    if(h) out += "#" + h;
  }
  return out;
}

function loRewriteInternalLinks(effectiveLang){
  if(__LO_IS_FILE__) return;

  const base = loBasePathname();
  const rootMap = {
    "index.html": "",
    "gallery.html": "gallery",
    "experiences.html": "experiences",
    "philosophy.html": "philosophy",
    "about-us.html": "about-us",
    "impressum.html": "impressum",
    "datenschutz.html": "datenschutz",
    "agb.html": "agb"
  };

  try{
    const brand = document.querySelector("a.brand");
    if(brand){
      const explicitHome = (typeof window.LO_HOME_URL === "string" && window.LO_HOME_URL) ? window.LO_HOME_URL : "";
      brand.setAttribute("href", explicitHome || loPrettyUrl("index.html", effectiveLang));
    }
  } catch(_e) {}

  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if(!href) return;
    if(href.startsWith("#")) return;

    const low = href.toLowerCase();
    if(low.startsWith("http:") || low.startsWith("https:") || low.startsWith("mailto:") || low.startsWith("tel:")) return;

    const parts = href.split("#");
    const pathPart = (parts[0] || "").trim();
    const hashPart = parts.length > 1 ? parts.slice(1).join("#") : "";

    // Absolute internal links should still be normalised if they point to old /pages/*.html
    // or to a root clean URL that has a language-specific equivalent (e.g. /locations -> /standorte in German).
    let cleaned = pathPart.replace(/^\.\//, "");
    if(cleaned.startsWith("/")){
      const absoluteClean = cleaned.replace(/^\/+/g, "");
      const segs = absoluteClean.split("/").filter(Boolean);
      const first = segs[0] || "";
      if(first === "pages"){
        cleaned = absoluteClean;
      } else if(segs.length === 1 && (/^[a-z0-9\-]+(\.html)?$/i.test(first))){
        cleaned = first;
      } else {
        return;
      }
    }

    if(rootMap.hasOwnProperty(cleaned)){
      const slug = rootMap[cleaned];
      const target = slug ? (slug + ".html") : "index.html";
      a.setAttribute("href", loPrettyUrl(target, effectiveLang, hashPart));
      return;
    }

    if(/^pages\/.*\.html$/i.test(cleaned) || /^[a-z0-9\-]+\.html$/i.test(cleaned)){
      const slug = loSlugFromTarget(cleaned);
      if(!slug) return;
      a.setAttribute("href", loPrettyUrl(slug + ".html", effectiveLang, hashPart));
      return;
    }
  });
}


  function getLang(){
    // 0) Path language for clean URLs online
    try{
      const p = loLangFromPath();
      if(p) return p;
    } catch(_e) {}

    // 1) URL query string (legacy and local)
    try{
      const p = new URLSearchParams(window.location.search);
      const q = p.get("lang");
      if(q && LANGS.includes(q)) return q;
    } catch(_e) {}

    // 2) Static document language is authoritative for clean, server-rendered pages
    try{
      const dl = (document.documentElement.getAttribute("lang") || "").slice(0,2).toLowerCase();
      if(dl && LANGS.includes(dl)) return dl;
    } catch(_e) {}

    // 3) localStorage is only a fallback for legacy/local browsing
    try{
      const s = localStorage.getItem("lo_lang");
      if(s && LANGS.includes(s)) return s;
    } catch(_e) {}

    return "de";
  }

  const LO_ATTRIBUTION_PARAMS = new Set([
    "gclid", "dclid", "gclsrc", "wbraid", "gbraid", "_gl"
  ]);

  function withAttributionParams(target){
    try{
      const current = new URL(window.location.href);
      const destination = new URL(target, current);
      if(destination.origin !== current.origin) return target;

      current.searchParams.forEach((value, key) => {
        const normalized = key.toLowerCase();
        if(!LO_ATTRIBUTION_PARAMS.has(normalized) && !normalized.startsWith("utm_")) return;
        if(!destination.searchParams.has(key)) destination.searchParams.append(key, value);
      });

      return destination.pathname + destination.search + destination.hash;
    } catch(_e) {
      return target;
    }
  }


  function loAlternateHrefForLang(lang){
    try{
      const wanted = String(lang || "").toLowerCase();
      if(!LANGS.includes(wanted)) return "";

      // Optional page-specific destinations for UI language switching.
      // These do not create hreflang relationships and are useful for standalone SEO pages.
      const explicit = window.LO_LANGUAGE_URLS && window.LO_LANGUAGE_URLS[wanted];
      if(explicit){
        const explicitUrl = new URL(explicit, window.location.href);
        return explicitUrl.pathname + explicitUrl.search;
      }
      const links = Array.from(document.querySelectorAll('link[rel~="alternate"][hreflang][href]'));
      const hit = links.find(l => {
        const h = (l.getAttribute("hreflang") || "").toLowerCase();
        return h === wanted || h.startsWith(wanted + "-");
      });
      if(!hit) return "";
      const url = new URL(hit.getAttribute("href"), window.location.href);
      return url.pathname + url.search;
    } catch(_e) { return ""; }
  }

  function setLang(next){
    if(!LANGS.includes(next)) return;
    try{ localStorage.setItem("lo_lang", next); } catch(_e) {}

    // Prefer explicit hreflang alternates when they are present on the page.
    // This is the safest way to switch between /, /en/ and /it/ from the German-first homepage,
    // and it also prevents accidental slug guesses on specialist landing pages.
    if(!__LO_IS_FILE__){
      const altHref = loAlternateHrefForLang(next);
      if(altHref){
        window.location.href = withAttributionParams(altHref + (window.location.hash || ""));
        return;
      }
    }

    // Local file browsing keeps legacy query string
    if(__LO_IS_FILE__){
      const u = new URL(window.location.href);
      u.searchParams.set("lang", next);
      window.location.href = u.pathname + u.search + u.hash;
      return;
    }

    // Online: switch language segment in the path and keep current slug
    const base = loBasePathname();
    const currentLang = loLangFromPath();

    let slug = "";
    try{
      let p = window.location.pathname || "/";
      if(p.startsWith(base)) p = p.slice(base.length);
      if(p.startsWith("/")) p = p.slice(1);
      const parts = p.split("/").filter(Boolean);

      if(currentLang){
        slug = parts.slice(1).join("/");
      } else {
        slug = loSlugFromTarget(window.location.pathname || "");
      }
    } catch(_e) {}

    const nextSlug = loSlugForLang(slug, next);
    let dest = base;
    if(next !== "de") dest += next;
    if(nextSlug){
      if(!dest.endsWith("/")) dest += "/";
      dest += nextSlug;
    }
    dest = dest.replace(/\/+/g, "/");
    if(!dest.startsWith("/")) dest = "/" + dest;

    window.location.href = withAttributionParams(dest + (window.location.hash || ""));
  }

  function buildUrl(path, lang, hash){
    if(!__LO_IS_FILE__){
      return loPrettyUrl(path, lang, hash);
    }

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
    if(!__LO_IS_FILE__){
      return loPrettyUrl(String(path || ""), lang, hash);
    }

    const effectiveLang = lang || getLang();
    const u = new URL(String(path || ""), __LO_SITE_ROOT__);
    u.searchParams.set("lang", effectiveLang);
    if(hash){
      const h = String(hash).replace(/^#/, "");
      if(h) u.hash = h;
    }
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
  const consentManage = footerRight.querySelector(".loConsentManage");

  const effectiveLang = lang || getLang();

  const itemsByLang = {
    en: [
      { id:"footerImpressum", text:"Imprint", href:"/imprint#top" },
      { id:"footerPrivacy", text:"Privacy", href:"/privacy-policy#top" },
      { id:"footerTerms", text:"Terms", href:"/terms-and-conditions#top" }
    ],
    de: [
      { id:"footerImpressum", text:"Impressum", href:"/impressum#top" },
      { id:"footerPrivacy", text:"Datenschutz", href:"/datenschutz#top" },
      { id:"footerTerms", text:"AGB", href:"/agb#top" }
    ],
    it: [
      { id:"footerImpressum", text:"Note legali", href:"/note-legali#top" },
      { id:"footerPrivacy", text:"Privacy", href:"/informativa-privacy#top" },
      { id:"footerTerms", text:"Condizioni", href:"/condizioni-generali#top" }
    ]
  };

  const items = itemsByLang[effectiveLang] || itemsByLang.de;

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
  if(consentManage){
    footerRight.appendChild(document.createTextNode(" · "));
    footerRight.appendChild(consentManage);
  }
}


  function primaryNavItems(lang){
    const effectiveLang = lang || getLang();
    const labels = {
      en: { rates:"Rates", gallery:"Gallery", voucher:"Gift voucher", about:"About us" },
      de: { rates:"Tarife", gallery:"Galerie", voucher:"Gutschein", about:"Über uns" },
      it: { rates:"Tariffe", gallery:"Galleria", voucher:"Buono regalo", about:"Chi siamo" }
    };
    const t = labels[effectiveLang] || labels.de;
    const ratesOverride = typeof window.LO_NAV_RATES_URL === "string" ? window.LO_NAV_RATES_URL : "";
    const voucherOverride = typeof window.LO_NAV_VOUCHER_URL === "string" ? window.LO_NAV_VOUCHER_URL : "";
    return [
      { id:"navRates", text:t.rates, href:ratesOverride || buildRootUrl("pricing.html", effectiveLang) },
      { id:"navGallery", text:t.gallery, href:buildRootUrl("gallery.html", effectiveLang) },
      { id:"navVoucher", text:t.voucher, href:voucherOverride || buildRootUrl("ferrari-gift-voucher-zurich.html", effectiveLang) },
      { id:"navAbout", text:t.about, href:buildRootUrl("about-us.html", effectiveLang) }
    ];
  }

  function simplifyPrimaryNav(lang){
    const navLinks = document.querySelector(".navLinks");
    if(!navLinks) return;

    const effectiveLang = lang || getLang();
    const request = navLinks.querySelector("a.navCta, a#navRequest");
    const currentId = navLinks.querySelector('[aria-current="page"]')?.id || "";
    navLinks.innerHTML = "";

    for(const item of primaryNavItems(effectiveLang)){
      const a = document.createElement("a");
      a.id = item.id;
      a.textContent = item.text;
      a.href = item.href;
      if(item.id === currentId) a.setAttribute("aria-current", "page");
      navLinks.appendChild(a);
    }

    if(request) navLinks.appendChild(request);
  }

  function initMobileOccasionAccordion(){
    const details = document.getElementById("occasionLinksDetails");
    if(!details || details.dataset.loAccordionBound === "1") return;

    details.dataset.loAccordionBound = "1";
    const mq = window.matchMedia("(max-width: 760px)");
    let lastMobile = null;

    const sync = () => {
      const isMobile = mq.matches;
      if(isMobile === lastMobile) return;
      lastMobile = isMobile;
      details.open = !isMobile;
    };

    sync();
    if(typeof mq.addEventListener === "function") mq.addEventListener("change", sync);
    else if(typeof mq.addListener === "function") mq.addListener(sync);
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

    // 1) Primary links only. Legal and editorial pages live in the About hub and footer.
    const links = Array.from(navLinks.querySelectorAll("a"))
      .filter(a => !a.classList.contains("navCta"));

    for(const a of links){
      const clone = a.cloneNode(true);
      clone.removeAttribute("id");
      menu.appendChild(clone);
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

// Responsive nav without layout thrashing (avoids forced reflow warnings).
let __loNavMeasureHost = null;

function loGetNavMeasureHost(){
  try{
    if(__loNavMeasureHost && __loNavMeasureHost.isConnected) return __loNavMeasureHost;
    const host = document.createElement("div");
    host.id = "loNavMeasureHost";
    host.style.cssText = "position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;contain:layout style size;";
    document.body.appendChild(host);
    __loNavMeasureHost = host;
    return host;
  } catch(_e){
    return null;
  }
}

function loNumPx(v){
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function loOuterWidth(node){
  if(!node) return 0;
  const r = node.getBoundingClientRect();
  const cs = getComputedStyle(node);
  return r.width + loNumPx(cs.marginLeft) + loNumPx(cs.marginRight);
}

function loMeasureNav({ width, burger, wrap, hideKeys }){
  const header = document.querySelector("header");
  const host = loGetNavMeasureHost();
  if(!header || !host) return null;

  host.innerHTML = "";

  // Clone header so data attributes affect layout exactly like the real one.
  const clone = header.cloneNode(true);

  clone.setAttribute("data-burger", burger ? "1" : "0");
  clone.setAttribute("data-brand-wrap", wrap ? "1" : "0");

  // Key elements by their id, then remove ids to avoid duplicates in the document.
  clone.querySelectorAll("[id]").forEach(n => {
    const id = n.getAttribute("id");
    if(id) n.setAttribute("data-lo-key", id);
    n.removeAttribute("id");
  });

  // Language selector has no id, give it a key.
  const cloneLang = clone.querySelector(".langSelect");
  if(cloneLang) cloneLang.setAttribute("data-lo-key", "langSelect");

  // Apply hidden state in the clone only.
  const hideSet = new Set(Array.isArray(hideKeys) ? hideKeys : []);
  const setHiddenClone = (node, hidden) => {
    if(!node) return;
    node.setAttribute("data-lo-hidden", hidden ? "1" : "0");
  };

  ["navRates","navGallery","navVoucher","navAbout","navContact","navPhilosophy","navExperiences","navBlog","navJournal"].forEach(k => {
    setHiddenClone(clone.querySelector('[data-lo-key="' + k + '"]'), hideSet.has(k));
  });
  setHiddenClone(cloneLang, hideSet.has("langSelect"));

  // Constrain width to the live nav width so scrollWidth comparison is meaningful.
  const inner = clone.querySelector(".navInner");
  if(inner) inner.style.width = String(Math.max(0, width)) + "px";

  host.appendChild(clone);

  const navInner = clone.querySelector(".navInner");
  const navLinks = clone.querySelector(".navLinks");
  if(!navInner || !navLinks) return null;

  const csLinks = getComputedStyle(navLinks);
  const gap = loNumPx(csLinks.columnGap || csLinks.gap || "0");

  const widths = {
    navRates: loOuterWidth(clone.querySelector('[data-lo-key="navRates"]')),
    navGallery: loOuterWidth(clone.querySelector('[data-lo-key="navGallery"]')),
    navVoucher: loOuterWidth(clone.querySelector('[data-lo-key="navVoucher"]')),
    navAbout: loOuterWidth(clone.querySelector('[data-lo-key="navAbout"]')),
    navContact: loOuterWidth(clone.querySelector('[data-lo-key="navContact"]')),
    navPhilosophy: loOuterWidth(clone.querySelector('[data-lo-key="navPhilosophy"]')),
    navExperiences: loOuterWidth(clone.querySelector('[data-lo-key="navExperiences"]')),
    navBlog: loOuterWidth(clone.querySelector('[data-lo-key="navBlog"]')) || loOuterWidth(clone.querySelector('[data-lo-key="navJournal"]')),
    langSelect: loOuterWidth(cloneLang)
  };

  const overflow = navInner.scrollWidth - navInner.clientWidth;

  host.innerHTML = "";

  return { overflow, gap, widths };
}

function applyPriorityNav(){
  const header = document.querySelector("header");
  const navInner = document.querySelector(".navInner");
  const navLinks = document.querySelector(".navLinks");
  if(!header || !navInner || !navLinks) return;

  const langSel = document.querySelector(".langSelect");
  const el = (id) => document.getElementById(id);

  const rates = el("navRates");
  const gallery = el("navGallery");
  const voucher = el("navVoucher");
  const about = el("navAbout");
  const contact = el("navContact");
  const philosophy = el("navPhilosophy");
  const experiences = el("navExperiences");
  const journal = el("navBlog") || el("navJournal");

  const links = Array.from(navLinks.querySelectorAll("a"));

  const setHidden = (node, hidden) => {
    if(!node) return;
    node.setAttribute("data-lo-hidden", hidden ? "1" : "0");
  };

  const width = Math.ceil(navInner.clientWidth || 0);
  if(width <= 0) return;

  // Mobile keeps Request, language and hamburger visible by design. Measure
  // that exact fixed cluster and wrap the brand only when the one-line name
  // would overflow; desktop link-priority rules are not relevant here.
  const isMobile = window.matchMedia && window.matchMedia("(max-width: 760px)").matches;
  if(isMobile){
    const mobileOneLine = loMeasureNav({ width, burger:true, wrap:false, hideKeys:[] });
    const shouldWrapBrand = !mobileOneLine || mobileOneLine.overflow > 1;

    header.setAttribute("data-burger", "1");
    header.setAttribute("data-brand-wrap", shouldWrapBrand ? "1" : "0");
    for(const a of links) setHidden(a, false);
    if(langSel) setHidden(langSel, false);
    return;
  }

  // 1) Try full layout (no hamburger).
  const m0 = loMeasureNav({ width, burger:false, wrap:false, hideKeys:[] });
  if(m0 && m0.overflow <= 1){
    header.setAttribute("data-brand-wrap", "0");
    header.setAttribute("data-burger", "0");
    for(const a of links) setHidden(a, false);
    if(langSel) setHidden(langSel, false);
    return;
  }

  // 2) Hamburger enabled, hide low priority links as needed.
  const lowKeys = [];
  if(philosophy && philosophy.id) lowKeys.push(philosophy.id);
  if(experiences && experiences.id) lowKeys.push(experiences.id);
  if(journal && journal.id) lowKeys.push(journal.id);
  if(about && about.id) lowKeys.push(about.id);
  if(voucher && voucher.id) lowKeys.push(voucher.id);
  if(gallery && gallery.id) lowKeys.push(gallery.id);

  const m1 = loMeasureNav({ width, burger:true, wrap:false, hideKeys:[] }) || m0;
  let overflow = m1 ? m1.overflow : 0;
  const gap1 = m1 ? m1.gap : 0;
  const w1 = m1 ? m1.widths : {};

  const hide = [];
  for(const k of lowKeys){
    if(overflow <= 1) break;
    const w = w1[k] || 0;
    if(w <= 0) continue;
    hide.push(k);
    overflow -= (w + gap1);
  }

  // If it fits with burger and low priority hidden, apply.
  if(overflow <= 1){
    header.setAttribute("data-burger", "1");
    header.setAttribute("data-brand-wrap", "0");
    for(const a of links) setHidden(a, hide.includes(a.id));
    if(langSel) setHidden(langSel, false);
    return;
  }

  // 3) Allow brand wrap, then hide language selector, Contact, Rates if still needed.
  const m2 = loMeasureNav({ width, burger:true, wrap:true, hideKeys:hide });
  let overflow2 = m2 ? m2.overflow : overflow;
  const gap2 = m2 ? m2.gap : gap1;
  const w2 = m2 ? m2.widths : w1;

  const moreKeys = ["langSelect"];
  if(contact && contact.id) moreKeys.push(contact.id);
  if(rates && rates.id) moreKeys.push(rates.id);

  for(const k of moreKeys){
    if(overflow2 <= 1) break;
    const w = w2[k] || 0;
    if(w <= 0) continue;
    hide.push(k);
    overflow2 -= (w + gap2);
  }

  // Final confirmation, and last resort if still overflowing.
  const mFinal = loMeasureNav({ width, burger:true, wrap:true, hideKeys:hide });
  if(mFinal && mFinal.overflow > 1){
    for(const k of moreKeys){
      if(!hide.includes(k)) hide.push(k);
    }
  }

  header.setAttribute("data-burger", "1");
  header.setAttribute("data-brand-wrap", "1");

  for(const a of links) setHidden(a, hide.includes(a.id));
  if(langSel) setHidden(langSel, hide.includes("langSelect"));
}

function initAnalyticsEvents(){
  if(window.__loAnalyticsEventsBound === true) return;
  window.__loAnalyticsEventsBound = true;

  function sendLoEvent(eventName, params){
    if(typeof window.gtag !== "function") return;

    const payload = Object.assign({
      page_location: window.location.href,
      page_path: window.location.pathname,
      language: getLang(),
      transport_type: "beacon"
    }, params || {});

    window.gtag("event", eventName, payload);
  }

  function cleanText(el){
    return ((el && el.textContent) || "").trim().replace(/\s+/g, " ").slice(0, 120);
  }

  document.addEventListener("click", function(event){
    const link = event.target.closest && event.target.closest("a");
    if(!link) return;

    const hrefRaw = link.getAttribute("href") || "";
    const href = hrefRaw.toLowerCase();
    const id = link.id || "";
    const text = cleanText(link);

    const params = {
      link_id: id,
      link_text: text,
      link_url: link.href || hrefRaw
    };

    const isWhatsApp =
      id === "btnWhatsApp" ||
      id === "contactWhatsApp" ||
      href.includes("wa.me/") ||
      href.includes("whatsapp.com");

    if(isWhatsApp){
      sendLoEvent("whatsapp_click", params);
      return;
    }

    const isPhone =
      id === "btnCall" ||
      id === "contactPhone" ||
      href.startsWith("tel:");

    if(isPhone){
      sendLoEvent("phone_click", params);
      return;
    }

    const isEmail =
      id === "btnEmail" ||
      id === "contactEmail" ||
      href.startsWith("mailto:");

    if(isEmail){
      sendLoEvent("email_click", params);
      return;
    }

    const isDirections =
      id === "btnOpenMaps" ||
      href.includes("maps.app.goo.gl") ||
      href.includes("google.com/maps");

    if(isDirections){
      sendLoEvent("directions_click", params);
      return;
    }

    const isRequestCta =
      id === "navRequest" ||
      id === "showcaseCta" ||
      id === "ctaRequest" ||
      href === "#request" ||
      href.endsWith("#request");

    if(isRequestCta){
      sendLoEvent("request_cta_click", params);
      return;
    }

    const isPricing =
      id === "navRates" ||
      id === "ctaPricing" ||
      href.includes("/pricing") ||
      href.includes("pricing.html");

    if(isPricing){
      sendLoEvent("pricing_click", params);
      return;
    }

    const isGallery =
      id === "navGallery" ||
      href.includes("gallerytitle") ||
      href.includes("/gallery") ||
      href.includes("gallery.html");

    if(isGallery){
      sendLoEvent("gallery_click", params);
      return;
    }
  }, true);

  document.addEventListener("submit", function(event){
    const form = event.target;
    if(!form || form.id !== "quoteForm") return;

    if(typeof form.checkValidity === "function" && !form.checkValidity()) return;

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const pkg = document.getElementById("packageId");
    const date = document.getElementById("preferredDate");

    if(!name || !email || !pkg) return;
    if(!name.value.trim() || !email.value.trim() || !pkg.value.trim()) return;

    sendLoEvent("request_form_submit", {
      form_id: "quoteForm",
      package_id: pkg.value || "",
      preferred_date: date ? date.value.trim() : ""
    });
  }, true);
}

function applyNavigationOverrides(){
    const pairs = [
      ["navRates", "LO_NAV_RATES_URL"],
      ["navRequest", "LO_NAV_REQUEST_URL"],
      ["ctaPricing", "LO_CTA_PRICING_URL"]
    ];
    for(const [id, key] of pairs){
      const value = window[key];
      if(typeof value !== "string" || !value) continue;
      const node = document.getElementById(id);
      if(node) node.setAttribute("href", value);
    }
  }

function initSharedUI
(lang){
    const effectiveLang = lang || getLang();


    try{ loRewriteInternalLinks(effectiveLang); } catch(_e) {}
    try{ simplifyPrimaryNav(effectiveLang); } catch(_e) {}

    // Keep the Experiences label consistent with the homepage without rewriting every page.
    try{
      const experiencesLabel = { en: "Experiences", de: "Anlässe", it: "Esperienze" }[effectiveLang];
      const navExperiences = document.getElementById("navExperiences");
      if(navExperiences && experiencesLabel) navExperiences.textContent = experiencesLabel;
    } catch(_e) {}

    splitBrandWords();
    promoteRequest();
    applyNavigationOverrides();

    initLangMenu(effectiveLang);
    initFooterYear();
    initFooterLegalLinks(effectiveLang);

    buildMobileMenu(effectiveLang);
    initHamburger();
    initAnalyticsEvents();
    initMobileOccasionAccordion();


// Apply mode after fonts and translated text settle
let __loNavScheduled = false;
const schedule = () => {
  if(__loNavScheduled) return;
  __loNavScheduled = true;
  window.requestAnimationFrame(() => {
    __loNavScheduled = false;
    applyPriorityNav();
    buildMobileMenu(effectiveLang);
  });
};

// Run now
schedule();

// Re run on resize (debounced via rAF)
window.addEventListener("resize", schedule, { passive:true });

// Observe header size changes when available (captures font swaps and layout changes)
if("ResizeObserver" in window){
  try{
    const ro = new ResizeObserver(() => schedule());
    const h = document.querySelector("header");
    if(h) ro.observe(h);
  } catch(_e) {}
}

// Re run after fonts load (Cinzel changes width)
if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(schedule).catch(() => {});
}

// Re run when nav text changes (translations)
const navLinks = document.querySelector(".navLinks");
if(navLinks){
  const mo = new MutationObserver(() => schedule());
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
    withAttributionParams,
    initLangMenu,
    initFooterYear,
    initFooterLegalLinks,
    initHamburger,
    initSharedUI
  };
})();
