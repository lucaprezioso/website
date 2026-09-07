const LANGUAGE_URLS_BY_MODE = {
  rental: {
    de: "/ads/ferrari-mieten-zuerich",
    en: "/en/ads/ferrari-rental-zurich",
    it: "/it/ads/noleggio-ferrari-zurigo",
  },
  switzerland: {
    de: "/ads/ferrari-mieten-schweiz",
    en: "/en/ads/ferrari-rental-switzerland",
    it: "/it/ads/noleggio-ferrari-svizzera",
  },
  drive: {
    de: "/ads/ferrari-selber-fahren",
    en: "/en/ads/drive-a-ferrari-switzerland",
    it: "/it/ads/guidare-una-ferrari-svizzera",
  },
  wedding: {
    de: "/ads/ferrari-mieten-hochzeit-zuerich",
    en: "/en/ads/ferrari-wedding-car-rental-zurich",
    it: "/it/ads/noleggio-ferrari-matrimonio-zurigo",
  },
  gift: {
    de: "/ads/ferrari-gutschein-zuerich",
    en: "/en/ads/ferrari-gift-voucher-zurich",
    it: "/it/ads/buono-regalo-ferrari-zurigo",
  },

};

const CITY_CONFIG = {
  luzern: {
    delivery: 140,
    pickup: "LUCERNE",
    names: { de: "Luzern", en: "Lucerne", it: "Lucerna" },
    locative: { de: "in Luzern", en: "in Lucerne", it: "a Lucerna" },
    deliveryPhrase: { de: "nach Luzern", en: "to Lucerne", it: "a Lucerna" },
    slugs: { de: "ferrari-mieten-luzern", en: "ferrari-rental-lucerne", it: "noleggio-ferrari-lucerna" },
  },
  aargau: {
    delivery: 140,
    pickup: "AARGAU",
    names: { de: "Aargau", en: "Aargau", it: "Argovia" },
    locative: { de: "im Aargau", en: "in Aargau", it: "in Argovia" },
    deliveryPhrase: { de: "in den Aargau", en: "to Aargau", it: "in Argovia" },
    slugs: { de: "ferrari-mieten-aargau", en: "ferrari-rental-aargau", it: "noleggio-ferrari-argovia" },
  },
  bern: {
    delivery: 290,
    pickup: "BERN",
    names: { de: "Bern", en: "Bern", it: "Berna" },
    locative: { de: "in Bern", en: "in Bern", it: "a Berna" },
    deliveryPhrase: { de: "nach Bern", en: "to Bern", it: "a Berna" },
    slugs: { de: "ferrari-mieten-bern", en: "ferrari-rental-bern", it: "noleggio-ferrari-berna" },
  },
  basel: {
    delivery: 290,
    pickup: "BASEL",
    names: { de: "Basel", en: "Basel", it: "Basilea" },
    locative: { de: "in Basel", en: "in Basel", it: "a Basilea" },
    deliveryPhrase: { de: "nach Basel", en: "to Basel", it: "a Basilea" },
    slugs: { de: "ferrari-mieten-basel", en: "ferrari-rental-basel", it: "noleggio-ferrari-basilea" },
  },
  st_gallen: {
    delivery: 140,
    pickup: "ST_GALLEN",
    names: { de: "St. Gallen", en: "St. Gallen", it: "San Gallo" },
    locative: { de: "in St. Gallen", en: "in St. Gallen", it: "a San Gallo" },
    deliveryPhrase: { de: "nach St. Gallen", en: "to St. Gallen", it: "a San Gallo" },
    slugs: { de: "ferrari-mieten-st-gallen", en: "ferrari-rental-st-gallen", it: "noleggio-ferrari-san-gallo" },
  },
  zug: {
    delivery: 140,
    pickup: "ZUG",
    names: { de: "Zug", en: "Zug", it: "Zugo" },
    locative: { de: "in Zug", en: "in Zug", it: "a Zugo" },
    deliveryPhrase: { de: "nach Zug", en: "to Zug", it: "a Zugo" },
    slugs: { de: "ferrari-mieten-zug", en: "ferrari-rental-zug", it: "noleggio-ferrari-zugo" },
  },
};

const ROUTES = {
  "/ads/ferrari-mieten-zuerich": { lang: "de", mode: "rental", source: "/", home: "/", languageUrls: LANGUAGE_URLS_BY_MODE.rental },
  "/en/ads/ferrari-rental-zurich": { lang: "en", mode: "rental", source: "/en/", home: "/en/", languageUrls: LANGUAGE_URLS_BY_MODE.rental },
  "/it/ads/noleggio-ferrari-zurigo": { lang: "it", mode: "rental", source: "/it/", home: "/it/", languageUrls: LANGUAGE_URLS_BY_MODE.rental },

  "/ads/ferrari-mieten-schweiz": { lang: "de", mode: "switzerland", source: "/", home: "/", languageUrls: LANGUAGE_URLS_BY_MODE.switzerland },
  "/en/ads/ferrari-rental-switzerland": { lang: "en", mode: "switzerland", source: "/en/", home: "/en/", languageUrls: LANGUAGE_URLS_BY_MODE.switzerland },
  "/it/ads/noleggio-ferrari-svizzera": { lang: "it", mode: "switzerland", source: "/it/", home: "/it/", languageUrls: LANGUAGE_URLS_BY_MODE.switzerland },

  "/ads/ferrari-selber-fahren": { lang: "de", mode: "drive", source: "/", home: "/", languageUrls: LANGUAGE_URLS_BY_MODE.drive },
  "/en/ads/drive-a-ferrari-switzerland": { lang: "en", mode: "drive", source: "/en/", home: "/en/", languageUrls: LANGUAGE_URLS_BY_MODE.drive },
  "/it/ads/guidare-una-ferrari-svizzera": { lang: "it", mode: "drive", source: "/it/", home: "/it/", languageUrls: LANGUAGE_URLS_BY_MODE.drive },

  "/ads/ferrari-mieten-hochzeit-zuerich": { lang: "de", mode: "wedding", source: "/", home: "/", languageUrls: LANGUAGE_URLS_BY_MODE.wedding },
  "/en/ads/ferrari-wedding-car-rental-zurich": { lang: "en", mode: "wedding", source: "/en/", home: "/en/", languageUrls: LANGUAGE_URLS_BY_MODE.wedding },
  "/it/ads/noleggio-ferrari-matrimonio-zurigo": { lang: "it", mode: "wedding", source: "/it/", home: "/it/", languageUrls: LANGUAGE_URLS_BY_MODE.wedding },

  "/ads/ferrari-gutschein-zuerich": { lang: "de", mode: "gift", source: "/", home: "/", languageUrls: LANGUAGE_URLS_BY_MODE.gift },
  "/en/ads/ferrari-gift-voucher-zurich": { lang: "en", mode: "gift", source: "/en/", home: "/en/", languageUrls: LANGUAGE_URLS_BY_MODE.gift },
  "/it/ads/buono-regalo-ferrari-zurigo": { lang: "it", mode: "gift", source: "/it/", home: "/it/", languageUrls: LANGUAGE_URLS_BY_MODE.gift },

};

function cityLanguageUrls(city) {
  return {
    de: `/ads/${city.slugs.de}`,
    en: `/en/ads/${city.slugs.en}`,
    it: `/it/ads/${city.slugs.it}`,
  };
}

for (const [cityKey, city] of Object.entries(CITY_CONFIG)) {
  const languageUrls = cityLanguageUrls(city);
  ROUTES[languageUrls.de] = { lang: "de", mode: "city", city: cityKey, source: "/", home: "/", defaultPickup: city.pickup, languageUrls };
  ROUTES[languageUrls.en] = { lang: "en", mode: "city", city: cityKey, source: "/en/", home: "/en/", defaultPickup: city.pickup, languageUrls };
  ROUTES[languageUrls.it] = { lang: "it", mode: "city", city: cityKey, source: "/it/", home: "/it/", defaultPickup: city.pickup, languageUrls };
}

