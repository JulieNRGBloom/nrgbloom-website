/* Lightbox for photo strips.
 *
 * Progressive enhancement: the strip works as plain images without this file.
 * Clicking a .photo-strip-item opens the full-size image, with keyboard
 * support and arrow navigation through the strip.
 *
 * Vanilla JS, no dependencies, per the repo's technical rules. Deliberately
 * uses no alert/confirm/prompt.
 *
 * Added 2026-08-06.
 */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(
    document.querySelectorAll('.photo-strip-item')
  );
  if (!items.length) return;

  var slides = items
    .map(function (item) {
      var img = item.querySelector('img');
      return img ? { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '' } : null;
    })
    .filter(Boolean);
  if (!slides.length) return;

  var index = 0;
  var lastFocused = null;

  // Build the overlay once, lazily on first open.
  var overlay, imgEl, captionEl, counterEl, closeBtn, prevBtn, nextBtn;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Site photograph');

    // Built with DOM methods rather than innerHTML. Nothing here is
    // interpolated, but explicit construction keeps it that way.
    function button(cls, label, glyph) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = cls;
      b.setAttribute('aria-label', label);
      b.textContent = glyph;
      return b;
    }

    closeBtn = button('lightbox-close', 'Close', '×');
    prevBtn = button('lightbox-nav lightbox-prev', 'Previous photograph', '‹');
    nextBtn = button('lightbox-nav lightbox-next', 'Next photograph', '›');

    var figure = document.createElement('figure');
    figure.className = 'lightbox-figure';
    imgEl = document.createElement('img');
    imgEl.alt = '';
    captionEl = document.createElement('figcaption');
    captionEl.className = 'lightbox-caption';
    figure.appendChild(imgEl);
    figure.appendChild(captionEl);

    counterEl = document.createElement('div');
    counterEl.className = 'lightbox-counter';
    counterEl.setAttribute('aria-hidden', 'true');

    overlay.appendChild(closeBtn);
    overlay.appendChild(prevBtn);
    overlay.appendChild(nextBtn);
    overlay.appendChild(figure);
    overlay.appendChild(counterEl);
    document.body.appendChild(overlay);

    // A click on the backdrop closes; a click on the image itself does not.
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function () { go(-1); });
    nextBtn.addEventListener('click', function () { go(1); });

    var single = slides.length < 2;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
    counterEl.hidden = single;
  }

  function render() {
    var s = slides[index];
    imgEl.setAttribute('src', s.src);
    imgEl.setAttribute('alt', s.alt);
    captionEl.textContent = s.alt;
    counterEl.textContent = index + 1 + ' / ' + slides.length;
  }

  function go(step) {
    index = (index + step + slides.length) % slides.length;
    render();
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'Tab') {
      // Keep focus inside the dialog.
      var focusables = Array.prototype.slice
        .call(overlay.querySelectorAll('button'))
        .filter(function (b) { return !b.hidden; });
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function open(i) {
    if (!overlay) build();
    index = i;
    lastFocused = document.activeElement;
    render();
    overlay.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    document.addEventListener('keydown', onKey);
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    document.removeEventListener('keydown', onKey);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  items.forEach(function (item, i) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    var img = item.querySelector('img');
    item.setAttribute('aria-label', 'Enlarge photograph: ' + ((img && img.alt) || 'site photograph'));

    item.addEventListener('click', function () { open(i); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(i);
      }
    });
  });
})();
