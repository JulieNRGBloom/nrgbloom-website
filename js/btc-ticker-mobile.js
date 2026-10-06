/* Keep the BTC ticker visible on mobile.
 *
 * The ticker markup (#btcPrice) is authored inside the collapsible nav menu.
 * Webflow hides that menu below 992px via:
 *   .w-nav[data-collapse='medium'] .w-nav-menu { display: none; }
 * so on every phone and on tablets in portrait the price was only reachable
 * by opening the hamburger. The value itself always loaded correctly; it was
 * simply never rendered.
 *
 * Below the breakpoint we move the ticker out of the menu and into the navbar
 * container, where CSS (.btc-price-mobile in redesign.css) pins it beside the
 * hamburger. Above the breakpoint it is returned to its authored position, so
 * desktop layout is untouched.
 *
 * If this script fails to load, behaviour falls back to the previous state
 * (ticker inside the menu) rather than a broken navbar.
 */
(function () {
  'use strict';

  var MOBILE_QUERY = '(max-width: 991px)';

  function init() {
    var ticker = document.getElementById('btcPrice');
    if (!ticker) return;

    var bar = document.querySelector('.container.cc-navbar');
    if (!bar) return;

    var button = bar.querySelector('.w-nav-button');
    if (!button) return;

    // Remember where the markup was authored so desktop can be restored.
    var home = document.createComment('btc-ticker-home');
    ticker.parentNode.insertBefore(home, ticker);

    var mq = window.matchMedia(MOBILE_QUERY);

    function place() {
      if (mq.matches) {
        if (ticker.parentNode !== bar) {
          bar.insertBefore(ticker, button);
          ticker.classList.add('btc-price-mobile');
        }
      } else if (ticker.parentNode === bar) {
        home.parentNode.insertBefore(ticker, home);
        ticker.classList.remove('btc-price-mobile');
      }
    }

    place();

    if (mq.addEventListener) {
      mq.addEventListener('change', place);
    } else if (mq.addListener) {
      mq.addListener(place);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