const COPY = {
  de: {
    title: "Ferrari mieten Zürich ab CHF 440 | Ferrari Vermietung",
    description: "Ferrari in Zürich mieten: Ferrari 458 Italia ab CHF 440. Transparente Tarife, persönliche Übergabe und Abholung nahe Zürich.",
    showcaseEyebrow: "Ferrari 458 Italia · Zürich",
    showcaseTitle: "Ferrari mieten Zürich",
    showcaseMicro: "Ab CHF 440 · 3 Stunden · unbegrenzte km",
    showcaseBody: "Ferrari 458 Italia in Zürich mieten oder ausleihen – bei Ihrer persönlichen Ferrari Vermietung mit klaren Tarifen und professioneller Übergabe.",
    heroTitleA: "Ferrari 458 Italia mieten",
    heroTitleB: "in Zürich ab CHF 440",
    heroSubtitle: "Luxury Obsession ist Ihre persönliche Ferrari Vermietung bei Zürich. Mieten Sie den sorgfältig gepflegten Ferrari 458 Italia ab CHF 440 für 3 Stunden und fahren Sie ihn selbst. Hauptabholung ist in Nänikon nahe Zürich; andere Übergabeorte sind auf Anfrage möglich. Wählen Sie Ihren Tarif und senden Sie direkt Ihre Wunschtermin-Anfrage.",
    pill0: "Ferrari 458 Italia",
    pill1: "Selbst fahren",
    pill2: "Abholung nahe Zürich",
    pill3: "Ab CHF 440",
    pill4: "Ab 21 Jahren",
    packagesTitle: "Ferrari mieten Zürich – Tarife ab CHF 440",
    packagesSub: "3 Stunden, Halbtag, Ganztag, Wochenende oder ganze Woche – mit klaren Kilometerpaketen und persönlicher Bestätigung.",
    requestTitle: "Ferrari 458 Italia in Zürich anfragen",
    requestSub: "Senden Sie Wunschdatum, Uhrzeit und Abholort. Wir bestätigen Verfügbarkeit, Preis und Details persönlich.",
    faqSub: "Antworten zur Ferrari Vermietung und zum Ferrari mieten in Zürich.",
  },
  en: {
    title: "Ferrari Rental Zurich from CHF 440 | Ferrari 458 Italia",
    description: "Rent a Ferrari in Zurich: Ferrari 458 Italia from CHF 440. Transparent rates, personal handover and pickup near Zurich.",
    showcaseEyebrow: "Ferrari 458 Italia · Zurich",
    showcaseTitle: "Ferrari rental Zurich",
    showcaseMicro: "From CHF 440 · 3 hours · unlimited km",
    showcaseBody: "Rent a Ferrari 458 Italia in Zurich from a personal Ferrari rental service with transparent rates and a professional handover.",
    heroTitleA: "Rent a Ferrari 458 Italia",
    heroTitleB: "in Zurich from CHF 440",
    heroSubtitle: "Luxury Obsession is your personal Ferrari rental service near Zurich. Rent the meticulously maintained Ferrari 458 Italia from CHF 440 for 3 hours and drive it yourself. Main pickup is in Nänikon near Zurich; other handover locations are available on request. Choose your rate and send your preferred-date request directly.",
    pill0: "Ferrari 458 Italia",
    pill1: "Self-drive rental",
    pill2: "Pickup near Zurich",
    pill3: "From CHF 440",
    pill4: "From age 21",
    packagesTitle: "Ferrari rental Zurich – rates from CHF 440",
    packagesSub: "3 hours, half day, full day, weekend or full week – with clear kilometre packages and personal confirmation.",
    requestTitle: "Request your Ferrari 458 Italia in Zurich",
    requestSub: "Send your preferred date, time and pickup location. We confirm availability, price and details personally.",
    faqSub: "Answers about renting a Ferrari and Ferrari rental in Zurich.",
  },
  it: {
    title: "Noleggio Ferrari Zurigo da CHF 440 | Ferrari 458 Italia",
    description: "Noleggia una Ferrari a Zurigo: Ferrari 458 Italia da CHF 440. Tariffe chiare, consegna personale e ritiro vicino a Zurigo.",
    showcaseEyebrow: "Ferrari 458 Italia · Zurigo",
    showcaseTitle: "Noleggio Ferrari Zurigo",
    showcaseMicro: "Da CHF 440 · 3 ore · km illimitati",
    showcaseBody: "Noleggia una Ferrari 458 Italia a Zurigo con un servizio personale, tariffe trasparenti e consegna professionale.",
    heroTitleA: "Noleggia una Ferrari 458 Italia",
    heroTitleB: "a Zurigo da CHF 440",
    heroSubtitle: "Luxury Obsession è il tuo servizio personale di noleggio Ferrari vicino a Zurigo. Noleggia la Ferrari 458 Italia da CHF 440 per 3 ore e guidala personalmente. Il ritiro principale è a Nänikon, vicino a Zurigo; altre località sono disponibili su richiesta. Scegli la tariffa e invia direttamente la tua richiesta.",
    pill0: "Ferrari 458 Italia",
    pill1: "Guida tu",
    pill2: "Ritiro vicino a Zurigo",
    pill3: "Da CHF 440",
    pill4: "Dai 21 anni",
    packagesTitle: "Noleggio Ferrari Zurigo – tariffe da CHF 440",
    packagesSub: "3 ore, mezza giornata, giornata intera, weekend o settimana – con chilometraggi chiari e conferma personale.",
    requestTitle: "Richiedi la Ferrari 458 Italia a Zurigo",
    requestSub: "Indicaci data, orario e luogo di ritiro preferiti. Confermiamo personalmente disponibilità, prezzo e dettagli.",
    faqSub: "Risposte sul noleggio Ferrari e su come noleggiare una Ferrari a Zurigo.",
  },
};

