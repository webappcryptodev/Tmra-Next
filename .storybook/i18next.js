import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: 'en-US',
    supportedLngs: ['en-US', 'ar-SA', 'id-ID'],
    fallbackLng: 'en-US',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // backend: {
    //   // Note: this is already default
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },

    ns: [
      'core',
      'about-contact',
      'app',
      'component',
      'globalHeader',
      'landing',
      'menu',
      'orgs',
      'pages',
      'pwa',
      'settingDrawer',
      'settings',
      'zakat',
      'core',
      'gift',
      'fundraising',
      'campaignDetail',
      'whitelabel',
    ],
    defaultNS: 'core',
    fallbackNS: [
      'about-contact',
      'app',
      'component',
      'globalHeader',
      'landing',
      'menu',
      'orgs',
      'pages',
      'pwa',
      'settingDrawer',
      'settings',
      'zakat',
      'core',
      'gift',
      'fundraising',
      'campaignDetail',
      'whitelabel',
    ],
  });

// Error: Cannot parse JSON
// supportedLngs.forEach(lang => {
//   ns.forEach(ns => {
//     i18n.addResourceBundle(lang, ns, require(`../public/locales/${lang}/${ns}.json`));
//   });
// });

export default i18n;
