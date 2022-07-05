import { CampaignIslamCharityType } from '@generated/graphql';

/**
 * A subset of Campaign fields that is only used for listing in CampaignCard.
 */
export interface CampaignInfo {
  _id?: string | null;
  organizationId?: string | null;
  title?: string | null;
  coverImage?: string | null;
  description?: string | null;
  amountProgress?: string | null;
  amountTarget?: string | null;
  currencyCode?: string | null;
  // startTime?: string | null;
  endDate?: string | null;
  islamCharityType?: CampaignIslamCharityType | null;
  url?: string | null;
  createdAt?: string | null;
  isPublished?: string | null;
}

export interface Appearance {
  _id?: any | null | undefined;
  primaryColor?: string | null | undefined;
  secondaryColor?: string | null | undefined;
  logo?: string | null | undefined;
  themesColor?: string | null | undefined;
  usePallete?: boolean | null | undefined;
  headerAndFooter?: string | null | undefined;
  accent?: string | null | undefined;
  lButton?: string | null | undefined;
  ourStory?: string | null | undefined;
  whyShouldWe?: string | null | undefined;
  peopleSay?: string | null | undefined;
  mainImageUrl?: string | null | undefined;
  secondaryImage?: string | null | undefined;
  eventImagesUrl1?: string | null | undefined;
  eventImagesUrl2?: string | null | undefined;
  eventImagesUrl3?: string | null | undefined;
  detailStory1?: string | null | undefined;
  detailStory2?: string | null | undefined;
  detailStory3?: string | null | undefined;
  videoUrl?: string | null | undefined;
  whySupportUs1?: string | null | undefined;
  whySupportUs2?: string | null | undefined;
  whySupportUs3?: string | null | undefined;
  favIcon?: string | null | undefined;
}

export enum IslamCharityType {
  /**
   * Infaq is the Arabic word for "spending." It is a type of charity in Islam that is given without any expectation of reward or return.
   * Infaq shall include expiation, donation to the family or some foundation, and so on. Infaq is strongly encouraged, but not an obligation.
   */
  INFAQ = 'INFAQ',
  /**
   * Shadaqah a voluntary act that involves giving or donating to a person or charity. Shadaqah is not imposed by material things, hence it is subject to no specific rules or condition. We can give shadaqah to anyone, especially those in need.
   */
  SHADAQAH = 'SHADAQAH',
  /**
   * Waqf.
   */
  WAQF = 'WAQF',
  /**
   * Zakat is an Islamic finance term referring to the obligation that an individual has to donate a certain proportion of wealth each year to charitable causes.
   */
  ZAKAT = 'ZAKAT',
  /**
   * Kaffarah is the compensation that you should pay if you deliberately miss or break a fast in the month of Ramadan without a valid reason.
   */
  KAFFARAH = 'KAFFARAH',
}

/**
 * Method used by campaign.
 */
export enum CampaignMethod {
  /**
   * Food collection.
   */
  FOOD_COLLECTION = 'FOOD_COLLECTION',
  /**
   * Sharing.
   */
  SHARING = 'SHARING',
  /**
   * Money transfer.
   */
  MONEY_TRANSFER = 'MONEY_TRANSFER',
  /**
   * Quran project.
   */
  QURAN = 'QURAN',
  /**
   * Yateem/orphan.
   */
  ORPHAN = 'ORPHAN',
  /**
   * Da'wah is the act of inviting or calling people to embrace Islam.
   */
  DAWAH = 'DAWAH',
}