const SWITZERLAND_COPY = {
  de: {
    title: "Ferrari mieten Schweiz ab CHF 440 | Ferrari 458 Italia",
    description: "Ferrari 458 Italia in der Schweiz mieten ab CHF 440. Abholung nahe Zürich, Lieferung an ausgewählte Orte und transparente Gebühren.",
    eyebrow: "Schweiz",
    showcaseEyebrow: "Ferrari 458 Italia · Schweiz",
    showcaseTitle: "Ferrari mieten Schweiz",
    showcaseMicro: "Ab CHF 440 · Abholung nahe Zürich · Lieferung auf Anfrage",
    showcaseBody: "Ferrari Vermietung für die Schweiz: Mieten Sie den Ferrari 458 Italia mit persönlicher Übergabe, klaren Tarifen und transparent ausgewiesenen Liefergebühren.",
    showcaseCta: "Verfügbarkeit in der Schweiz anfragen",
    heroTitleA: "Ferrari 458 Italia mieten",
    heroTitleB: "in der Schweiz ab CHF 440",
    heroSubtitle: "Mieten Sie den Ferrari 458 Italia in der Schweiz ab CHF 440 für 3 Stunden. Die kostenlose Hauptabholung ist in Nänikon nahe Zürich. Lieferungen nach Zug, Luzern, St. Gallen und Aargau kosten CHF 140; nach Bern, Basel und Chur CHF 290. Wählen Sie im Formular Ihren Ort und erhalten Sie eine persönliche Bestätigung ohne versteckte Lieferkosten.",
    pill0: "Ferrari 458 Italia",
    pill1: "Selbst fahren",
    pill2: "Nänikon kostenlos",
    pill3: "Lieferung ab CHF 140",
    pill4: "Ab 21 Jahren",
    ctaRequest: "Schweizweit anfragen",
    quoteOpen: "Anfragen aus der Schweiz offen",
    packagesTitle: "Ferrari mieten Schweiz – Tarife ab CHF 440",
    packagesSub: "3 Stunden, Halbtag, Ganztag, Wochenende oder ganze Woche. Lieferkosten werden im Formular nach Übergabeort transparent ausgewiesen.",
    packagesNote: "Hauptabholung in Nänikon kostenlos. Lieferung an ausgewählte Orte ab CHF 140 zusätzlich zum Miettarif. Mindestalter 21 Jahre; rückerstattbare Kaution ab CHF 1’500.",
    requestTitle: "Ferrari Miete in der Schweiz anfragen",
    requestSub: "Wählen Sie Tarif, Datum, Uhrzeit und Übergabeort. Wir bestätigen Verfügbarkeit, Gesamtpreis und Übergabedetails persönlich.",
    pickupTitle: "Abholung & Lieferung in der Schweiz",
    pickupNote: "Nänikon nahe Zürich kostenlos; ausgewählte Lieferorte ab CHF 140.",
    faqSub: "Antworten zur Ferrari Vermietung, Abholung und Lieferung in der Schweiz.",
    faqQ7: "Wo kann ich den Ferrari in der Schweiz übernehmen?",
    faqA7: "Die Hauptabholung in Nänikon nahe Zürich ist kostenlos. Lieferung nach Zug, Luzern, St. Gallen und Aargau kostet CHF 140; nach Bern, Basel und Chur CHF 290. Weitere Orte prüfen wir auf Anfrage.",
  },
  en: {
    title: "Ferrari Rental Switzerland from CHF 440 | 458 Italia",
    description: "Rent a Ferrari 458 Italia in Switzerland from CHF 440. Pickup near Zurich, delivery to selected locations and transparent fees.",
    eyebrow: "Switzerland",
    showcaseEyebrow: "Ferrari 458 Italia · Switzerland",
    showcaseTitle: "Ferrari rental Switzerland",
    showcaseMicro: "From CHF 440 · Pickup near Zurich · Delivery on request",
    showcaseBody: "Ferrari rental for Switzerland: drive the Ferrari 458 Italia with a personal handover, clear rates and transparently listed delivery fees.",
    showcaseCta: "Request availability in Switzerland",
    heroTitleA: "Rent a Ferrari 458 Italia",
    heroTitleB: "in Switzerland from CHF 440",
    heroSubtitle: "Rent the Ferrari 458 Italia in Switzerland from CHF 440 for 3 hours. Main pickup in Nänikon near Zurich is free. Delivery to Zug, Lucerne, St. Gallen and Aargau costs CHF 140; delivery to Bern, Basel and Chur costs CHF 290. Choose your location in the form and receive a personal confirmation with no hidden delivery fees.",
    pill0: "Ferrari 458 Italia",
    pill1: "Self-drive rental",
    pill2: "Free Nänikon pickup",
    pill3: "Delivery from CHF 140",
    pill4: "From age 21",
    ctaRequest: "Request in Switzerland",
    quoteOpen: "Switzerland requests open",
    packagesTitle: "Ferrari rental Switzerland – rates from CHF 440",
    packagesSub: "3 hours, half day, full day, weekend or full week. Delivery costs are listed transparently by handover location in the form.",
    packagesNote: "Main pickup in Nänikon is free. Delivery to selected locations from CHF 140 in addition to the rental rate. Minimum age 21; refundable deposit from CHF 1,500.",
    requestTitle: "Request your Ferrari rental in Switzerland",
    requestSub: "Choose your rate, date, time and handover location. We confirm availability, total price and handover details personally.",
    pickupTitle: "Pickup & delivery in Switzerland",
    pickupNote: "Free pickup in Nänikon near Zurich; selected delivery locations from CHF 140.",
    faqSub: "Answers about Ferrari rental, pickup and delivery in Switzerland.",
    faqQ7: "Where can I collect the Ferrari in Switzerland?",
    faqA7: "Main pickup in Nänikon near Zurich is free. Delivery to Zug, Lucerne, St. Gallen and Aargau costs CHF 140; delivery to Bern, Basel and Chur costs CHF 290. We can review other locations on request.",
  },
  it: {
    title: "Noleggio Ferrari Svizzera da CHF 440 | 458 Italia",
    description: "Noleggia una Ferrari 458 Italia in Svizzera da CHF 440. Ritiro vicino a Zurigo, consegna in località selezionate e costi trasparenti.",
    eyebrow: "Svizzera",
    showcaseEyebrow: "Ferrari 458 Italia · Svizzera",
    showcaseTitle: "Noleggio Ferrari Svizzera",
    showcaseMicro: "Da CHF 440 · Ritiro vicino a Zurigo · Consegna su richiesta",
    showcaseBody: "Noleggio Ferrari in Svizzera: guida la Ferrari 458 Italia con consegna personale, tariffe chiare e costi di consegna trasparenti.",
    showcaseCta: "Richiedi disponibilità in Svizzera",
    heroTitleA: "Noleggia una Ferrari 458 Italia",
    heroTitleB: "in Svizzera da CHF 440",
    heroSubtitle: "Noleggia la Ferrari 458 Italia in Svizzera da CHF 440 per 3 ore. Il ritiro principale a Nänikon, vicino a Zurigo, è gratuito. La consegna a Zugo, Lucerna, San Gallo e Argovia costa CHF 140; a Berna, Basilea e Coira CHF 290. Scegli la località nel modulo e ricevi una conferma personale senza costi di consegna nascosti.",
    pill0: "Ferrari 458 Italia",
    pill1: "Guida tu",
    pill2: "Ritiro Nänikon gratuito",
    pill3: "Consegna da CHF 140",
    pill4: "Dai 21 anni",
    ctaRequest: "Richiedi in Svizzera",
    quoteOpen: "Richieste dalla Svizzera aperte",
    packagesTitle: "Noleggio Ferrari Svizzera – tariffe da CHF 440",
    packagesSub: "3 ore, mezza giornata, giornata intera, weekend o settimana. I costi di consegna sono indicati chiaramente per ogni località nel modulo.",
    packagesNote: "Ritiro principale a Nänikon gratuito. Consegna in località selezionate da CHF 140 in aggiunta alla tariffa. Età minima 21 anni; cauzione rimborsabile da CHF 1’500.",
    requestTitle: "Richiedi il noleggio Ferrari in Svizzera",
    requestSub: "Scegli tariffa, data, orario e luogo di consegna. Confermiamo personalmente disponibilità, prezzo totale e dettagli.",
    pickupTitle: "Ritiro & consegna in Svizzera",
    pickupNote: "Ritiro gratuito a Nänikon vicino a Zurigo; località di consegna selezionate da CHF 140.",
    faqSub: "Risposte sul noleggio Ferrari, il ritiro e la consegna in Svizzera.",
    faqQ7: "Dove posso ritirare la Ferrari in Svizzera?",
    faqA7: "Il ritiro principale a Nänikon vicino a Zurigo è gratuito. La consegna a Zugo, Lucerna, San Gallo e Argovia costa CHF 140; a Berna, Basilea e Coira CHF 290. Valutiamo altre località su richiesta.",
  },
};

const DRIVE_COPY = {
  de: {
    title: "Ferrari selber fahren ab CHF 440 | 458 Italia Zürich",
    description: "Ferrari 458 Italia selber fahren ab CHF 440 für 3 Stunden. Persönliche Übergabe nahe Zürich, klare Tarife und direkte Terminanfrage.",
    eyebrow: "Selbstfahrer-Erlebnis bei Zürich",
    showcaseEyebrow: "Ferrari 458 Italia · Selbstfahrer",
    showcaseTitle: "Ferrari selber fahren",
    showcaseMicro: "Selbst am Steuer · 3 Stunden · ab CHF 440",
    showcaseBody: "Erleben Sie den Ferrari 458 Italia selbst am Steuer: eine echte Ferrari Miete mit persönlicher Einweisung, klaren Konditionen und Abholung nahe Zürich.",
    showcaseCta: "Ferrari-Fahrt anfragen",
    heroTitleA: "Ferrari 458 Italia",
    heroTitleB: "selber fahren ab CHF 440",
    heroSubtitle: "Mieten Sie den Ferrari 458 Italia und fahren Sie ihn selbst – ab CHF 440 für 3 Stunden. Vor der Fahrt erhalten Sie eine persönliche Fahrzeugübergabe und Einweisung. Hauptabholung ist in Nänikon nahe Zürich; Mindestalter 21 Jahre und rückerstattbare Kaution ab CHF 1’500. Wählen Sie Ihren Tarif und fragen Sie Ihren Termin direkt an.",
    pill0: "Sie fahren selbst",
    pill1: "Ferrari 458 Italia",
    pill2: "3 Stunden ab CHF 440",
    pill3: "Ab 21 Jahren",
    pill4: "Kaution ab CHF 1’500",
    ctaRequest: "Fahrt anfragen",
    quoteOpen: "Fahrtermine verfügbar",
    packagesTitle: "Ferrari selber fahren – Pakete ab CHF 440",
    packagesSub: "Von 3 Stunden mit unbegrenzten Kilometern bis zum ganzen Wochenende: Wählen Sie das passende Selbstfahrer-Paket.",
    requestTitle: "Termin zum Ferrari selber fahren anfragen",
    requestSub: "Senden Sie Wunschdatum, Uhrzeit, Paket und Abholort. Wir bestätigen Verfügbarkeit und alle Bedingungen persönlich.",
    formTitle: "Ihre Ferrari-Fahrt",
    notesHint: "Gewünschte Route, Anlass und weitere Fragen zu Ihrer Ferrari-Fahrt",
    faqSub: "Antworten zum Ferrari selber fahren, zur Übergabe und zu den Voraussetzungen.",
    faqQ1: "Fahre ich den Ferrari 458 Italia selbst?",
    faqA1: "Ja. Sie mieten den Ferrari 458 Italia als Selbstfahrer und sitzen selbst am Steuer. Vor der Abfahrt erhalten Sie eine persönliche Übergabe und Einweisung.",
  },
  en: {
    title: "Drive a Ferrari from CHF 440 | 458 Italia Zurich",
    description: "Drive a Ferrari 458 Italia yourself from CHF 440 for 3 hours. Personal handover near Zurich, clear rates and direct date request.",
    eyebrow: "Self-drive experience near Zurich",
    showcaseEyebrow: "Ferrari 458 Italia · Self-drive",
    showcaseTitle: "Drive a Ferrari yourself",
    showcaseMicro: "You at the wheel · 3 hours · from CHF 440",
    showcaseBody: "Experience the Ferrari 458 Italia from the driver's seat: a genuine self-drive Ferrari rental with a personal briefing, clear terms and pickup near Zurich.",
    showcaseCta: "Request your Ferrari drive",
    heroTitleA: "Drive a Ferrari 458 Italia",
    heroTitleB: "yourself from CHF 440",
    heroSubtitle: "Rent the Ferrari 458 Italia and drive it yourself from CHF 440 for 3 hours. You receive a personal vehicle handover and briefing before departure. Main pickup is in Nänikon near Zurich; minimum age is 21 and the refundable deposit starts at CHF 1,500. Choose your rate and request your preferred date directly.",
    pill0: "You drive",
    pill1: "Ferrari 458 Italia",
    pill2: "3 hours from CHF 440",
    pill3: "From age 21",
    pill4: "Deposit from CHF 1,500",
    ctaRequest: "Request your drive",
    quoteOpen: "Driving dates available",
    packagesTitle: "Drive a Ferrari – packages from CHF 440",
    packagesSub: "From 3 hours with unlimited kilometres to a full weekend: choose the self-drive package that suits you.",
    requestTitle: "Request a date to drive the Ferrari",
    requestSub: "Send your preferred date, time, package and pickup location. We confirm availability and all terms personally.",
    formTitle: "Your Ferrari drive",
    notesHint: "Preferred route, occasion and any questions about your Ferrari drive",
    faqSub: "Answers about driving the Ferrari yourself, the handover and driver requirements.",
    faqQ1: "Do I drive the Ferrari 458 Italia myself?",
    faqA1: "Yes. You rent the Ferrari 458 Italia as a self-drive vehicle and sit behind the wheel yourself. Before departure, you receive a personal handover and briefing.",
  },
  it: {
    title: "Guidare una Ferrari da CHF 440 | 458 Italia Zurigo",
    description: "Guida personalmente una Ferrari 458 Italia da CHF 440 per 3 ore. Consegna vicino a Zurigo, tariffe chiare e richiesta diretta.",
    eyebrow: "Esperienza di guida vicino a Zurigo",
    showcaseEyebrow: "Ferrari 458 Italia · Guida tu",
    showcaseTitle: "Guidare una Ferrari",
    showcaseMicro: "Tu al volante · 3 ore · da CHF 440",
    showcaseBody: "Vivi la Ferrari 458 Italia dal posto di guida: un vero noleggio self-drive con briefing personale, condizioni chiare e ritiro vicino a Zurigo.",
    showcaseCta: "Richiedi la tua guida Ferrari",
    heroTitleA: "Guida una Ferrari 458 Italia",
    heroTitleB: "personalmente da CHF 440",
    heroSubtitle: "Noleggia la Ferrari 458 Italia e guidala personalmente da CHF 440 per 3 ore. Prima della partenza ricevi la consegna della vettura e un briefing personale. Il ritiro principale è a Nänikon vicino a Zurigo; età minima 21 anni e cauzione rimborsabile da CHF 1’500. Scegli la tariffa e richiedi direttamente la data.",
    pill0: "Guida tu",
    pill1: "Ferrari 458 Italia",
    pill2: "3 ore da CHF 440",
    pill3: "Dai 21 anni",
    pill4: "Cauzione da CHF 1’500",
    ctaRequest: "Richiedi la guida",
    quoteOpen: "Date disponibili",
    packagesTitle: "Guidare una Ferrari – pacchetti da CHF 440",
    packagesSub: "Da 3 ore con chilometri illimitati a un intero weekend: scegli il pacchetto self-drive più adatto.",
    requestTitle: "Richiedi una data per guidare la Ferrari",
    requestSub: "Indicaci data, orario, pacchetto e luogo di ritiro. Confermiamo personalmente disponibilità e condizioni.",
    formTitle: "La tua guida Ferrari",
    notesHint: "Percorso desiderato, occasione e domande sulla tua guida Ferrari",
    faqSub: "Risposte su come guidare la Ferrari, sulla consegna e sui requisiti del conducente.",
    faqQ1: "Guido personalmente la Ferrari 458 Italia?",
    faqA1: "Sì. Noleggi la Ferrari 458 Italia come vettura self-drive e sei tu al volante. Prima della partenza ricevi la consegna e un briefing personale.",
  },
};

