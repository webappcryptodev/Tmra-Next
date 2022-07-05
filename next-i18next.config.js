// const NextI18Next = require("next-i18next").default;
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require('path');

// module.exports = new NextI18Next({
//   otherLanguages: ["en-US", "ar-SA", "id-ID"],
//   defaultLanguage: "en-US",
//   localeSubpaths,
// });

module.exports = {
  i18n: {
    locales: ['en-US', 'ar-SA', 'id-ID'],
    defaultLocale: 'en-US',
    // Hendy's note: Arabic is not fully ready, so ensure we don't redirect automatically to Arabic
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: true,
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
};
