const LANGUAGE_URLS_BY_MODE = {
  rental: {
    de: "/ads/ferrari-mieten-zuerich",
    en: "/en/ads/ferrari-rental-zurich",
    it: "/it/ads/noleggio-ferrari-zurigo",
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
    title: "Ferrari mieten Zürich ab CHF 440 | Ferrari 458 Italia",
    description: "Ferrari 458 Italia in Zürich mieten ab CHF 440. Transparente Tarife, persönliche Übergabe und flexible Abholung in der Schweiz.",
    showcaseEyebrow: "Ferrari mieten Zürich",
    showcaseMicro: "Ab CHF 440 · 3 Stunden · unbegrenzte km",
    showcaseBody: "Ferrari 458 Italia in Zürich mieten – mit persönlicher Übergabe, transparenten Tarifen und flexiblen Abholoptionen in der Schweiz.",
    heroTitleA: "Ferrari 458 Italia mieten",
    heroTitleB: "in Zürich ab CHF 440",
    heroSubtitle: "Mieten Sie einen sorgfältig gepflegten Ferrari 458 Italia in Zürich ab CHF 440 für 3 Stunden. Persönliche Übergabe, klare Konditionen und flexible Abholoptionen in der Schweiz. Wählen Sie unten Ihren Tarif und senden Sie direkt Ihre Wunschtermin-Anfrage.",
    pill3: "Ab CHF 440",
    pill4: "Ab 21 Jahren",
    packagesTitle: "Ferrari mieten Zürich – Tarife ab CHF 440",
    packagesSub: "3 Stunden, Halbtag, Ganztag, Wochenende oder ganze Woche – mit klaren Kilometerpaketen und persönlicher Bestätigung.",
    requestTitle: "Ferrari 458 Italia in Zürich anfragen",
    requestSub: "Senden Sie Wunschdatum, Uhrzeit und Abholort. Wir bestätigen Verfügbarkeit, Preis und Details persönlich.",
  },
  en: {
    title: "Ferrari Rental Zurich from CHF 440 | Ferrari 458 Italia",
    description: "Rent a Ferrari 458 Italia in Zurich from CHF 440. Transparent rates, personal handover and flexible pickup options across Switzerland.",
    showcaseEyebrow: "Ferrari rental Zurich",
    showcaseMicro: "From CHF 440 · 3 hours · unlimited km",
    showcaseBody: "Rent a Ferrari 458 Italia in Zurich with personal handover, transparent rates and flexible pickup options across Switzerland.",
    heroTitleA: "Rent a Ferrari 458 Italia",
    heroTitleB: "in Zurich from CHF 440",
    heroSubtitle: "Rent a meticulously maintained Ferrari 458 Italia in Zurich from CHF 440 for 3 hours. Personal handover, clear terms and flexible pickup options across Switzerland. Choose your rate below and send your preferred-date request directly.",
    pill3: "From CHF 440",
    pill4: "From age 21",
    packagesTitle: "Ferrari rental Zurich – rates from CHF 440",
    packagesSub: "3 hours, half day, full day, weekend or full week – with clear kilometre packages and personal confirmation.",
    requestTitle: "Request your Ferrari 458 Italia in Zurich",
    requestSub: "Send your preferred date, time and pickup location. We confirm availability, price and details personally.",
  },
  it: {
    title: "Noleggio Ferrari Zurigo da CHF 440 | Ferrari 458 Italia",
    description: "Noleggia una Ferrari 458 Italia a Zurigo da CHF 440. Tariffe trasparenti, consegna personale e opzioni di ritiro flessibili in Svizzera.",
    showcaseEyebrow: "Noleggio Ferrari Zurigo",
    showcaseMicro: "Da CHF 440 · 3 ore · km illimitati",
    showcaseBody: "Noleggia una Ferrari 458 Italia a Zurigo con consegna personale, tariffe trasparenti e opzioni di ritiro flessibili in Svizzera.",
    heroTitleA: "Noleggia una Ferrari 458 Italia",
    heroTitleB: "a Zurigo da CHF 440",
    heroSubtitle: "Noleggia una Ferrari 458 Italia curata con grande attenzione a Zurigo da CHF 440 per 3 ore. Consegna personale, condizioni chiare e opzioni di ritiro flessibili in Svizzera. Scegli la tariffa e invia direttamente la tua richiesta.",
    pill3: "Da CHF 440",
    pill4: "Dai 21 anni",
    packagesTitle: "Noleggio Ferrari Zurigo – tariffe da CHF 440",
    packagesSub: "3 ore, mezza giornata, giornata intera, weekend o settimana – con chilometraggi chiari e conferma personale.",
    requestTitle: "Richiedi la Ferrari 458 Italia a Zurigo",
    requestSub: "Indicaci data, orario e luogo di ritiro preferiti. Confermiamo personalmente disponibilità, prezzo e dettagli.",
  },
};