const WEDDING_COPY = {
  de: {
    title: "Ferrari Hochzeitsauto mieten Zürich | 458 Italia",
    description: "Ferrari 458 Italia als Hochzeitsauto in Zürich mieten. Für Ankunft, Brautpaar-Fotos und Fahrt – mit persönlicher Planung und flexibler Übergabe.",
    eyebrow: "Hochzeit in Zürich",
    showcaseEyebrow: "Ferrari 458 Italia · Hochzeit Zürich",
    showcaseTitle: "Ferrari Hochzeitsauto mieten",
    showcaseMicro: "Ankunft · Brautpaar-Fotos · selbst fahren",
    showcaseBody: "Mieten Sie den Ferrari 458 Italia als Hochzeitsauto in Zürich – für die Ankunft, Brautpaar-Fotos und eine Fahrt, persönlich und diskret geplant.",
    showcaseCta: "Hochzeit anfragen",
    heroTitleA: "Ferrari 458 Italia",
    heroTitleB: "für Ihre Hochzeit mieten",
    heroSubtitle: "Mieten Sie den Ferrari 458 Italia für Ihre Hochzeit in Zürich – für eine besondere Ankunft, Fotos mit dem Brautpaar oder eine stilvolle Ausfahrt. Wir stimmen Übergabe, Zeitfenster und Abholort persönlich auf Ihren Hochzeitstag ab.",
    pill0: "Ferrari 458 Italia",
    pill1: "Hochzeit & Fotos",
    pill2: "Zürich & Location",
    pill3: "Persönliche Planung",
    pill4: "Flexible Übergabe",
    ctaRequest: "Hochzeit anfragen",
    quoteOpen: "Hochzeitsanfragen offen",
    packagesTitle: "Ferrari 458 Italia für Hochzeit – Tarife",
    packagesSub: "Für Ankunft und Fotos, einen Halbtag oder einen längeren Hochzeitstag: Wählen Sie die passende Dauer und senden Sie uns Ihren Ablauf.",
    requestTitle: "Ferrari für Ihre Hochzeit anfragen",
    requestSub: "Senden Sie Hochzeitsdatum, gewünschte Uhrzeit, Location und geplanten Einsatz. Wir bestätigen die Verfügbarkeit und stimmen die Übergabe persönlich mit Ihnen ab.",
    formTitle: "Ihre Hochzeitsanfrage",
    notesHint: "Location, Ablauf, gewünschte Nutzung (Ankunft, Fotos, Fahrt) und weitere Wünsche",
    faqSub: "Antworten zur Ferrari Miete als Hochzeitsauto in Zürich.",
    faqQ1: "Kann ich den Ferrari als Hochzeitsauto selbst fahren?",
    faqA1: "Ja. Der Ferrari 458 Italia wird als Selbstfahrer-Mietwagen übergeben. Die fahrende Person muss die Mietbedingungen erfüllen und erhält vor der Fahrt eine persönliche Einweisung.",
    heroImageAlt: "Brautpaar mit rotem Ferrari 458 Italia als Hochzeitsauto in Zürich",
  },
  en: {
    title: "Ferrari Wedding Car Rental Zurich | Ferrari 458 Italia",
    description: "Rent a Ferrari 458 Italia for your wedding in Zurich. For the arrival, couple photos and special moments – with personal planning and flexible handover.",
    eyebrow: "Wedding in Zurich",
    showcaseEyebrow: "Ferrari 458 Italia · Zurich wedding",
    showcaseTitle: "Ferrari wedding car rental",
    showcaseMicro: "Arrival · couple photos · self-drive",
    showcaseBody: "Rent the Ferrari 458 Italia as your wedding car in Zurich – for the arrival, couple photos and a special drive, planned personally and discreetly.",
    showcaseCta: "Request for your wedding",
    heroTitleA: "Rent a Ferrari 458 Italia",
    heroTitleB: "for your wedding in Zurich",
    heroSubtitle: "Rent the Ferrari 458 Italia for your wedding in Zurich – for a memorable arrival, photos with the couple or a special drive. We coordinate the handover, timing and pickup location personally around your wedding day.",
    pill0: "Ferrari 458 Italia",
    pill1: "Wedding & photos",
    pill2: "Zurich & venue",
    pill3: "Personal planning",
    pill4: "Flexible handover",
    ctaRequest: "Wedding request",
    quoteOpen: "Wedding requests open",
    packagesTitle: "Ferrari 458 Italia wedding rental – rates",
    packagesSub: "For the arrival and photos, a half day or a longer wedding schedule: choose the right duration and tell us your plans.",
    requestTitle: "Request the Ferrari for your wedding",
    requestSub: "Send your wedding date, preferred time, venue and planned use. We confirm availability and coordinate the handover personally with you.",
    formTitle: "Your wedding request",
    notesHint: "Venue, schedule, planned use (arrival, photos, drive) and any special wishes",
    faqSub: "Answers about renting the Ferrari as a wedding car in Zurich.",
    faqQ1: "Can I drive the Ferrari wedding car myself?",
    faqA1: "Yes. The Ferrari 458 Italia is handed over as a self-drive rental. The driver must meet the rental requirements and receives a personal briefing before departure.",
    heroImageAlt: "Wedding couple with red Ferrari 458 Italia wedding car in Zurich",
  },
  it: {
    title: "Noleggio Ferrari Matrimonio Zurigo | Ferrari 458 Italia",
    description: "Ferrari 458 Italia per matrimonio a Zurigo. Ideale per arrivo, foto degli sposi e guida, con pianificazione personale e consegna flessibile.",
    eyebrow: "Matrimonio a Zurigo",
    showcaseEyebrow: "Ferrari 458 Italia · matrimonio Zurigo",
    showcaseTitle: "Ferrari per matrimonio",
    showcaseMicro: "Arrivo · foto degli sposi · guida tu",
    showcaseBody: "Noleggia la Ferrari 458 Italia come auto per il matrimonio a Zurigo – per l'arrivo, le foto degli sposi e una guida speciale, con pianificazione personale e discreta.",
    showcaseCta: "Richiedi per il matrimonio",
    heroTitleA: "Noleggia una Ferrari 458 Italia",
    heroTitleB: "per il tuo matrimonio a Zurigo",
    heroSubtitle: "Noleggia la Ferrari 458 Italia per il tuo matrimonio a Zurigo – per un arrivo speciale, le foto degli sposi o una guida emozionante. Coordiniamo personalmente consegna, orari e luogo di ritiro in base al programma del matrimonio.",
    pill0: "Ferrari 458 Italia",
    pill1: "Matrimonio & foto",
    pill2: "Zurigo & location",
    pill3: "Pianificazione personale",
    pill4: "Consegna flessibile",
    ctaRequest: "Richiesta matrimonio",
    quoteOpen: "Richieste matrimonio aperte",
    packagesTitle: "Noleggio Ferrari 458 Italia per matrimonio – tariffe",
    packagesSub: "Per arrivo e foto, mezza giornata o un programma più lungo: scegli la durata adatta e indicaci il tuo programma.",
    requestTitle: "Richiedi la Ferrari per il tuo matrimonio",
    requestSub: "Indicaci data del matrimonio, orario, location e utilizzo previsto. Confermiamo la disponibilità e coordiniamo personalmente la consegna con te.",
    formTitle: "La tua richiesta matrimonio",
    notesHint: "Location, programma, utilizzo previsto (arrivo, foto, guida) e richieste particolari",
    faqSub: "Risposte sul noleggio della Ferrari come auto per matrimonio a Zurigo.",
    faqQ1: "Posso guidare personalmente la Ferrari per il matrimonio?",
    faqA1: "Sì. La Ferrari 458 Italia viene consegnata come vettura self-drive. Il conducente deve soddisfare i requisiti di noleggio e riceve un briefing personale prima della partenza.",
    heroImageAlt: "Coppia di sposi con Ferrari 458 Italia rossa per matrimonio a Zurigo",
  },
};

