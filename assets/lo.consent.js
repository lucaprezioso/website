(function () {
  "use strict";

  var script = document.currentScript;
  var trackingEnabled = Boolean(script && script.hasAttribute("data-lo-google-tracking"));
  var GA_ID = "G-EKE8CWE8SN";
  var ADS_ID = "AW-17961819738";
  var STORAGE_KEY = "lo_cookie_consent_v2";
  var COOKIE_NAME = "lo_cookie_consent";
  var CONSENT_VERSION = 3;
  var MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
  var MAX_AGE_SECONDS = Math.floor(MAX_AGE_MS / 1000);
  var GOOGLE_TAG_DELAY_MS = 8000;

  var googleTagLoaded = false;
  var currentChoice = readChoice();

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  setDefaultConsent(currentChoice);
  if (window.__LO_FORCE_GOOGLE_TAG__ === true || window.__LO_PENDING_GOOGLE_CONVERSION__) {
    loadGoogleTag();
  } else if (shouldDelayGoogleTag()) {
    scheduleGoogleTag();
  } else {
    loadGoogleTag();
  }
  flushPendingGoogleConversion();

  window.loadAnalytics = function () {
    loadGoogleTag();
  };

  window.__LO_CONSENT__ = {
    getChoice: function () {
      return currentChoice ? copyChoice(currentChoice) : null;
    },
    acceptAll: function () {
      initInterface();
      applyChoice(true, true);
    },
    rejectAll: function () {
      initInterface();
      applyChoice(false, false);
    },
    openSettings: function () {
      initInterface();
      openPreferences();
    }
  };

  function startInterface() {
    initInterface();

    var pendingAction = window.__LO_CONSENT_PENDING__;
    window.__LO_CONSENT_PENDING__ = "";

    if (pendingAction === "accept") applyChoice(true, true);
    if (pendingAction === "reject") applyChoice(false, false);
    if (pendingAction === "settings") openPreferences();
  }

  function copyChoice(choice) {
    return {
      version: choice.version,
      necessary: true,
      analytics: Boolean(choice.analytics),
      ads: Boolean(choice.ads),
      timestamp: choice.timestamp
    };
  }

  function parseChoice(raw) {
    if (!raw) return null;

    try {
      var parsed = JSON.parse(raw);
      var savedAt = Date.parse(parsed.timestamp || "");
      var valid = parsed.version === CONSENT_VERSION &&
        typeof parsed.analytics === "boolean" &&
        typeof parsed.ads === "boolean" &&
        Number.isFinite(savedAt) &&
        savedAt <= Date.now() + 5 * 60 * 1000 &&
        Date.now() - savedAt <= MAX_AGE_MS;
      return valid ? copyChoice(parsed) : null;
    } catch (error) {
      return null;
    }
  }

  function readConsentCookie() {
    var prefix = COOKIE_NAME + "=";
    var entries = document.cookie ? document.cookie.split(";") : [];

    for (var i = 0; i < entries.length; i += 1) {
      var entry = entries[i].trim();
      if (entry.indexOf(prefix) !== 0) continue;
      try {
        return decodeURIComponent(entry.slice(prefix.length));
      } catch (error) {
        return "";
      }
    }
    return "";
  }

  function writeConsentCookie(raw) {
    var secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = COOKIE_NAME + "=" + encodeURIComponent(raw) +
      "; Max-Age=" + MAX_AGE_SECONDS + "; Path=/; SameSite=Lax" + secure;
  }

  function clearStoredChoice() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {}
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch (error) {}
    try {
      document.cookie = COOKIE_NAME + "=; Max-Age=0; Path=/; SameSite=Lax";
    } catch (error) {}
  }

  function readChoice() {
    var rawValues = [];
    try {
      rawValues.push(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {}
    try {
      rawValues.push(readConsentCookie());
    } catch (error) {}
    try {
      rawValues.push(window.sessionStorage.getItem(STORAGE_KEY));
    } catch (error) {}

    for (var i = 0; i < rawValues.length; i += 1) {
      var choice = parseChoice(rawValues[i]);
      if (choice) {
        saveChoice(choice);
        return choice;
      }
    }

    if (rawValues.some(function (raw) { return Boolean(raw); })) clearStoredChoice();
    return null;
  }

  function saveChoice(choice) {
    var raw = JSON.stringify(choice);
    try {
      window.localStorage.setItem(STORAGE_KEY, raw);
    } catch (error) {}
    try {
      window.sessionStorage.setItem(STORAGE_KEY, raw);
    } catch (error) {}
    try {
      writeConsentCookie(raw);
    } catch (error) {
      // The choice still applies to the current page when storage is unavailable.
    }
  }

  function consentValues(choice) {
    var analytics = Boolean(choice && choice.analytics);
    var ads = Boolean(choice && choice.ads);

    return {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: ads ? "granted" : "denied",
      ad_user_data: ads ? "granted" : "denied",
      ad_personalization: ads ? "granted" : "denied"
    };
  }

  function setDefaultConsent(choice) {
    var values = consentValues(choice);
    values.functionality_storage = "granted";
    values.security_storage = "granted";
    values.wait_for_update = choice ? 0 : 500;
    window.gtag("consent", "default", values);
    // Keep ad-click information in cookieless measurement requests. Storage and
    // personalization remain governed by the user's explicit consent choice.
    window.gtag("set", "ads_data_redaction", false);
  }

  function updateConsent(choice) {
    window.gtag("consent", "update", consentValues(choice));
  }

  function shouldDelayGoogleTag() {
    var pathname = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    var isHomepage = pathname === "/" || pathname === "/en" || pathname === "/it";
    if (!isHomepage) return false;

    try {
      var params = new URLSearchParams(window.location.search || "");
      var adClickKeys = ["gclid", "dclid", "gclsrc", "wbraid", "gbraid", "_gl"];
      for (var i = 0; i < adClickKeys.length; i += 1) {
        if (params.has(adClickKeys[i])) return false;
      }
    } catch (error) {
      // If the URL cannot be inspected, prefer complete measurement.
      return false;
    }

    return true;
  }

  function scheduleGoogleTag() {
    if (!trackingEnabled || googleTagLoaded) return;

    var activate = function () {
      loadGoogleTag();
    };
    var passiveOnce = { once: true, passive: true };

    document.addEventListener("pointerdown", activate, passiveOnce);
    document.addEventListener("touchstart", activate, passiveOnce);
    document.addEventListener("scroll", activate, { once: true, passive: true, capture: true });
    document.addEventListener("keydown", activate, { once: true });

    var startFallback = function () {
      window.setTimeout(activate, GOOGLE_TAG_DELAY_MS);
    };
    if (document.readyState === "complete") {
      startFallback();
    } else {
      window.addEventListener("load", startFallback, { once: true });
    }
  }

  function loadGoogleTag() {
    if (!trackingEnabled || googleTagLoaded) return;

    googleTagLoaded = true;
    window.__gtagLoaded = true;

    var tag = document.createElement("script");
    tag.async = true;
    tag.fetchPriority = "low";
    tag.setAttribute("fetchpriority", "low");
    tag.id = "loGoogleTag";
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(tag);

    window.gtag("js", new Date());
    window.gtag("set", "url_passthrough", true);
    window.gtag("config", GA_ID, { anonymize_ip: true });
    window.gtag("config", ADS_ID);
  }

  function flushPendingGoogleConversion() {
    var payload = window.__LO_PENDING_GOOGLE_CONVERSION__;
    if (!payload) return;

    window.gtag("event", "conversion", payload);
    window.__LO_PENDING_GOOGLE_CONVERSION__ = null;
    window.__LO_FORCE_GOOGLE_TAG__ = false;
  }

  function clearGoogleCookies(category) {
    var patterns = category === "ads"
      ? [/^_gac_/, /^_gcl_/]
      : [/^_ga(?:_|$)/, /^_gid$/, /^_gat(?:_|$)/];
    var hostname = window.location.hostname;
    var domains = [""];

    if (hostname && hostname !== "localhost" && hostname !== "127.0.0.1") {
      domains.push(hostname, "." + hostname);
      var parts = hostname.split(".");
      if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
    }

    document.cookie.split(";").forEach(function (entry) {
      var name = entry.split("=")[0].trim();
      if (!patterns.some(function (pattern) { return pattern.test(name); })) return;

      domains.forEach(function (domain) {
        var domainPart = domain ? "; domain=" + domain : "";
        document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax" + domainPart;
      });
    });
  }

  function applyChoice(analytics, ads) {
    var choice = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: Boolean(analytics),
      ads: Boolean(ads),
      timestamp: new Date().toISOString()
    };

    currentChoice = choice;
    closeBanner();
    closePreferences();
    saveChoice(choice);
    updateConsent(choice);
    loadGoogleTag();

    try {
      if (!choice.analytics) clearGoogleCookies("analytics");
      if (!choice.ads) clearGoogleCookies("ads");
    } catch (error) {
      // Cookie cleanup must never prevent the user's choice from taking effect.
    }

    try {
      window.dispatchEvent(new CustomEvent("lo:consentchange", { detail: copyChoice(choice) }));
    } catch (error) {
      // CustomEvent is not essential to consent handling.
    }
  }

  var COPY = {
    de: {
      bannerLabel: "Cookie-Einwilligung",
      title: "Ihre Privatsphäre, Ihre Wahl",
      intro: "Wir verwenden notwendige Technologien für den Betrieb dieser Website. Analyse und Werbung bleiben ohne Ihre Einwilligung deaktiviert.",
      detail: "Weitere Informationen finden Sie in den Einstellungen und in unserer",
      accept: "Alle akzeptieren",
      reject: "Alle ablehnen",
      settings: "Einstellungen",
      privacy: "Datenschutzerklärung",
      manage: "Cookie-Einstellungen",
      preferencesTitle: "Cookie-Einstellungen",
      preferencesIntro: "Wählen Sie, welche optionalen Technologien verwendet werden dürfen.",
      necessaryTitle: "Notwendig",
      necessaryBody: "Speichert Ihre Sprache und Ihre Cookie-Auswahl für bis zu 180 Tage. Diese Funktionen sind für den sicheren Betrieb erforderlich.",
      alwaysOn: "Immer aktiv",
      analyticsTitle: "Analyse",
      analyticsBody: "Erlaubt Analytics-Cookies und eine vollständige Messung der Websitenutzung, damit wir das Angebot verbessern können.",
      adsTitle: "Werbung",
      adsBody: "Erlaubt Werbe-Cookies, vollständige Conversion- und Zielgruppenmessung sowie – abhängig von den Google-Ads-Einstellungen – personalisierte Werbung.",
      save: "Auswahl speichern",
      close: "Einstellungen schliessen"
    },
    en: {
      bannerLabel: "Cookie consent",
      title: "Your privacy, your choice",
      intro: "We use essential technologies to operate this website. Analytics and advertising remain disabled without your consent.",
      detail: "More information is available in Preferences and in our",
      accept: "Accept all",
      reject: "Reject all",
      settings: "Preferences",
      privacy: "Privacy policy",
      manage: "Cookie settings",
      preferencesTitle: "Cookie settings",
      preferencesIntro: "Choose which optional technologies may be used.",
      necessaryTitle: "Essential",
      necessaryBody: "Stores your language and cookie choice for up to 180 days. These functions are required for secure website operation.",
      alwaysOn: "Always active",
      analyticsTitle: "Analytics",
      analyticsBody: "Allows Analytics cookies and full website usage measurement so we can improve the experience.",
      adsTitle: "Advertising",
      adsBody: "Allows advertising cookies, full conversion and audience measurement and, depending on Google Ads settings, personalized advertising.",
      save: "Save selection",
      close: "Close settings"
    },
    it: {
      bannerLabel: "Consenso ai cookie",
      title: "La tua privacy, la tua scelta",
      intro: "Utilizziamo tecnologie necessarie al funzionamento del sito. Analisi e pubblicità restano disattivate senza il tuo consenso.",
      detail: "Maggiori informazioni sono disponibili nelle Preferenze e nella nostra",
      accept: "Accetta tutto",
      reject: "Rifiuta tutto",
      settings: "Preferenze",
      privacy: "Informativa privacy",
      manage: "Impostazioni cookie",
      preferencesTitle: "Impostazioni cookie",
      preferencesIntro: "Scegli quali tecnologie opzionali possono essere utilizzate.",
      necessaryTitle: "Necessari",
      necessaryBody: "Memorizzano la lingua e la scelta sui cookie fino a 180 giorni. Queste funzioni sono necessarie per il funzionamento sicuro del sito.",
      alwaysOn: "Sempre attivi",
      analyticsTitle: "Analisi",
      analyticsBody: "Consente i cookie di Analytics e la misurazione completa dell’utilizzo del sito, per aiutarci a migliorarlo.",
      adsTitle: "Pubblicità",
      adsBody: "Consente i cookie pubblicitari, la misurazione completa di conversioni e segmenti di pubblico e, in base alle impostazioni Google Ads, la pubblicità personalizzata.",
      save: "Salva la selezione",
      close: "Chiudi le impostazioni"
    }
  };

  var interfaceReady = false;
  var banner;
  var modal;
  var analyticsToggle;
  var adsToggle;
  var previousFocus;
  var language;
  var text;
  var reopenBannerAfterPreferences = false;

  function detectLanguage() {
    var queryLanguage = "";
    try {
      queryLanguage = new URLSearchParams(window.location.search).get("lang") || "";
    } catch (error) {
      queryLanguage = "";
    }

    var candidate = queryLanguage.toLowerCase().slice(0, 2);
    if (COPY[candidate]) return candidate;
    if (/^\/it(?:\/|$)/i.test(window.location.pathname)) return "it";
    if (/^\/en(?:\/|$)/i.test(window.location.pathname)) return "en";

    candidate = (document.documentElement.lang || "de").toLowerCase().slice(0, 2);
    return COPY[candidate] ? candidate : "de";
  }

  function privacyUrl() {
    if (language === "en") return "/privacy-policy";
    if (language === "it") return "/informativa-privacy";
    return "/datenschutz";
  }

  function initInterface() {
    if (interfaceReady || !document.body) return;
    interfaceReady = true;
    language = detectLanguage();
    text = COPY[language];

    renderBanner();
    renderPreferences();
    renderManageButton();

    if (!currentChoice &&
        window.__LO_CONSENT_PENDING__ !== "accept" &&
        window.__LO_CONSENT_PENDING__ !== "reject") {
      openBanner();
    }
  }

  function renderBanner() {
    banner = document.getElementById("loConsentBanner");

    if (!banner) {
      banner = document.createElement("section");
      banner.className = "loConsentBanner";
      banner.id = "loConsentBanner";
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-modal", "false");
      banner.setAttribute("aria-labelledby", "loConsentTitle");
      banner.setAttribute("aria-label", text.bannerLabel);
      banner.hidden = true;
      banner.innerHTML =
        '<div class="loConsentBanner__inner">' +
          '<div class="loConsentBanner__copy">' +
            '<h2 id="loConsentTitle">' + text.title + '</h2>' +
            '<p>' + text.intro + '</p>' +
            '<p class="loConsentDetail">' + text.detail + ' <a href="' + privacyUrl() + '">' + text.privacy + '</a>.</p>' +
          '</div>' +
          '<div class="loConsentBanner__actions">' +
            '<button class="loConsentButton loConsentButton--primary" data-lo-consent="accept" type="button">' + text.accept + '</button>' +
            '<button class="loConsentButton" data-lo-consent="reject" type="button">' + text.reject + '</button>' +
            '<button class="loConsentTextButton" data-lo-consent="settings" type="button">' + text.settings + '</button>' +
          '</div>' +
        '</div>';

      document.body.appendChild(banner);
    } else if (currentChoice) {
      banner.classList.remove("is-visible");
      banner.hidden = true;
      document.documentElement.classList.remove("loConsentBannerOpen");
    }

    banner.querySelector('[data-lo-consent="accept"]').addEventListener("click", function () {
      applyChoice(true, true);
    });
    banner.querySelector('[data-lo-consent="reject"]').addEventListener("click", function () {
      applyChoice(false, false);
    });
    banner.querySelector('[data-lo-consent="settings"]').addEventListener("click", openPreferences);
  }

  function renderPreferences() {
    modal = document.createElement("div");
    modal.className = "loConsentModal";
    modal.id = "loConsentModal";
    modal.setAttribute("aria-hidden", "true");
    modal.hidden = true;
    modal.innerHTML =
      '<div class="loConsentModal__backdrop" data-lo-modal-close></div>' +
      '<section class="loConsentPanel" role="dialog" aria-modal="true" aria-labelledby="loConsentPreferencesTitle">' +
        '<button class="loConsentClose" data-lo-modal-close type="button" aria-label="' + text.close + '">×</button>' +
        '<p class="loConsentEyebrow">Luxury Obsession</p>' +
        '<h2 id="loConsentPreferencesTitle" tabindex="-1">' + text.preferencesTitle + '</h2>' +
        '<p class="loConsentPanel__intro">' + text.preferencesIntro + '</p>' +
        '<div class="loConsentCategory">' +
          '<div><h3>' + text.necessaryTitle + '</h3><p>' + text.necessaryBody + '</p></div>' +
          '<span class="loConsentAlwaysOn">' + text.alwaysOn + '</span>' +
        '</div>' +
        '<label class="loConsentCategory loConsentCategory--selectable" for="loConsentAnalytics">' +
          '<div><h3>' + text.analyticsTitle + '</h3><p>' + text.analyticsBody + '</p></div>' +
          '<span class="loConsentSwitch"><input id="loConsentAnalytics" type="checkbox"/><span aria-hidden="true"></span></span>' +
        '</label>' +
        '<label class="loConsentCategory loConsentCategory--selectable" for="loConsentAds">' +
          '<div><h3>' + text.adsTitle + '</h3><p>' + text.adsBody + '</p></div>' +
          '<span class="loConsentSwitch"><input id="loConsentAds" type="checkbox"/><span aria-hidden="true"></span></span>' +
        '</label>' +
        '<div class="loConsentPanel__actions">' +
          '<button class="loConsentButton loConsentButton--primary" data-lo-preferences="save" type="button">' + text.save + '</button>' +
          '<button class="loConsentButton" data-lo-preferences="reject" type="button">' + text.reject + '</button>' +
          '<button class="loConsentTextButton" data-lo-preferences="accept" type="button">' + text.accept + '</button>' +
        '</div>' +
        '<a class="loConsentPrivacyLink" href="' + privacyUrl() + '">' + text.privacy + '</a>' +
      '</section>';

    document.body.appendChild(modal);
    analyticsToggle = modal.querySelector("#loConsentAnalytics");
    adsToggle = modal.querySelector("#loConsentAds");

    modal.querySelectorAll("[data-lo-modal-close]").forEach(function (element) {
      element.addEventListener("click", closePreferences);
    });
    modal.querySelector('[data-lo-preferences="save"]').addEventListener("click", function () {
      applyChoice(analyticsToggle.checked, adsToggle.checked);
    });
    modal.querySelector('[data-lo-preferences="reject"]').addEventListener("click", function () {
      applyChoice(false, false);
    });
    modal.querySelector('[data-lo-preferences="accept"]').addEventListener("click", function () {
      applyChoice(true, true);
    });
    modal.addEventListener("keydown", handleModalKeys);
  }

  function renderManageButton() {
    var button = document.createElement("button");
    button.className = "loConsentManage";
    button.type = "button";
    button.textContent = text.manage;
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "loConsentModal");
    button.addEventListener("click", openPreferences);

    var footerHost = document.querySelector("footer .footerRight") ||
      document.querySelector("footer .footerInner") ||
      document.querySelector("footer");

    if (footerHost) {
      footerHost.appendChild(button);
    } else {
      button.classList.add("loConsentManage--floating");
      document.body.appendChild(button);
    }
  }

  function openBanner() {
    if (!banner) return;
    document.documentElement.classList.add("loConsentBannerOpen");
    banner.hidden = false;
    window.requestAnimationFrame(function () {
      if (!banner.hidden) banner.classList.add("is-visible");
    });
  }

  function closeBanner() {
    if (!banner || banner.hidden) return;
    banner.classList.remove("is-visible");
    banner.hidden = true;
    document.documentElement.classList.remove("loConsentBannerOpen");
  }

  function openPreferences() {
    if (!interfaceReady) {
      initInterface();
      if (!interfaceReady) return;
    }

    previousFocus = document.activeElement;
    reopenBannerAfterPreferences = Boolean(!currentChoice && banner && !banner.hidden);
    if (reopenBannerAfterPreferences) closeBanner();
    analyticsToggle.checked = Boolean(currentChoice && currentChoice.analytics);
    adsToggle.checked = Boolean(currentChoice && currentChoice.ads);
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("loConsentModalOpen");
    window.requestAnimationFrame(function () {
      modal.classList.add("is-visible");
      var heading = modal.querySelector("#loConsentPreferencesTitle");
      if (heading) heading.focus();
    });
  }

  function closePreferences() {
    if (!modal || modal.hidden) return;
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("loConsentModalOpen");
    window.setTimeout(function () {
      modal.hidden = true;
      if (reopenBannerAfterPreferences && !currentChoice) openBanner();
      reopenBannerAfterPreferences = false;
      if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
    }, 180);
  }

  function handleModalKeys(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePreferences();
      return;
    }

    if (event.key !== "Tab") return;
    var focusable = Array.prototype.slice.call(modal.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    )).filter(function (element) {
      return element.offsetParent !== null;
    });

    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  // Start only after all configuration, copy and interface state above has
  // been initialized. Deferred scripts can run while readyState is already
  // "interactive", so starting near the top of the file is unsafe.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startInterface, { once: true });
  } else {
    startInterface();
  }
})();
