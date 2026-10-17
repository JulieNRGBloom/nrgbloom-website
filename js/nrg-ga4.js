// /js/nrg-ga4.js : loads Google Analytics 4 only after the visitor accepts cookies.
// Nothing is requested from Google until consent exists. Once gtag is defined,
// /js/nrg-events.js routes generate_lead, contact_click and cta_click to GA4
// instead of parking them on window.dataLayer.
(function () {
  var MEASUREMENT_ID = "G-T54EQRG4B0";
  var loaded = false;

  function loadGA4() {
    if (loaded) return;
    loaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(s);
  }

  function hasConsent() {
    try {
      return localStorage.getItem("cookieConsent") === "true";
    } catch (e) {
      return false;
    }
  }

  // Returning visitor who already accepted.
  if (hasConsent()) {
    loadGA4();
    return;
  }

  // First visit: wait for the Accept button in the existing banner. The button's
  // own inline handler writes cookieConsent first, so by the time this bubbles
  // up the consent is already recorded.
  document.addEventListener(
    "click",
    function (e) {
      if (!e.target || !e.target.closest) return;
      if (e.target.closest("#cookie-consent button")) loadGA4();
    },
    false
  );
})();