const GIFT_COPY = {
  de: {
    title: "Ferrari Geschenk & Gutschein Zürich | 458 Italia fahren",
    description: "Ferrari 458 Italia als Geschenk oder Gutschein in Zürich. Pakete ab CHF 440, flexible Terminwahl und digitale Geschenkkarte inklusive.",
    eyebrow: "Geschenk in Zürich",
    showcaseEyebrow: "Ferrari 458 Italia · Geschenk Zürich",
    showcaseTitle: "Ferrari Geschenk & Gutschein",
    showcaseMicro: "Selbst fahren · digitale Geschenkkarte · ab CHF 440",
    showcaseBody: "Verschenken Sie das Erlebnis, einen Ferrari 458 Italia selbst zu fahren – als Geschenk oder Gutschein mit flexibler Terminwahl und persönlicher Planung.",
    showcaseCta: "Gutschein anfragen",
    heroTitleA: "Ferrari 458 Italia Geschenk",
    heroTitleB: "als Gutschein ab CHF 440",
    heroSubtitle: "Verschenken Sie ein echtes Ferrari-458-Italia-Erlebnis in Zürich. Der Gutschein kann für einen Geburtstag, eine Überraschung oder einen besonderen Anlass genutzt werden. Sie wählen das Paket, die beschenkte Person vereinbart den Termin flexibel mit uns.",
    pill0: "Ferrari 458 Italia",
    pill1: "Geburtstag & Geschenk",
    pill2: "Digitale Geschenkkarte",
    pill3: "Ab CHF 440",
    pill4: "Flexible Terminwahl",
    ctaRequest: "Gutschein anfragen",
    quoteOpen: "Gutscheine verfügbar",
    packagesTitle: "Ferrari Gutschein – Pakete ab CHF 440",
    packagesSub: "Wählen Sie die gewünschte Fahrdauer und das Kilometerpaket. Die elektronische Geschenkkarte ist im Preis enthalten und der Termin kann später abgestimmt werden.",
    requestTitle: "Ferrari Gutschein anfragen",
    requestSub: "Wählen Sie das gewünschte Paket und teilen Sie uns mit, für wen der Gutschein gedacht ist. Falls der Termin noch nicht feststeht, kann er später mit der beschenkten Person vereinbart werden.",
    formTitle: "Ihre Gutscheinanfrage",
    notesHint: "Name der beschenkten Person, Anlass (z. B. Geburtstag), gewünschte persönliche Nachricht und weitere Wünsche",
    date: "Wunschtermin (optional)",
    time: "Wunschzeit (optional)",
    packagesNote: "Die fahrende Person muss mindestens 21 Jahre alt sein; rückerstattbare Kaution ab CHF 1’500. Alle Anfragen vorbehaltlich Verfügbarkeit.",
    faqSub: "Antworten zum Ferrari Geschenk, Gutschein und zur flexiblen Terminwahl.",
    faqQ1: "Fährt die beschenkte Person den Ferrari selbst?",
    faqA1: "Ja. Der Gutschein gilt für eine Selbstfahrer-Miete der Ferrari 458 Italia. Die fahrende Person muss mindestens 21 Jahre alt sein und alle Mietbedingungen erfüllen.",
    faqQ2: "Muss der Fahrtermin beim Kauf des Gutscheins feststehen?",
    faqA2: "Nein. Sie können zuerst das Paket und die Geschenkkarte anfragen. Die beschenkte Person kann den verfügbaren Fahrtermin später persönlich mit uns abstimmen.",
    heroImageAlt: "Luxury Obsession Ferrari 458 Italia Gutschein als Geburtstagsgeschenk in Zürich",
  },
  en: {
    title: "Ferrari Birthday Gift & Voucher Zurich | 458 Italia",
    description: "Ferrari 458 Italia birthday gift or voucher in Zurich. Packages from CHF 440, flexible scheduling, personal planning and a digital gift card included.",
    eyebrow: "Gift in Zurich",
    showcaseEyebrow: "Ferrari 458 Italia · Zurich gift",
    showcaseTitle: "Ferrari gift & voucher",
    showcaseMicro: "Self-drive · digital gift card · from CHF 440",
    showcaseBody: "Give someone the experience of driving a Ferrari 458 Italia themselves – as a gift or voucher with flexible scheduling and personal planning.",
    showcaseCta: "Request a gift voucher",
    heroTitleA: "Ferrari 458 Italia gift voucher",
    heroTitleB: "for birthdays from CHF 440",
    heroSubtitle: "Give a genuine Ferrari 458 Italia experience in Zurich. The voucher is ideal for a birthday, surprise or special occasion. You choose the package and the recipient can arrange the driving date flexibly with us later.",
    pill0: "Ferrari 458 Italia",
    pill1: "Birthday & gift",
    pill2: "Digital gift card",
    pill3: "From CHF 440",
    pill4: "Flexible scheduling",
    ctaRequest: "Request a gift voucher",
    quoteOpen: "Gift vouchers available",
    packagesTitle: "Ferrari gift vouchers – packages from CHF 440",
    packagesSub: "Choose the driving duration and kilometre package. The digital gift card is included and the driving date can be arranged later.",
    requestTitle: "Request a Ferrari gift voucher",
    requestSub: "Choose the preferred package and tell us who the gift is for. If the driving date is not yet known, it can be arranged later with the recipient.",
    formTitle: "Your gift voucher request",
    notesHint: "Recipient's name, occasion (e.g. birthday), preferred personal message and any special wishes",
    date: "Preferred date (optional)",
    time: "Preferred time (optional)",
    packagesNote: "The driver must be at least 21; refundable deposit from CHF 1,500. All requests are subject to availability.",
    faqSub: "Answers about the Ferrari gift, voucher and flexible date selection.",
    faqQ1: "Does the recipient drive the Ferrari themselves?",
    faqA1: "Yes. The voucher is for a self-drive Ferrari 458 Italia rental. The driver must be at least 21 and meet all rental requirements.",
    faqQ2: "Do I need to choose the driving date when buying the voucher?",
    faqA2: "No. You can request the package and digital gift card first. The recipient can arrange an available driving date with us later.",
    heroImageAlt: "Luxury Obsession Ferrari 458 Italia gift voucher for a birthday in Zurich",
  },
  it: {
    title: "Buono Regalo Ferrari & Compleanno Zurigo | 458 Italia",
    description: "Buono regalo Ferrari 458 Italia per compleanno a Zurigo. Pacchetti da CHF 440, data flessibile, pianificazione personale e gift card digitale inclusa.",
    eyebrow: "Regalo a Zurigo",
    showcaseEyebrow: "Ferrari 458 Italia · regalo Zurigo",
    showcaseTitle: "Regalo & buono Ferrari",
    showcaseMicro: "Guida tu · gift card digitale · da CHF 440",
    showcaseBody: "Regala l'esperienza di guidare personalmente una Ferrari 458 Italia – come regalo o buono con data flessibile e pianificazione personale.",
    showcaseCta: "Richiedi un buono regalo",
    heroTitleA: "Buono regalo Ferrari 458 Italia",
    heroTitleB: "per compleanni da CHF 440",
    heroSubtitle: "Regala una vera esperienza al volante della Ferrari 458 Italia a Zurigo. Il buono è ideale per un compleanno, una sorpresa o un'occasione speciale. Scegli il pacchetto e la persona che lo riceve potrà concordare con noi la data in seguito.",
    pill0: "Ferrari 458 Italia",
    pill1: "Compleanno & regalo",
    pill2: "Gift card digitale",
    pill3: "Da CHF 440",
    pill4: "Data flessibile",
    ctaRequest: "Richiedi un buono",
    quoteOpen: "Buoni regalo disponibili",
    packagesTitle: "Buono regalo Ferrari – pacchetti da CHF 440",
    packagesSub: "Scegli durata e chilometraggio. La gift card digitale è inclusa e la data di guida può essere concordata in un secondo momento.",
    requestTitle: "Richiedi un buono regalo Ferrari",
    requestSub: "Scegli il pacchetto e indicaci a chi è destinato il regalo. Se la data non è ancora definita, potrà essere concordata successivamente con la persona che riceve il buono.",
    formTitle: "La tua richiesta regalo",
    notesHint: "Nome della persona che riceverà il regalo, occasione (es. compleanno), messaggio personale e richieste particolari",
    date: "Data preferita (opzionale)",
    time: "Orario preferito (opzionale)",
    packagesNote: "La persona che guiderà deve avere almeno 21 anni; cauzione rimborsabile da CHF 1’500. Tutte le richieste sono soggette a disponibilità.",
    faqSub: "Risposte sul regalo Ferrari, il buono e la scelta flessibile della data.",
    faqQ1: "La persona che riceve il regalo guida personalmente la Ferrari?",
    faqA1: "Sì. Il buono è valido per un noleggio self-drive della Ferrari 458 Italia. Il conducente deve avere almeno 21 anni e soddisfare tutti i requisiti di noleggio.",
    faqQ2: "Devo scegliere la data di guida quando acquisto il buono?",
    faqA2: "No. Puoi richiedere prima il pacchetto e la gift card digitale. La persona che riceve il regalo potrà concordare con noi una data disponibile in seguito.",
    heroImageAlt: "Buono regalo Luxury Obsession per guidare una Ferrari 458 Italia a Zurigo",
  },

};

