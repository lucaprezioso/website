/* Expand one review in the carousel; the rest of the page remains fully usable. */
(() => {
  'use strict';
  let active = null;
  let pressedInsideActive = false;
  const isMobile = () => window.matchMedia('(max-width: 600px)').matches;

  document.querySelectorAll('.loReviewCard').forEach(card => {
    const grid = card.closest('.loReviewsGrid');
    const text = card.querySelector('.loReviewText');
    const isEndCard = card === grid.firstElementChild || card === grid.lastElementChild;
    const expand = card.querySelector('.loReviewExpand');
    const toggle = card.querySelector('.loReviewLanguage');
    const original = card.querySelector('.loReviewOriginal').content;
    const translated = text.textContent;
    let showingOriginal = false;
    let expanded = false;

    const measure = () => {
      expand.hidden = !expanded && text.scrollHeight <= text.clientHeight + 1;
    };
    const updateCenteringSpace = () => {
      if (!expanded) return;
      if (!isMobile()) {
        grid.style.removeProperty('--loReviewEdgeSpace');
        return;
      }
      const styles = getComputedStyle(grid);
      const available = grid.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      const width = card.getBoundingClientRect().width;
      const gap = parseFloat(styles.columnGap) || 0;
      // Keep the existing mobile centering space; desktop never adds end space.
      grid.style.setProperty('--loReviewEdgeSpace', Math.max(0, (available - width) / 2 - gap) + 'px');
    };
    const render = () => {
      if (showingOriginal) text.replaceChildren(original.cloneNode(true));
      else text.textContent = translated;
      text.lang = showingOriginal ? card.dataset.originalLang : card.dataset.pageLang;
      expand.textContent = expanded ? expand.dataset.less : expand.dataset.more;
      expand.setAttribute('aria-expanded', String(expanded));
      if (toggle) {
        toggle.textContent = showingOriginal ? toggle.dataset.translate : toggle.dataset.original;
        toggle.setAttribute('aria-pressed', String(showingOriginal));
      }
      measure();
    };
    const collapse = ({returnFocus = false} = {}) => {
      if (!expanded) return;
      const oldCenter = card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2;
      expanded = false;
      card.classList.remove('is-expanded');
      grid.classList.remove('has-expanded');
      grid.style.removeProperty('--loReviewEdgeSpace');
      text.removeAttribute('tabindex');
      text.scrollTop = 0;
      if (active && active.card === card) active = null;
      render();
      const box = card.getBoundingClientRect();
      grid.scrollLeft += box.left + box.width / 2 - oldCenter;
      if (returnFocus) (expand.hidden ? (toggle || card.querySelector('.loReviewSource')) : expand).focus({preventScroll: true});
    };
    expand.addEventListener('click', () => {
      if (expanded) {
        collapse({returnFocus: true});
        return;
      }
      if (active) active.collapse();
      expanded = true;
      active = {card, collapse};
      card.classList.add('is-expanded');
      grid.classList.add('has-expanded');
      updateCenteringSpace();
      text.setAttribute('tabindex', '0');
      text.scrollTop = 0;
      render();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const alignment = !isMobile() && isEndCard ? 'nearest' : 'center';
      card.scrollIntoView({behavior: reduceMotion ? 'instant' : 'smooth', block: alignment, inline: alignment});
      text.focus({preventScroll: true});
    });
    if (toggle) {
      toggle.hidden = false;
      toggle.addEventListener('click', () => {
        showingOriginal = !showingOriginal;
        render();
        text.scrollTop = 0;
      });
    }
    card.classList.add('is-enhanced');
    render();
    if ('ResizeObserver' in window) {
      new ResizeObserver(measure).observe(text);
      new ResizeObserver(updateCenteringSpace).observe(grid);
    } else {
      window.addEventListener('resize', () => { updateCenteringSpace(); measure(); });
    }
    if (document.fonts) document.fonts.ready.then(() => { updateCenteringSpace(); measure(); });
  });

  document.addEventListener('pointerdown', event => {
    pressedInsideActive = !!active && active.card.contains(event.target);
  });
  document.addEventListener('click', event => {
    if (active && !active.card.contains(event.target) && !pressedInsideActive) active.collapse();
    pressedInsideActive = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || event.defaultPrevented || !active) return;
    const returnFocus = active.card.contains(document.activeElement);
    active.collapse({returnFocus});
  });
})();
