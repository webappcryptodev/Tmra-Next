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
      enabled: true,
    },
    facebook: {
      enabled: true,
    },
    twitter: {
      enabled: true,
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  org: {
    dashboard: {
      searchbar: {
        enabled: true,
      },
      insights: {
        enabled: true,
      },
      donations: {
        enabled: false,
      },
      messages: {
        enabled: false,
      },
      donors: {
        enabled: true,
      },
      notifications: {
        enabled: true,
      },
      settings: {
        enabled: true,
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
      enabled: true,
    },
  },
  /**
   * @deprecated Please use serverRuntimeConfig and MongoDB
   */
  admin: {
    dashboard: {
      enabled: true,
      user: {
        enabled: false,
      },
      notifications: {
        enabled: true,
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
        enabled: true,
      },
      customers: {
        enabled: true,
      },
      about: {
        enabled: true,
      },
      contact: {
        enabled: true,
      },
      demoBooking: {
        enabled: true,
      },
      whyUs: {
        enabled: true,
      },
      faq: {
        enabled: true,
      },
      news: {
        enabled: true,
      },
      blog: {
        enabled: true,
      },
      help: {
        enabled: true,
      },
      notifications: {
        enabled: true,
      },
    },
    campaignDetail: {
      story: {
        enabled: true,
      },
      headerLayout: {
        enabled: true,
      },
    },
    checkoutQuickDonate: {
      enabled: true,
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
      enabled: true,
    },
  },
};

export default config;