function buildCityCopy(lang, city) {
  const name = city.names[lang];
  const locative = city.locative[lang];
  const deliveryPhrase = city.deliveryPhrase[lang];
  const fee = city.delivery;

  if (lang === "de") {
    return {
      title: `Ferrari mieten ${name} | Ferrari 458 Italia`,
      description: `Ferrari 458 Italia ${locative} mieten. Lieferung ${deliveryPhrase}: CHF ${fee}. Tarife ab CHF 440, persönliche Übergabe und klare Konditionen.`,
      eyebrow: `${name}, Schweiz`,
      showcaseEyebrow: `Ferrari 458 Italia · ${name}`,
      showcaseTitle: `Ferrari mieten ${name}`,
      showcaseMicro: `Ab CHF 440 · Lieferung ${deliveryPhrase}: CHF ${fee}`,
      showcaseBody: `Ferrari 458 Italia ${locative} mieten – mit persönlicher Übergabe, transparenten Tarifen und Lieferung ${deliveryPhrase} für CHF ${fee}.`,
      showcaseCta: `Verfügbarkeit in ${name} anfragen`,
      heroTitleA: "Ferrari 458 Italia mieten",
      heroTitleB: locative,
      heroSubtitle: `Mieten Sie einen sorgfältig gepflegten Ferrari 458 Italia ${locative}. Die Lieferung ${deliveryPhrase} kostet CHF ${fee}. Die Tarife beginnen bei CHF 440; Übergabe, Konditionen und Termin werden persönlich bestätigt.`,
      pill0: "Ferrari 458 Italia",
      pill1: "V8-Saugmotor",
      pill2: `Lieferung ${name}`,
      pill3: `CHF ${fee} Lieferung`,
      pill4: "Ab 21 Jahren",
      ctaRequest: `In ${name} anfragen`,
      quoteOpen: `Lieferung ${deliveryPhrase} verfügbar`,
      packagesTitle: `Ferrari mieten ${name} – Tarife ab CHF 440`,
      packagesSub: `3 Stunden, Halbtag, Ganztag, Wochenende oder ganze Woche. Die Lieferung ${deliveryPhrase} kostet CHF ${fee} zusätzlich zum gewählten Tarif.`,
      packagesNote: `Lieferung ${deliveryPhrase}: CHF ${fee} zusätzlich zum gewählten Tarif. Alle Anfragen vorbehaltlich Verfügbarkeit. Mindestalter 21 Jahre; rückerstattbare Kaution ab CHF 1’500.`,
      requestTitle: `Ferrari 458 Italia ${locative} anfragen`,
      requestSub: `${name} ist im Formular als Übergabeort vorausgewählt. Wählen Sie Tarif, Datum und Uhrzeit; die Lieferkosten betragen CHF ${fee}.`,
      pickupTitle: "Abholung & Lieferung",
      pickupNote: `Hauptabholung nahe Zürich. Lieferung ${deliveryPhrase}: CHF ${fee}.`,
      faqSub: `Häufige Fragen zur Ferrari Miete ${locative}.`,
      faqQ7: `Was kostet die Lieferung ${deliveryPhrase}?`,
      faqA7: `Die Lieferung ${deliveryPhrase} kostet CHF ${fee} zusätzlich zum gewählten Miettarif. Der Übergabeort kann direkt im Anfrageformular ausgewählt werden.`,
    };
  }

  if (lang === "it") {
    return {
      title: `Noleggio Ferrari ${name} | Ferrari 458 Italia`,
      description: `Noleggio Ferrari 458 Italia ${locative}. Consegna ${deliveryPhrase}: CHF ${fee}. Tariffe da CHF 440, consegna personale e condizioni chiare.`,
      eyebrow: `${name}, Svizzera`,
      showcaseEyebrow: `Ferrari 458 Italia · ${name}`,
      showcaseTitle: `Noleggio Ferrari ${name}`,
      showcaseMicro: `Da CHF 440 · Consegna ${deliveryPhrase}: CHF ${fee}`,
      showcaseBody: `Noleggia una Ferrari 458 Italia ${locative}, con tariffe trasparenti, assistenza personale e consegna ${deliveryPhrase} per CHF ${fee}.`,
      showcaseCta: `Richiedi disponibilità ${locative}`,
      heroTitleA: "Noleggia una Ferrari 458 Italia",
      heroTitleB: locative,
      heroSubtitle: `Noleggia una Ferrari 458 Italia curata con grande attenzione ${locative}. La consegna ${deliveryPhrase} costa CHF ${fee}. Le tariffe partono da CHF 440; confermiamo personalmente disponibilità, condizioni e dettagli della consegna.`,
      pill0: "Ferrari 458 Italia",
      pill1: "V8 aspirato",
      pill2: `Consegna ${name}`,
      pill3: `Consegna CHF ${fee}`,
      pill4: "Dai 21 anni",
      ctaRequest: `Richiedi ${locative}`,
      quoteOpen: `Consegna ${deliveryPhrase} disponibile`,
      packagesTitle: `Noleggio Ferrari ${name} – tariffe da CHF 440`,
      packagesSub: `3 ore, mezza giornata, giornata intera, weekend o settimana. La consegna ${deliveryPhrase} costa CHF ${fee} in aggiunta alla tariffa scelta.`,
      packagesNote: `Consegna ${deliveryPhrase}: CHF ${fee} in aggiunta alla tariffa scelta. Tutte le richieste sono soggette a disponibilità. Età minima 21 anni; cauzione rimborsabile da CHF 1’500.`,
      requestTitle: `Richiedi la Ferrari 458 Italia ${locative}`,
      requestSub: `${name} è preselezionata nel modulo come luogo di consegna. Scegli tariffa, data e orario; il costo di consegna è CHF ${fee}.`,
      pickupTitle: "Ritiro & consegna",
      pickupNote: `Ritiro principale vicino a Zurigo. Consegna ${deliveryPhrase}: CHF ${fee}.`,
      faqSub: `Domande frequenti sul noleggio Ferrari ${locative}.`,
      faqQ7: `Quanto costa la consegna ${deliveryPhrase}?`,
      faqA7: `La consegna ${deliveryPhrase} costa CHF ${fee} in aggiunta alla tariffa di noleggio scelta. Il luogo di consegna può essere selezionato direttamente nel modulo.`,
    };
  }

  return {
    title: `Ferrari Rental ${name} | Ferrari 458 Italia`,
    description: `Rent a Ferrari 458 Italia ${locative}. Delivery ${deliveryPhrase}: CHF ${fee}. Rates from CHF 440, personal handover and clear terms.`,
    eyebrow: `${name}, Switzerland`,
    showcaseEyebrow: `Ferrari 458 Italia · ${name}`,
    showcaseTitle: `Ferrari rental ${name}`,
    showcaseMicro: `From CHF 440 · Delivery ${deliveryPhrase}: CHF ${fee}`,
    showcaseBody: `Rent a Ferrari 458 Italia ${locative}, with transparent rates, personal handover and delivery ${deliveryPhrase} for CHF ${fee}.`,
    showcaseCta: `Request availability in ${name}`,
    heroTitleA: "Rent a Ferrari 458 Italia",
    heroTitleB: locative,
    heroSubtitle: `Rent a meticulously maintained Ferrari 458 Italia ${locative}. Delivery ${deliveryPhrase} costs CHF ${fee}. Rates start from CHF 440; availability, terms and handover details are confirmed personally.`,
    pill0: "Ferrari 458 Italia",
    pill1: "Naturally aspirated V8",
    pill2: `Delivery ${name}`,
    pill3: `CHF ${fee} delivery`,
    pill4: "From age 21",
    ctaRequest: `Request in ${name}`,
    quoteOpen: `Delivery ${deliveryPhrase} available`,
    packagesTitle: `Ferrari rental ${name} – rates from CHF 440`,
    packagesSub: `3 hours, half day, full day, weekend or full week. Delivery ${deliveryPhrase} costs CHF ${fee} in addition to the selected rental rate.`,
    packagesNote: `Delivery ${deliveryPhrase}: CHF ${fee} in addition to the selected rental rate. All requests are subject to availability. Minimum age 21; refundable deposit from CHF 1,500.`,
    requestTitle: `Request the Ferrari 458 Italia ${locative}`,
    requestSub: `${name} is preselected in the form as the handover location. Choose your rate, date and time; delivery costs CHF ${fee}.`,
    pickupTitle: "Pickup & delivery",
    pickupNote: `Main pickup near Zurich. Delivery ${deliveryPhrase}: CHF ${fee}.`,
    faqSub: `Common questions about Ferrari rental ${locative}.`,
    faqQ7: `How much is delivery ${deliveryPhrase}?`,
    faqA7: `Delivery ${deliveryPhrase} costs CHF ${fee} in addition to the selected rental rate. You can select the handover location directly in the request form.`,
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceElementText(html, id, value) {
  const safeId = escapeRegExp(id);
  const re = new RegExp(
    `(<([a-zA-Z][\\w:-]*)\\b(?=[^>]*\\bid=["']${safeId}["'])[^>]*>)[\\s\\S]*?(<\\/\\2>)`,
    "i",
  );
  return html.replace(re, (_m, open, _tag, close) => `${open}${escapeHtml(value)}${close}`);
}

function setMetaContent(html, selectorAttr, selectorValue, value) {
  const attr = escapeRegExp(selectorAttr);
  const selector = escapeRegExp(selectorValue);
  const re = new RegExp(`<meta\\b(?=[^>]*\\b${attr}=["']${selector}["'])[^>]*>`, "i");
  return html.replace(re, (tag) => {
    const contentRe = /\scontent=(?:"[^"]*"|'[^']*')/i;
    const encoded = escapeHtml(value);
    if (contentRe.test(tag)) return tag.replace(contentRe, ` content="${encoded}"`);
    return tag.replace(/\/?>(?=$)/, ` content="${encoded}"/>`);
  });
}

function removeOrganicDiscoveryLinks(html) {
  // Paid landing pages are deliberately noindex. Remove organic-only canonical and
  // hreflang tags from the transformed response so metadata does not still describe
  // the source homepage as if this were an indexable localized page.
  return html.replace(/<link\b[^>]*>/gi, (tag) => {
    const relMatch = tag.match(/\brel=["']([^"']+)["']/i);
    const relTokens = relMatch ? relMatch[1].toLowerCase().split(/\s+/) : [];
    if (relTokens.includes("canonical")) return "";
    if (relTokens.includes("alternate") && /\bhreflang=["'][^"']+["']/i.test(tag)) return "";
    return tag;
  });
}

// Replace a JSON object assigned to `const <name> = {...}` without using a fragile
// regex. The homepage dictionaries are valid JSON objects, but adjacent objects such
// as UX_I18N made the previous regex capture too much and the browser restored the
// normal homepage copy after DOMContentLoaded.
function mutateConstJson(html, name, mutate) {
  const marker = `const ${name}`;
  const markerPos = html.indexOf(marker);
  if (markerPos < 0) return html;
  const eqPos = html.indexOf("=", markerPos + marker.length);
  if (eqPos < 0) return html;
  const openPos = html.indexOf("{", eqPos + 1);
  if (openPos < 0) return html;

  let depth = 0;
  let inString = false;
  let escaped = false;
  let closePos = -1;

  for (let i = openPos; i < html.length; i++) {
    const ch = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        closePos = i;
        break;
      }
    }
  }

  if (closePos < 0) return html;
  const raw = html.slice(openPos, closePos + 1);
  try {
    const obj = JSON.parse(raw);
    mutate(obj);
    const replacement = JSON.stringify(obj);
    return html.slice(0, openPos) + replacement + html.slice(closePos + 1);
  } catch (_e) {
    return html;
  }
}

