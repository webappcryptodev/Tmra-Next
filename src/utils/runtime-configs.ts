export default interface RuntimeConfigs {
  publicRuntimeConfig: {
    bunny: {
      cdn: {
        /**
         * Bunny CDN URL for media
         */
        urlMedia: string;
      };
      storage: {
        prefix: string;
      };
    };
    tmra: {
      fund: {
        /**
         * Tmra Fund API URL
         */
        url: string;
      };
      raise: {
        /**
         * Tmra Raise API URL
         */
        url: string;
      };
    };
    cookie: string;
  };
  serverRuntimeConfig: {
    mongodb: {
      url: string;
    };
    tmra: {
      fund: {
        url: string;
      };
      raise: {
        url: string;
      };
    };
  };
}