const WEDDING_COPY = {
  de: {
    title: "Ferrari Hochzeit Zürich | Ferrari 458 Italia mieten",
    description: "Ferrari 458 Italia für Ihre Hochzeit in Zürich mieten. Für Ankunft, Brautpaar-Fotos und besondere Momente – mit persönlicher Planung und flexibler Übergabe.",
    eyebrow: "Hochzeit in Zürich",
    showcaseEyebrow: "Ferrari Hochzeit Zürich",
    showcaseMicro: "Ferrari 458 Italia · Hochzeit · persönliche Planung",
    showcaseBody: "Mieten Sie einen Ferrari 458 Italia für Ihre Hochzeit in Zürich – für Ankunft, Fotos mit dem Brautpaar und besondere Momente, persönlich und diskret geplant.",
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
    heroImageAlt: "Brautpaar mit rotem Ferrari 458 Italia als Hochzeitsauto in Zürich",
  },
  en: {
    title: "Ferrari Wedding Car Rental Zurich | Ferrari 458 Italia",
    description: "Rent a Ferrari 458 Italia for your wedding in Zurich. For the arrival, couple photos and special moments – with personal planning and flexible handover.",
    eyebrow: "Wedding in Zurich",
    showcaseEyebrow: "Ferrari wedding car Zurich",
    showcaseMicro: "Ferrari 458 Italia · wedding · personal planning",
    showcaseBody: "Rent a Ferrari 458 Italia for your wedding in Zurich – for the arrival, photos with the couple and special moments, planned personally and discreetly.",
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
    heroImageAlt: "Wedding couple with red Ferrari 458 Italia wedding car in Zurich",
  },
  it: {
    title: "Noleggio Ferrari Matrimonio Zurigo | Ferrari 458 Italia",
    description: "Noleggia una Ferrari 458 Italia per il tuo matrimonio a Zurigo. Per arrivo, foto degli sposi e momenti speciali – con pianificazione personale e consegna flessibile.",
    eyebrow: "Matrimonio a Zurigo",
    showcaseEyebrow: "Ferrari matrimonio Zurigo",
    showcaseMicro: "Ferrari 458 Italia · matrimonio · pianificazione personale",
    showcaseBody: "Noleggia una Ferrari 458 Italia per il tuo matrimonio a Zurigo – per l'arrivo, le foto degli sposi e momenti speciali, con una pianificazione personale e discreta.",
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
    heroImageAlt: "Coppia di sposi con Ferrari 458 Italia rossa per matrimonio a Zurigo",
  },
};