function updateRuntimeCopy(html, lang, copy) {
  html = mutateConstJson(html, "I18N", (obj) => {
    if (!obj[lang]) return;
    const updates = {
      heroTitleA: copy.heroTitleA,
      heroTitleB: copy.heroTitleB,
      heroSubtitle: copy.heroSubtitle,
      packagesTitle: copy.packagesTitle,
      packagesSub: copy.packagesSub,
      requestTitle: copy.requestTitle,
      requestSub: copy.requestSub,
      showcaseEyebrow: copy.showcaseEyebrow,
      showcaseTitle: copy.showcaseTitle,
      showcaseBody: copy.showcaseBody,
    };
    for (const key of ["eyebrow", "pill0", "pill1", "pill2", "pill3", "pill4", "showcaseCta", "ctaRequest", "quoteOpen", "formTitle", "notesHint", "date", "time", "packagesNote", "pickupTitle", "pickupNote", "faqSub"]) {
      if (copy[key] != null) updates[key] = copy[key];
    }
    Object.assign(obj[lang], updates);
    if (Array.isArray(obj[lang].faqs)) {
      for (let i = 1; i <= 10; i++) {
        const question = copy[`faqQ${i}`];
        const answer = copy[`faqA${i}`];
        if (question != null && answer != null && obj[lang].faqs[i - 1]) {
          obj[lang].faqs[i - 1] = { q: question, a: answer };
        }
      }
    }
  });

  html = mutateConstJson(html, "UX_I18N", (obj) => {
    if (!obj[lang]) return;
    obj[lang].showcaseMicro = copy.showcaseMicro;
  });

  return html;
}

function removeSectionById(html, id) {
  const safeId = escapeRegExp(id);
  const re = new RegExp(`<section\\b(?=[^>]*\\bid=["']${safeId}["'])[^>]*>[\\s\\S]*?<\\/section>`, "i");
  return html.replace(re, "");
}

function removeStyleById(html, id) {
  const safeId = escapeRegExp(id);
  const re = new RegExp(`<style\\b(?=[^>]*\\bid=["']${safeId}["'])[^>]*>[\\s\\S]*?<\\/style>`, "i");
  return html.replace(re, "");
}

