export const config = {
  /**
   * @deprecated Please use serverRuntimeConfig
   */
  fusionauth: {
    url: 'https://login.lovia.life',
    tenantId: '731425cc-2184-4b75-a895-e075cdef99ec',
    clientKey: 'yp5RUAoaMb22hRXMzOt2qwYUuovfzH3lEYtWXD8fWQMnDraVsuxBjupQ',
    appId: 'b5ee66f1-cc1c-4185-97a9-e562ce8e98f6',
  },
  /**
   * @deprecated Please use serverRuntimeConfig
   */
  realm: {
    appId: 'tamrah-staging-pohrg',
    graphqlUrl:
      'https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/tamrah-staging-pohrg/graphql',
  },
  /**
   * @deprecated Please use serverRuntimeConfig
   */
  mongodb: {
    /**
     * @deprecated Please use GraphQL instead of direct database access!
     */
    database: 'tamrah_staging',
  },
  /**
   * Default organization is by default null, which means Tmra home page will be served.
   * For development purposes, you can set it so that organization will become the homepage of tmra-next,
   * which is useful to test whitelabel functionality without configuring domain and CNAME record.
   * @deprecated Please use serverRuntimeConfig
   */
  defaultOrganization: {
    /**
     * Tmra - null
     * Dunia Anak Alam Foundation - 60f524626f471e54c18e39b9
     * Ommar (Iqam Global) - 61b4794cfe52d41f557f1acc
     * Giving Sadaqah - 62414373cf00cca3a830814a
     */
    //  name: 'Dunia Anak Alam Foundation',
    //  organizationId: '60f524626f471e54c18e39b9',
    name: 'Tmra',
    organizationId: null,
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  auth: {
    google: {
      enabled: false,
    },
    facebook: {
      enabled: false,
    },
    twitter: {
      enabled: false,
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  org: {
    dashboard: {
      searchbar: {
        enabled: false,
      },
      insights: {
        enabled: false,
      },
      donations: {
        enabled: false,
      },
      messages: {
        enabled: false,
      },
      donors: {
        enabled: false,
      },
      notifications: {
        enabled: false,
      },
      settings: {
        enabled: false,
      },
      users: {
        enabled: false,
      },
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  zakat: {
    checkout: {
      enabled: false,
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  admin: {
    dashboard: {
      enabled: false,
      user: {
        enabled: false,
      },
      notifications: {
        enabled: false,
      },
      settings: {
        enabled: true,
      },
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  main: {
    landing: {
      pricing: {
        enabled: false,
      },
      customers: {
        enabled: true,
      },
      about: {
        enabled: false,
      },
      contact: {
        enabled: true,
      },
      demoBooking: {
        enabled: false,
      },
      whyUs: {
        enabled: false,
      },
      faq: {
        enabled: false,
      },
      news: {
        enabled: false,
      },
      blog: {
        enabled: false,
      },
      help: {
        enabled: false,
      },
      notifications: {
        enabled: false,
      },
    },
    campaignDetail: {
      story: {
        enabled: true,
      },
      headerLayout: {
        enabled: false,
      },
    },
    checkoutQuickDonate: {
      enabled: false,
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  fundraising: {
    campaign: {
      multipleCheckout: true,
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  whitelabel: {
    landing: {
      enabled: false,
    },
  },
};

export default config;
