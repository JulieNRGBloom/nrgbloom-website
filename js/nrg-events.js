// /js/nrg-events.js : lead and CTA events. Sends nothing unless gtag or a dataLayer consumer is installed.
(function () {
  window.dataLayer = window.dataLayer || [];
  function send(name, params) {
    params = params || {};
    params.page_path = location.pathname;
    if (typeof window.gtag === "function") {
      params.transport_type = "beacon";
      window.gtag("event", name, params);
    } else {
      params.event = name;
      window.dataLayer.push(params);
    }
  }
  var FORMS = ["partnership", "investor-pack", "contact"];
  document.addEventListener("submit", function (e) {
    var f = e.target;
    var n = f && f.getAttribute && f.getAttribute("name");
    if (FORMS.indexOf(n) !== -1) send("generate_lead", { form_name: n });
  }, true);
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var text = (a.textContent || "").trim().slice(0, 80);
    if (href.indexOf("mailto:") === 0) send("contact_click", { link_url: href, link_text: text });
    else if (/\/(energy-partners|discuss-partnership)(\.html)?([#?]|$)/.test(href)) send("cta_click", { link_url: href, link_text: text });
  }, true);
})();
