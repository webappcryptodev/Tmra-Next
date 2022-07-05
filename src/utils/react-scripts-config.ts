export default function getConfig() {
  return {
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
    serverRuntimeConfig: null,
  };
}
