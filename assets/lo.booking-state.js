/* Booking fragments and saved legacy links share the same initialized form. */
(() => {
  'use strict';
  if (window.LOBookingState) return;

  const occasions = [
    {values: ['hochzeit', 'wedding', 'matrimonio'], labels: {de: 'Hochzeit', en: 'Wedding', it: 'Matrimonio'}},
    {values: ['geburtstag', 'birthday', 'compleanno'], labels: {de: 'Geburtstag', en: 'Birthday', it: 'Compleanno'}},
    {values: ['passfahrt', 'mountain-drive', 'passo-alpino'], labels: {de: 'Passfahrt', en: 'Mountain drive', it: 'Passo alpino'}},
    {values: ['firmenanlass', 'corporate-event', 'evento-aziendale'], labels: {de: 'Firmenanlass', en: 'Corporate event', it: 'Evento aziendale'}},
    {values: ['fotoshooting', 'photoshoot'], labels: {de: 'Fotoshooting', en: 'Photoshoot', it: 'Servizio fotografico'}},
    {values: ['gutschein', 'gift-voucher', 'buono-regalo'], labels: {de: 'Gutschein', en: 'Gift voucher', it: 'Buono regalo'}}
  ];
  const initialized = new WeakSet();
  const decode = value => {
    try { return decodeURIComponent(value || ''); } catch (_) { return ''; }
  };
  const fragmentState = hash => {
    const value = hash.replace(/^#/, '');
    const packageMatch = /^request-([^/]+)(?:\/experience-(.+))?$/.exec(value);
    if (packageMatch) return {package: decode(packageMatch[1]), experience: decode(packageMatch[2])};
    const occasionMatch = /^experience-(.+)$/.exec(value);
    return occasionMatch ? {experience: decode(occasionMatch[1])} : {};
  };
  const format = state => state.package
    ? '#request-' + encodeURIComponent(state.package) + (state.experience ? '/experience-' + encodeURIComponent(state.experience) : '')
    : '#experience-' + encodeURIComponent(state.experience);

  function init({lang} = {}) {
    const form = document.getElementById('quoteForm');
    const packageSelect = document.getElementById('packageId');
    const notes = document.getElementById('notes');
    if (!form || !packageSelect || !notes || initialized.has(form)) return;
    initialized.add(form);
    const language = ['de', 'en', 'it'].includes(lang) ? lang : 'en';
    let previousOccasionLine = '';
    let lastApplied = '';
    let scrollFrame = 0;

    function apply() {
      const url = new URL(window.location.href);
      const fragment = fragmentState(url.hash);
      const packageExists = value => value && Array.from(packageSelect.options).some(option => option.value === value);
      const occasionFor = value => occasions.find(occasion => occasion.values.includes(value));
      const oldPackage = url.searchParams.get('package');
      const oldExperience = url.searchParams.get('experience');
      const selectedPackage = packageExists(fragment.package) ? fragment.package : (packageExists(oldPackage) ? oldPackage : '');
      const experience = occasionFor(fragment.experience) ? fragment.experience : (occasionFor(oldExperience) ? oldExperience : '');
      if (!selectedPackage && !experience) {
        if (scrollFrame) cancelAnimationFrame(scrollFrame);
        scrollFrame = 0;
        lastApplied = '';
        return;
      }
      const state = {package: selectedPackage, experience};
      const key = JSON.stringify(state);

      // Remove only understood booking parameters; retain language and attribution.
      if (packageExists(oldPackage) || occasionFor(oldExperience)) {
        if (packageExists(oldPackage)) url.searchParams.delete('package');
        if (occasionFor(oldExperience)) url.searchParams.delete('experience');
        url.hash = format(state);
        try { window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash); } catch (_) {}
      }
      if (key === lastApplied) return;
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      lastApplied = key;

      if (selectedPackage) {
        packageSelect.value = selectedPackage;
        packageSelect.dispatchEvent(new Event('input', {bubbles: true}));
        packageSelect.dispatchEvent(new Event('change', {bubbles: true}));
      }
      if (experience) {
        const prefix = {de: 'Anlass', en: 'Occasion', it: 'Occasione'}[language];
        const line = prefix + ': ' + occasionFor(experience).labels[language];
        let existing = notes.value;
        // Replace only our untouched first line; never discard user-entered notes.
        if (previousOccasionLine && existing === previousOccasionLine) existing = '';
        else if (previousOccasionLine && existing.startsWith(previousOccasionLine + '\n\n')) existing = existing.slice(previousOccasionLine.length + 2);
        if (existing !== line && !existing.startsWith(line + '\n\n')) notes.value = line + (existing ? '\n\n' + existing : '');
        previousOccasionLine = line;
        notes.dispatchEvent(new Event('input', {bubbles: true}));
        notes.dispatchEvent(new Event('change', {bubbles: true}));
      }

      // One post-layout scroll after localized options and existing listeners exist.
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const target = document.getElementById('request') || form;
        const header = document.querySelector('header');
        const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - (header ? header.getBoundingClientRect().height : 0) - 16);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({top, behavior: reduced ? 'instant' : 'smooth'});
        (selectedPackage ? packageSelect : notes).focus({preventScroll: true});
      });
    }

    window.addEventListener('hashchange', apply);
    apply();
  }
  window.LOBookingState = {init};
})();
