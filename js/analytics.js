/* Conta Google Ads já utilizada no site atual. Preview local não gera eventos. */
(function () {
  'use strict';
  if (!['estelareletrica.com', 'www.estelareletrica.com'].includes(window.location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'AW-18392029352');
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18392029352';
  document.head.appendChild(script);
})();