function removeInlineScriptContaining(html, needle) {
  return html.replace(/<script\b(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/gi, (script) => (
    script.includes(needle) ? "" : script
  ));
}

function removeLanguageSuggestion(html) {
  html = removeStyleById(html, "lo-language-suggest-style");
  html = html.replace(
    /<div\b(?=[^>]*\bid=["']loLangSuggest["'])[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*(?=<main\b)/i,
    "",
  );
  return removeInlineScriptContaining(html, "initLanguageSuggestion");
}

function removeSocialDistractions(html) {
  // These nodes are referenced by the homepage initializer. Make those calls safe
  // before removing the outbound social block from the paid-search response.
  html = html.replace(
    /\s*document\.getElementById\(["']follow["']\)\.textContent\s*=\s*t\.follow\s*;/,
    '\n      setText("follow", t.follow);',
  );
  html = html.replace(
    /\s*document\.getElementById\(["']followBody["']\)\.textContent\s*=\s*t\.followBody\s*;/,
    '\n      setText("followBody", t.followBody);',
  );
  html = html.replace(
    /\s*document\.getElementById\(["']socInstagram["']\)\.href\s*=\s*SOCIAL\.instagram\s*;\s*document\.getElementById\(["']socFacebook["']\)\.href\s*=\s*SOCIAL\.facebook\s*;\s*document\.getElementById\(["']socTiktok["']\)\.href\s*=\s*SOCIAL\.tiktok\s*;\s*document\.getElementById\(["']socYoutube["']\)\.href\s*=\s*SOCIAL\.youtube\s*;/,
    "",
  );
  return html.replace(
    /<div\s+style=["']margin-top:1\.2rem["']>\s*<div\b(?=[^>]*\bclass=["'][^"']*\bsocialRow\b)[^>]*>[\s\S]*?<\/div>\s*<p\b[^>]*>[\s\S]*?<\/p>\s*<\/div>/i,
    "",
  );
}

function promoteShowcaseHeading(html) {
  html = html.replace(
    /<h2\b([^>]*\bid=["']showcaseTitle["'][^>]*)>([\s\S]*?)<\/h2>/i,
    "<h1$1>$2</h1>",
  );
  return html.replace(
    /<h1\b([^>]*\bclass=["'][^"']*\bheroTitle\b[^"']*["'][^>]*)>([\s\S]*?)<\/h1>/i,
    "<h2$1>$2</h2>",
  );
}

function injectAdsConfig(html, route) {
  const defaultPickup = route.defaultPickup ? `window.LO_DEFAULT_PICKUP_LOCATION=${JSON.stringify(route.defaultPickup)};` : "";
  const pricingUrls = { de: "/preise", en: "/en/pricing", it: "/it/pricing" };
  const navRatesUrl = pricingUrls[route.lang] || "/preise";
  const configScript = `<script>window.LO_IS_ADS_LANDING=true;window.LO_ADS_INTENT=${JSON.stringify(route.mode)};window.LO_LANGUAGE_URLS=${JSON.stringify(route.languageUrls)};window.LO_HOME_URL=${JSON.stringify(route.home)};window.LO_NAV_RATES_URL=${JSON.stringify(navRatesUrl)};window.LO_NAV_REQUEST_URL="#request";window.LO_CTA_PRICING_URL="#pricing";${defaultPickup}${route.mode === "gift" ? 'window.LO_NAV_VOUCHER_URL="#request";' : ""}<\/script>`;
  return html.replace(/<script[^>]+src=["']\/assets\/lo\.js[^>]*><\/script>/i, `${configScript}$&`);
}

function patchRequestSummary(html, route) {
  const labels = {
    rental: "New Ferrari rental request",
    switzerland: "New Ferrari rental request – Switzerland",
    drive: "New Ferrari self-drive request",
    wedding: "New Ferrari wedding request",
    gift: "New Ferrari gift voucher request",
  };
  const label = route.mode === "city" && route.city
    ? `New Ferrari rental request – ${CITY_CONFIG[route.city].names.en}`
    : (labels[route.mode] || labels.rental);
  return html.replace('"New Ferrari rental request",', `${JSON.stringify(label)},`);
}

function setBrandHome(html, home) {
  return html.replace(
    /(<a\b[^>]*class=["'][^"']*\bbrand\b[^"']*["'][^>]*\bhref=)["'][^"']*["']/i,
    `$1"${home}"`,
  );
}

function replaceHeroPhoto(html, imagePath, alt, width, height) {
  const re = /(<div\s+class=["']heroMediaCard["'][^>]*>\s*)<picture\s+class=["']heroPhoto["'][^>]*>[\s\S]*?<\/picture>/i;
  const picture = `<picture class="heroPhoto">
<source sizes="(min-width: 1000px) 420px, 0px" srcset="${imagePath} ${width}w" type="image/webp"/>
<img alt="${escapeHtml(alt)}" decoding="async" fetchpriority="low" height="${height}" loading="lazy" src="${imagePath}" width="${width}"/>
</picture>`;
  return html.replace(re, (_m, prefix) => `${prefix}${picture}`);
}

function transformHtml(html, route, publicUrl) {
  const lang = route.lang;
  const copyByMode = {
    rental: COPY,
    switzerland: SWITZERLAND_COPY,
    drive: DRIVE_COPY,
    wedding: WEDDING_COPY,
    gift: GIFT_COPY,
  };
  const c = route.mode === "city"
    ? buildCityCopy(lang, CITY_CONFIG[route.city])
    : copyByMode[route.mode][lang];

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(c.title)}</title>`);
  html = setMetaContent(html, "name", "description", c.description);
  html = setMetaContent(html, "property", "og:title", c.title);
  html = setMetaContent(html, "property", "og:description", c.description);
  html = setMetaContent(html, "property", "og:url", publicUrl);
  html = setMetaContent(html, "name", "twitter:title", c.title);
  html = setMetaContent(html, "name", "twitter:description", c.description);
  html = setMetaContent(html, "name", "robots", "noindex, follow, max-image-preview:large");
  html = removeOrganicDiscoveryLinks(html);

  if (route.mode === "wedding") {
    html = setMetaContent(html, "property", "og:image", "https://luxuryobsession.ch/media/wedding-couple-with-ferrari.webp");
    html = setMetaContent(html, "name", "twitter:image", "https://luxuryobsession.ch/media/wedding-couple-with-ferrari.webp");
  } else if (route.mode === "gift") {
    html = setMetaContent(html, "property", "og:image", "https://luxuryobsession.ch/media/luxury-obsession-gutschein-900.webp");
    html = setMetaContent(html, "name", "twitter:image", "https://luxuryobsession.ch/media/luxury-obsession-gutschein-900.webp");
  }

  const textKeys = [
    "eyebrow", "showcaseEyebrow", "showcaseTitle", "showcaseMicro", "showcaseBody", "showcaseCta",
    "heroTitleA", "heroTitleB", "heroSubtitle", "pill0", "pill1", "pill2", "pill3", "pill4",
    "ctaRequest", "quoteOpen", "packagesTitle", "packagesSub", "packagesNote", "requestTitle",
    "requestSub", "formTitle", "notesHint", "date", "time", "pickupTitle", "pickupNote", "faqSub",
    ...Array.from({ length: 10 }, (_unused, index) => [`faqQ${index + 1}`, `faqA${index + 1}`]).flat(),
  ];
  for (const key of textKeys) {
    if (c[key] != null) html = replaceElementText(html, key, c[key]);
  }

  // Keep the full homepage implementation, but remove content that dilutes paid-search
  // intent. Organic SEO support remains available on the normal homepage.
  html = removeSectionById(html, "seoSupport");
  html = removeSectionById(html, "occasionLinks");
  html = removeStyleById(html, "lo-occasion-links-style");
  html = removeLanguageSuggestion(html);
  html = removeSocialDistractions(html);
  html = promoteShowcaseHeading(html);
  if (route.mode === "wedding") {
    html = replaceHeroPhoto(html, "/media/wedding-couple-with-ferrari.webp", c.heroImageAlt, 1086, 1448);
  } else if (route.mode === "gift") {
    html = replaceHeroPhoto(html, "/media/luxury-obsession-gutschein-900.webp", c.heroImageAlt, 900, 675);
  }

  // The homepage localizes itself again on DOMContentLoaded, so the dictionaries must
  // contain the Ads copy too; otherwise the browser would restore the normal copy.
  html = updateRuntimeCopy(html, lang, c);
  html = setBrandHome(html, route.home);
  html = injectAdsConfig(html, route);
  html = patchRequestSummary(html, route);
  return html;
}

export default async function adsLanding(request) {
  const path = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
  const route = ROUTES[path];
  if (!route) return;

  const sourceUrl = new URL(route.source, request.url);
  sourceUrl.search = "";
  sourceUrl.hash = "";

  const upstream = await fetch(sourceUrl, {
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": request.headers.get("user-agent") || "LuxuryObsession-AdsLanding",
    },
  });

  if (!upstream.ok) {
    return new Response("Landing page source unavailable", {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const contentType = upstream.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("text/html")) return upstream;

  const publicUrl = new URL(path, "https://luxuryobsession.ch").href;
  const html = transformHtml(await upstream.text(), route, publicUrl);
  const headers = new Headers(upstream.headers);
  headers.delete("content-length");
  headers.delete("content-encoding");
  headers.delete("etag");
  headers.delete("last-modified");
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("x-robots-tag", "noindex, follow");
  headers.set("x-lo-ads-landing", route.city ? `${route.lang}-${route.mode}-${route.city}` : `${route.lang}-${route.mode}`);
  // The transformed HTML is deterministic for a deployed version. Cache it at Netlify's
  // edge and ignore normal tracking parameters (gclid/utm_*) in the cache key. A deploy
  // automatically invalidates this cache.
  headers.set("netlify-cdn-cache-control", "public, max-age=3600, stale-while-revalidate=86400");
  headers.set("netlify-vary", "query=lo_variant");

  return new Response(html, { status: 200, headers });
}

export const config = {
  cache: "manual",
  path: Object.keys(ROUTES).flatMap((routePath) => [routePath, `${routePath}/`]),
};