const GIFT_COPY = {
  de: {
    title: "Ferrari Gutschein & Geburtstagsgeschenk Zürich | 458 Italia",
    description: "Ferrari 458 Italia als Gutschein oder Geburtstagsgeschenk in Zürich. Pakete ab CHF 440, flexible Terminwahl, persönliche Planung und digitale Geschenkkarte inklusive.",
    eyebrow: "Geschenk in Zürich",
    showcaseEyebrow: "Ferrari Gutschein Zürich",
    showcaseMicro: "Ferrari 458 Italia · Gutschein · ab CHF 440",
    showcaseBody: "Verschenken Sie eine Fahrt im Ferrari 458 Italia – als Geburtstagsgeschenk oder Gutschein mit flexibler Terminwahl und persönlicher Planung.",
    showcaseCta: "Gutschein anfragen",
    heroTitleA: "Ferrari 458 Italia Gutschein",
    heroTitleB: "zum Geburtstag ab CHF 440",
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
    heroImageAlt: "Luxury Obsession Ferrari 458 Italia Gutschein als Geburtstagsgeschenk in Zürich",
  },
  en: {
    title: "Ferrari Birthday Gift & Voucher Zurich | 458 Italia",
    description: "Ferrari 458 Italia birthday gift or voucher in Zurich. Packages from CHF 440, flexible scheduling, personal planning and a digital gift card included.",
    eyebrow: "Gift in Zurich",
    showcaseEyebrow: "Ferrari gift voucher Zurich",
    showcaseMicro: "Ferrari 458 Italia · gift voucher · from CHF 440",
    showcaseBody: "Give the experience of driving a Ferrari 458 Italia – as a birthday gift or voucher with flexible scheduling and personal planning.",
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
    heroImageAlt: "Luxury Obsession Ferrari 458 Italia gift voucher for a birthday in Zurich",
  },
  it: {
    title: "Buono Regalo Ferrari & Compleanno Zurigo | 458 Italia",
    description: "Buono regalo Ferrari 458 Italia per compleanno a Zurigo. Pacchetti da CHF 440, data flessibile, pianificazione personale e gift card digitale inclusa.",
    eyebrow: "Regalo a Zurigo",
    showcaseEyebrow: "Buono regalo Ferrari Zurigo",
    showcaseMicro: "Ferrari 458 Italia · buono regalo · da CHF 440",
    showcaseBody: "Regala l'esperienza di guidare una Ferrari 458 Italia – per un compleanno o un'occasione speciale, con data flessibile e pianificazione personale.",
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
      showcaseEyebrow: `Ferrari mieten ${name}`,
      showcaseMicro: `Ab CHF 440 · Lieferung ${deliveryPhrase}: CHF ${fee}`,
      showcaseBody: `Ferrari 458 Italia ${locative} mieten – mit persönlicher Übergabe, transparenten Tarifen und Lieferung ${deliveryPhrase} für CHF ${fee}.`,
      showcaseCta: `Verfügbarkeit in ${name} anfragen`,
      heroTitleA: "Ferrari 458 Italia mieten",
      heroTitleB: locative,
      heroSubtitle: `Mieten Sie einen sorgfältig gepflegten Ferrari 458 Italia ${locative}. Die Lieferung ${deliveryPhrase} kostet CHF ${fee}. Die Tarife beginnen bei CHF 440; Übergabe, Konditionen und Termin werden persönlich bestätigt.`,
      pill0: "Ferrari 458 Italia",
      pill1: "Inhabergeführt",
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
      showcaseEyebrow: `Noleggio Ferrari ${name}`,
      showcaseMicro: `Da CHF 440 · Consegna ${deliveryPhrase}: CHF ${fee}`,
      showcaseBody: `Noleggia una Ferrari 458 Italia ${locative}, con tariffe trasparenti, assistenza personale e consegna ${deliveryPhrase} per CHF ${fee}.`,
      showcaseCta: `Richiedi disponibilità ${locative}`,
      heroTitleA: "Noleggia una Ferrari 458 Italia",
      heroTitleB: locative,
      heroSubtitle: `Noleggia una Ferrari 458 Italia curata con grande attenzione ${locative}. La consegna ${deliveryPhrase} costa CHF ${fee}. Le tariffe partono da CHF 440; confermiamo personalmente disponibilità, condizioni e dettagli della consegna.`,
      pill0: "Ferrari 458 Italia",
      pill1: "Gestione personale",
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
    showcaseEyebrow: `Ferrari rental ${name}`,
    showcaseMicro: `From CHF 440 · Delivery ${deliveryPhrase}: CHF ${fee}`,
    showcaseBody: `Rent a Ferrari 458 Italia ${locative}, with transparent rates, personal handover and delivery ${deliveryPhrase} for CHF ${fee}.`,
    showcaseCta: `Request availability in ${name}`,
    heroTitleA: "Rent a Ferrari 458 Italia",
    heroTitleB: locative,
    heroSubtitle: `Rent a meticulously maintained Ferrari 458 Italia ${locative}. Delivery ${deliveryPhrase} costs CHF ${fee}. Rates start from CHF 440; availability, terms and handover details are confirmed personally.`,
    pill0: "Ferrari 458 Italia",
    pill1: "Owner operated",
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
      showcaseBody: copy.showcaseBody,
    };
    for (const key of ["eyebrow", "pill0", "pill1", "pill2", "pill3", "pill4", "showcaseCta", "ctaRequest", "quoteOpen", "formTitle", "notesHint", "date", "time", "packagesNote", "pickupTitle", "pickupNote", "faqSub"]) {
      if (copy[key] != null) updates[key] = copy[key];
    }
    Object.assign(obj[lang], updates);
    if (copy.faqQ7 != null && copy.faqA7 != null && Array.isArray(obj[lang].faqs) && obj[lang].faqs[6]) {
      obj[lang].faqs[6] = { q: copy.faqQ7, a: copy.faqA7 };
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

function injectAdsConfig(html, route) {
  const defaultPickup = route.defaultPickup ? `window.LO_DEFAULT_PICKUP_LOCATION=${JSON.stringify(route.defaultPickup)};` : "";
  const configScript = `<script>window.LO_LANGUAGE_URLS=${JSON.stringify(route.languageUrls)};window.LO_HOME_URL=${JSON.stringify(route.home)};window.LO_NAV_RATES_URL="#pricing";window.LO_NAV_REQUEST_URL="#request";window.LO_CTA_PRICING_URL="#pricing";${defaultPickup}${route.mode === "gift" ? 'window.LO_NAV_VOUCHER_URL="#request";' : ""}<\/script>`;
  return html.replace(/<script[^>]+src=["']\/assets\/lo\.js[^>]*><\/script>/i, `${configScript}$&`);
}

function patchRequestSummary(html, route) {
  const labels = {
    rental: "New Ferrari rental request",
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
  const c = route.mode === "city"
    ? buildCityCopy(lang, CITY_CONFIG[route.city])
    : route.mode === "wedding"
      ? WEDDING_COPY[lang]
      : route.mode === "gift"
        ? GIFT_COPY[lang]
        : COPY[lang];

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(c.title)}</title>`);
  html = setMetaContent(html, "name", "description", c.description);
  html = setMetaContent(html, "property", "og:title", c.title);
  html = setMetaContent(html, "property", "og:description", c.description);
  html = setMetaContent(html, "property", "og:url", publicUrl);
  html = setMetaContent(html, "name", "robots", "noindex, follow, max-image-preview:large");
  html = removeOrganicDiscoveryLinks(html);

  if (route.mode === "wedding") {
    html = setMetaContent(html, "property", "og:image", "https://luxuryobsession.ch/media/wedding-couple-with-ferrari.webp");
    html = setMetaContent(html, "name", "twitter:image", "https://luxuryobsession.ch/media/wedding-couple-with-ferrari.webp");
  } else if (route.mode === "gift") {
    html = setMetaContent(html, "property", "og:image", "https://luxuryobsession.ch/media/luxury-obsession-gutschein-900.webp");
    html = setMetaContent(html, "name", "twitter:image", "https://luxuryobsession.ch/media/luxury-obsession-gutschein-900.webp");
  }

  for (const key of ["eyebrow", "showcaseEyebrow", "showcaseMicro", "showcaseBody", "showcaseCta", "heroTitleA", "heroTitleB", "heroSubtitle", "pill0", "pill1", "pill2", "pill3", "pill4", "ctaRequest", "quoteOpen", "packagesTitle", "packagesSub", "packagesNote", "requestTitle", "requestSub", "formTitle", "pickupTitle", "pickupNote", "faqSub", "faqQ7", "faqA7"]) {
    if (c[key] != null) html = replaceElementText(html, key, c[key]);
  }

  // Keep the full homepage implementation, but remove content that dilutes paid-search
  // intent. Organic SEO support remains available on the normal homepage.
  html = removeSectionById(html, "seoSupport");
  if (route.mode === "wedding") {
    html = removeSectionById(html, "occasionLinks");
    html = replaceHeroPhoto(html, "/media/wedding-couple-with-ferrari.webp", c.heroImageAlt, 1086, 1448);
  } else if (route.mode === "gift") {
    html = removeSectionById(html, "occasionLinks");
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
