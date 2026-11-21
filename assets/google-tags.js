/* AmanCam GA4 + Google Tag Manager bootstrap. */
(function (w, d) {
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function () { w.dataLayer.push(arguments); };
  w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  w.gtag('js', new Date());
  w.gtag('config', 'G-ZG2K1HT9MK');

  var first = d.getElementsByTagName('script')[0];
  var gtm = d.createElement('script');
  gtm.async = true;
  gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WJDNK2F5';
  first.parentNode.insertBefore(gtm, first);

  var ga = d.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZG2K1HT9MK';
  first.parentNode.insertBefore(ga, first);
})(window, document);
