/* lo.locations.js
   Shared logic for all location pages.

   Each location page can optionally define:

   window.__LO_LOCATION_PAGE__ = {
     mapsQuery: "Zurich, Switzerland",
     heroImage: "../media/image00100.png",
     heroImageAlt: "Ferrari 458 Italia",
     badgeRight: "Switzerland",
     i18n: {
       en: { heroSubtitle: "...", pickupBody: "..." },
       de: { heroSubtitle: "...", pickupBody: "..." },
       it: { heroSubtitle: "...", pickupBody: "..." }
     }
   };
*/

(function(){
  "use strict";

  function isPlainObject(v){
    return v && typeof v === "object" && !Array.isArray(v);
  }

  // Deep merge with array replacement (not concat)
  function deepMerge(target, source){
    const out = isPlainObject(target) ? { ...target } : {};
    if(!isPlainObject(source)) return out;

    Object.keys(source).forEach((k) => {
      const sv = source[k];
      const tv = out[k];

      if(Array.isArray(sv)){
        out[k] = sv.slice();
        return;
      }

      if(isPlainObject(sv) && isPlainObject(tv)){
        out[k] = deepMerge(tv, sv);
        return;
      }

      out[k] = sv;
    });

    return out;
  }

  function setText(id, txt){
    const el = document.getElementById(id);
    if(el) el.textContent = txt;
  }

  function setHTML(id, htmlStr){
    const el = document.getElementById(id);
    if(el) el.innerHTML = htmlStr;
  }

  function setHref(id, href){
    const el = document.getElementById(id);
    if(el) el.setAttribute("href", href);
  }

  function setAttr(id, name, value){
    const el = document.getElementById(id);
    if(el) el.setAttribute(name, value);
  }

  function fillList(id, items){
    const ul = document.getElementById(id);
    if(!ul) return;
    ul.innerHTML = "";
    (items || []).forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
  }

  function setMeta(propertyOrName, value){
    if(!value) return;

    // Try og and standard meta
    const og = document.querySelector('meta[property="' + propertyOrName + '"]');
    if(og) og.setAttribute("content", value);

    const m = document.querySelector('meta[name="' + propertyOrName + '"]');
    if(m) m.setAttribute("content", value);
  }

  // Default copy extracted from the provided Zurich page.
  // You can override any field per language from the page.
  const DEFAULT_I18N = {
    en: {
      navRates: "Rates",
      navPhilosophy: "Our Philosophy",
      navExperiences: "Experiences",
      navBlog: "Journal",
      navContact: "Contact",
      navRequest: "Request",
      navImpressum: "Impressum",

      aboutTitle: "About Luxury Obsession",
      aboutSub: "One Ferrari 458 Italia. An experience built around her.",
      aboutBody:
        "Luxury Obsession offers a personally hosted Ferrari experience in Switzerland. The choice is intentionally exclusive: one Ferrari 458 Italia, carefully maintained and presented with impeccable attention to detail. Every request is handled directly, with clear terms, a discreet handover and concierge support before and during the drive.",

      btnRequest: "Request availability",
      btnOther: "Other pickup locations",
      btnMaps: "Open map",

      ctaTitle: "Request your date",
      ctaBody: "Tell us when you would like to drive. We reply with confirmation and the relevant details.",
      ctaBtnRequest: "Request",
      ctaBtnRates: "See rates",

      quoteOpen: "Requests open",
      footerCenter: "Currently available: Ferrari 458 Italia.",

      eyebrow: "Zurich, Switzerland",
      heroTitleA: "Ferrari 458 Italia",
      heroTitleB: "Zurich pickup",
      heroSubtitle:
        "Zurich is where the city texture meets the first open kilometres. We keep the handover discreet and the process clean, so your attention stays on the drive.\n\nFrom the lake to the ridgelines, we will help shape a route that fits your timing and your package.",

      pill1: "City to countryside",
      pill2: "Clear terms and insurance",
      pill3: "Concierge support",
      pill4: "Discreet handover",

      ctaPricing: "See rates",
      ctaRequest: "Request availability",

      heroNoteLine1: "Currently available: <strong>Ferrari 458 Italia</strong>",
      heroNoteLine2: "Request a date and we will reply quickly.",

      locTitle: "Ferrari pickup in Zurich",
      locSub: "A refined handover in the city, then a seamless exit toward the lake and beyond.",

      pickupTitle: "Pickup and handover",
      pickupBody:
        "We confirm the exact meeting point with your booking. Zurich pickup is arranged around your schedule, with a clean handover and clear written confirmation.\n\nIf you prefer an even quieter start, our headquarters in Nänikon is a calm alternative.",

      routesTitle: "Curated routes",
      routesIntro: "Zurich gives you options immediately. Pick the mood, we will suggest the line.",
      routes: [
        "Lake Zurich shore toward Rapperswil for classic scenery",
        "Albis ridge for quick elevation and wide views",
        "Sihltal for a smooth, wooded escape from the city",
        "Zurich Oberland for countryside flow and gentle climbs"
      ],

      notesTitle: "Practical notes",
      notes: [
        "Valid driving licence and an ID document required",
        "A short walk through of the car at handover, then you are ready",
        "Fuel policy and kilometres depend on the chosen package",
        "Return location and timing are confirmed in writing"
      ]
    },

    de: {
      navRates: "Tarife",
      navPhilosophy: "Unsere Philosophie",
      navExperiences: "Anlässe",
      navBlog: "Journal",
      navContact: "Kontakt",
      navRequest: "Anfrage",
      navImpressum: "Impressum",

      aboutTitle: "Über Luxury Obsession",
      aboutSub: "Ein einziger Ferrari 458 Italia. Ein Erlebnis, das ganz auf diese Ikone ausgerichtet ist.",
      aboutBody:
        "Luxury Obsession bietet ein persönlich betreutes Ferrari-Erlebnis in der Schweiz. Die Auswahl ist bewusst exklusiv: ein einzelner Ferrari 458 Italia, sorgfältig gepflegt und makellos präsentiert. Jede Anfrage wird persönlich begleitet – mit klaren Konditionen, diskreter Übergabe und Concierge-Support vor und während der Fahrt.",

      btnRequest: "Verfügbarkeit anfragen",
      btnOther: "Weitere Abholorte",
      btnMaps: "In Google Maps öffnen",

      ctaTitle: "Datum anfragen",
      ctaBody: "Nennen Sie Ihren Wunschtermin. Wir melden uns mit Bestätigung und den relevanten Details.",
      ctaBtnRequest: "Anfrage",
      ctaBtnRates: "Tarife ansehen",

      quoteOpen: "Anfragen offen",
      footerCenter: "Aktuell verfügbar: Ferrari 458 Italia.",

      eyebrow: "Zürich, Schweiz",
      heroTitleA: "Ferrari 458 Italia",
      heroTitleB: "Abholung Zürich",
      heroSubtitle:
        "Zürich verbindet City Vibe mit den ersten freien Kilometern. Wir halten die Übergabe diskret und den Ablauf klar, damit Ihr Fokus auf der Fahrt bleibt.\n\nVom See bis zu den Höhenzügen helfen wir Ihnen, eine Route zu wählen, die zu Zeit und Tarif passt.",

      pill1: "City zu Landstrasse",
      pill2: "Klare Konditionen und Versicherung",
      pill3: "Concierge Support",
      pill4: "Diskrete Übergabe",

      ctaPricing: "Tarife ansehen",
      ctaRequest: "Verfügbarkeit anfragen",

      heroNoteLine1: "Jetzt verfügbar: <strong>Ferrari 458 Italia</strong>",
      heroNoteLine2: "Datum anfragen, wir melden uns schnell zurück.",

      locTitle: "Ferrari Abholung in Zürich",
      locSub: "Eine elegante Übergabe in der Stadt, danach nahtlos hinaus Richtung See und Land.",

      pickupTitle: "Abholung und Übergabe",
      pickupBody:
        "Den genauen Treffpunkt bestätigen wir mit Ihrer Buchung. Abholung in Zürich organisieren wir nach Ihrem Zeitplan, mit sauberer Übergabe und klarer schriftlicher Bestätigung.\n\nWenn Sie noch ruhiger starten möchten, ist unser Hauptsitz in Nänikon eine entspannte Alternative.",

      routesTitle: "Kuratiere Routen",
      routesIntro: "Zürich bietet sofort Optionen. Sie nennen den Mood, wir empfehlen die Linie.",
      routes: [
        "Zürichsee Ufer bis Rapperswil für klassische Szenerie",
        "Albisgrat für schnelle Höhenmeter und weite Blicke",
        "Sihltal für eine ruhige, bewaldete Ausfahrt",
        "Zürcher Oberland für fliessende Landstrassen"
      ],

      notesTitle: "Hinweise",
      notes: [
        "Gültiger Führerausweis und Ausweis erforderlich",
        "Kurzer Rundgang ums Fahrzeug bei der Übergabe",
        "Tank und Kilometer gemäss Tarif",
        "Rückgabeort und Zeit werden schriftlich bestätigt"
      ]
    },

    it: {
      navRates: "Tariffe",
      navPhilosophy: "La nostra filosofia",
      navExperiences: "Occasioni",
      navBlog: "Journal",
      navContact: "Contatto",
      navRequest: "Richiesta",
      navImpressum: "Impressum",

      aboutTitle: "Informazioni su Luxury Obsession",
      aboutSub: "Una sola Ferrari 458 Italia. Un’esperienza costruita intorno a lei.",
      aboutBody:
        "Luxury Obsession offre un’esperienza Ferrari gestita personalmente in Svizzera. La scelta è intenzionalmente esclusiva: una sola Ferrari 458 Italia, curata con attenzione e presentata in modo impeccabile. Ogni richiesta viene seguita direttamente, con condizioni chiare, consegna discreta e supporto concierge prima e durante la guida.",

      btnRequest: "Richiedi disponibilità",
      btnOther: "Altri luoghi di ritiro",
      btnMaps: "Apri mappa",

      ctaTitle: "Richiedi la tua data",
      ctaBody: "Dicci quando desideri guidare. Rispondiamo con conferma e dettagli pertinenti.",
      ctaBtnRequest: "Richiesta",
      ctaBtnRates: "Vedi tariffe",

      quoteOpen: "Richieste aperte",
      footerCenter: "Attualmente disponibile: Ferrari 458 Italia.",

      eyebrow: "Zurigo, Svizzera",
      heroTitleA: "Ferrari 458 Italia",
      heroTitleB: "Ritiro a Zurigo",
      heroSubtitle:
        "Zurigo unisce atmosfera cittadina e primi chilometri liberi. Manteniamo la consegna discreta e il processo pulito, così l’attenzione resta sulla guida.\n\nDal lago alle creste panoramiche, ti aiutiamo a scegliere un itinerario coerente con tempo e tariffa.",

      pill1: "Dalla città alla campagna",
      pill2: "Condizioni chiare e assicurazione",
      pill3: "Supporto concierge",
      pill4: "Consegna discreta",

      ctaPricing: "Vedi tariffe",
      ctaRequest: "Richiedi disponibilità",

      heroNoteLine1: "Disponibile ora: <strong>Ferrari 458 Italia</strong>",
      heroNoteLine2: "Richiedi una data e rispondiamo rapidamente.",

      locTitle: "Ritiro Ferrari a Zurigo",
      locSub: "Consegna curata in città, poi uscita fluida verso lago e strade più aperte.",

      pickupTitle: "Ritiro e consegna",
      pickupBody:
        "Confermiamo il punto d’incontro esatto con la prenotazione. Il ritiro a Zurigo viene organizzato in base al tuo orario, con consegna pulita e conferma scritta.\n\nSe preferisci un inizio ancora più tranquillo, la nostra sede a Nänikon è un’alternativa ideale.",

      routesTitle: "Itinerari consigliati",
      routesIntro: "A Zurigo le opzioni sono immediate. Scegli il mood, noi suggeriamo la linea.",
      routes: [
        "Sponda del lago di Zurigo fino a Rapperswil per scenari classici",
        "Cresta dell’Albis per quota rapida e viste ampie",
        "Sihltal per una fuga morbida nel verde",
        "Oberland zurighese per strade scorrevoli in campagna"
      ],

      notesTitle: "Note pratiche",
      notes: [
        "Patente valida e documento d’identità richiesti",
        "Breve controllo dell’auto alla consegna, poi si parte",
        "Carburante e chilometri dipendono dalla tariffa scelta",
        "Luogo e orario di rientro vengono confermati per iscritto"
      ]
    }
  };

  const DEFAULT_CONFIG = {
    mapsQuery: "Zurich, Switzerland",
    heroImage: "../media/image00100.png",
    heroImageAlt: "Ferrari 458 Italia",
    badgeRight: "Switzerland",
    i18n: DEFAULT_I18N
  };

  function initPage(){
    const overrides = isPlainObject(window.__LO_LOCATION_PAGE__) ? window.__LO_LOCATION_PAGE__ : {};
    const cfg = deepMerge(DEFAULT_CONFIG, overrides);

    const mapsLink = cfg.mapsLink || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(cfg.mapsQuery || ""));

    const lo = window.__LO__;
    const lang = (lo && typeof lo.getLang === "function") ? lo.getLang() : "en";

    document.documentElement.lang = lang;

    if(lo && typeof lo.initLangMenu === "function") lo.initLangMenu(lang);
    if(lo && typeof lo.initHamburger === "function") lo.initHamburger();

    const i18nMerged = deepMerge(DEFAULT_I18N, cfg.i18n || {});
    const t = i18nMerged[lang] || i18nMerged.en;

    // Nav (desktop)
    setText("navRates", t.navRates);
    setText("navPhilosophy", t.navPhilosophy);
    setText("navExperiences", t.navExperiences);
    setText("navBlog", t.navBlog);
    setText("navContact", t.navContact);
    setText("navRequest", t.navRequest);

    if(lo && typeof lo.buildUrl === "function"){
      setHref("navRates", lo.buildUrl("pricing.html", lang, "top"));
      setHref("navPhilosophy", lo.buildUrl("../philosophy.html", lang, "top"));
      setHref("navExperiences", lo.buildUrl("../experiences.html", lang, "top"));
      setHref("navBlog", lo.buildUrl("blog.html", lang, "top"));
      setHref("navContact", lo.buildUrl("../index.html", lang, "contact"));
      setHref("navRequest", lo.buildUrl("../index.html", lang, "request"));
    }

    // Mobile menu (elements are injected by lo.js)
    setText("mRates", t.navRates);
    setText("mPhilosophy", t.navPhilosophy);
    setText("mExperiences", t.navExperiences);
    setText("mBlog", t.navBlog);
    setText("mContact", t.navContact);
    setText("mImpressum", t.navImpressum);
    setText("mRequest", t.navRequest);

    if(lo && typeof lo.buildUrl === "function"){
      setHref("mRates", lo.buildUrl("pricing.html", lang, "top"));
      setHref("mPhilosophy", lo.buildUrl("../philosophy.html", lang, "top"));
      setHref("mExperiences", lo.buildUrl("../experiences.html", lang, "top"));
      setHref("mBlog", lo.buildUrl("blog.html", lang, "top"));
      setHref("mContact", lo.buildUrl("../index.html", lang, "contact"));
      setHref("mImpressum", lo.buildUrl("../impressum.html", lang, "top"));
      setHref("mRequest", lo.buildUrl("../index.html", lang, "request"));
    }

    // Hero
    setText("eyebrow", t.eyebrow);
    setText("heroTitleA", t.heroTitleA);
    setText("heroTitleB", t.heroTitleB);
    setText("heroSubtitle", t.heroSubtitle);

    setText("pill1", t.pill1);
    setText("pill2", t.pill2);
    setText("pill3", t.pill3);
    setText("pill4", t.pill4);

    setText("ctaPricing", t.ctaPricing);
    setText("ctaRequest", t.ctaRequest);

    if(lo && typeof lo.buildUrl === "function"){
      setHref("ctaPricing", lo.buildUrl("pricing.html", lang, "top"));
      setHref("ctaRequest", lo.buildUrl("../index.html", lang, "request"));
    }

    setHTML("heroNoteLine1", t.heroNoteLine1);
    setText("heroNoteLine2", t.heroNoteLine2);
    setText("quoteOpen", t.quoteOpen);

    // Hero media
    if(cfg.heroImage) setAttr("heroImage", "src", cfg.heroImage);
    if(cfg.heroImageAlt) setAttr("heroImage", "alt", cfg.heroImageAlt);
    if(cfg.badgeRight) setText("badgeRight", cfg.badgeRight);

    // Attempt to keep og image in sync for client side share previews
    if(cfg.heroImage){
      setMeta("og:image", cfg.heroImage);
    }

    // Location section
    setText("locTitle", t.locTitle);
    setText("locSub", t.locSub);

    setText("pickupTitle", t.pickupTitle);
    setText("pickupBody", t.pickupBody);

    setText("routesTitle", t.routesTitle);
    setText("routesIntro", t.routesIntro);

    setText("notesTitle", t.notesTitle);

    // About
    setText("aboutTitle", t.aboutTitle);
    setText("aboutSub", t.aboutSub);
    setText("aboutBody", t.aboutBody);

    // Location CTAs
    setText("btnRequest", t.btnRequest);
    setText("btnOther", t.btnOther);
    setText("btnMaps", t.btnMaps);

    if(lo && typeof lo.buildUrl === "function"){
      setHref("btnRequest", lo.buildUrl("../index.html", lang, "request"));
      setHref("btnOther", lo.buildUrl("locations.html", lang, "top"));
    }
    setHref("btnMaps", mapsLink);

    // Lists
    fillList("routesList", t.routes);
    fillList("notesList", t.notes);

    // CTA section
    setText("ctaTitle", t.ctaTitle);
    setText("ctaBody", t.ctaBody);
    setText("ctaBtnRequest", t.ctaBtnRequest);
    setText("ctaBtnRates", t.ctaBtnRates);

    if(lo && typeof lo.buildUrl === "function"){
      setHref("ctaBtnRequest", lo.buildUrl("../index.html", lang, "request"));
      setHref("ctaBtnRates", lo.buildUrl("pricing.html", lang, "top"));
    }

    // Footer
    setText("footerCenter", t.footerCenter);
    setText("footerImpressum", t.navImpressum);
    if(lo && typeof lo.buildUrl === "function"){
      setHref("footerImpressum", lo.buildUrl("../impressum.html", lang, "top"));
    }

    const yearEl = document.getElementById("year");
    if(yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
})();
