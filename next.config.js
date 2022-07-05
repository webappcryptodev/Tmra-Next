const { i18n } = require('./next-i18next.config');

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  i18n,
  /**
   * Hendy's note: We use publicRuntimeConfig for preparation
   * of migrating all CMS/dashboard pages into @tmra/pwa
   * and not in Next.js. So they can be reused as
   * PWA, Android, and iOS apps through Capacitor.
   */
  publicRuntimeConfig: {
    bunny: {
      cdn: {
        urlMedia: process.env.NEXT_PUBLIC_BUNNY_CDN_URL_MEDIA,
      },
      storage: {
        prefix: process.env.NEXT_PUBLIC_BUNNY_STORAGE_PREFIX,
      },
    },
    tmra: {
      fund: {
        url: process.env.NEXT_PUBLIC_TMRA_FUND_URL,
      },
      raise: {
        url: process.env.NEXT_PUBLIC_TMRA_RAISE_URL,
      },
    },
    cookie: process.env.APP_COOKIE,
  },
  serverRuntimeConfig: {
    // Will be available on both server and client
    app: {
      env: process.env.APP_ENV,
    },
    tmra: {
      fund: {
        url: process.env.TMRA_FUND_URL,
      },
      raise: {
        url: process.env.TMRA_RAISE_URL,
      },
    },
    realm: {
      appId: process.env.REALM_APP_ID,
      graphqlUrl: process.env.REALM_GRAPHQL_URL,
    },
  },
});
