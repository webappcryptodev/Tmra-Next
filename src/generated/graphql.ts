import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  ObjectId: any;
};

export type Affiliation = {
  __typename?: 'Affiliation';
  _id?: Maybe<Scalars['ObjectId']>;
  campaignId?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  ownerRealmId?: Maybe<Scalars['ObjectId']>;
  point?: Maybe<Scalars['String']>;
  referralURL?: Maybe<Scalars['String']>;
  visitorDonation?: Maybe<Scalars['String']>;
  visitorVisit?: Maybe<Scalars['String']>;
};

export type AffiliationInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<Scalars['String']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  point?: InputMaybe<Scalars['String']>;
  referralURL?: InputMaybe<Scalars['String']>;
  visitorDonation?: InputMaybe<Scalars['String']>;
  visitorVisit?: InputMaybe<Scalars['String']>;
};

export type AffiliationQueryInput = {
  AND?: InputMaybe<Array<AffiliationQueryInput>>;
  OR?: InputMaybe<Array<AffiliationQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_gte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId_lt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_lte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_ne?: InputMaybe<Scalars['ObjectId']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_ne?: InputMaybe<Scalars['DateTime']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  point?: InputMaybe<Scalars['String']>;
  point_exists?: InputMaybe<Scalars['Boolean']>;
  point_gt?: InputMaybe<Scalars['String']>;
  point_gte?: InputMaybe<Scalars['String']>;
  point_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  point_lt?: InputMaybe<Scalars['String']>;
  point_lte?: InputMaybe<Scalars['String']>;
  point_ne?: InputMaybe<Scalars['String']>;
  point_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  referralURL?: InputMaybe<Scalars['String']>;
  referralURL_exists?: InputMaybe<Scalars['Boolean']>;
  referralURL_gt?: InputMaybe<Scalars['String']>;
  referralURL_gte?: InputMaybe<Scalars['String']>;
  referralURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  referralURL_lt?: InputMaybe<Scalars['String']>;
  referralURL_lte?: InputMaybe<Scalars['String']>;
  referralURL_ne?: InputMaybe<Scalars['String']>;
  referralURL_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visitorDonation?: InputMaybe<Scalars['String']>;
  visitorDonation_exists?: InputMaybe<Scalars['Boolean']>;
  visitorDonation_gt?: InputMaybe<Scalars['String']>;
  visitorDonation_gte?: InputMaybe<Scalars['String']>;
  visitorDonation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visitorDonation_lt?: InputMaybe<Scalars['String']>;
  visitorDonation_lte?: InputMaybe<Scalars['String']>;
  visitorDonation_ne?: InputMaybe<Scalars['String']>;
  visitorDonation_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visitorVisit?: InputMaybe<Scalars['String']>;
  visitorVisit_exists?: InputMaybe<Scalars['Boolean']>;
  visitorVisit_gt?: InputMaybe<Scalars['String']>;
  visitorVisit_gte?: InputMaybe<Scalars['String']>;
  visitorVisit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visitorVisit_lt?: InputMaybe<Scalars['String']>;
  visitorVisit_lte?: InputMaybe<Scalars['String']>;
  visitorVisit_ne?: InputMaybe<Scalars['String']>;
  visitorVisit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum AffiliationSortByInput {
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  OwnerrealmidAsc = 'OWNERREALMID_ASC',
  OwnerrealmidDesc = 'OWNERREALMID_DESC',
  PointAsc = 'POINT_ASC',
  PointDesc = 'POINT_DESC',
  ReferralurlAsc = 'REFERRALURL_ASC',
  ReferralurlDesc = 'REFERRALURL_DESC',
  VisitordonationAsc = 'VISITORDONATION_ASC',
  VisitordonationDesc = 'VISITORDONATION_DESC',
  VisitorvisitAsc = 'VISITORVISIT_ASC',
  VisitorvisitDesc = 'VISITORVISIT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type AffiliationUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  point?: InputMaybe<Scalars['String']>;
  point_unset?: InputMaybe<Scalars['Boolean']>;
  referralURL?: InputMaybe<Scalars['String']>;
  referralURL_unset?: InputMaybe<Scalars['Boolean']>;
  visitorDonation?: InputMaybe<Scalars['String']>;
  visitorDonation_unset?: InputMaybe<Scalars['Boolean']>;
  visitorVisit?: InputMaybe<Scalars['String']>;
  visitorVisit_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Article = {
  __typename?: 'Article';
  _id?: Maybe<Scalars['ObjectId']>;
  articleId?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ArticleInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  articleId?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['String']>;
  operatorId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ArticleQueryInput = {
  AND?: InputMaybe<Array<ArticleQueryInput>>;
  OR?: InputMaybe<Array<ArticleQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  articleId?: InputMaybe<Scalars['String']>;
  articleId_exists?: InputMaybe<Scalars['Boolean']>;
  articleId_gt?: InputMaybe<Scalars['String']>;
  articleId_gte?: InputMaybe<Scalars['String']>;
  articleId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  articleId_lt?: InputMaybe<Scalars['String']>;
  articleId_lte?: InputMaybe<Scalars['String']>;
  articleId_ne?: InputMaybe<Scalars['String']>;
  articleId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_ne?: InputMaybe<Scalars['String']>;
  category_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_ne?: InputMaybe<Scalars['String']>;
  content_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_exists?: InputMaybe<Scalars['Boolean']>;
  isPublished_gt?: InputMaybe<Scalars['String']>;
  isPublished_gte?: InputMaybe<Scalars['String']>;
  isPublished_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished_lt?: InputMaybe<Scalars['String']>;
  isPublished_lte?: InputMaybe<Scalars['String']>;
  isPublished_ne?: InputMaybe<Scalars['String']>;
  isPublished_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  operatorId?: InputMaybe<Scalars['String']>;
  operatorId_exists?: InputMaybe<Scalars['Boolean']>;
  operatorId_gt?: InputMaybe<Scalars['String']>;
  operatorId_gte?: InputMaybe<Scalars['String']>;
  operatorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  operatorId_lt?: InputMaybe<Scalars['String']>;
  operatorId_lte?: InputMaybe<Scalars['String']>;
  operatorId_ne?: InputMaybe<Scalars['String']>;
  operatorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ArticleSortByInput {
  ArticleidAsc = 'ARTICLEID_ASC',
  ArticleidDesc = 'ARTICLEID_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  IspublishedAsc = 'ISPUBLISHED_ASC',
  IspublishedDesc = 'ISPUBLISHED_DESC',
  OperatoridAsc = 'OPERATORID_ASC',
  OperatoridDesc = 'OPERATORID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ArticleUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  articleId?: InputMaybe<Scalars['String']>;
  articleId_unset?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  category_unset?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  content_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_unset?: InputMaybe<Scalars['Boolean']>;
  operatorId?: InputMaybe<Scalars['String']>;
  operatorId_unset?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  _id?: Maybe<Scalars['ObjectId']>;
  amountProgress?: Maybe<Scalars['Decimal']>;
  amountTarget?: Maybe<Scalars['Decimal']>;
  campaignDescription?: Maybe<Scalars['String']>;
  campaignImage?: Maybe<Scalars['String']>;
  campaignName?: Maybe<Scalars['String']>;
  campaignType?: Maybe<Scalars['String']>;
  contributionValue?: Maybe<Scalars['String']>;
  costBeneficiaries?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  coverImageIndex?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorUserId?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  donationPlaces?: Maybe<Scalars['String']>;
  donorReached?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPublished?: Maybe<Scalars['String']>;
  islamCharityType?: Maybe<CampaignIslamCharityType>;
  marketingPlan?: Maybe<Scalars['String']>;
  marketingPlanEnabled?: Maybe<Scalars['Boolean']>;
  methods?: Maybe<Array<Maybe<Scalars['String']>>>;
  numberBeneficiaries?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['ObjectId']>;
  ownerRealmId?: Maybe<Scalars['ObjectId']>;
  ownerUserId?: Maybe<Scalars['String']>;
  percentageGovernance?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalDonation?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updaterUserId?: Maybe<Scalars['String']>;
};

export type CampaignActivity = {
  __typename?: 'CampaignActivity';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['ObjectId']>;
  content?: Maybe<Scalars['String']>;
  datetime?: Maybe<Scalars['DateTime']>;
  donationId?: Maybe<Scalars['ObjectId']>;
};

export type CampaignActivityInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  amount?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  content?: InputMaybe<Scalars['String']>;
  datetime?: InputMaybe<Scalars['DateTime']>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
};

export type CampaignActivityQueryInput = {
  AND?: InputMaybe<Array<CampaignActivityQueryInput>>;
  OR?: InputMaybe<Array<CampaignActivityQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  amount?: InputMaybe<Scalars['String']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['String']>;
  amount_gte?: InputMaybe<Scalars['String']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amount_lt?: InputMaybe<Scalars['String']>;
  amount_lte?: InputMaybe<Scalars['String']>;
  amount_ne?: InputMaybe<Scalars['String']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  author?: InputMaybe<Scalars['String']>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  author_gt?: InputMaybe<Scalars['String']>;
  author_gte?: InputMaybe<Scalars['String']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  author_lt?: InputMaybe<Scalars['String']>;
  author_lte?: InputMaybe<Scalars['String']>;
  author_ne?: InputMaybe<Scalars['String']>;
  author_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  avatar?: InputMaybe<Scalars['String']>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  avatar_gt?: InputMaybe<Scalars['String']>;
  avatar_gte?: InputMaybe<Scalars['String']>;
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  avatar_lt?: InputMaybe<Scalars['String']>;
  avatar_lte?: InputMaybe<Scalars['String']>;
  avatar_ne?: InputMaybe<Scalars['String']>;
  avatar_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_gte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId_lt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_lte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_ne?: InputMaybe<Scalars['ObjectId']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  content?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_ne?: InputMaybe<Scalars['String']>;
  content_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  datetime?: InputMaybe<Scalars['DateTime']>;
  datetime_exists?: InputMaybe<Scalars['Boolean']>;
  datetime_gt?: InputMaybe<Scalars['DateTime']>;
  datetime_gte?: InputMaybe<Scalars['DateTime']>;
  datetime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  datetime_lt?: InputMaybe<Scalars['DateTime']>;
  datetime_lte?: InputMaybe<Scalars['DateTime']>;
  datetime_ne?: InputMaybe<Scalars['DateTime']>;
  datetime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  donationId_exists?: InputMaybe<Scalars['Boolean']>;
  donationId_gt?: InputMaybe<Scalars['ObjectId']>;
  donationId_gte?: InputMaybe<Scalars['ObjectId']>;
  donationId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donationId_lt?: InputMaybe<Scalars['ObjectId']>;
  donationId_lte?: InputMaybe<Scalars['ObjectId']>;
  donationId_ne?: InputMaybe<Scalars['ObjectId']>;
  donationId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
};

export enum CampaignActivitySortByInput {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  AuthorAsc = 'AUTHOR_ASC',
  AuthorDesc = 'AUTHOR_DESC',
  AvatarAsc = 'AVATAR_ASC',
  AvatarDesc = 'AVATAR_DESC',
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  DonationidAsc = 'DONATIONID_ASC',
  DonationidDesc = 'DONATIONID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type CampaignActivityUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['String']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<Scalars['String']>;
  author_unset?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  avatar_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  content_unset?: InputMaybe<Scalars['Boolean']>;
  datetime?: InputMaybe<Scalars['DateTime']>;
  datetime_unset?: InputMaybe<Scalars['Boolean']>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  donationId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type CampaignInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  amountProgress?: InputMaybe<Scalars['Decimal']>;
  amountTarget?: InputMaybe<Scalars['Decimal']>;
  campaignDescription?: InputMaybe<Scalars['String']>;
  campaignImage?: InputMaybe<Scalars['String']>;
  campaignName?: InputMaybe<Scalars['String']>;
  campaignType?: InputMaybe<Scalars['String']>;
  contributionValue?: InputMaybe<Scalars['String']>;
  costBeneficiaries?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImageIndex?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorUserId?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  donationPlaces?: InputMaybe<Scalars['String']>;
  donorReached?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished?: InputMaybe<Scalars['String']>;
  islamCharityType?: InputMaybe<CampaignIslamCharityType>;
  marketingPlan?: InputMaybe<Scalars['String']>;
  marketingPlanEnabled?: InputMaybe<Scalars['Boolean']>;
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numberBeneficiaries?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  percentageGovernance?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  totalDonation?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updaterUserId?: InputMaybe<Scalars['String']>;
};

export enum CampaignIslamCharityType {
  Infaq = 'INFAQ',
  Kaffarah = 'KAFFARAH',
  Shadaqah = 'SHADAQAH',
  Waqf = 'WAQF',
  Zakat = 'ZAKAT'
}

export type CampaignNotificationReport = {
  __typename?: 'CampaignNotificationReport';
  _id?: Maybe<Scalars['ObjectId']>;
  campaignId?: Maybe<Scalars['ObjectId']>;
  campaignPhoto?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  nonprofitRealmId?: Maybe<Scalars['ObjectId']>;
  sendEmail?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type CampaignNotificationReportInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignPhoto?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  nonprofitRealmId?: InputMaybe<Scalars['ObjectId']>;
  sendEmail?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CampaignNotificationReportQueryInput = {
  AND?: InputMaybe<Array<CampaignNotificationReportQueryInput>>;
  OR?: InputMaybe<Array<CampaignNotificationReportQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_gte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId_lt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_lte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_ne?: InputMaybe<Scalars['ObjectId']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignPhoto?: InputMaybe<Scalars['String']>;
  campaignPhoto_exists?: InputMaybe<Scalars['Boolean']>;
  campaignPhoto_gt?: InputMaybe<Scalars['String']>;
  campaignPhoto_gte?: InputMaybe<Scalars['String']>;
  campaignPhoto_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignPhoto_lt?: InputMaybe<Scalars['String']>;
  campaignPhoto_lte?: InputMaybe<Scalars['String']>;
  campaignPhoto_ne?: InputMaybe<Scalars['String']>;
  campaignPhoto_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitRealmId?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  nonprofitRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  nonprofitRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  sendEmail?: InputMaybe<Scalars['Boolean']>;
  sendEmail_exists?: InputMaybe<Scalars['Boolean']>;
  sendEmail_ne?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CampaignNotificationReportSortByInput {
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CampaignphotoAsc = 'CAMPAIGNPHOTO_ASC',
  CampaignphotoDesc = 'CAMPAIGNPHOTO_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  NonprofitrealmidAsc = 'NONPROFITREALMID_ASC',
  NonprofitrealmidDesc = 'NONPROFITREALMID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type CampaignNotificationReportUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  campaignPhoto?: InputMaybe<Scalars['String']>;
  campaignPhoto_unset?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_unset?: InputMaybe<Scalars['Boolean']>;
  nonprofitRealmId?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  sendEmail?: InputMaybe<Scalars['Boolean']>;
  sendEmail_unset?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_unset?: InputMaybe<Scalars['Boolean']>;
};

export type CampaignQueryInput = {
  AND?: InputMaybe<Array<CampaignQueryInput>>;
  OR?: InputMaybe<Array<CampaignQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  amountProgress?: InputMaybe<Scalars['Decimal']>;
  amountProgress_exists?: InputMaybe<Scalars['Boolean']>;
  amountProgress_gt?: InputMaybe<Scalars['Decimal']>;
  amountProgress_gte?: InputMaybe<Scalars['Decimal']>;
  amountProgress_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  amountProgress_lt?: InputMaybe<Scalars['Decimal']>;
  amountProgress_lte?: InputMaybe<Scalars['Decimal']>;
  amountProgress_ne?: InputMaybe<Scalars['Decimal']>;
  amountProgress_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  amountTarget?: InputMaybe<Scalars['Decimal']>;
  amountTarget_exists?: InputMaybe<Scalars['Boolean']>;
  amountTarget_gt?: InputMaybe<Scalars['Decimal']>;
  amountTarget_gte?: InputMaybe<Scalars['Decimal']>;
  amountTarget_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  amountTarget_lt?: InputMaybe<Scalars['Decimal']>;
  amountTarget_lte?: InputMaybe<Scalars['Decimal']>;
  amountTarget_ne?: InputMaybe<Scalars['Decimal']>;
  amountTarget_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  campaignDescription?: InputMaybe<Scalars['String']>;
  campaignDescription_exists?: InputMaybe<Scalars['Boolean']>;
  campaignDescription_gt?: InputMaybe<Scalars['String']>;
  campaignDescription_gte?: InputMaybe<Scalars['String']>;
  campaignDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignDescription_lt?: InputMaybe<Scalars['String']>;
  campaignDescription_lte?: InputMaybe<Scalars['String']>;
  campaignDescription_ne?: InputMaybe<Scalars['String']>;
  campaignDescription_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignImage?: InputMaybe<Scalars['String']>;
  campaignImage_exists?: InputMaybe<Scalars['Boolean']>;
  campaignImage_gt?: InputMaybe<Scalars['String']>;
  campaignImage_gte?: InputMaybe<Scalars['String']>;
  campaignImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignImage_lt?: InputMaybe<Scalars['String']>;
  campaignImage_lte?: InputMaybe<Scalars['String']>;
  campaignImage_ne?: InputMaybe<Scalars['String']>;
  campaignImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignName?: InputMaybe<Scalars['String']>;
  campaignName_exists?: InputMaybe<Scalars['Boolean']>;
  campaignName_gt?: InputMaybe<Scalars['String']>;
  campaignName_gte?: InputMaybe<Scalars['String']>;
  campaignName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignName_lt?: InputMaybe<Scalars['String']>;
  campaignName_lte?: InputMaybe<Scalars['String']>;
  campaignName_ne?: InputMaybe<Scalars['String']>;
  campaignName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignType?: InputMaybe<Scalars['String']>;
  campaignType_exists?: InputMaybe<Scalars['Boolean']>;
  campaignType_gt?: InputMaybe<Scalars['String']>;
  campaignType_gte?: InputMaybe<Scalars['String']>;
  campaignType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignType_lt?: InputMaybe<Scalars['String']>;
  campaignType_lte?: InputMaybe<Scalars['String']>;
  campaignType_ne?: InputMaybe<Scalars['String']>;
  campaignType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contributionValue?: InputMaybe<Scalars['String']>;
  contributionValue_exists?: InputMaybe<Scalars['Boolean']>;
  contributionValue_gt?: InputMaybe<Scalars['String']>;
  contributionValue_gte?: InputMaybe<Scalars['String']>;
  contributionValue_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contributionValue_lt?: InputMaybe<Scalars['String']>;
  contributionValue_lte?: InputMaybe<Scalars['String']>;
  contributionValue_ne?: InputMaybe<Scalars['String']>;
  contributionValue_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  costBeneficiaries?: InputMaybe<Scalars['String']>;
  costBeneficiaries_exists?: InputMaybe<Scalars['Boolean']>;
  costBeneficiaries_gt?: InputMaybe<Scalars['String']>;
  costBeneficiaries_gte?: InputMaybe<Scalars['String']>;
  costBeneficiaries_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  costBeneficiaries_lt?: InputMaybe<Scalars['String']>;
  costBeneficiaries_lte?: InputMaybe<Scalars['String']>;
  costBeneficiaries_ne?: InputMaybe<Scalars['String']>;
  costBeneficiaries_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImageIndex?: InputMaybe<Scalars['Int']>;
  coverImageIndex_exists?: InputMaybe<Scalars['Boolean']>;
  coverImageIndex_gt?: InputMaybe<Scalars['Int']>;
  coverImageIndex_gte?: InputMaybe<Scalars['Int']>;
  coverImageIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  coverImageIndex_lt?: InputMaybe<Scalars['Int']>;
  coverImageIndex_lte?: InputMaybe<Scalars['Int']>;
  coverImageIndex_ne?: InputMaybe<Scalars['Int']>;
  coverImageIndex_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  coverImage_gt?: InputMaybe<Scalars['String']>;
  coverImage_gte?: InputMaybe<Scalars['String']>;
  coverImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage_lt?: InputMaybe<Scalars['String']>;
  coverImage_lte?: InputMaybe<Scalars['String']>;
  coverImage_ne?: InputMaybe<Scalars['String']>;
  coverImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_ne?: InputMaybe<Scalars['DateTime']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  creatorUserId?: InputMaybe<Scalars['String']>;
  creatorUserId_exists?: InputMaybe<Scalars['Boolean']>;
  creatorUserId_gt?: InputMaybe<Scalars['String']>;
  creatorUserId_gte?: InputMaybe<Scalars['String']>;
  creatorUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creatorUserId_lt?: InputMaybe<Scalars['String']>;
  creatorUserId_lte?: InputMaybe<Scalars['String']>;
  creatorUserId_ne?: InputMaybe<Scalars['String']>;
  creatorUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currencyCode?: InputMaybe<Scalars['String']>;
  currencyCode_exists?: InputMaybe<Scalars['Boolean']>;
  currencyCode_gt?: InputMaybe<Scalars['String']>;
  currencyCode_gte?: InputMaybe<Scalars['String']>;
  currencyCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currencyCode_lt?: InputMaybe<Scalars['String']>;
  currencyCode_lte?: InputMaybe<Scalars['String']>;
  currencyCode_ne?: InputMaybe<Scalars['String']>;
  currencyCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationPlaces?: InputMaybe<Scalars['String']>;
  donationPlaces_exists?: InputMaybe<Scalars['Boolean']>;
  donationPlaces_gt?: InputMaybe<Scalars['String']>;
  donationPlaces_gte?: InputMaybe<Scalars['String']>;
  donationPlaces_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationPlaces_lt?: InputMaybe<Scalars['String']>;
  donationPlaces_lte?: InputMaybe<Scalars['String']>;
  donationPlaces_ne?: InputMaybe<Scalars['String']>;
  donationPlaces_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorReached?: InputMaybe<Scalars['String']>;
  donorReached_exists?: InputMaybe<Scalars['Boolean']>;
  donorReached_gt?: InputMaybe<Scalars['String']>;
  donorReached_gte?: InputMaybe<Scalars['String']>;
  donorReached_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorReached_lt?: InputMaybe<Scalars['String']>;
  donorReached_lte?: InputMaybe<Scalars['String']>;
  donorReached_ne?: InputMaybe<Scalars['String']>;
  donorReached_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']>;
  endDate_gt?: InputMaybe<Scalars['String']>;
  endDate_gte?: InputMaybe<Scalars['String']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_lt?: InputMaybe<Scalars['String']>;
  endDate_lte?: InputMaybe<Scalars['String']>;
  endDate_ne?: InputMaybe<Scalars['String']>;
  endDate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_exists?: InputMaybe<Scalars['Boolean']>;
  images_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_exists?: InputMaybe<Scalars['Boolean']>;
  isPublished_gt?: InputMaybe<Scalars['String']>;
  isPublished_gte?: InputMaybe<Scalars['String']>;
  isPublished_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished_lt?: InputMaybe<Scalars['String']>;
  isPublished_lte?: InputMaybe<Scalars['String']>;
  isPublished_ne?: InputMaybe<Scalars['String']>;
  isPublished_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  islamCharityType?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_exists?: InputMaybe<Scalars['Boolean']>;
  islamCharityType_gt?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_gte?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_in?: InputMaybe<Array<InputMaybe<CampaignIslamCharityType>>>;
  islamCharityType_lt?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_lte?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_ne?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_nin?: InputMaybe<Array<InputMaybe<CampaignIslamCharityType>>>;
  marketingPlan?: InputMaybe<Scalars['String']>;
  marketingPlanEnabled?: InputMaybe<Scalars['Boolean']>;
  marketingPlanEnabled_exists?: InputMaybe<Scalars['Boolean']>;
  marketingPlanEnabled_ne?: InputMaybe<Scalars['Boolean']>;
  marketingPlan_exists?: InputMaybe<Scalars['Boolean']>;
  marketingPlan_gt?: InputMaybe<Scalars['String']>;
  marketingPlan_gte?: InputMaybe<Scalars['String']>;
  marketingPlan_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  marketingPlan_lt?: InputMaybe<Scalars['String']>;
  marketingPlan_lte?: InputMaybe<Scalars['String']>;
  marketingPlan_ne?: InputMaybe<Scalars['String']>;
  marketingPlan_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  methods_exists?: InputMaybe<Scalars['Boolean']>;
  methods_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  methods_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numberBeneficiaries?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_exists?: InputMaybe<Scalars['Boolean']>;
  numberBeneficiaries_gt?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_gte?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  numberBeneficiaries_lt?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_lte?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_ne?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['ObjectId']>;
  organizationId_gte?: InputMaybe<Scalars['ObjectId']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  organizationId_lt?: InputMaybe<Scalars['ObjectId']>;
  organizationId_lte?: InputMaybe<Scalars['ObjectId']>;
  organizationId_ne?: InputMaybe<Scalars['ObjectId']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  percentageGovernance?: InputMaybe<Scalars['String']>;
  percentageGovernance_exists?: InputMaybe<Scalars['Boolean']>;
  percentageGovernance_gt?: InputMaybe<Scalars['String']>;
  percentageGovernance_gte?: InputMaybe<Scalars['String']>;
  percentageGovernance_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  percentageGovernance_lt?: InputMaybe<Scalars['String']>;
  percentageGovernance_lte?: InputMaybe<Scalars['String']>;
  percentageGovernance_ne?: InputMaybe<Scalars['String']>;
  percentageGovernance_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['String']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']>;
  startDate_gt?: InputMaybe<Scalars['String']>;
  startDate_gte?: InputMaybe<Scalars['String']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate_lt?: InputMaybe<Scalars['String']>;
  startDate_lte?: InputMaybe<Scalars['String']>;
  startDate_ne?: InputMaybe<Scalars['String']>;
  startDate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalDonation?: InputMaybe<Scalars['String']>;
  totalDonation_exists?: InputMaybe<Scalars['Boolean']>;
  totalDonation_gt?: InputMaybe<Scalars['String']>;
  totalDonation_gte?: InputMaybe<Scalars['String']>;
  totalDonation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalDonation_lt?: InputMaybe<Scalars['String']>;
  totalDonation_lte?: InputMaybe<Scalars['String']>;
  totalDonation_ne?: InputMaybe<Scalars['String']>;
  totalDonation_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updaterUserId?: InputMaybe<Scalars['String']>;
  updaterUserId_exists?: InputMaybe<Scalars['Boolean']>;
  updaterUserId_gt?: InputMaybe<Scalars['String']>;
  updaterUserId_gte?: InputMaybe<Scalars['String']>;
  updaterUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updaterUserId_lt?: InputMaybe<Scalars['String']>;
  updaterUserId_lte?: InputMaybe<Scalars['String']>;
  updaterUserId_ne?: InputMaybe<Scalars['String']>;
  updaterUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CampaignSortByInput {
  AmountprogressAsc = 'AMOUNTPROGRESS_ASC',
  AmountprogressDesc = 'AMOUNTPROGRESS_DESC',
  AmounttargetAsc = 'AMOUNTTARGET_ASC',
  AmounttargetDesc = 'AMOUNTTARGET_DESC',
  CampaigndescriptionAsc = 'CAMPAIGNDESCRIPTION_ASC',
  CampaigndescriptionDesc = 'CAMPAIGNDESCRIPTION_DESC',
  CampaignimageAsc = 'CAMPAIGNIMAGE_ASC',
  CampaignimageDesc = 'CAMPAIGNIMAGE_DESC',
  CampaignnameAsc = 'CAMPAIGNNAME_ASC',
  CampaignnameDesc = 'CAMPAIGNNAME_DESC',
  CampaigntypeAsc = 'CAMPAIGNTYPE_ASC',
  CampaigntypeDesc = 'CAMPAIGNTYPE_DESC',
  ContributionvalueAsc = 'CONTRIBUTIONVALUE_ASC',
  ContributionvalueDesc = 'CONTRIBUTIONVALUE_DESC',
  CostbeneficiariesAsc = 'COSTBENEFICIARIES_ASC',
  CostbeneficiariesDesc = 'COSTBENEFICIARIES_DESC',
  CoverimageindexAsc = 'COVERIMAGEINDEX_ASC',
  CoverimageindexDesc = 'COVERIMAGEINDEX_DESC',
  CoverimageAsc = 'COVERIMAGE_ASC',
  CoverimageDesc = 'COVERIMAGE_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatoruseridAsc = 'CREATORUSERID_ASC',
  CreatoruseridDesc = 'CREATORUSERID_DESC',
  CurrencycodeAsc = 'CURRENCYCODE_ASC',
  CurrencycodeDesc = 'CURRENCYCODE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DonationplacesAsc = 'DONATIONPLACES_ASC',
  DonationplacesDesc = 'DONATIONPLACES_DESC',
  DonorreachedAsc = 'DONORREACHED_ASC',
  DonorreachedDesc = 'DONORREACHED_DESC',
  EnddateAsc = 'ENDDATE_ASC',
  EnddateDesc = 'ENDDATE_DESC',
  IslamcharitytypeAsc = 'ISLAMCHARITYTYPE_ASC',
  IslamcharitytypeDesc = 'ISLAMCHARITYTYPE_DESC',
  IspublishedAsc = 'ISPUBLISHED_ASC',
  IspublishedDesc = 'ISPUBLISHED_DESC',
  MarketingplanAsc = 'MARKETINGPLAN_ASC',
  MarketingplanDesc = 'MARKETINGPLAN_DESC',
  NumberbeneficiariesAsc = 'NUMBERBENEFICIARIES_ASC',
  NumberbeneficiariesDesc = 'NUMBERBENEFICIARIES_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  OwnerrealmidAsc = 'OWNERREALMID_ASC',
  OwnerrealmidDesc = 'OWNERREALMID_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  PercentagegovernanceAsc = 'PERCENTAGEGOVERNANCE_ASC',
  PercentagegovernanceDesc = 'PERCENTAGEGOVERNANCE_DESC',
  StartdateAsc = 'STARTDATE_ASC',
  StartdateDesc = 'STARTDATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TotaldonationAsc = 'TOTALDONATION_ASC',
  TotaldonationDesc = 'TOTALDONATION_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  UpdateruseridAsc = 'UPDATERUSERID_ASC',
  UpdateruseridDesc = 'UPDATERUSERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type CampaignUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  amountProgress?: InputMaybe<Scalars['Decimal']>;
  amountProgress_unset?: InputMaybe<Scalars['Boolean']>;
  amountTarget?: InputMaybe<Scalars['Decimal']>;
  amountTarget_unset?: InputMaybe<Scalars['Boolean']>;
  campaignDescription?: InputMaybe<Scalars['String']>;
  campaignDescription_unset?: InputMaybe<Scalars['Boolean']>;
  campaignImage?: InputMaybe<Scalars['String']>;
  campaignImage_unset?: InputMaybe<Scalars['Boolean']>;
  campaignName?: InputMaybe<Scalars['String']>;
  campaignName_unset?: InputMaybe<Scalars['Boolean']>;
  campaignType?: InputMaybe<Scalars['String']>;
  campaignType_unset?: InputMaybe<Scalars['Boolean']>;
  contributionValue?: InputMaybe<Scalars['String']>;
  contributionValue_unset?: InputMaybe<Scalars['Boolean']>;
  costBeneficiaries?: InputMaybe<Scalars['String']>;
  costBeneficiaries_unset?: InputMaybe<Scalars['Boolean']>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImageIndex?: InputMaybe<Scalars['Int']>;
  coverImageIndex_inc?: InputMaybe<Scalars['Int']>;
  coverImageIndex_unset?: InputMaybe<Scalars['Boolean']>;
  coverImage_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  creatorUserId?: InputMaybe<Scalars['String']>;
  creatorUserId_unset?: InputMaybe<Scalars['Boolean']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  currencyCode_unset?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_unset?: InputMaybe<Scalars['Boolean']>;
  donationPlaces?: InputMaybe<Scalars['String']>;
  donationPlaces_unset?: InputMaybe<Scalars['Boolean']>;
  donorReached?: InputMaybe<Scalars['String']>;
  donorReached_unset?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_unset?: InputMaybe<Scalars['Boolean']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_unset?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_unset?: InputMaybe<Scalars['Boolean']>;
  islamCharityType?: InputMaybe<CampaignIslamCharityType>;
  islamCharityType_unset?: InputMaybe<Scalars['Boolean']>;
  marketingPlan?: InputMaybe<Scalars['String']>;
  marketingPlanEnabled?: InputMaybe<Scalars['Boolean']>;
  marketingPlanEnabled_unset?: InputMaybe<Scalars['Boolean']>;
  marketingPlan_unset?: InputMaybe<Scalars['Boolean']>;
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  methods_unset?: InputMaybe<Scalars['Boolean']>;
  numberBeneficiaries?: InputMaybe<Scalars['String']>;
  numberBeneficiaries_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  percentageGovernance?: InputMaybe<Scalars['String']>;
  percentageGovernance_unset?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['String']>;
  startDate_unset?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_unset?: InputMaybe<Scalars['Boolean']>;
  totalDonation?: InputMaybe<Scalars['String']>;
  totalDonation_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
  updaterUserId?: InputMaybe<Scalars['String']>;
  updaterUserId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type CampaignVendorLog = {
  __typename?: 'CampaignVendorLog';
  _id?: Maybe<Scalars['ObjectId']>;
  campaignId?: Maybe<Scalars['String']>;
  campaignVendorLogId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
};

export type CampaignVendorLogInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  campaignId?: InputMaybe<Scalars['String']>;
  campaignVendorLogId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['String']>;
};

export type CampaignVendorLogQueryInput = {
  AND?: InputMaybe<Array<CampaignVendorLogQueryInput>>;
  OR?: InputMaybe<Array<CampaignVendorLogQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId?: InputMaybe<Scalars['String']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['String']>;
  campaignId_gte?: InputMaybe<Scalars['String']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId_lt?: InputMaybe<Scalars['String']>;
  campaignId_lte?: InputMaybe<Scalars['String']>;
  campaignId_ne?: InputMaybe<Scalars['String']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignVendorLogId?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignVendorLogId_gt?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_gte?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignVendorLogId_lt?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_lte?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_ne?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
  status_exists?: InputMaybe<Scalars['Boolean']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_ne?: InputMaybe<Scalars['String']>;
  status_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorId?: InputMaybe<Scalars['String']>;
  vendorId_exists?: InputMaybe<Scalars['Boolean']>;
  vendorId_gt?: InputMaybe<Scalars['String']>;
  vendorId_gte?: InputMaybe<Scalars['String']>;
  vendorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorId_lt?: InputMaybe<Scalars['String']>;
  vendorId_lte?: InputMaybe<Scalars['String']>;
  vendorId_ne?: InputMaybe<Scalars['String']>;
  vendorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CampaignVendorLogSortByInput {
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CampaignvendorlogidAsc = 'CAMPAIGNVENDORLOGID_ASC',
  CampaignvendorlogidDesc = 'CAMPAIGNVENDORLOGID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  VendoridAsc = 'VENDORID_ASC',
  VendoridDesc = 'VENDORID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type CampaignVendorLogUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['String']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  campaignVendorLogId?: InputMaybe<Scalars['String']>;
  campaignVendorLogId_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  status_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
  vendorId?: InputMaybe<Scalars['String']>;
  vendorId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ChartDatum = {
  __typename?: 'ChartDatum';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type ChartDatumInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  week?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type ChartDatumQueryInput = {
  AND?: InputMaybe<Array<ChartDatumQueryInput>>;
  OR?: InputMaybe<Array<ChartDatumQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['Float']>;
  amount_gte?: InputMaybe<Scalars['Float']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  amount_lt?: InputMaybe<Scalars['Float']>;
  amount_lte?: InputMaybe<Scalars['Float']>;
  amount_ne?: InputMaybe<Scalars['Float']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_ne?: InputMaybe<Scalars['DateTime']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  day?: InputMaybe<Scalars['Int']>;
  day_exists?: InputMaybe<Scalars['Boolean']>;
  day_gt?: InputMaybe<Scalars['Int']>;
  day_gte?: InputMaybe<Scalars['Int']>;
  day_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  day_lt?: InputMaybe<Scalars['Int']>;
  day_lte?: InputMaybe<Scalars['Int']>;
  day_ne?: InputMaybe<Scalars['Int']>;
  day_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  hour?: InputMaybe<Scalars['Int']>;
  hour_exists?: InputMaybe<Scalars['Boolean']>;
  hour_gt?: InputMaybe<Scalars['Int']>;
  hour_gte?: InputMaybe<Scalars['Int']>;
  hour_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  hour_lt?: InputMaybe<Scalars['Int']>;
  hour_lte?: InputMaybe<Scalars['Int']>;
  hour_ne?: InputMaybe<Scalars['Int']>;
  hour_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  month?: InputMaybe<Scalars['Int']>;
  month_exists?: InputMaybe<Scalars['Boolean']>;
  month_gt?: InputMaybe<Scalars['Int']>;
  month_gte?: InputMaybe<Scalars['Int']>;
  month_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  month_lt?: InputMaybe<Scalars['Int']>;
  month_lte?: InputMaybe<Scalars['Int']>;
  month_ne?: InputMaybe<Scalars['Int']>;
  month_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  week?: InputMaybe<Scalars['Int']>;
  week_exists?: InputMaybe<Scalars['Boolean']>;
  week_gt?: InputMaybe<Scalars['Int']>;
  week_gte?: InputMaybe<Scalars['Int']>;
  week_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  week_lt?: InputMaybe<Scalars['Int']>;
  week_lte?: InputMaybe<Scalars['Int']>;
  week_ne?: InputMaybe<Scalars['Int']>;
  week_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  year?: InputMaybe<Scalars['Int']>;
  year_exists?: InputMaybe<Scalars['Boolean']>;
  year_gt?: InputMaybe<Scalars['Int']>;
  year_gte?: InputMaybe<Scalars['Int']>;
  year_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  year_lt?: InputMaybe<Scalars['Int']>;
  year_lte?: InputMaybe<Scalars['Int']>;
  year_ne?: InputMaybe<Scalars['Int']>;
  year_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum ChartDatumSortByInput {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DayAsc = 'DAY_ASC',
  DayDesc = 'DAY_DESC',
  HourAsc = 'HOUR_ASC',
  HourDesc = 'HOUR_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  WeekAsc = 'WEEK_ASC',
  WeekDesc = 'WEEK_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ChartDatumUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_inc?: InputMaybe<Scalars['Float']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  day?: InputMaybe<Scalars['Int']>;
  day_inc?: InputMaybe<Scalars['Int']>;
  day_unset?: InputMaybe<Scalars['Boolean']>;
  hour?: InputMaybe<Scalars['Int']>;
  hour_inc?: InputMaybe<Scalars['Int']>;
  hour_unset?: InputMaybe<Scalars['Boolean']>;
  month?: InputMaybe<Scalars['Int']>;
  month_inc?: InputMaybe<Scalars['Int']>;
  month_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
  week?: InputMaybe<Scalars['Int']>;
  week_inc?: InputMaybe<Scalars['Int']>;
  week_unset?: InputMaybe<Scalars['Boolean']>;
  year?: InputMaybe<Scalars['Int']>;
  year_inc?: InputMaybe<Scalars['Int']>;
  year_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Commerce = {
  __typename?: 'Commerce';
  _id?: Maybe<Scalars['ObjectId']>;
  commerceId?: Maybe<Scalars['ObjectId']>;
};

export type CommerceInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  commerceId?: InputMaybe<Scalars['ObjectId']>;
};

export type CommerceQueryInput = {
  AND?: InputMaybe<Array<CommerceQueryInput>>;
  OR?: InputMaybe<Array<CommerceQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  commerceId?: InputMaybe<Scalars['ObjectId']>;
  commerceId_exists?: InputMaybe<Scalars['Boolean']>;
  commerceId_gt?: InputMaybe<Scalars['ObjectId']>;
  commerceId_gte?: InputMaybe<Scalars['ObjectId']>;
  commerceId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  commerceId_lt?: InputMaybe<Scalars['ObjectId']>;
  commerceId_lte?: InputMaybe<Scalars['ObjectId']>;
  commerceId_ne?: InputMaybe<Scalars['ObjectId']>;
  commerceId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
};

export enum CommerceSortByInput {
  CommerceidAsc = 'COMMERCEID_ASC',
  CommerceidDesc = 'COMMERCEID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type CommerceUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  commerceId?: InputMaybe<Scalars['ObjectId']>;
  commerceId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type DonationLog = {
  __typename?: 'DonationLog';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  donationStatus?: Maybe<Scalars['ObjectId']>;
  donorId?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['ObjectId']>;
  organizationId?: Maybe<Scalars['String']>;
  paymentGatewayId?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ObjectId']>;
  transactionId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DonationLogInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  amount?: InputMaybe<Scalars['String']>;
  campaignId?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  donationStatus?: InputMaybe<Scalars['ObjectId']>;
  donorId?: InputMaybe<Scalars['String']>;
  ipAddress?: InputMaybe<Scalars['ObjectId']>;
  organizationId?: InputMaybe<Scalars['String']>;
  paymentGatewayId?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['ObjectId']>;
  transactionId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DonationLogQueryInput = {
  AND?: InputMaybe<Array<DonationLogQueryInput>>;
  OR?: InputMaybe<Array<DonationLogQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  amount?: InputMaybe<Scalars['String']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['String']>;
  amount_gte?: InputMaybe<Scalars['String']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amount_lt?: InputMaybe<Scalars['String']>;
  amount_lte?: InputMaybe<Scalars['String']>;
  amount_ne?: InputMaybe<Scalars['String']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId?: InputMaybe<Scalars['DateTime']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['DateTime']>;
  campaignId_gte?: InputMaybe<Scalars['DateTime']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  campaignId_lt?: InputMaybe<Scalars['DateTime']>;
  campaignId_lte?: InputMaybe<Scalars['DateTime']>;
  campaignId_ne?: InputMaybe<Scalars['DateTime']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationStatus?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_exists?: InputMaybe<Scalars['Boolean']>;
  donationStatus_gt?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_gte?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donationStatus_lt?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_lte?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_ne?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donorId?: InputMaybe<Scalars['String']>;
  donorId_exists?: InputMaybe<Scalars['Boolean']>;
  donorId_gt?: InputMaybe<Scalars['String']>;
  donorId_gte?: InputMaybe<Scalars['String']>;
  donorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorId_lt?: InputMaybe<Scalars['String']>;
  donorId_lte?: InputMaybe<Scalars['String']>;
  donorId_ne?: InputMaybe<Scalars['String']>;
  donorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipAddress?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_exists?: InputMaybe<Scalars['Boolean']>;
  ipAddress_gt?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_gte?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ipAddress_lt?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_lte?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_ne?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['String']>;
  organizationId_gte?: InputMaybe<Scalars['String']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId_lt?: InputMaybe<Scalars['String']>;
  organizationId_lte?: InputMaybe<Scalars['String']>;
  organizationId_ne?: InputMaybe<Scalars['String']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentGatewayId?: InputMaybe<Scalars['String']>;
  paymentGatewayId_exists?: InputMaybe<Scalars['Boolean']>;
  paymentGatewayId_gt?: InputMaybe<Scalars['String']>;
  paymentGatewayId_gte?: InputMaybe<Scalars['String']>;
  paymentGatewayId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentGatewayId_lt?: InputMaybe<Scalars['String']>;
  paymentGatewayId_lte?: InputMaybe<Scalars['String']>;
  paymentGatewayId_ne?: InputMaybe<Scalars['String']>;
  paymentGatewayId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId?: InputMaybe<Scalars['ObjectId']>;
  projectId_exists?: InputMaybe<Scalars['Boolean']>;
  projectId_gt?: InputMaybe<Scalars['ObjectId']>;
  projectId_gte?: InputMaybe<Scalars['ObjectId']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  projectId_lt?: InputMaybe<Scalars['ObjectId']>;
  projectId_lte?: InputMaybe<Scalars['ObjectId']>;
  projectId_ne?: InputMaybe<Scalars['ObjectId']>;
  projectId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  transactionId?: InputMaybe<Scalars['String']>;
  transactionId_exists?: InputMaybe<Scalars['Boolean']>;
  transactionId_gt?: InputMaybe<Scalars['String']>;
  transactionId_gte?: InputMaybe<Scalars['String']>;
  transactionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  transactionId_lt?: InputMaybe<Scalars['String']>;
  transactionId_lte?: InputMaybe<Scalars['String']>;
  transactionId_ne?: InputMaybe<Scalars['String']>;
  transactionId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum DonationLogSortByInput {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DonationstatusAsc = 'DONATIONSTATUS_ASC',
  DonationstatusDesc = 'DONATIONSTATUS_DESC',
  DonoridAsc = 'DONORID_ASC',
  DonoridDesc = 'DONORID_DESC',
  IpaddressAsc = 'IPADDRESS_ASC',
  IpaddressDesc = 'IPADDRESS_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PaymentgatewayidAsc = 'PAYMENTGATEWAYID_ASC',
  PaymentgatewayidDesc = 'PAYMENTGATEWAYID_DESC',
  ProjectidAsc = 'PROJECTID_ASC',
  ProjectidDesc = 'PROJECTID_DESC',
  TransactionidAsc = 'TRANSACTIONID_ASC',
  TransactionidDesc = 'TRANSACTIONID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type DonationLogUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['String']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['DateTime']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  donationStatus?: InputMaybe<Scalars['ObjectId']>;
  donationStatus_unset?: InputMaybe<Scalars['Boolean']>;
  donorId?: InputMaybe<Scalars['String']>;
  donorId_unset?: InputMaybe<Scalars['Boolean']>;
  ipAddress?: InputMaybe<Scalars['ObjectId']>;
  ipAddress_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  paymentGatewayId?: InputMaybe<Scalars['String']>;
  paymentGatewayId_unset?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['ObjectId']>;
  projectId_unset?: InputMaybe<Scalars['Boolean']>;
  transactionId?: InputMaybe<Scalars['String']>;
  transactionId_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type DonationPayment = {
  __typename?: 'DonationPayment';
  _id?: Maybe<Scalars['ObjectId']>;
  donationId?: Maybe<Scalars['ObjectId']>;
  errorCode?: Maybe<Scalars['String']>;
  errorData?: Maybe<Scalars['String']>;
  errorHeader?: Maybe<Scalars['String']>;
};

export type DonationPaymentInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  errorCode?: InputMaybe<Scalars['String']>;
  errorData?: InputMaybe<Scalars['String']>;
  errorHeader?: InputMaybe<Scalars['String']>;
};

export type DonationPaymentQueryInput = {
  AND?: InputMaybe<Array<DonationPaymentQueryInput>>;
  OR?: InputMaybe<Array<DonationPaymentQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  donationId_exists?: InputMaybe<Scalars['Boolean']>;
  donationId_gt?: InputMaybe<Scalars['ObjectId']>;
  donationId_gte?: InputMaybe<Scalars['ObjectId']>;
  donationId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donationId_lt?: InputMaybe<Scalars['ObjectId']>;
  donationId_lte?: InputMaybe<Scalars['ObjectId']>;
  donationId_ne?: InputMaybe<Scalars['ObjectId']>;
  donationId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  errorCode?: InputMaybe<Scalars['String']>;
  errorCode_exists?: InputMaybe<Scalars['Boolean']>;
  errorCode_gt?: InputMaybe<Scalars['String']>;
  errorCode_gte?: InputMaybe<Scalars['String']>;
  errorCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  errorCode_lt?: InputMaybe<Scalars['String']>;
  errorCode_lte?: InputMaybe<Scalars['String']>;
  errorCode_ne?: InputMaybe<Scalars['String']>;
  errorCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  errorData?: InputMaybe<Scalars['String']>;
  errorData_exists?: InputMaybe<Scalars['Boolean']>;
  errorData_gt?: InputMaybe<Scalars['String']>;
  errorData_gte?: InputMaybe<Scalars['String']>;
  errorData_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  errorData_lt?: InputMaybe<Scalars['String']>;
  errorData_lte?: InputMaybe<Scalars['String']>;
  errorData_ne?: InputMaybe<Scalars['String']>;
  errorData_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  errorHeader?: InputMaybe<Scalars['String']>;
  errorHeader_exists?: InputMaybe<Scalars['Boolean']>;
  errorHeader_gt?: InputMaybe<Scalars['String']>;
  errorHeader_gte?: InputMaybe<Scalars['String']>;
  errorHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  errorHeader_lt?: InputMaybe<Scalars['String']>;
  errorHeader_lte?: InputMaybe<Scalars['String']>;
  errorHeader_ne?: InputMaybe<Scalars['String']>;
  errorHeader_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum DonationPaymentSortByInput {
  DonationidAsc = 'DONATIONID_ASC',
  DonationidDesc = 'DONATIONID_DESC',
  ErrorcodeAsc = 'ERRORCODE_ASC',
  ErrorcodeDesc = 'ERRORCODE_DESC',
  ErrordataAsc = 'ERRORDATA_ASC',
  ErrordataDesc = 'ERRORDATA_DESC',
  ErrorheaderAsc = 'ERRORHEADER_ASC',
  ErrorheaderDesc = 'ERRORHEADER_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type DonationPaymentUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  donationId_unset?: InputMaybe<Scalars['Boolean']>;
  errorCode?: InputMaybe<Scalars['String']>;
  errorCode_unset?: InputMaybe<Scalars['Boolean']>;
  errorData?: InputMaybe<Scalars['String']>;
  errorData_unset?: InputMaybe<Scalars['Boolean']>;
  errorHeader?: InputMaybe<Scalars['String']>;
  errorHeader_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Donation_Log = {
  __typename?: 'Donation_log';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Campaign>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  donationStatus?: Maybe<Scalars['String']>;
  donorRealmId?: Maybe<Donor>;
  donorUserId?: Maybe<User>;
  lastErrorCode?: Maybe<Scalars['String']>;
  lastErrorData?: Maybe<Scalars['String']>;
  lastErrorHeader?: Maybe<Scalars['String']>;
  nonprofitRealmId?: Maybe<Nonprofit>;
  nonprofitUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Donation_LogCampaignIdRelationInput = {
  create?: InputMaybe<CampaignInsertInput>;
  link?: InputMaybe<Scalars['ObjectId']>;
};

export type Donation_LogDonorRealmIdRelationInput = {
  create?: InputMaybe<DonorInsertInput>;
  link?: InputMaybe<Scalars['ObjectId']>;
};

export type Donation_LogDonorUserIdRelationInput = {
  create?: InputMaybe<UserInsertInput>;
  link?: InputMaybe<Scalars['String']>;
};

export type Donation_LogInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  amount?: InputMaybe<Scalars['String']>;
  campaignId?: InputMaybe<Donation_LogCampaignIdRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency?: InputMaybe<Scalars['String']>;
  donationStatus?: InputMaybe<Scalars['String']>;
  donorRealmId?: InputMaybe<Donation_LogDonorRealmIdRelationInput>;
  donorUserId?: InputMaybe<Donation_LogDonorUserIdRelationInput>;
  lastErrorCode?: InputMaybe<Scalars['String']>;
  lastErrorData?: InputMaybe<Scalars['String']>;
  lastErrorHeader?: InputMaybe<Scalars['String']>;
  nonprofitRealmId?: InputMaybe<Donation_LogNonprofitRealmIdRelationInput>;
  nonprofitUserId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Donation_LogNonprofitRealmIdRelationInput = {
  create?: InputMaybe<NonprofitInsertInput>;
  link?: InputMaybe<Scalars['ObjectId']>;
};

export type Donation_LogQueryInput = {
  AND?: InputMaybe<Array<Donation_LogQueryInput>>;
  OR?: InputMaybe<Array<Donation_LogQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  amount?: InputMaybe<Scalars['String']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['String']>;
  amount_gte?: InputMaybe<Scalars['String']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amount_lt?: InputMaybe<Scalars['String']>;
  amount_lte?: InputMaybe<Scalars['String']>;
  amount_ne?: InputMaybe<Scalars['String']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId?: InputMaybe<CampaignQueryInput>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_ne?: InputMaybe<Scalars['DateTime']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationStatus?: InputMaybe<Scalars['String']>;
  donationStatus_exists?: InputMaybe<Scalars['Boolean']>;
  donationStatus_gt?: InputMaybe<Scalars['String']>;
  donationStatus_gte?: InputMaybe<Scalars['String']>;
  donationStatus_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationStatus_lt?: InputMaybe<Scalars['String']>;
  donationStatus_lte?: InputMaybe<Scalars['String']>;
  donationStatus_ne?: InputMaybe<Scalars['String']>;
  donationStatus_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorRealmId?: InputMaybe<DonorQueryInput>;
  donorRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  donorUserId?: InputMaybe<UserQueryInput>;
  donorUserId_exists?: InputMaybe<Scalars['Boolean']>;
  lastErrorCode?: InputMaybe<Scalars['String']>;
  lastErrorCode_exists?: InputMaybe<Scalars['Boolean']>;
  lastErrorCode_gt?: InputMaybe<Scalars['String']>;
  lastErrorCode_gte?: InputMaybe<Scalars['String']>;
  lastErrorCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastErrorCode_lt?: InputMaybe<Scalars['String']>;
  lastErrorCode_lte?: InputMaybe<Scalars['String']>;
  lastErrorCode_ne?: InputMaybe<Scalars['String']>;
  lastErrorCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastErrorData?: InputMaybe<Scalars['String']>;
  lastErrorData_exists?: InputMaybe<Scalars['Boolean']>;
  lastErrorData_gt?: InputMaybe<Scalars['String']>;
  lastErrorData_gte?: InputMaybe<Scalars['String']>;
  lastErrorData_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastErrorData_lt?: InputMaybe<Scalars['String']>;
  lastErrorData_lte?: InputMaybe<Scalars['String']>;
  lastErrorData_ne?: InputMaybe<Scalars['String']>;
  lastErrorData_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastErrorHeader?: InputMaybe<Scalars['String']>;
  lastErrorHeader_exists?: InputMaybe<Scalars['Boolean']>;
  lastErrorHeader_gt?: InputMaybe<Scalars['String']>;
  lastErrorHeader_gte?: InputMaybe<Scalars['String']>;
  lastErrorHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastErrorHeader_lt?: InputMaybe<Scalars['String']>;
  lastErrorHeader_lte?: InputMaybe<Scalars['String']>;
  lastErrorHeader_ne?: InputMaybe<Scalars['String']>;
  lastErrorHeader_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitRealmId?: InputMaybe<NonprofitQueryInput>;
  nonprofitRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  nonprofitUserId?: InputMaybe<Scalars['String']>;
  nonprofitUserId_exists?: InputMaybe<Scalars['Boolean']>;
  nonprofitUserId_gt?: InputMaybe<Scalars['String']>;
  nonprofitUserId_gte?: InputMaybe<Scalars['String']>;
  nonprofitUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitUserId_lt?: InputMaybe<Scalars['String']>;
  nonprofitUserId_lte?: InputMaybe<Scalars['String']>;
  nonprofitUserId_ne?: InputMaybe<Scalars['String']>;
  nonprofitUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum Donation_LogSortByInput {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DonationstatusAsc = 'DONATIONSTATUS_ASC',
  DonationstatusDesc = 'DONATIONSTATUS_DESC',
  DonorrealmidAsc = 'DONORREALMID_ASC',
  DonorrealmidDesc = 'DONORREALMID_DESC',
  DonoruseridAsc = 'DONORUSERID_ASC',
  DonoruseridDesc = 'DONORUSERID_DESC',
  LasterrorcodeAsc = 'LASTERRORCODE_ASC',
  LasterrorcodeDesc = 'LASTERRORCODE_DESC',
  LasterrordataAsc = 'LASTERRORDATA_ASC',
  LasterrordataDesc = 'LASTERRORDATA_DESC',
  LasterrorheaderAsc = 'LASTERRORHEADER_ASC',
  LasterrorheaderDesc = 'LASTERRORHEADER_DESC',
  NonprofitrealmidAsc = 'NONPROFITREALMID_ASC',
  NonprofitrealmidDesc = 'NONPROFITREALMID_DESC',
  NonprofituseridAsc = 'NONPROFITUSERID_ASC',
  NonprofituseridDesc = 'NONPROFITUSERID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Donation_LogUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['String']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Donation_LogCampaignIdRelationInput>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  donationStatus?: InputMaybe<Scalars['String']>;
  donationStatus_unset?: InputMaybe<Scalars['Boolean']>;
  donorRealmId?: InputMaybe<Donation_LogDonorRealmIdRelationInput>;
  donorRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  donorUserId?: InputMaybe<Donation_LogDonorUserIdRelationInput>;
  donorUserId_unset?: InputMaybe<Scalars['Boolean']>;
  lastErrorCode?: InputMaybe<Scalars['String']>;
  lastErrorCode_unset?: InputMaybe<Scalars['Boolean']>;
  lastErrorData?: InputMaybe<Scalars['String']>;
  lastErrorData_unset?: InputMaybe<Scalars['Boolean']>;
  lastErrorHeader?: InputMaybe<Scalars['String']>;
  lastErrorHeader_unset?: InputMaybe<Scalars['Boolean']>;
  nonprofitRealmId?: InputMaybe<Donation_LogNonprofitRealmIdRelationInput>;
  nonprofitRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  nonprofitUserId?: InputMaybe<Scalars['String']>;
  nonprofitUserId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Donor = {
  __typename?: 'Donor';
  _id?: Maybe<Scalars['ObjectId']>;
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  ownerRealmId?: Maybe<Scalars['ObjectId']>;
  ownerUserId?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type DonorInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type DonorQueryInput = {
  AND?: InputMaybe<Array<DonorQueryInput>>;
  OR?: InputMaybe<Array<DonorQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  about?: InputMaybe<Scalars['String']>;
  about_exists?: InputMaybe<Scalars['Boolean']>;
  about_gt?: InputMaybe<Scalars['String']>;
  about_gte?: InputMaybe<Scalars['String']>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  about_lt?: InputMaybe<Scalars['String']>;
  about_lte?: InputMaybe<Scalars['String']>;
  about_ne?: InputMaybe<Scalars['String']>;
  about_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country?: InputMaybe<Scalars['String']>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  country_gt?: InputMaybe<Scalars['String']>;
  country_gte?: InputMaybe<Scalars['String']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_lt?: InputMaybe<Scalars['String']>;
  country_lte?: InputMaybe<Scalars['String']>;
  country_ne?: InputMaybe<Scalars['String']>;
  country_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_gt?: InputMaybe<Scalars['String']>;
  facebook_gte?: InputMaybe<Scalars['String']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_lt?: InputMaybe<Scalars['String']>;
  facebook_lte?: InputMaybe<Scalars['String']>;
  facebook_ne?: InputMaybe<Scalars['String']>;
  facebook_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']>;
  firstName_gt?: InputMaybe<Scalars['String']>;
  firstName_gte?: InputMaybe<Scalars['String']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName_lt?: InputMaybe<Scalars['String']>;
  firstName_lte?: InputMaybe<Scalars['String']>;
  firstName_ne?: InputMaybe<Scalars['String']>;
  firstName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  gender_exists?: InputMaybe<Scalars['Boolean']>;
  gender_gt?: InputMaybe<Scalars['String']>;
  gender_gte?: InputMaybe<Scalars['String']>;
  gender_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender_lt?: InputMaybe<Scalars['String']>;
  gender_lte?: InputMaybe<Scalars['String']>;
  gender_ne?: InputMaybe<Scalars['String']>;
  gender_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']>;
  lastName_gt?: InputMaybe<Scalars['String']>;
  lastName_gte?: InputMaybe<Scalars['String']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_lt?: InputMaybe<Scalars['String']>;
  lastName_lte?: InputMaybe<Scalars['String']>;
  lastName_ne?: InputMaybe<Scalars['String']>;
  lastName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_exists?: InputMaybe<Scalars['Boolean']>;
  linkedin_gt?: InputMaybe<Scalars['String']>;
  linkedin_gte?: InputMaybe<Scalars['String']>;
  linkedin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin_lt?: InputMaybe<Scalars['String']>;
  linkedin_lte?: InputMaybe<Scalars['String']>;
  linkedin_ne?: InputMaybe<Scalars['String']>;
  linkedin_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobile?: InputMaybe<Scalars['String']>;
  mobile_exists?: InputMaybe<Scalars['Boolean']>;
  mobile_gt?: InputMaybe<Scalars['String']>;
  mobile_gte?: InputMaybe<Scalars['String']>;
  mobile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mobile_lt?: InputMaybe<Scalars['String']>;
  mobile_lte?: InputMaybe<Scalars['String']>;
  mobile_ne?: InputMaybe<Scalars['String']>;
  mobile_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePic?: InputMaybe<Scalars['String']>;
  profilePic_exists?: InputMaybe<Scalars['Boolean']>;
  profilePic_gt?: InputMaybe<Scalars['String']>;
  profilePic_gte?: InputMaybe<Scalars['String']>;
  profilePic_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePic_lt?: InputMaybe<Scalars['String']>;
  profilePic_lte?: InputMaybe<Scalars['String']>;
  profilePic_ne?: InputMaybe<Scalars['String']>;
  profilePic_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Scalars['String']>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_gt?: InputMaybe<Scalars['String']>;
  state_gte?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_lt?: InputMaybe<Scalars['String']>;
  state_lte?: InputMaybe<Scalars['String']>;
  state_ne?: InputMaybe<Scalars['String']>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_gt?: InputMaybe<Scalars['String']>;
  twitter_gte?: InputMaybe<Scalars['String']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_lt?: InputMaybe<Scalars['String']>;
  twitter_lte?: InputMaybe<Scalars['String']>;
  twitter_ne?: InputMaybe<Scalars['String']>;
  twitter_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum DonorSortByInput {
  AboutAsc = 'ABOUT_ASC',
  AboutDesc = 'ABOUT_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FacebookAsc = 'FACEBOOK_ASC',
  FacebookDesc = 'FACEBOOK_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  LinkedinAsc = 'LINKEDIN_ASC',
  LinkedinDesc = 'LINKEDIN_DESC',
  MobileAsc = 'MOBILE_ASC',
  MobileDesc = 'MOBILE_DESC',
  OwnerrealmidAsc = 'OWNERREALMID_ASC',
  OwnerrealmidDesc = 'OWNERREALMID_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  ProfilepicAsc = 'PROFILEPIC_ASC',
  ProfilepicDesc = 'PROFILEPIC_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  TwitterAsc = 'TWITTER_ASC',
  TwitterDesc = 'TWITTER_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type DonorUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  about?: InputMaybe<Scalars['String']>;
  about_unset?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  address_unset?: InputMaybe<Scalars['Boolean']>;
  country?: InputMaybe<Scalars['String']>;
  country_unset?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_unset?: InputMaybe<Scalars['Boolean']>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_unset?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  firstName_unset?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<Scalars['String']>;
  gender_unset?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_unset?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_unset?: InputMaybe<Scalars['Boolean']>;
  mobile?: InputMaybe<Scalars['String']>;
  mobile_unset?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  profilePic?: InputMaybe<Scalars['String']>;
  profilePic_unset?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<Scalars['String']>;
  state_unset?: InputMaybe<Scalars['Boolean']>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ForgotPassword = {
  email?: InputMaybe<Scalars['String']>;
};

export type GetDonorList = {
  campaignId?: InputMaybe<Scalars['String']>;
};

export type GetDonorListResult = {
  __typename?: 'GetDonorListResult';
  donorNameList?: Maybe<Array<Maybe<GetDonorListResultDonorNameList>>>;
};

export type GetDonorListResultDonorNameList = {
  __typename?: 'GetDonorListResultDonorNameList';
  name?: Maybe<Scalars['String']>;
};

export type GetNonProfitDonorList = {
  nonprofitId?: InputMaybe<Scalars['String']>;
};

export type GetRegionFunctionPayload = {
  __typename?: 'GetRegionFunctionPayload';
  ipify?: Maybe<Scalars['String']>;
};

export type Gift = {
  __typename?: 'Gift';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['String']>;
  beneficiaryName?: Maybe<Scalars['String']>;
  beneficiaryPhoneNumber?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['ObjectId']>;
  cardTemplate?: Maybe<Scalars['String']>;
  copyToSms?: Maybe<Scalars['Boolean']>;
  countryOrigin?: Maybe<Scalars['String']>;
  donationArea?: Maybe<Scalars['String']>;
  donorRealmId?: Maybe<Scalars['ObjectId']>;
  donorUserId?: Maybe<Scalars['String']>;
  hideAmount?: Maybe<Scalars['Boolean']>;
  senderName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GiftInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  amount?: InputMaybe<Scalars['String']>;
  beneficiaryName?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber?: InputMaybe<Scalars['String']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  cardTemplate?: InputMaybe<Scalars['String']>;
  copyToSms?: InputMaybe<Scalars['Boolean']>;
  countryOrigin?: InputMaybe<Scalars['String']>;
  donationArea?: InputMaybe<Scalars['String']>;
  donorRealmId?: InputMaybe<Scalars['ObjectId']>;
  donorUserId?: InputMaybe<Scalars['String']>;
  hideAmount?: InputMaybe<Scalars['Boolean']>;
  senderName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type GiftQueryInput = {
  AND?: InputMaybe<Array<GiftQueryInput>>;
  OR?: InputMaybe<Array<GiftQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  amount?: InputMaybe<Scalars['String']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['String']>;
  amount_gte?: InputMaybe<Scalars['String']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amount_lt?: InputMaybe<Scalars['String']>;
  amount_lte?: InputMaybe<Scalars['String']>;
  amount_ne?: InputMaybe<Scalars['String']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beneficiaryName?: InputMaybe<Scalars['String']>;
  beneficiaryName_exists?: InputMaybe<Scalars['Boolean']>;
  beneficiaryName_gt?: InputMaybe<Scalars['String']>;
  beneficiaryName_gte?: InputMaybe<Scalars['String']>;
  beneficiaryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beneficiaryName_lt?: InputMaybe<Scalars['String']>;
  beneficiaryName_lte?: InputMaybe<Scalars['String']>;
  beneficiaryName_ne?: InputMaybe<Scalars['String']>;
  beneficiaryName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beneficiaryPhoneNumber?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  beneficiaryPhoneNumber_gt?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_gte?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  beneficiaryPhoneNumber_lt?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_lte?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_ne?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_gte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  campaignId_lt?: InputMaybe<Scalars['ObjectId']>;
  campaignId_lte?: InputMaybe<Scalars['ObjectId']>;
  campaignId_ne?: InputMaybe<Scalars['ObjectId']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  cardTemplate?: InputMaybe<Scalars['String']>;
  cardTemplate_exists?: InputMaybe<Scalars['Boolean']>;
  cardTemplate_gt?: InputMaybe<Scalars['String']>;
  cardTemplate_gte?: InputMaybe<Scalars['String']>;
  cardTemplate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cardTemplate_lt?: InputMaybe<Scalars['String']>;
  cardTemplate_lte?: InputMaybe<Scalars['String']>;
  cardTemplate_ne?: InputMaybe<Scalars['String']>;
  cardTemplate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyToSms?: InputMaybe<Scalars['Boolean']>;
  copyToSms_exists?: InputMaybe<Scalars['Boolean']>;
  copyToSms_ne?: InputMaybe<Scalars['Boolean']>;
  countryOrigin?: InputMaybe<Scalars['String']>;
  countryOrigin_exists?: InputMaybe<Scalars['Boolean']>;
  countryOrigin_gt?: InputMaybe<Scalars['String']>;
  countryOrigin_gte?: InputMaybe<Scalars['String']>;
  countryOrigin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryOrigin_lt?: InputMaybe<Scalars['String']>;
  countryOrigin_lte?: InputMaybe<Scalars['String']>;
  countryOrigin_ne?: InputMaybe<Scalars['String']>;
  countryOrigin_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationArea?: InputMaybe<Scalars['String']>;
  donationArea_exists?: InputMaybe<Scalars['Boolean']>;
  donationArea_gt?: InputMaybe<Scalars['String']>;
  donationArea_gte?: InputMaybe<Scalars['String']>;
  donationArea_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationArea_lt?: InputMaybe<Scalars['String']>;
  donationArea_lte?: InputMaybe<Scalars['String']>;
  donationArea_ne?: InputMaybe<Scalars['String']>;
  donationArea_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorRealmId?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  donorRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donorRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donorUserId?: InputMaybe<Scalars['String']>;
  donorUserId_exists?: InputMaybe<Scalars['Boolean']>;
  donorUserId_gt?: InputMaybe<Scalars['String']>;
  donorUserId_gte?: InputMaybe<Scalars['String']>;
  donorUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorUserId_lt?: InputMaybe<Scalars['String']>;
  donorUserId_lte?: InputMaybe<Scalars['String']>;
  donorUserId_ne?: InputMaybe<Scalars['String']>;
  donorUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hideAmount?: InputMaybe<Scalars['Boolean']>;
  hideAmount_exists?: InputMaybe<Scalars['Boolean']>;
  hideAmount_ne?: InputMaybe<Scalars['Boolean']>;
  senderName?: InputMaybe<Scalars['String']>;
  senderName_exists?: InputMaybe<Scalars['Boolean']>;
  senderName_gt?: InputMaybe<Scalars['String']>;
  senderName_gte?: InputMaybe<Scalars['String']>;
  senderName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  senderName_lt?: InputMaybe<Scalars['String']>;
  senderName_lte?: InputMaybe<Scalars['String']>;
  senderName_ne?: InputMaybe<Scalars['String']>;
  senderName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum GiftSortByInput {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  BeneficiarynameAsc = 'BENEFICIARYNAME_ASC',
  BeneficiarynameDesc = 'BENEFICIARYNAME_DESC',
  BeneficiaryphonenumberAsc = 'BENEFICIARYPHONENUMBER_ASC',
  BeneficiaryphonenumberDesc = 'BENEFICIARYPHONENUMBER_DESC',
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CardtemplateAsc = 'CARDTEMPLATE_ASC',
  CardtemplateDesc = 'CARDTEMPLATE_DESC',
  CountryoriginAsc = 'COUNTRYORIGIN_ASC',
  CountryoriginDesc = 'COUNTRYORIGIN_DESC',
  DonationareaAsc = 'DONATIONAREA_ASC',
  DonationareaDesc = 'DONATIONAREA_DESC',
  DonorrealmidAsc = 'DONORREALMID_ASC',
  DonorrealmidDesc = 'DONORREALMID_DESC',
  DonoruseridAsc = 'DONORUSERID_ASC',
  DonoruseridDesc = 'DONORUSERID_DESC',
  SendernameAsc = 'SENDERNAME_ASC',
  SendernameDesc = 'SENDERNAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type GiftUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['String']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  beneficiaryName?: InputMaybe<Scalars['String']>;
  beneficiaryName_unset?: InputMaybe<Scalars['Boolean']>;
  beneficiaryPhoneNumber?: InputMaybe<Scalars['String']>;
  beneficiaryPhoneNumber_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['ObjectId']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  cardTemplate?: InputMaybe<Scalars['String']>;
  cardTemplate_unset?: InputMaybe<Scalars['Boolean']>;
  copyToSms?: InputMaybe<Scalars['Boolean']>;
  copyToSms_unset?: InputMaybe<Scalars['Boolean']>;
  countryOrigin?: InputMaybe<Scalars['String']>;
  countryOrigin_unset?: InputMaybe<Scalars['Boolean']>;
  donationArea?: InputMaybe<Scalars['String']>;
  donationArea_unset?: InputMaybe<Scalars['Boolean']>;
  donorRealmId?: InputMaybe<Scalars['ObjectId']>;
  donorRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  donorUserId?: InputMaybe<Scalars['String']>;
  donorUserId_unset?: InputMaybe<Scalars['Boolean']>;
  hideAmount?: InputMaybe<Scalars['Boolean']>;
  hideAmount_unset?: InputMaybe<Scalars['Boolean']>;
  senderName?: InputMaybe<Scalars['String']>;
  senderName_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
};

export type InsertFusionAuthUser = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordChangeRequired?: InputMaybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Item = {
  __typename?: 'Item';
  _id?: Maybe<Scalars['ObjectId']>;
  category?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  defaultPrice?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  totalNeed?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['String']>;
};

export type ItemInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  category?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  defaultPrice?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  totalNeed?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['String']>;
};

export type ItemQueryInput = {
  AND?: InputMaybe<Array<ItemQueryInput>>;
  OR?: InputMaybe<Array<ItemQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  category?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_gt?: InputMaybe<Scalars['String']>;
  category_gte?: InputMaybe<Scalars['String']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_lt?: InputMaybe<Scalars['String']>;
  category_lte?: InputMaybe<Scalars['String']>;
  category_ne?: InputMaybe<Scalars['String']>;
  category_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  coverImage_gt?: InputMaybe<Scalars['String']>;
  coverImage_gte?: InputMaybe<Scalars['String']>;
  coverImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage_lt?: InputMaybe<Scalars['String']>;
  coverImage_lte?: InputMaybe<Scalars['String']>;
  coverImage_ne?: InputMaybe<Scalars['String']>;
  coverImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultPrice?: InputMaybe<Scalars['String']>;
  defaultPrice_exists?: InputMaybe<Scalars['Boolean']>;
  defaultPrice_gt?: InputMaybe<Scalars['String']>;
  defaultPrice_gte?: InputMaybe<Scalars['String']>;
  defaultPrice_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultPrice_lt?: InputMaybe<Scalars['String']>;
  defaultPrice_lte?: InputMaybe<Scalars['String']>;
  defaultPrice_ne?: InputMaybe<Scalars['String']>;
  defaultPrice_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1?: InputMaybe<Scalars['String']>;
  image1_exists?: InputMaybe<Scalars['Boolean']>;
  image1_gt?: InputMaybe<Scalars['String']>;
  image1_gte?: InputMaybe<Scalars['String']>;
  image1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1_lt?: InputMaybe<Scalars['String']>;
  image1_lte?: InputMaybe<Scalars['String']>;
  image1_ne?: InputMaybe<Scalars['String']>;
  image1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2?: InputMaybe<Scalars['String']>;
  image2_exists?: InputMaybe<Scalars['Boolean']>;
  image2_gt?: InputMaybe<Scalars['String']>;
  image2_gte?: InputMaybe<Scalars['String']>;
  image2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2_lt?: InputMaybe<Scalars['String']>;
  image2_lte?: InputMaybe<Scalars['String']>;
  image2_ne?: InputMaybe<Scalars['String']>;
  image2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3?: InputMaybe<Scalars['String']>;
  image3_exists?: InputMaybe<Scalars['Boolean']>;
  image3_gt?: InputMaybe<Scalars['String']>;
  image3_gte?: InputMaybe<Scalars['String']>;
  image3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3_lt?: InputMaybe<Scalars['String']>;
  image3_lte?: InputMaybe<Scalars['String']>;
  image3_ne?: InputMaybe<Scalars['String']>;
  image3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_exists?: InputMaybe<Scalars['Boolean']>;
  isPublished_gt?: InputMaybe<Scalars['String']>;
  isPublished_gte?: InputMaybe<Scalars['String']>;
  isPublished_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished_lt?: InputMaybe<Scalars['String']>;
  isPublished_lte?: InputMaybe<Scalars['String']>;
  isPublished_ne?: InputMaybe<Scalars['String']>;
  isPublished_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  itemId?: InputMaybe<Scalars['String']>;
  itemId_exists?: InputMaybe<Scalars['Boolean']>;
  itemId_gt?: InputMaybe<Scalars['String']>;
  itemId_gte?: InputMaybe<Scalars['String']>;
  itemId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  itemId_lt?: InputMaybe<Scalars['String']>;
  itemId_lte?: InputMaybe<Scalars['String']>;
  itemId_ne?: InputMaybe<Scalars['String']>;
  itemId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_exists?: InputMaybe<Scalars['Boolean']>;
  projectId_gt?: InputMaybe<Scalars['String']>;
  projectId_gte?: InputMaybe<Scalars['String']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId_lt?: InputMaybe<Scalars['String']>;
  projectId_lte?: InputMaybe<Scalars['String']>;
  projectId_ne?: InputMaybe<Scalars['String']>;
  projectId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalNeed?: InputMaybe<Scalars['String']>;
  totalNeed_exists?: InputMaybe<Scalars['Boolean']>;
  totalNeed_gt?: InputMaybe<Scalars['String']>;
  totalNeed_gte?: InputMaybe<Scalars['String']>;
  totalNeed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalNeed_lt?: InputMaybe<Scalars['String']>;
  totalNeed_lte?: InputMaybe<Scalars['String']>;
  totalNeed_ne?: InputMaybe<Scalars['String']>;
  totalNeed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updateAt?: InputMaybe<Scalars['String']>;
  updateAt_exists?: InputMaybe<Scalars['Boolean']>;
  updateAt_gt?: InputMaybe<Scalars['String']>;
  updateAt_gte?: InputMaybe<Scalars['String']>;
  updateAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updateAt_lt?: InputMaybe<Scalars['String']>;
  updateAt_lte?: InputMaybe<Scalars['String']>;
  updateAt_ne?: InputMaybe<Scalars['String']>;
  updateAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ItemSortByInput {
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  CoverimageAsc = 'COVERIMAGE_ASC',
  CoverimageDesc = 'COVERIMAGE_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DefaultpriceAsc = 'DEFAULTPRICE_ASC',
  DefaultpriceDesc = 'DEFAULTPRICE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Image1Asc = 'IMAGE1_ASC',
  Image1Desc = 'IMAGE1_DESC',
  Image2Asc = 'IMAGE2_ASC',
  Image2Desc = 'IMAGE2_DESC',
  Image3Asc = 'IMAGE3_ASC',
  Image3Desc = 'IMAGE3_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  IspublishedAsc = 'ISPUBLISHED_ASC',
  IspublishedDesc = 'ISPUBLISHED_DESC',
  ItemidAsc = 'ITEMID_ASC',
  ItemidDesc = 'ITEMID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProjectidAsc = 'PROJECTID_ASC',
  ProjectidDesc = 'PROJECTID_DESC',
  TotalneedAsc = 'TOTALNEED_ASC',
  TotalneedDesc = 'TOTALNEED_DESC',
  UpdateatAsc = 'UPDATEAT_ASC',
  UpdateatDesc = 'UPDATEAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ItemUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['String']>;
  category_unset?: InputMaybe<Scalars['Boolean']>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  defaultPrice?: InputMaybe<Scalars['String']>;
  defaultPrice_unset?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_unset?: InputMaybe<Scalars['Boolean']>;
  image1?: InputMaybe<Scalars['String']>;
  image1_unset?: InputMaybe<Scalars['Boolean']>;
  image2?: InputMaybe<Scalars['String']>;
  image2_unset?: InputMaybe<Scalars['Boolean']>;
  image3?: InputMaybe<Scalars['String']>;
  image3_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_unset?: InputMaybe<Scalars['Boolean']>;
  itemId?: InputMaybe<Scalars['String']>;
  itemId_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_unset?: InputMaybe<Scalars['Boolean']>;
  totalNeed?: InputMaybe<Scalars['String']>;
  totalNeed_unset?: InputMaybe<Scalars['Boolean']>;
  updateAt?: InputMaybe<Scalars['String']>;
  updateAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyAffiliations?: Maybe<DeleteManyPayload>;
  deleteManyArticles?: Maybe<DeleteManyPayload>;
  deleteManyCampaignActivities?: Maybe<DeleteManyPayload>;
  deleteManyCampaignNotificationReports?: Maybe<DeleteManyPayload>;
  deleteManyCampaignVendorLogs?: Maybe<DeleteManyPayload>;
  deleteManyCampaigns?: Maybe<DeleteManyPayload>;
  deleteManyChartData?: Maybe<DeleteManyPayload>;
  deleteManyCommerces?: Maybe<DeleteManyPayload>;
  deleteManyDonationLogs?: Maybe<DeleteManyPayload>;
  deleteManyDonationPayments?: Maybe<DeleteManyPayload>;
  deleteManyDonation_logs?: Maybe<DeleteManyPayload>;
  deleteManyDonors?: Maybe<DeleteManyPayload>;
  deleteManyGifts?: Maybe<DeleteManyPayload>;
  deleteManyItems?: Maybe<DeleteManyPayload>;
  deleteManyNonprofitAppearances?: Maybe<DeleteManyPayload>;
  deleteManyNonprofitSecrets?: Maybe<DeleteManyPayload>;
  deleteManyNonprofits?: Maybe<DeleteManyPayload>;
  deleteManyOperators?: Maybe<DeleteManyPayload>;
  deleteManyOrganizationTeams?: Maybe<DeleteManyPayload>;
  deleteManyOrganizations?: Maybe<DeleteManyPayload>;
  deleteManyPaymentData?: Maybe<DeleteManyPayload>;
  deleteManyPaymentGateways?: Maybe<DeleteManyPayload>;
  deleteManyProjectOperatorMaps?: Maybe<DeleteManyPayload>;
  deleteManyProjects?: Maybe<DeleteManyPayload>;
  deleteManyTasks?: Maybe<DeleteManyPayload>;
  deleteManyTestRaises?: Maybe<DeleteManyPayload>;
  deleteManyTicketLogs?: Maybe<DeleteManyPayload>;
  deleteManyTmraInfos?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteManyVendors?: Maybe<DeleteManyPayload>;
  deleteManyVolunteerTaskLogs?: Maybe<DeleteManyPayload>;
  deleteManyVolunteers?: Maybe<DeleteManyPayload>;
  deleteOneAffiliation?: Maybe<Affiliation>;
  deleteOneArticle?: Maybe<Article>;
  deleteOneCampaign?: Maybe<Campaign>;
  deleteOneCampaignActivity?: Maybe<CampaignActivity>;
  deleteOneCampaignNotificationReport?: Maybe<CampaignNotificationReport>;
  deleteOneCampaignVendorLog?: Maybe<CampaignVendorLog>;
  deleteOneChartDatum?: Maybe<ChartDatum>;
  deleteOneCommerce?: Maybe<Commerce>;
  deleteOneDonationLog?: Maybe<DonationLog>;
  deleteOneDonationPayment?: Maybe<DonationPayment>;
  deleteOneDonation_log?: Maybe<Donation_Log>;
  deleteOneDonor?: Maybe<Donor>;
  deleteOneGift?: Maybe<Gift>;
  deleteOneItem?: Maybe<Item>;
  deleteOneNonprofit?: Maybe<Nonprofit>;
  deleteOneNonprofitAppearance?: Maybe<NonprofitAppearance>;
  deleteOneNonprofitSecret?: Maybe<NonprofitSecret>;
  deleteOneOperator?: Maybe<Operator>;
  deleteOneOrganization?: Maybe<Organization>;
  deleteOneOrganizationTeam?: Maybe<OrganizationTeam>;
  deleteOnePaymentDatum?: Maybe<PaymentDatum>;
  deleteOnePaymentGateway?: Maybe<PaymentGateway>;
  deleteOneProject?: Maybe<Project>;
  deleteOneProjectOperatorMap?: Maybe<ProjectOperatorMap>;
  deleteOneTask?: Maybe<Task>;
  deleteOneTestRaise?: Maybe<TestRaise>;
  deleteOneTicketLog?: Maybe<TicketLog>;
  deleteOneTmraInfo?: Maybe<TmraInfo>;
  deleteOneUser?: Maybe<User>;
  deleteOneVendor?: Maybe<Vendor>;
  deleteOneVolunteer?: Maybe<Volunteer>;
  deleteOneVolunteerTaskLog?: Maybe<VolunteerTaskLog>;
  forgotPassword?: Maybe<SuccessForgot>;
  getDonorList?: Maybe<GetDonorListResult>;
  insertFusionAuthUser?: Maybe<Success>;
  insertManyAffiliations?: Maybe<InsertManyPayload>;
  insertManyArticles?: Maybe<InsertManyPayload>;
  insertManyCampaignActivities?: Maybe<InsertManyPayload>;
  insertManyCampaignNotificationReports?: Maybe<InsertManyPayload>;
  insertManyCampaignVendorLogs?: Maybe<InsertManyPayload>;
  insertManyCampaigns?: Maybe<InsertManyPayload>;
  insertManyChartData?: Maybe<InsertManyPayload>;
  insertManyCommerces?: Maybe<InsertManyPayload>;
  insertManyDonationLogs?: Maybe<InsertManyPayload>;
  insertManyDonationPayments?: Maybe<InsertManyPayload>;
  insertManyDonation_logs?: Maybe<InsertManyPayload>;
  insertManyDonors?: Maybe<InsertManyPayload>;
  insertManyGifts?: Maybe<InsertManyPayload>;
  insertManyItems?: Maybe<InsertManyPayload>;
  insertManyNonprofitAppearances?: Maybe<InsertManyPayload>;
  insertManyNonprofitSecrets?: Maybe<InsertManyPayload>;
  insertManyNonprofits?: Maybe<InsertManyPayload>;
  insertManyOperators?: Maybe<InsertManyPayload>;
  insertManyOrganizationTeams?: Maybe<InsertManyPayload>;
  insertManyOrganizations?: Maybe<InsertManyPayload>;
  insertManyPaymentData?: Maybe<InsertManyPayload>;
  insertManyPaymentGateways?: Maybe<InsertManyPayload>;
  insertManyProjectOperatorMaps?: Maybe<InsertManyPayload>;
  insertManyProjects?: Maybe<InsertManyPayload>;
  insertManyTasks?: Maybe<InsertManyPayload>;
  insertManyTestRaises?: Maybe<InsertManyPayload>;
  insertManyTicketLogs?: Maybe<InsertManyPayload>;
  insertManyTmraInfos?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertManyVendors?: Maybe<InsertManyPayload>;
  insertManyVolunteerTaskLogs?: Maybe<InsertManyPayload>;
  insertManyVolunteers?: Maybe<InsertManyPayload>;
  insertOneAffiliation?: Maybe<Affiliation>;
  insertOneArticle?: Maybe<Article>;
  insertOneCampaign?: Maybe<Campaign>;
  insertOneCampaignActivity?: Maybe<CampaignActivity>;
  insertOneCampaignNotificationReport?: Maybe<CampaignNotificationReport>;
  insertOneCampaignVendorLog?: Maybe<CampaignVendorLog>;
  insertOneChartDatum?: Maybe<ChartDatum>;
  insertOneCommerce?: Maybe<Commerce>;
  insertOneDonationLog?: Maybe<DonationLog>;
  insertOneDonationPayment?: Maybe<DonationPayment>;
  insertOneDonation_log?: Maybe<Donation_Log>;
  insertOneDonor?: Maybe<Donor>;
  insertOneGift?: Maybe<Gift>;
  insertOneItem?: Maybe<Item>;
  insertOneNonprofit?: Maybe<Nonprofit>;
  insertOneNonprofitAppearance?: Maybe<NonprofitAppearance>;
  insertOneNonprofitSecret?: Maybe<NonprofitSecret>;
  insertOneOperator?: Maybe<Operator>;
  insertOneOrganization?: Maybe<Organization>;
  insertOneOrganizationTeam?: Maybe<OrganizationTeam>;
  insertOnePaymentDatum?: Maybe<PaymentDatum>;
  insertOnePaymentGateway?: Maybe<PaymentGateway>;
  insertOneProject?: Maybe<Project>;
  insertOneProjectOperatorMap?: Maybe<ProjectOperatorMap>;
  insertOneTask?: Maybe<Task>;
  insertOneTestRaise?: Maybe<TestRaise>;
  insertOneTicketLog?: Maybe<TicketLog>;
  insertOneTmraInfo?: Maybe<TmraInfo>;
  insertOneUser?: Maybe<User>;
  insertOneVendor?: Maybe<Vendor>;
  insertOneVolunteer?: Maybe<Volunteer>;
  insertOneVolunteerTaskLog?: Maybe<VolunteerTaskLog>;
  nonprofitDonorList?: Maybe<NonProfitDonorListResult>;
  replaceOneAffiliation?: Maybe<Affiliation>;
  replaceOneArticle?: Maybe<Article>;
  replaceOneCampaign?: Maybe<Campaign>;
  replaceOneCampaignActivity?: Maybe<CampaignActivity>;
  replaceOneCampaignNotificationReport?: Maybe<CampaignNotificationReport>;
  replaceOneCampaignVendorLog?: Maybe<CampaignVendorLog>;
  replaceOneChartDatum?: Maybe<ChartDatum>;
  replaceOneCommerce?: Maybe<Commerce>;
  replaceOneDonationLog?: Maybe<DonationLog>;
  replaceOneDonationPayment?: Maybe<DonationPayment>;
  replaceOneDonation_log?: Maybe<Donation_Log>;
  replaceOneDonor?: Maybe<Donor>;
  replaceOneGift?: Maybe<Gift>;
  replaceOneItem?: Maybe<Item>;
  replaceOneNonprofit?: Maybe<Nonprofit>;
  replaceOneNonprofitAppearance?: Maybe<NonprofitAppearance>;
  replaceOneNonprofitSecret?: Maybe<NonprofitSecret>;
  replaceOneOperator?: Maybe<Operator>;
  replaceOneOrganization?: Maybe<Organization>;
  replaceOneOrganizationTeam?: Maybe<OrganizationTeam>;
  replaceOnePaymentDatum?: Maybe<PaymentDatum>;
  replaceOnePaymentGateway?: Maybe<PaymentGateway>;
  replaceOneProject?: Maybe<Project>;
  replaceOneProjectOperatorMap?: Maybe<ProjectOperatorMap>;
  replaceOneTask?: Maybe<Task>;
  replaceOneTestRaise?: Maybe<TestRaise>;
  replaceOneTicketLog?: Maybe<TicketLog>;
  replaceOneTmraInfo?: Maybe<TmraInfo>;
  replaceOneUser?: Maybe<User>;
  replaceOneVendor?: Maybe<Vendor>;
  replaceOneVolunteer?: Maybe<Volunteer>;
  replaceOneVolunteerTaskLog?: Maybe<VolunteerTaskLog>;
  updateManyAffiliations?: Maybe<UpdateManyPayload>;
  updateManyArticles?: Maybe<UpdateManyPayload>;
  updateManyCampaignActivities?: Maybe<UpdateManyPayload>;
  updateManyCampaignNotificationReports?: Maybe<UpdateManyPayload>;
  updateManyCampaignVendorLogs?: Maybe<UpdateManyPayload>;
  updateManyCampaigns?: Maybe<UpdateManyPayload>;
  updateManyChartData?: Maybe<UpdateManyPayload>;
  updateManyCommerces?: Maybe<UpdateManyPayload>;
  updateManyDonationLogs?: Maybe<UpdateManyPayload>;
  updateManyDonationPayments?: Maybe<UpdateManyPayload>;
  updateManyDonation_logs?: Maybe<UpdateManyPayload>;
  updateManyDonors?: Maybe<UpdateManyPayload>;
  updateManyGifts?: Maybe<UpdateManyPayload>;
  updateManyItems?: Maybe<UpdateManyPayload>;
  updateManyNonprofitAppearances?: Maybe<UpdateManyPayload>;
  updateManyNonprofitSecrets?: Maybe<UpdateManyPayload>;
  updateManyNonprofits?: Maybe<UpdateManyPayload>;
  updateManyOperators?: Maybe<UpdateManyPayload>;
  updateManyOrganizationTeams?: Maybe<UpdateManyPayload>;
  updateManyOrganizations?: Maybe<UpdateManyPayload>;
  updateManyPaymentData?: Maybe<UpdateManyPayload>;
  updateManyPaymentGateways?: Maybe<UpdateManyPayload>;
  updateManyProjectOperatorMaps?: Maybe<UpdateManyPayload>;
  updateManyProjects?: Maybe<UpdateManyPayload>;
  updateManyTasks?: Maybe<UpdateManyPayload>;
  updateManyTestRaises?: Maybe<UpdateManyPayload>;
  updateManyTicketLogs?: Maybe<UpdateManyPayload>;
  updateManyTmraInfos?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateManyVendors?: Maybe<UpdateManyPayload>;
  updateManyVolunteerTaskLogs?: Maybe<UpdateManyPayload>;
  updateManyVolunteers?: Maybe<UpdateManyPayload>;
  updateOneAffiliation?: Maybe<Affiliation>;
  updateOneArticle?: Maybe<Article>;
  updateOneCampaign?: Maybe<Campaign>;
  updateOneCampaignActivity?: Maybe<CampaignActivity>;
  updateOneCampaignNotificationReport?: Maybe<CampaignNotificationReport>;
  updateOneCampaignVendorLog?: Maybe<CampaignVendorLog>;
  updateOneChartDatum?: Maybe<ChartDatum>;
  updateOneCommerce?: Maybe<Commerce>;
  updateOneDonationLog?: Maybe<DonationLog>;
  updateOneDonationPayment?: Maybe<DonationPayment>;
  updateOneDonation_log?: Maybe<Donation_Log>;
  updateOneDonor?: Maybe<Donor>;
  updateOneGift?: Maybe<Gift>;
  updateOneItem?: Maybe<Item>;
  updateOneNonprofit?: Maybe<Nonprofit>;
  updateOneNonprofitAppearance?: Maybe<NonprofitAppearance>;
  updateOneNonprofitSecret?: Maybe<NonprofitSecret>;
  updateOneOperator?: Maybe<Operator>;
  updateOneOrganization?: Maybe<Organization>;
  updateOneOrganizationTeam?: Maybe<OrganizationTeam>;
  updateOnePaymentDatum?: Maybe<PaymentDatum>;
  updateOnePaymentGateway?: Maybe<PaymentGateway>;
  updateOneProject?: Maybe<Project>;
  updateOneProjectOperatorMap?: Maybe<ProjectOperatorMap>;
  updateOneTask?: Maybe<Task>;
  updateOneTestRaise?: Maybe<TestRaise>;
  updateOneTicketLog?: Maybe<TicketLog>;
  updateOneTmraInfo?: Maybe<TmraInfo>;
  updateOneUser?: Maybe<User>;
  updateOneVendor?: Maybe<Vendor>;
  updateOneVolunteer?: Maybe<Volunteer>;
  updateOneVolunteerTaskLog?: Maybe<VolunteerTaskLog>;
  uploadImage?: Maybe<Result>;
  upsertOneAffiliation?: Maybe<Affiliation>;
  upsertOneArticle?: Maybe<Article>;
  upsertOneCampaign?: Maybe<Campaign>;
  upsertOneCampaignActivity?: Maybe<CampaignActivity>;
  upsertOneCampaignNotificationReport?: Maybe<CampaignNotificationReport>;
  upsertOneCampaignVendorLog?: Maybe<CampaignVendorLog>;
  upsertOneChartDatum?: Maybe<ChartDatum>;
  upsertOneCommerce?: Maybe<Commerce>;
  upsertOneDonationLog?: Maybe<DonationLog>;
  upsertOneDonationPayment?: Maybe<DonationPayment>;
  upsertOneDonation_log?: Maybe<Donation_Log>;
  upsertOneDonor?: Maybe<Donor>;
  upsertOneGift?: Maybe<Gift>;
  upsertOneItem?: Maybe<Item>;
  upsertOneNonprofit?: Maybe<Nonprofit>;
  upsertOneNonprofitAppearance?: Maybe<NonprofitAppearance>;
  upsertOneNonprofitSecret?: Maybe<NonprofitSecret>;
  upsertOneOperator?: Maybe<Operator>;
  upsertOneOrganization?: Maybe<Organization>;
  upsertOneOrganizationTeam?: Maybe<OrganizationTeam>;
  upsertOnePaymentDatum?: Maybe<PaymentDatum>;
  upsertOnePaymentGateway?: Maybe<PaymentGateway>;
  upsertOneProject?: Maybe<Project>;
  upsertOneProjectOperatorMap?: Maybe<ProjectOperatorMap>;
  upsertOneTask?: Maybe<Task>;
  upsertOneTestRaise?: Maybe<TestRaise>;
  upsertOneTicketLog?: Maybe<TicketLog>;
  upsertOneTmraInfo?: Maybe<TmraInfo>;
  upsertOneUser?: Maybe<User>;
  upsertOneVendor?: Maybe<Vendor>;
  upsertOneVolunteer?: Maybe<Volunteer>;
  upsertOneVolunteerTaskLog?: Maybe<VolunteerTaskLog>;
};


export type MutationDeleteManyAffiliationsArgs = {
  query?: InputMaybe<AffiliationQueryInput>;
};


export type MutationDeleteManyArticlesArgs = {
  query?: InputMaybe<ArticleQueryInput>;
};


export type MutationDeleteManyCampaignActivitiesArgs = {
  query?: InputMaybe<CampaignActivityQueryInput>;
};


export type MutationDeleteManyCampaignNotificationReportsArgs = {
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
};


export type MutationDeleteManyCampaignVendorLogsArgs = {
  query?: InputMaybe<CampaignVendorLogQueryInput>;
};


export type MutationDeleteManyCampaignsArgs = {
  query?: InputMaybe<CampaignQueryInput>;
};


export type MutationDeleteManyChartDataArgs = {
  query?: InputMaybe<ChartDatumQueryInput>;
};


export type MutationDeleteManyCommercesArgs = {
  query?: InputMaybe<CommerceQueryInput>;
};


export type MutationDeleteManyDonationLogsArgs = {
  query?: InputMaybe<DonationLogQueryInput>;
};


export type MutationDeleteManyDonationPaymentsArgs = {
  query?: InputMaybe<DonationPaymentQueryInput>;
};


export type MutationDeleteManyDonation_LogsArgs = {
  query?: InputMaybe<Donation_LogQueryInput>;
};


export type MutationDeleteManyDonorsArgs = {
  query?: InputMaybe<DonorQueryInput>;
};


export type MutationDeleteManyGiftsArgs = {
  query?: InputMaybe<GiftQueryInput>;
};


export type MutationDeleteManyItemsArgs = {
  query?: InputMaybe<ItemQueryInput>;
};


export type MutationDeleteManyNonprofitAppearancesArgs = {
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
};


export type MutationDeleteManyNonprofitSecretsArgs = {
  query?: InputMaybe<NonprofitSecretQueryInput>;
};


export type MutationDeleteManyNonprofitsArgs = {
  query?: InputMaybe<NonprofitQueryInput>;
};


export type MutationDeleteManyOperatorsArgs = {
  query?: InputMaybe<OperatorQueryInput>;
};


export type MutationDeleteManyOrganizationTeamsArgs = {
  query?: InputMaybe<OrganizationTeamQueryInput>;
};


export type MutationDeleteManyOrganizationsArgs = {
  query?: InputMaybe<OrganizationQueryInput>;
};


export type MutationDeleteManyPaymentDataArgs = {
  query?: InputMaybe<PaymentDatumQueryInput>;
};


export type MutationDeleteManyPaymentGatewaysArgs = {
  query?: InputMaybe<PaymentGatewayQueryInput>;
};


export type MutationDeleteManyProjectOperatorMapsArgs = {
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
};


export type MutationDeleteManyProjectsArgs = {
  query?: InputMaybe<ProjectQueryInput>;
};


export type MutationDeleteManyTasksArgs = {
  query?: InputMaybe<TaskQueryInput>;
};


export type MutationDeleteManyTestRaisesArgs = {
  query?: InputMaybe<TestRaiseQueryInput>;
};


export type MutationDeleteManyTicketLogsArgs = {
  query?: InputMaybe<TicketLogQueryInput>;
};


export type MutationDeleteManyTmraInfosArgs = {
  query?: InputMaybe<TmraInfoQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: InputMaybe<UserQueryInput>;
};


export type MutationDeleteManyVendorsArgs = {
  query?: InputMaybe<VendorQueryInput>;
};


export type MutationDeleteManyVolunteerTaskLogsArgs = {
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
};


export type MutationDeleteManyVolunteersArgs = {
  query?: InputMaybe<VolunteerQueryInput>;
};


export type MutationDeleteOneAffiliationArgs = {
  query: AffiliationQueryInput;
};


export type MutationDeleteOneArticleArgs = {
  query: ArticleQueryInput;
};


export type MutationDeleteOneCampaignArgs = {
  query: CampaignQueryInput;
};


export type MutationDeleteOneCampaignActivityArgs = {
  query: CampaignActivityQueryInput;
};


export type MutationDeleteOneCampaignNotificationReportArgs = {
  query: CampaignNotificationReportQueryInput;
};


export type MutationDeleteOneCampaignVendorLogArgs = {
  query: CampaignVendorLogQueryInput;
};


export type MutationDeleteOneChartDatumArgs = {
  query: ChartDatumQueryInput;
};


export type MutationDeleteOneCommerceArgs = {
  query: CommerceQueryInput;
};


export type MutationDeleteOneDonationLogArgs = {
  query: DonationLogQueryInput;
};


export type MutationDeleteOneDonationPaymentArgs = {
  query: DonationPaymentQueryInput;
};


export type MutationDeleteOneDonation_LogArgs = {
  query: Donation_LogQueryInput;
};


export type MutationDeleteOneDonorArgs = {
  query: DonorQueryInput;
};


export type MutationDeleteOneGiftArgs = {
  query: GiftQueryInput;
};


export type MutationDeleteOneItemArgs = {
  query: ItemQueryInput;
};


export type MutationDeleteOneNonprofitArgs = {
  query: NonprofitQueryInput;
};


export type MutationDeleteOneNonprofitAppearanceArgs = {
  query: NonprofitAppearanceQueryInput;
};


export type MutationDeleteOneNonprofitSecretArgs = {
  query: NonprofitSecretQueryInput;
};


export type MutationDeleteOneOperatorArgs = {
  query: OperatorQueryInput;
};


export type MutationDeleteOneOrganizationArgs = {
  query: OrganizationQueryInput;
};


export type MutationDeleteOneOrganizationTeamArgs = {
  query: OrganizationTeamQueryInput;
};


export type MutationDeleteOnePaymentDatumArgs = {
  query: PaymentDatumQueryInput;
};


export type MutationDeleteOnePaymentGatewayArgs = {
  query: PaymentGatewayQueryInput;
};


export type MutationDeleteOneProjectArgs = {
  query: ProjectQueryInput;
};


export type MutationDeleteOneProjectOperatorMapArgs = {
  query: ProjectOperatorMapQueryInput;
};


export type MutationDeleteOneTaskArgs = {
  query: TaskQueryInput;
};


export type MutationDeleteOneTestRaiseArgs = {
  query: TestRaiseQueryInput;
};


export type MutationDeleteOneTicketLogArgs = {
  query: TicketLogQueryInput;
};


export type MutationDeleteOneTmraInfoArgs = {
  query: TmraInfoQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationDeleteOneVendorArgs = {
  query: VendorQueryInput;
};


export type MutationDeleteOneVolunteerArgs = {
  query: VolunteerQueryInput;
};


export type MutationDeleteOneVolunteerTaskLogArgs = {
  query: VolunteerTaskLogQueryInput;
};


export type MutationForgotPasswordArgs = {
  input?: InputMaybe<ForgotPassword>;
};


export type MutationGetDonorListArgs = {
  input?: InputMaybe<GetDonorList>;
};


export type MutationInsertFusionAuthUserArgs = {
  input?: InputMaybe<InsertFusionAuthUser>;
};


export type MutationInsertManyAffiliationsArgs = {
  data: Array<AffiliationInsertInput>;
};


export type MutationInsertManyArticlesArgs = {
  data: Array<ArticleInsertInput>;
};


export type MutationInsertManyCampaignActivitiesArgs = {
  data: Array<CampaignActivityInsertInput>;
};


export type MutationInsertManyCampaignNotificationReportsArgs = {
  data: Array<CampaignNotificationReportInsertInput>;
};


export type MutationInsertManyCampaignVendorLogsArgs = {
  data: Array<CampaignVendorLogInsertInput>;
};


export type MutationInsertManyCampaignsArgs = {
  data: Array<CampaignInsertInput>;
};


export type MutationInsertManyChartDataArgs = {
  data: Array<ChartDatumInsertInput>;
};


export type MutationInsertManyCommercesArgs = {
  data: Array<CommerceInsertInput>;
};


export type MutationInsertManyDonationLogsArgs = {
  data: Array<DonationLogInsertInput>;
};


export type MutationInsertManyDonationPaymentsArgs = {
  data: Array<DonationPaymentInsertInput>;
};


export type MutationInsertManyDonation_LogsArgs = {
  data: Array<Donation_LogInsertInput>;
};


export type MutationInsertManyDonorsArgs = {
  data: Array<DonorInsertInput>;
};


export type MutationInsertManyGiftsArgs = {
  data: Array<GiftInsertInput>;
};


export type MutationInsertManyItemsArgs = {
  data: Array<ItemInsertInput>;
};


export type MutationInsertManyNonprofitAppearancesArgs = {
  data: Array<NonprofitAppearanceInsertInput>;
};


export type MutationInsertManyNonprofitSecretsArgs = {
  data: Array<NonprofitSecretInsertInput>;
};


export type MutationInsertManyNonprofitsArgs = {
  data: Array<NonprofitInsertInput>;
};


export type MutationInsertManyOperatorsArgs = {
  data: Array<OperatorInsertInput>;
};


export type MutationInsertManyOrganizationTeamsArgs = {
  data: Array<OrganizationTeamInsertInput>;
};


export type MutationInsertManyOrganizationsArgs = {
  data: Array<OrganizationInsertInput>;
};


export type MutationInsertManyPaymentDataArgs = {
  data: Array<PaymentDatumInsertInput>;
};


export type MutationInsertManyPaymentGatewaysArgs = {
  data: Array<PaymentGatewayInsertInput>;
};


export type MutationInsertManyProjectOperatorMapsArgs = {
  data: Array<ProjectOperatorMapInsertInput>;
};


export type MutationInsertManyProjectsArgs = {
  data: Array<ProjectInsertInput>;
};


export type MutationInsertManyTasksArgs = {
  data: Array<TaskInsertInput>;
};


export type MutationInsertManyTestRaisesArgs = {
  data: Array<TestRaiseInsertInput>;
};


export type MutationInsertManyTicketLogsArgs = {
  data: Array<TicketLogInsertInput>;
};


export type MutationInsertManyTmraInfosArgs = {
  data: Array<TmraInfoInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertManyVendorsArgs = {
  data: Array<VendorInsertInput>;
};


export type MutationInsertManyVolunteerTaskLogsArgs = {
  data: Array<VolunteerTaskLogInsertInput>;
};


export type MutationInsertManyVolunteersArgs = {
  data: Array<VolunteerInsertInput>;
};


export type MutationInsertOneAffiliationArgs = {
  data: AffiliationInsertInput;
};


export type MutationInsertOneArticleArgs = {
  data: ArticleInsertInput;
};


export type MutationInsertOneCampaignArgs = {
  data: CampaignInsertInput;
};


export type MutationInsertOneCampaignActivityArgs = {
  data: CampaignActivityInsertInput;
};


export type MutationInsertOneCampaignNotificationReportArgs = {
  data: CampaignNotificationReportInsertInput;
};


export type MutationInsertOneCampaignVendorLogArgs = {
  data: CampaignVendorLogInsertInput;
};


export type MutationInsertOneChartDatumArgs = {
  data: ChartDatumInsertInput;
};


export type MutationInsertOneCommerceArgs = {
  data: CommerceInsertInput;
};


export type MutationInsertOneDonationLogArgs = {
  data: DonationLogInsertInput;
};


export type MutationInsertOneDonationPaymentArgs = {
  data: DonationPaymentInsertInput;
};


export type MutationInsertOneDonation_LogArgs = {
  data: Donation_LogInsertInput;
};


export type MutationInsertOneDonorArgs = {
  data: DonorInsertInput;
};


export type MutationInsertOneGiftArgs = {
  data: GiftInsertInput;
};


export type MutationInsertOneItemArgs = {
  data: ItemInsertInput;
};


export type MutationInsertOneNonprofitArgs = {
  data: NonprofitInsertInput;
};


export type MutationInsertOneNonprofitAppearanceArgs = {
  data: NonprofitAppearanceInsertInput;
};


export type MutationInsertOneNonprofitSecretArgs = {
  data: NonprofitSecretInsertInput;
};


export type MutationInsertOneOperatorArgs = {
  data: OperatorInsertInput;
};


export type MutationInsertOneOrganizationArgs = {
  data: OrganizationInsertInput;
};


export type MutationInsertOneOrganizationTeamArgs = {
  data: OrganizationTeamInsertInput;
};


export type MutationInsertOnePaymentDatumArgs = {
  data: PaymentDatumInsertInput;
};


export type MutationInsertOnePaymentGatewayArgs = {
  data: PaymentGatewayInsertInput;
};


export type MutationInsertOneProjectArgs = {
  data: ProjectInsertInput;
};


export type MutationInsertOneProjectOperatorMapArgs = {
  data: ProjectOperatorMapInsertInput;
};


export type MutationInsertOneTaskArgs = {
  data: TaskInsertInput;
};


export type MutationInsertOneTestRaiseArgs = {
  data: TestRaiseInsertInput;
};


export type MutationInsertOneTicketLogArgs = {
  data: TicketLogInsertInput;
};


export type MutationInsertOneTmraInfoArgs = {
  data: TmraInfoInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationInsertOneVendorArgs = {
  data: VendorInsertInput;
};


export type MutationInsertOneVolunteerArgs = {
  data: VolunteerInsertInput;
};


export type MutationInsertOneVolunteerTaskLogArgs = {
  data: VolunteerTaskLogInsertInput;
};


export type MutationNonprofitDonorListArgs = {
  input?: InputMaybe<GetNonProfitDonorList>;
};


export type MutationReplaceOneAffiliationArgs = {
  data: AffiliationInsertInput;
  query?: InputMaybe<AffiliationQueryInput>;
};


export type MutationReplaceOneArticleArgs = {
  data: ArticleInsertInput;
  query?: InputMaybe<ArticleQueryInput>;
};


export type MutationReplaceOneCampaignArgs = {
  data: CampaignInsertInput;
  query?: InputMaybe<CampaignQueryInput>;
};


export type MutationReplaceOneCampaignActivityArgs = {
  data: CampaignActivityInsertInput;
  query?: InputMaybe<CampaignActivityQueryInput>;
};


export type MutationReplaceOneCampaignNotificationReportArgs = {
  data: CampaignNotificationReportInsertInput;
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
};


export type MutationReplaceOneCampaignVendorLogArgs = {
  data: CampaignVendorLogInsertInput;
  query?: InputMaybe<CampaignVendorLogQueryInput>;
};


export type MutationReplaceOneChartDatumArgs = {
  data: ChartDatumInsertInput;
  query?: InputMaybe<ChartDatumQueryInput>;
};


export type MutationReplaceOneCommerceArgs = {
  data: CommerceInsertInput;
  query?: InputMaybe<CommerceQueryInput>;
};


export type MutationReplaceOneDonationLogArgs = {
  data: DonationLogInsertInput;
  query?: InputMaybe<DonationLogQueryInput>;
};


export type MutationReplaceOneDonationPaymentArgs = {
  data: DonationPaymentInsertInput;
  query?: InputMaybe<DonationPaymentQueryInput>;
};


export type MutationReplaceOneDonation_LogArgs = {
  data: Donation_LogInsertInput;
  query?: InputMaybe<Donation_LogQueryInput>;
};


export type MutationReplaceOneDonorArgs = {
  data: DonorInsertInput;
  query?: InputMaybe<DonorQueryInput>;
};


export type MutationReplaceOneGiftArgs = {
  data: GiftInsertInput;
  query?: InputMaybe<GiftQueryInput>;
};


export type MutationReplaceOneItemArgs = {
  data: ItemInsertInput;
  query?: InputMaybe<ItemQueryInput>;
};


export type MutationReplaceOneNonprofitArgs = {
  data: NonprofitInsertInput;
  query?: InputMaybe<NonprofitQueryInput>;
};


export type MutationReplaceOneNonprofitAppearanceArgs = {
  data: NonprofitAppearanceInsertInput;
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
};


export type MutationReplaceOneNonprofitSecretArgs = {
  data: NonprofitSecretInsertInput;
  query?: InputMaybe<NonprofitSecretQueryInput>;
};


export type MutationReplaceOneOperatorArgs = {
  data: OperatorInsertInput;
  query?: InputMaybe<OperatorQueryInput>;
};


export type MutationReplaceOneOrganizationArgs = {
  data: OrganizationInsertInput;
  query?: InputMaybe<OrganizationQueryInput>;
};


export type MutationReplaceOneOrganizationTeamArgs = {
  data: OrganizationTeamInsertInput;
  query?: InputMaybe<OrganizationTeamQueryInput>;
};


export type MutationReplaceOnePaymentDatumArgs = {
  data: PaymentDatumInsertInput;
  query?: InputMaybe<PaymentDatumQueryInput>;
};


export type MutationReplaceOnePaymentGatewayArgs = {
  data: PaymentGatewayInsertInput;
  query?: InputMaybe<PaymentGatewayQueryInput>;
};


export type MutationReplaceOneProjectArgs = {
  data: ProjectInsertInput;
  query?: InputMaybe<ProjectQueryInput>;
};


export type MutationReplaceOneProjectOperatorMapArgs = {
  data: ProjectOperatorMapInsertInput;
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
};


export type MutationReplaceOneTaskArgs = {
  data: TaskInsertInput;
  query?: InputMaybe<TaskQueryInput>;
};


export type MutationReplaceOneTestRaiseArgs = {
  data: TestRaiseInsertInput;
  query?: InputMaybe<TestRaiseQueryInput>;
};


export type MutationReplaceOneTicketLogArgs = {
  data: TicketLogInsertInput;
  query?: InputMaybe<TicketLogQueryInput>;
};


export type MutationReplaceOneTmraInfoArgs = {
  data: TmraInfoInsertInput;
  query?: InputMaybe<TmraInfoQueryInput>;
};


export type MutationReplaceOneUserArgs = {
  data: UserInsertInput;
  query?: InputMaybe<UserQueryInput>;
};


export type MutationReplaceOneVendorArgs = {
  data: VendorInsertInput;
  query?: InputMaybe<VendorQueryInput>;
};


export type MutationReplaceOneVolunteerArgs = {
  data: VolunteerInsertInput;
  query?: InputMaybe<VolunteerQueryInput>;
};


export type MutationReplaceOneVolunteerTaskLogArgs = {
  data: VolunteerTaskLogInsertInput;
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
};


export type MutationUpdateManyAffiliationsArgs = {
  query?: InputMaybe<AffiliationQueryInput>;
  set: AffiliationUpdateInput;
};


export type MutationUpdateManyArticlesArgs = {
  query?: InputMaybe<ArticleQueryInput>;
  set: ArticleUpdateInput;
};


export type MutationUpdateManyCampaignActivitiesArgs = {
  query?: InputMaybe<CampaignActivityQueryInput>;
  set: CampaignActivityUpdateInput;
};


export type MutationUpdateManyCampaignNotificationReportsArgs = {
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
  set: CampaignNotificationReportUpdateInput;
};


export type MutationUpdateManyCampaignVendorLogsArgs = {
  query?: InputMaybe<CampaignVendorLogQueryInput>;
  set: CampaignVendorLogUpdateInput;
};


export type MutationUpdateManyCampaignsArgs = {
  query?: InputMaybe<CampaignQueryInput>;
  set: CampaignUpdateInput;
};


export type MutationUpdateManyChartDataArgs = {
  query?: InputMaybe<ChartDatumQueryInput>;
  set: ChartDatumUpdateInput;
};


export type MutationUpdateManyCommercesArgs = {
  query?: InputMaybe<CommerceQueryInput>;
  set: CommerceUpdateInput;
};


export type MutationUpdateManyDonationLogsArgs = {
  query?: InputMaybe<DonationLogQueryInput>;
  set: DonationLogUpdateInput;
};


export type MutationUpdateManyDonationPaymentsArgs = {
  query?: InputMaybe<DonationPaymentQueryInput>;
  set: DonationPaymentUpdateInput;
};


export type MutationUpdateManyDonation_LogsArgs = {
  query?: InputMaybe<Donation_LogQueryInput>;
  set: Donation_LogUpdateInput;
};


export type MutationUpdateManyDonorsArgs = {
  query?: InputMaybe<DonorQueryInput>;
  set: DonorUpdateInput;
};


export type MutationUpdateManyGiftsArgs = {
  query?: InputMaybe<GiftQueryInput>;
  set: GiftUpdateInput;
};


export type MutationUpdateManyItemsArgs = {
  query?: InputMaybe<ItemQueryInput>;
  set: ItemUpdateInput;
};


export type MutationUpdateManyNonprofitAppearancesArgs = {
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
  set: NonprofitAppearanceUpdateInput;
};


export type MutationUpdateManyNonprofitSecretsArgs = {
  query?: InputMaybe<NonprofitSecretQueryInput>;
  set: NonprofitSecretUpdateInput;
};


export type MutationUpdateManyNonprofitsArgs = {
  query?: InputMaybe<NonprofitQueryInput>;
  set: NonprofitUpdateInput;
};


export type MutationUpdateManyOperatorsArgs = {
  query?: InputMaybe<OperatorQueryInput>;
  set: OperatorUpdateInput;
};


export type MutationUpdateManyOrganizationTeamsArgs = {
  query?: InputMaybe<OrganizationTeamQueryInput>;
  set: OrganizationTeamUpdateInput;
};


export type MutationUpdateManyOrganizationsArgs = {
  query?: InputMaybe<OrganizationQueryInput>;
  set: OrganizationUpdateInput;
};


export type MutationUpdateManyPaymentDataArgs = {
  query?: InputMaybe<PaymentDatumQueryInput>;
  set: PaymentDatumUpdateInput;
};


export type MutationUpdateManyPaymentGatewaysArgs = {
  query?: InputMaybe<PaymentGatewayQueryInput>;
  set: PaymentGatewayUpdateInput;
};


export type MutationUpdateManyProjectOperatorMapsArgs = {
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
  set: ProjectOperatorMapUpdateInput;
};


export type MutationUpdateManyProjectsArgs = {
  query?: InputMaybe<ProjectQueryInput>;
  set: ProjectUpdateInput;
};


export type MutationUpdateManyTasksArgs = {
  query?: InputMaybe<TaskQueryInput>;
  set: TaskUpdateInput;
};


export type MutationUpdateManyTestRaisesArgs = {
  query?: InputMaybe<TestRaiseQueryInput>;
  set: TestRaiseUpdateInput;
};


export type MutationUpdateManyTicketLogsArgs = {
  query?: InputMaybe<TicketLogQueryInput>;
  set: TicketLogUpdateInput;
};


export type MutationUpdateManyTmraInfosArgs = {
  query?: InputMaybe<TmraInfoQueryInput>;
  set: TmraInfoUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: InputMaybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateManyVendorsArgs = {
  query?: InputMaybe<VendorQueryInput>;
  set: VendorUpdateInput;
};


export type MutationUpdateManyVolunteerTaskLogsArgs = {
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
  set: VolunteerTaskLogUpdateInput;
};


export type MutationUpdateManyVolunteersArgs = {
  query?: InputMaybe<VolunteerQueryInput>;
  set: VolunteerUpdateInput;
};


export type MutationUpdateOneAffiliationArgs = {
  query?: InputMaybe<AffiliationQueryInput>;
  set: AffiliationUpdateInput;
};


export type MutationUpdateOneArticleArgs = {
  query?: InputMaybe<ArticleQueryInput>;
  set: ArticleUpdateInput;
};


export type MutationUpdateOneCampaignArgs = {
  query?: InputMaybe<CampaignQueryInput>;
  set: CampaignUpdateInput;
};


export type MutationUpdateOneCampaignActivityArgs = {
  query?: InputMaybe<CampaignActivityQueryInput>;
  set: CampaignActivityUpdateInput;
};


export type MutationUpdateOneCampaignNotificationReportArgs = {
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
  set: CampaignNotificationReportUpdateInput;
};


export type MutationUpdateOneCampaignVendorLogArgs = {
  query?: InputMaybe<CampaignVendorLogQueryInput>;
  set: CampaignVendorLogUpdateInput;
};


export type MutationUpdateOneChartDatumArgs = {
  query?: InputMaybe<ChartDatumQueryInput>;
  set: ChartDatumUpdateInput;
};


export type MutationUpdateOneCommerceArgs = {
  query?: InputMaybe<CommerceQueryInput>;
  set: CommerceUpdateInput;
};


export type MutationUpdateOneDonationLogArgs = {
  query?: InputMaybe<DonationLogQueryInput>;
  set: DonationLogUpdateInput;
};


export type MutationUpdateOneDonationPaymentArgs = {
  query?: InputMaybe<DonationPaymentQueryInput>;
  set: DonationPaymentUpdateInput;
};


export type MutationUpdateOneDonation_LogArgs = {
  query?: InputMaybe<Donation_LogQueryInput>;
  set: Donation_LogUpdateInput;
};


export type MutationUpdateOneDonorArgs = {
  query?: InputMaybe<DonorQueryInput>;
  set: DonorUpdateInput;
};


export type MutationUpdateOneGiftArgs = {
  query?: InputMaybe<GiftQueryInput>;
  set: GiftUpdateInput;
};


export type MutationUpdateOneItemArgs = {
  query?: InputMaybe<ItemQueryInput>;
  set: ItemUpdateInput;
};


export type MutationUpdateOneNonprofitArgs = {
  query?: InputMaybe<NonprofitQueryInput>;
  set: NonprofitUpdateInput;
};


export type MutationUpdateOneNonprofitAppearanceArgs = {
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
  set: NonprofitAppearanceUpdateInput;
};


export type MutationUpdateOneNonprofitSecretArgs = {
  query?: InputMaybe<NonprofitSecretQueryInput>;
  set: NonprofitSecretUpdateInput;
};


export type MutationUpdateOneOperatorArgs = {
  query?: InputMaybe<OperatorQueryInput>;
  set: OperatorUpdateInput;
};


export type MutationUpdateOneOrganizationArgs = {
  query?: InputMaybe<OrganizationQueryInput>;
  set: OrganizationUpdateInput;
};


export type MutationUpdateOneOrganizationTeamArgs = {
  query?: InputMaybe<OrganizationTeamQueryInput>;
  set: OrganizationTeamUpdateInput;
};


export type MutationUpdateOnePaymentDatumArgs = {
  query?: InputMaybe<PaymentDatumQueryInput>;
  set: PaymentDatumUpdateInput;
};


export type MutationUpdateOnePaymentGatewayArgs = {
  query?: InputMaybe<PaymentGatewayQueryInput>;
  set: PaymentGatewayUpdateInput;
};


export type MutationUpdateOneProjectArgs = {
  query?: InputMaybe<ProjectQueryInput>;
  set: ProjectUpdateInput;
};


export type MutationUpdateOneProjectOperatorMapArgs = {
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
  set: ProjectOperatorMapUpdateInput;
};


export type MutationUpdateOneTaskArgs = {
  query?: InputMaybe<TaskQueryInput>;
  set: TaskUpdateInput;
};


export type MutationUpdateOneTestRaiseArgs = {
  query?: InputMaybe<TestRaiseQueryInput>;
  set: TestRaiseUpdateInput;
};


export type MutationUpdateOneTicketLogArgs = {
  query?: InputMaybe<TicketLogQueryInput>;
  set: TicketLogUpdateInput;
};


export type MutationUpdateOneTmraInfoArgs = {
  query?: InputMaybe<TmraInfoQueryInput>;
  set: TmraInfoUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: InputMaybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneVendorArgs = {
  query?: InputMaybe<VendorQueryInput>;
  set: VendorUpdateInput;
};


export type MutationUpdateOneVolunteerArgs = {
  query?: InputMaybe<VolunteerQueryInput>;
  set: VolunteerUpdateInput;
};


export type MutationUpdateOneVolunteerTaskLogArgs = {
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
  set: VolunteerTaskLogUpdateInput;
};


export type MutationUploadImageArgs = {
  input?: InputMaybe<UploadImage>;
};


export type MutationUpsertOneAffiliationArgs = {
  data: AffiliationInsertInput;
  query?: InputMaybe<AffiliationQueryInput>;
};


export type MutationUpsertOneArticleArgs = {
  data: ArticleInsertInput;
  query?: InputMaybe<ArticleQueryInput>;
};


export type MutationUpsertOneCampaignArgs = {
  data: CampaignInsertInput;
  query?: InputMaybe<CampaignQueryInput>;
};


export type MutationUpsertOneCampaignActivityArgs = {
  data: CampaignActivityInsertInput;
  query?: InputMaybe<CampaignActivityQueryInput>;
};


export type MutationUpsertOneCampaignNotificationReportArgs = {
  data: CampaignNotificationReportInsertInput;
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
};


export type MutationUpsertOneCampaignVendorLogArgs = {
  data: CampaignVendorLogInsertInput;
  query?: InputMaybe<CampaignVendorLogQueryInput>;
};


export type MutationUpsertOneChartDatumArgs = {
  data: ChartDatumInsertInput;
  query?: InputMaybe<ChartDatumQueryInput>;
};


export type MutationUpsertOneCommerceArgs = {
  data: CommerceInsertInput;
  query?: InputMaybe<CommerceQueryInput>;
};


export type MutationUpsertOneDonationLogArgs = {
  data: DonationLogInsertInput;
  query?: InputMaybe<DonationLogQueryInput>;
};


export type MutationUpsertOneDonationPaymentArgs = {
  data: DonationPaymentInsertInput;
  query?: InputMaybe<DonationPaymentQueryInput>;
};


export type MutationUpsertOneDonation_LogArgs = {
  data: Donation_LogInsertInput;
  query?: InputMaybe<Donation_LogQueryInput>;
};


export type MutationUpsertOneDonorArgs = {
  data: DonorInsertInput;
  query?: InputMaybe<DonorQueryInput>;
};


export type MutationUpsertOneGiftArgs = {
  data: GiftInsertInput;
  query?: InputMaybe<GiftQueryInput>;
};


export type MutationUpsertOneItemArgs = {
  data: ItemInsertInput;
  query?: InputMaybe<ItemQueryInput>;
};


export type MutationUpsertOneNonprofitArgs = {
  data: NonprofitInsertInput;
  query?: InputMaybe<NonprofitQueryInput>;
};


export type MutationUpsertOneNonprofitAppearanceArgs = {
  data: NonprofitAppearanceInsertInput;
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
};


export type MutationUpsertOneNonprofitSecretArgs = {
  data: NonprofitSecretInsertInput;
  query?: InputMaybe<NonprofitSecretQueryInput>;
};


export type MutationUpsertOneOperatorArgs = {
  data: OperatorInsertInput;
  query?: InputMaybe<OperatorQueryInput>;
};


export type MutationUpsertOneOrganizationArgs = {
  data: OrganizationInsertInput;
  query?: InputMaybe<OrganizationQueryInput>;
};


export type MutationUpsertOneOrganizationTeamArgs = {
  data: OrganizationTeamInsertInput;
  query?: InputMaybe<OrganizationTeamQueryInput>;
};


export type MutationUpsertOnePaymentDatumArgs = {
  data: PaymentDatumInsertInput;
  query?: InputMaybe<PaymentDatumQueryInput>;
};


export type MutationUpsertOnePaymentGatewayArgs = {
  data: PaymentGatewayInsertInput;
  query?: InputMaybe<PaymentGatewayQueryInput>;
};


export type MutationUpsertOneProjectArgs = {
  data: ProjectInsertInput;
  query?: InputMaybe<ProjectQueryInput>;
};


export type MutationUpsertOneProjectOperatorMapArgs = {
  data: ProjectOperatorMapInsertInput;
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
};


export type MutationUpsertOneTaskArgs = {
  data: TaskInsertInput;
  query?: InputMaybe<TaskQueryInput>;
};


export type MutationUpsertOneTestRaiseArgs = {
  data: TestRaiseInsertInput;
  query?: InputMaybe<TestRaiseQueryInput>;
};


export type MutationUpsertOneTicketLogArgs = {
  data: TicketLogInsertInput;
  query?: InputMaybe<TicketLogQueryInput>;
};


export type MutationUpsertOneTmraInfoArgs = {
  data: TmraInfoInsertInput;
  query?: InputMaybe<TmraInfoQueryInput>;
};


export type MutationUpsertOneUserArgs = {
  data: UserInsertInput;
  query?: InputMaybe<UserQueryInput>;
};


export type MutationUpsertOneVendorArgs = {
  data: VendorInsertInput;
  query?: InputMaybe<VendorQueryInput>;
};


export type MutationUpsertOneVolunteerArgs = {
  data: VolunteerInsertInput;
  query?: InputMaybe<VolunteerQueryInput>;
};


export type MutationUpsertOneVolunteerTaskLogArgs = {
  data: VolunteerTaskLogInsertInput;
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
};

export type NonProfitDonorListResult = {
  __typename?: 'NonProfitDonorListResult';
  donorNameList?: Maybe<Array<Maybe<NonProfitDonorListResultDonorNameList>>>;
};

export type NonProfitDonorListResultDonorNameList = {
  __typename?: 'NonProfitDonorListResultDonorNameList';
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Nonprofit = {
  __typename?: 'Nonprofit';
  OrganizationBankAccountName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  aboutHeading?: Maybe<Scalars['String']>;
  aboutPicture?: Maybe<Scalars['String']>;
  comissioner?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  defaultCurrency?: Maybe<Scalars['String']>;
  defaultIconGoal1?: Maybe<Scalars['String']>;
  defaultIconGoal2?: Maybe<Scalars['String']>;
  defaultIconGoal3?: Maybe<Scalars['String']>;
  defaultIconGoal4?: Maybe<Scalars['String']>;
  defaultIconGoal5?: Maybe<Scalars['String']>;
  defaultIconGoal6?: Maybe<Scalars['String']>;
  donationTypeImage1?: Maybe<Scalars['String']>;
  donationTypeImage2?: Maybe<Scalars['String']>;
  donationTypeImage3?: Maybe<Scalars['String']>;
  donationTypeImage4?: Maybe<Scalars['String']>;
  donationTypeImage5?: Maybe<Scalars['String']>;
  donationTypeImage6?: Maybe<Scalars['String']>;
  donationTypeTitle1?: Maybe<Scalars['String']>;
  donationTypeTitle2?: Maybe<Scalars['String']>;
  donationTypeTitle3?: Maybe<Scalars['String']>;
  donationTypeTitle4?: Maybe<Scalars['String']>;
  donationTypeTitle5?: Maybe<Scalars['String']>;
  donationTypeTitle6?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  favicon?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  idNumberCard?: Maybe<Scalars['String']>;
  impact1Amount?: Maybe<Scalars['String']>;
  impact1Title?: Maybe<Scalars['String']>;
  impact2Amount?: Maybe<Scalars['String']>;
  impact2Title?: Maybe<Scalars['String']>;
  impact3Amount?: Maybe<Scalars['String']>;
  impact3Title?: Maybe<Scalars['String']>;
  impactCategory?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  licenseNumber?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  nonprofitType?: Maybe<Scalars['String']>;
  orgObjective?: Maybe<Scalars['String']>;
  organizationBankAccount?: Maybe<Scalars['String']>;
  organizationBankAccountName?: Maybe<Scalars['String']>;
  organizationBankAccountNumber?: Maybe<Scalars['String']>;
  organizationEmail?: Maybe<Scalars['String']>;
  organizationModerator?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  organizationProfile?: Maybe<Scalars['String']>;
  organizationSize?: Maybe<Scalars['String']>;
  organizationSwiftCode?: Maybe<Scalars['String']>;
  organizationType?: Maybe<Scalars['String']>;
  ourGoal1?: Maybe<Scalars['String']>;
  ourGoal2?: Maybe<Scalars['String']>;
  ourGoal3?: Maybe<Scalars['String']>;
  ourGoal4?: Maybe<Scalars['String']>;
  ourGoal5?: Maybe<Scalars['String']>;
  ourGoal6?: Maybe<Scalars['String']>;
  ourMissionDetail?: Maybe<Scalars['String']>;
  ourStoryDesc?: Maybe<Scalars['String']>;
  ourValue1?: Maybe<Scalars['String']>;
  ourValue2?: Maybe<Scalars['String']>;
  ourValue3?: Maybe<Scalars['String']>;
  ownerRealmId?: Maybe<Scalars['ObjectId']>;
  ownerUserId?: Maybe<Scalars['String']>;
  packageType?: Maybe<Scalars['Int']>;
  paypalClientId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  xenditMode?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type NonprofitAppearance = {
  __typename?: 'NonprofitAppearance';
  _id?: Maybe<Scalars['ObjectId']>;
  accent?: Maybe<Scalars['String']>;
  detailStory1?: Maybe<Scalars['String']>;
  detailStory2?: Maybe<Scalars['String']>;
  detailStory3?: Maybe<Scalars['String']>;
  eventImagesUrl1?: Maybe<Scalars['String']>;
  eventImagesUrl2?: Maybe<Scalars['String']>;
  eventImagesUrl3?: Maybe<Scalars['String']>;
  favIcon?: Maybe<Scalars['String']>;
  headerAndFooter?: Maybe<Scalars['String']>;
  lButton?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  mainImageUrl?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  ourStory?: Maybe<Scalars['String']>;
  ownerRealmId?: Maybe<Scalars['ObjectId']>;
  ownerUserId?: Maybe<Scalars['String']>;
  peopleSay?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  secondaryColor?: Maybe<Scalars['String']>;
  secondaryImage?: Maybe<Scalars['String']>;
  themesColor?: Maybe<Scalars['String']>;
  usePallete?: Maybe<Scalars['Boolean']>;
  videoUrl?: Maybe<Scalars['String']>;
  whyShouldWe?: Maybe<Scalars['String']>;
  whySupportUs1?: Maybe<Scalars['String']>;
  whySupportUs2?: Maybe<Scalars['String']>;
  whySupportUs3?: Maybe<Scalars['String']>;
};

export type NonprofitAppearanceInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  accent?: InputMaybe<Scalars['String']>;
  detailStory1?: InputMaybe<Scalars['String']>;
  detailStory2?: InputMaybe<Scalars['String']>;
  detailStory3?: InputMaybe<Scalars['String']>;
  eventImagesUrl1?: InputMaybe<Scalars['String']>;
  eventImagesUrl2?: InputMaybe<Scalars['String']>;
  eventImagesUrl3?: InputMaybe<Scalars['String']>;
  favIcon?: InputMaybe<Scalars['String']>;
  headerAndFooter?: InputMaybe<Scalars['String']>;
  lButton?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  mainImageUrl?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  ourStory?: InputMaybe<Scalars['String']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  peopleSay?: InputMaybe<Scalars['String']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  secondaryColor?: InputMaybe<Scalars['String']>;
  secondaryImage?: InputMaybe<Scalars['String']>;
  themesColor?: InputMaybe<Scalars['String']>;
  usePallete?: InputMaybe<Scalars['Boolean']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  whyShouldWe?: InputMaybe<Scalars['String']>;
  whySupportUs1?: InputMaybe<Scalars['String']>;
  whySupportUs2?: InputMaybe<Scalars['String']>;
  whySupportUs3?: InputMaybe<Scalars['String']>;
};

export type NonprofitAppearanceQueryInput = {
  AND?: InputMaybe<Array<NonprofitAppearanceQueryInput>>;
  OR?: InputMaybe<Array<NonprofitAppearanceQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  accent?: InputMaybe<Scalars['String']>;
  accent_exists?: InputMaybe<Scalars['Boolean']>;
  accent_gt?: InputMaybe<Scalars['String']>;
  accent_gte?: InputMaybe<Scalars['String']>;
  accent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  accent_lt?: InputMaybe<Scalars['String']>;
  accent_lte?: InputMaybe<Scalars['String']>;
  accent_ne?: InputMaybe<Scalars['String']>;
  accent_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detailStory1?: InputMaybe<Scalars['String']>;
  detailStory1_exists?: InputMaybe<Scalars['Boolean']>;
  detailStory1_gt?: InputMaybe<Scalars['String']>;
  detailStory1_gte?: InputMaybe<Scalars['String']>;
  detailStory1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detailStory1_lt?: InputMaybe<Scalars['String']>;
  detailStory1_lte?: InputMaybe<Scalars['String']>;
  detailStory1_ne?: InputMaybe<Scalars['String']>;
  detailStory1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detailStory2?: InputMaybe<Scalars['String']>;
  detailStory2_exists?: InputMaybe<Scalars['Boolean']>;
  detailStory2_gt?: InputMaybe<Scalars['String']>;
  detailStory2_gte?: InputMaybe<Scalars['String']>;
  detailStory2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detailStory2_lt?: InputMaybe<Scalars['String']>;
  detailStory2_lte?: InputMaybe<Scalars['String']>;
  detailStory2_ne?: InputMaybe<Scalars['String']>;
  detailStory2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detailStory3?: InputMaybe<Scalars['String']>;
  detailStory3_exists?: InputMaybe<Scalars['Boolean']>;
  detailStory3_gt?: InputMaybe<Scalars['String']>;
  detailStory3_gte?: InputMaybe<Scalars['String']>;
  detailStory3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detailStory3_lt?: InputMaybe<Scalars['String']>;
  detailStory3_lte?: InputMaybe<Scalars['String']>;
  detailStory3_ne?: InputMaybe<Scalars['String']>;
  detailStory3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventImagesUrl1?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_exists?: InputMaybe<Scalars['Boolean']>;
  eventImagesUrl1_gt?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_gte?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventImagesUrl1_lt?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_lte?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_ne?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventImagesUrl2?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_exists?: InputMaybe<Scalars['Boolean']>;
  eventImagesUrl2_gt?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_gte?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventImagesUrl2_lt?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_lte?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_ne?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventImagesUrl3?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_exists?: InputMaybe<Scalars['Boolean']>;
  eventImagesUrl3_gt?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_gte?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eventImagesUrl3_lt?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_lte?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_ne?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favIcon?: InputMaybe<Scalars['String']>;
  favIcon_exists?: InputMaybe<Scalars['Boolean']>;
  favIcon_gt?: InputMaybe<Scalars['String']>;
  favIcon_gte?: InputMaybe<Scalars['String']>;
  favIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favIcon_lt?: InputMaybe<Scalars['String']>;
  favIcon_lte?: InputMaybe<Scalars['String']>;
  favIcon_ne?: InputMaybe<Scalars['String']>;
  favIcon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerAndFooter?: InputMaybe<Scalars['String']>;
  headerAndFooter_exists?: InputMaybe<Scalars['Boolean']>;
  headerAndFooter_gt?: InputMaybe<Scalars['String']>;
  headerAndFooter_gte?: InputMaybe<Scalars['String']>;
  headerAndFooter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerAndFooter_lt?: InputMaybe<Scalars['String']>;
  headerAndFooter_lte?: InputMaybe<Scalars['String']>;
  headerAndFooter_ne?: InputMaybe<Scalars['String']>;
  headerAndFooter_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lButton?: InputMaybe<Scalars['String']>;
  lButton_exists?: InputMaybe<Scalars['Boolean']>;
  lButton_gt?: InputMaybe<Scalars['String']>;
  lButton_gte?: InputMaybe<Scalars['String']>;
  lButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lButton_lt?: InputMaybe<Scalars['String']>;
  lButton_lte?: InputMaybe<Scalars['String']>;
  lButton_ne?: InputMaybe<Scalars['String']>;
  lButton_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo?: InputMaybe<Scalars['String']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  logo_gt?: InputMaybe<Scalars['String']>;
  logo_gte?: InputMaybe<Scalars['String']>;
  logo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_lt?: InputMaybe<Scalars['String']>;
  logo_lte?: InputMaybe<Scalars['String']>;
  logo_ne?: InputMaybe<Scalars['String']>;
  logo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainImageUrl?: InputMaybe<Scalars['String']>;
  mainImageUrl_exists?: InputMaybe<Scalars['Boolean']>;
  mainImageUrl_gt?: InputMaybe<Scalars['String']>;
  mainImageUrl_gte?: InputMaybe<Scalars['String']>;
  mainImageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainImageUrl_lt?: InputMaybe<Scalars['String']>;
  mainImageUrl_lte?: InputMaybe<Scalars['String']>;
  mainImageUrl_ne?: InputMaybe<Scalars['String']>;
  mainImageUrl_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['String']>;
  organizationId_gte?: InputMaybe<Scalars['String']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId_lt?: InputMaybe<Scalars['String']>;
  organizationId_lte?: InputMaybe<Scalars['String']>;
  organizationId_ne?: InputMaybe<Scalars['String']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStory?: InputMaybe<Scalars['String']>;
  ourStory_exists?: InputMaybe<Scalars['Boolean']>;
  ourStory_gt?: InputMaybe<Scalars['String']>;
  ourStory_gte?: InputMaybe<Scalars['String']>;
  ourStory_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStory_lt?: InputMaybe<Scalars['String']>;
  ourStory_lte?: InputMaybe<Scalars['String']>;
  ourStory_ne?: InputMaybe<Scalars['String']>;
  ourStory_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  peopleSay?: InputMaybe<Scalars['String']>;
  peopleSay_exists?: InputMaybe<Scalars['Boolean']>;
  peopleSay_gt?: InputMaybe<Scalars['String']>;
  peopleSay_gte?: InputMaybe<Scalars['String']>;
  peopleSay_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  peopleSay_lt?: InputMaybe<Scalars['String']>;
  peopleSay_lte?: InputMaybe<Scalars['String']>;
  peopleSay_ne?: InputMaybe<Scalars['String']>;
  peopleSay_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryColor?: InputMaybe<Scalars['String']>;
  primaryColor_exists?: InputMaybe<Scalars['Boolean']>;
  primaryColor_gt?: InputMaybe<Scalars['String']>;
  primaryColor_gte?: InputMaybe<Scalars['String']>;
  primaryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryColor_lt?: InputMaybe<Scalars['String']>;
  primaryColor_lte?: InputMaybe<Scalars['String']>;
  primaryColor_ne?: InputMaybe<Scalars['String']>;
  primaryColor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryColor?: InputMaybe<Scalars['String']>;
  secondaryColor_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryColor_gt?: InputMaybe<Scalars['String']>;
  secondaryColor_gte?: InputMaybe<Scalars['String']>;
  secondaryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryColor_lt?: InputMaybe<Scalars['String']>;
  secondaryColor_lte?: InputMaybe<Scalars['String']>;
  secondaryColor_ne?: InputMaybe<Scalars['String']>;
  secondaryColor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryImage?: InputMaybe<Scalars['String']>;
  secondaryImage_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryImage_gt?: InputMaybe<Scalars['String']>;
  secondaryImage_gte?: InputMaybe<Scalars['String']>;
  secondaryImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryImage_lt?: InputMaybe<Scalars['String']>;
  secondaryImage_lte?: InputMaybe<Scalars['String']>;
  secondaryImage_ne?: InputMaybe<Scalars['String']>;
  secondaryImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  themesColor?: InputMaybe<Scalars['String']>;
  themesColor_exists?: InputMaybe<Scalars['Boolean']>;
  themesColor_gt?: InputMaybe<Scalars['String']>;
  themesColor_gte?: InputMaybe<Scalars['String']>;
  themesColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  themesColor_lt?: InputMaybe<Scalars['String']>;
  themesColor_lte?: InputMaybe<Scalars['String']>;
  themesColor_ne?: InputMaybe<Scalars['String']>;
  themesColor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  usePallete?: InputMaybe<Scalars['Boolean']>;
  usePallete_exists?: InputMaybe<Scalars['Boolean']>;
  usePallete_ne?: InputMaybe<Scalars['Boolean']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  videoUrl_exists?: InputMaybe<Scalars['Boolean']>;
  videoUrl_gt?: InputMaybe<Scalars['String']>;
  videoUrl_gte?: InputMaybe<Scalars['String']>;
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl_lt?: InputMaybe<Scalars['String']>;
  videoUrl_lte?: InputMaybe<Scalars['String']>;
  videoUrl_ne?: InputMaybe<Scalars['String']>;
  videoUrl_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whyShouldWe?: InputMaybe<Scalars['String']>;
  whyShouldWe_exists?: InputMaybe<Scalars['Boolean']>;
  whyShouldWe_gt?: InputMaybe<Scalars['String']>;
  whyShouldWe_gte?: InputMaybe<Scalars['String']>;
  whyShouldWe_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whyShouldWe_lt?: InputMaybe<Scalars['String']>;
  whyShouldWe_lte?: InputMaybe<Scalars['String']>;
  whyShouldWe_ne?: InputMaybe<Scalars['String']>;
  whyShouldWe_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whySupportUs1?: InputMaybe<Scalars['String']>;
  whySupportUs1_exists?: InputMaybe<Scalars['Boolean']>;
  whySupportUs1_gt?: InputMaybe<Scalars['String']>;
  whySupportUs1_gte?: InputMaybe<Scalars['String']>;
  whySupportUs1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whySupportUs1_lt?: InputMaybe<Scalars['String']>;
  whySupportUs1_lte?: InputMaybe<Scalars['String']>;
  whySupportUs1_ne?: InputMaybe<Scalars['String']>;
  whySupportUs1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whySupportUs2?: InputMaybe<Scalars['String']>;
  whySupportUs2_exists?: InputMaybe<Scalars['Boolean']>;
  whySupportUs2_gt?: InputMaybe<Scalars['String']>;
  whySupportUs2_gte?: InputMaybe<Scalars['String']>;
  whySupportUs2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whySupportUs2_lt?: InputMaybe<Scalars['String']>;
  whySupportUs2_lte?: InputMaybe<Scalars['String']>;
  whySupportUs2_ne?: InputMaybe<Scalars['String']>;
  whySupportUs2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whySupportUs3?: InputMaybe<Scalars['String']>;
  whySupportUs3_exists?: InputMaybe<Scalars['Boolean']>;
  whySupportUs3_gt?: InputMaybe<Scalars['String']>;
  whySupportUs3_gte?: InputMaybe<Scalars['String']>;
  whySupportUs3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whySupportUs3_lt?: InputMaybe<Scalars['String']>;
  whySupportUs3_lte?: InputMaybe<Scalars['String']>;
  whySupportUs3_ne?: InputMaybe<Scalars['String']>;
  whySupportUs3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum NonprofitAppearanceSortByInput {
  AccentAsc = 'ACCENT_ASC',
  AccentDesc = 'ACCENT_DESC',
  Detailstory1Asc = 'DETAILSTORY1_ASC',
  Detailstory1Desc = 'DETAILSTORY1_DESC',
  Detailstory2Asc = 'DETAILSTORY2_ASC',
  Detailstory2Desc = 'DETAILSTORY2_DESC',
  Detailstory3Asc = 'DETAILSTORY3_ASC',
  Detailstory3Desc = 'DETAILSTORY3_DESC',
  Eventimagesurl1Asc = 'EVENTIMAGESURL1_ASC',
  Eventimagesurl1Desc = 'EVENTIMAGESURL1_DESC',
  Eventimagesurl2Asc = 'EVENTIMAGESURL2_ASC',
  Eventimagesurl2Desc = 'EVENTIMAGESURL2_DESC',
  Eventimagesurl3Asc = 'EVENTIMAGESURL3_ASC',
  Eventimagesurl3Desc = 'EVENTIMAGESURL3_DESC',
  FaviconAsc = 'FAVICON_ASC',
  FaviconDesc = 'FAVICON_DESC',
  HeaderandfooterAsc = 'HEADERANDFOOTER_ASC',
  HeaderandfooterDesc = 'HEADERANDFOOTER_DESC',
  LbuttonAsc = 'LBUTTON_ASC',
  LbuttonDesc = 'LBUTTON_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  MainimageurlAsc = 'MAINIMAGEURL_ASC',
  MainimageurlDesc = 'MAINIMAGEURL_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  OurstoryAsc = 'OURSTORY_ASC',
  OurstoryDesc = 'OURSTORY_DESC',
  OwnerrealmidAsc = 'OWNERREALMID_ASC',
  OwnerrealmidDesc = 'OWNERREALMID_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  PeoplesayAsc = 'PEOPLESAY_ASC',
  PeoplesayDesc = 'PEOPLESAY_DESC',
  PrimarycolorAsc = 'PRIMARYCOLOR_ASC',
  PrimarycolorDesc = 'PRIMARYCOLOR_DESC',
  SecondarycolorAsc = 'SECONDARYCOLOR_ASC',
  SecondarycolorDesc = 'SECONDARYCOLOR_DESC',
  SecondaryimageAsc = 'SECONDARYIMAGE_ASC',
  SecondaryimageDesc = 'SECONDARYIMAGE_DESC',
  ThemescolorAsc = 'THEMESCOLOR_ASC',
  ThemescolorDesc = 'THEMESCOLOR_DESC',
  VideourlAsc = 'VIDEOURL_ASC',
  VideourlDesc = 'VIDEOURL_DESC',
  WhyshouldweAsc = 'WHYSHOULDWE_ASC',
  WhyshouldweDesc = 'WHYSHOULDWE_DESC',
  Whysupportus1Asc = 'WHYSUPPORTUS1_ASC',
  Whysupportus1Desc = 'WHYSUPPORTUS1_DESC',
  Whysupportus2Asc = 'WHYSUPPORTUS2_ASC',
  Whysupportus2Desc = 'WHYSUPPORTUS2_DESC',
  Whysupportus3Asc = 'WHYSUPPORTUS3_ASC',
  Whysupportus3Desc = 'WHYSUPPORTUS3_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type NonprofitAppearanceUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  accent?: InputMaybe<Scalars['String']>;
  accent_unset?: InputMaybe<Scalars['Boolean']>;
  detailStory1?: InputMaybe<Scalars['String']>;
  detailStory1_unset?: InputMaybe<Scalars['Boolean']>;
  detailStory2?: InputMaybe<Scalars['String']>;
  detailStory2_unset?: InputMaybe<Scalars['Boolean']>;
  detailStory3?: InputMaybe<Scalars['String']>;
  detailStory3_unset?: InputMaybe<Scalars['Boolean']>;
  eventImagesUrl1?: InputMaybe<Scalars['String']>;
  eventImagesUrl1_unset?: InputMaybe<Scalars['Boolean']>;
  eventImagesUrl2?: InputMaybe<Scalars['String']>;
  eventImagesUrl2_unset?: InputMaybe<Scalars['Boolean']>;
  eventImagesUrl3?: InputMaybe<Scalars['String']>;
  eventImagesUrl3_unset?: InputMaybe<Scalars['Boolean']>;
  favIcon?: InputMaybe<Scalars['String']>;
  favIcon_unset?: InputMaybe<Scalars['Boolean']>;
  headerAndFooter?: InputMaybe<Scalars['String']>;
  headerAndFooter_unset?: InputMaybe<Scalars['Boolean']>;
  lButton?: InputMaybe<Scalars['String']>;
  lButton_unset?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  logo_unset?: InputMaybe<Scalars['Boolean']>;
  mainImageUrl?: InputMaybe<Scalars['String']>;
  mainImageUrl_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  ourStory?: InputMaybe<Scalars['String']>;
  ourStory_unset?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  peopleSay?: InputMaybe<Scalars['String']>;
  peopleSay_unset?: InputMaybe<Scalars['Boolean']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  primaryColor_unset?: InputMaybe<Scalars['Boolean']>;
  secondaryColor?: InputMaybe<Scalars['String']>;
  secondaryColor_unset?: InputMaybe<Scalars['Boolean']>;
  secondaryImage?: InputMaybe<Scalars['String']>;
  secondaryImage_unset?: InputMaybe<Scalars['Boolean']>;
  themesColor?: InputMaybe<Scalars['String']>;
  themesColor_unset?: InputMaybe<Scalars['Boolean']>;
  usePallete?: InputMaybe<Scalars['Boolean']>;
  usePallete_unset?: InputMaybe<Scalars['Boolean']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  videoUrl_unset?: InputMaybe<Scalars['Boolean']>;
  whyShouldWe?: InputMaybe<Scalars['String']>;
  whyShouldWe_unset?: InputMaybe<Scalars['Boolean']>;
  whySupportUs1?: InputMaybe<Scalars['String']>;
  whySupportUs1_unset?: InputMaybe<Scalars['Boolean']>;
  whySupportUs2?: InputMaybe<Scalars['String']>;
  whySupportUs2_unset?: InputMaybe<Scalars['Boolean']>;
  whySupportUs3?: InputMaybe<Scalars['String']>;
  whySupportUs3_unset?: InputMaybe<Scalars['Boolean']>;
};

export type NonprofitInsertInput = {
  OrganizationBankAccountName?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  aboutHeading?: InputMaybe<Scalars['String']>;
  aboutPicture?: InputMaybe<Scalars['String']>;
  comissioner?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  idNumberCard?: InputMaybe<Scalars['String']>;
  impact1Amount?: InputMaybe<Scalars['String']>;
  impact1Title?: InputMaybe<Scalars['String']>;
  impact2Amount?: InputMaybe<Scalars['String']>;
  impact2Title?: InputMaybe<Scalars['String']>;
  impact3Amount?: InputMaybe<Scalars['String']>;
  impact3Title?: InputMaybe<Scalars['String']>;
  impactCategory?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  nonprofitType?: InputMaybe<Scalars['String']>;
  orgObjective?: InputMaybe<Scalars['String']>;
  organizationBankAccount?: InputMaybe<Scalars['String']>;
  organizationBankAccountName?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber?: InputMaybe<Scalars['String']>;
  organizationEmail?: InputMaybe<Scalars['String']>;
  organizationModerator?: InputMaybe<Scalars['String']>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationProfile?: InputMaybe<Scalars['String']>;
  organizationSize?: InputMaybe<Scalars['String']>;
  organizationSwiftCode?: InputMaybe<Scalars['String']>;
  organizationType?: InputMaybe<Scalars['String']>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<Scalars['Int']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['String']>;
  xenditMode?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type NonprofitQueryInput = {
  AND?: InputMaybe<Array<NonprofitQueryInput>>;
  OR?: InputMaybe<Array<NonprofitQueryInput>>;
  OrganizationBankAccountName?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_exists?: InputMaybe<Scalars['Boolean']>;
  OrganizationBankAccountName_gt?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_gte?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  OrganizationBankAccountName_lt?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_lte?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_ne?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  aboutHeading?: InputMaybe<Scalars['String']>;
  aboutHeading_exists?: InputMaybe<Scalars['Boolean']>;
  aboutHeading_gt?: InputMaybe<Scalars['String']>;
  aboutHeading_gte?: InputMaybe<Scalars['String']>;
  aboutHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutHeading_lt?: InputMaybe<Scalars['String']>;
  aboutHeading_lte?: InputMaybe<Scalars['String']>;
  aboutHeading_ne?: InputMaybe<Scalars['String']>;
  aboutHeading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutPicture?: InputMaybe<Scalars['String']>;
  aboutPicture_exists?: InputMaybe<Scalars['Boolean']>;
  aboutPicture_gt?: InputMaybe<Scalars['String']>;
  aboutPicture_gte?: InputMaybe<Scalars['String']>;
  aboutPicture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutPicture_lt?: InputMaybe<Scalars['String']>;
  aboutPicture_lte?: InputMaybe<Scalars['String']>;
  aboutPicture_ne?: InputMaybe<Scalars['String']>;
  aboutPicture_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comissioner?: InputMaybe<Scalars['String']>;
  comissioner_exists?: InputMaybe<Scalars['Boolean']>;
  comissioner_gt?: InputMaybe<Scalars['String']>;
  comissioner_gte?: InputMaybe<Scalars['String']>;
  comissioner_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comissioner_lt?: InputMaybe<Scalars['String']>;
  comissioner_lte?: InputMaybe<Scalars['String']>;
  comissioner_ne?: InputMaybe<Scalars['String']>;
  comissioner_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  defaultCurrency_gt?: InputMaybe<Scalars['String']>;
  defaultCurrency_gte?: InputMaybe<Scalars['String']>;
  defaultCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCurrency_lt?: InputMaybe<Scalars['String']>;
  defaultCurrency_lte?: InputMaybe<Scalars['String']>;
  defaultCurrency_ne?: InputMaybe<Scalars['String']>;
  defaultCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal1_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal1_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal2_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal2_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal3_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal3_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal4_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal4_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal5_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal5_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal6_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal6_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage1_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage1_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage1_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage1_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage1_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage1_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage2_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage2_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage2_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage2_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage2_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage2_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage3_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage3_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage3_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage3_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage3_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage3_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage4_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage4_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage4_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage4_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage4_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage4_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage5_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage5_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage5_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage5_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage5_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage5_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeImage6_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage6_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage6_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage6_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage6_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage6_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle1_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle1_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle2_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle2_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle3_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle3_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle4_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle4_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle5_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle5_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle6_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle6_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_gt?: InputMaybe<Scalars['String']>;
  facebook_gte?: InputMaybe<Scalars['String']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_lt?: InputMaybe<Scalars['String']>;
  facebook_lte?: InputMaybe<Scalars['String']>;
  facebook_ne?: InputMaybe<Scalars['String']>;
  facebook_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favicon?: InputMaybe<Scalars['String']>;
  favicon_exists?: InputMaybe<Scalars['Boolean']>;
  favicon_gt?: InputMaybe<Scalars['String']>;
  favicon_gte?: InputMaybe<Scalars['String']>;
  favicon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favicon_lt?: InputMaybe<Scalars['String']>;
  favicon_lte?: InputMaybe<Scalars['String']>;
  favicon_ne?: InputMaybe<Scalars['String']>;
  favicon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featured_exists?: InputMaybe<Scalars['Boolean']>;
  featured_ne?: InputMaybe<Scalars['Boolean']>;
  idNumberCard?: InputMaybe<Scalars['String']>;
  idNumberCard_exists?: InputMaybe<Scalars['Boolean']>;
  idNumberCard_gt?: InputMaybe<Scalars['String']>;
  idNumberCard_gte?: InputMaybe<Scalars['String']>;
  idNumberCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  idNumberCard_lt?: InputMaybe<Scalars['String']>;
  idNumberCard_lte?: InputMaybe<Scalars['String']>;
  idNumberCard_ne?: InputMaybe<Scalars['String']>;
  idNumberCard_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Amount?: InputMaybe<Scalars['String']>;
  impact1Amount_exists?: InputMaybe<Scalars['Boolean']>;
  impact1Amount_gt?: InputMaybe<Scalars['String']>;
  impact1Amount_gte?: InputMaybe<Scalars['String']>;
  impact1Amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Amount_lt?: InputMaybe<Scalars['String']>;
  impact1Amount_lte?: InputMaybe<Scalars['String']>;
  impact1Amount_ne?: InputMaybe<Scalars['String']>;
  impact1Amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Title?: InputMaybe<Scalars['String']>;
  impact1Title_exists?: InputMaybe<Scalars['Boolean']>;
  impact1Title_gt?: InputMaybe<Scalars['String']>;
  impact1Title_gte?: InputMaybe<Scalars['String']>;
  impact1Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Title_lt?: InputMaybe<Scalars['String']>;
  impact1Title_lte?: InputMaybe<Scalars['String']>;
  impact1Title_ne?: InputMaybe<Scalars['String']>;
  impact1Title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Amount?: InputMaybe<Scalars['String']>;
  impact2Amount_exists?: InputMaybe<Scalars['Boolean']>;
  impact2Amount_gt?: InputMaybe<Scalars['String']>;
  impact2Amount_gte?: InputMaybe<Scalars['String']>;
  impact2Amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Amount_lt?: InputMaybe<Scalars['String']>;
  impact2Amount_lte?: InputMaybe<Scalars['String']>;
  impact2Amount_ne?: InputMaybe<Scalars['String']>;
  impact2Amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Title?: InputMaybe<Scalars['String']>;
  impact2Title_exists?: InputMaybe<Scalars['Boolean']>;
  impact2Title_gt?: InputMaybe<Scalars['String']>;
  impact2Title_gte?: InputMaybe<Scalars['String']>;
  impact2Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Title_lt?: InputMaybe<Scalars['String']>;
  impact2Title_lte?: InputMaybe<Scalars['String']>;
  impact2Title_ne?: InputMaybe<Scalars['String']>;
  impact2Title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Amount?: InputMaybe<Scalars['String']>;
  impact3Amount_exists?: InputMaybe<Scalars['Boolean']>;
  impact3Amount_gt?: InputMaybe<Scalars['String']>;
  impact3Amount_gte?: InputMaybe<Scalars['String']>;
  impact3Amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Amount_lt?: InputMaybe<Scalars['String']>;
  impact3Amount_lte?: InputMaybe<Scalars['String']>;
  impact3Amount_ne?: InputMaybe<Scalars['String']>;
  impact3Amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Title?: InputMaybe<Scalars['String']>;
  impact3Title_exists?: InputMaybe<Scalars['Boolean']>;
  impact3Title_gt?: InputMaybe<Scalars['String']>;
  impact3Title_gte?: InputMaybe<Scalars['String']>;
  impact3Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Title_lt?: InputMaybe<Scalars['String']>;
  impact3Title_lte?: InputMaybe<Scalars['String']>;
  impact3Title_ne?: InputMaybe<Scalars['String']>;
  impact3Title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impactCategory?: InputMaybe<Scalars['String']>;
  impactCategory_exists?: InputMaybe<Scalars['Boolean']>;
  impactCategory_gt?: InputMaybe<Scalars['String']>;
  impactCategory_gte?: InputMaybe<Scalars['String']>;
  impactCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impactCategory_lt?: InputMaybe<Scalars['String']>;
  impactCategory_lte?: InputMaybe<Scalars['String']>;
  impactCategory_ne?: InputMaybe<Scalars['String']>;
  impactCategory_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram?: InputMaybe<Scalars['String']>;
  instagram_exists?: InputMaybe<Scalars['Boolean']>;
  instagram_gt?: InputMaybe<Scalars['String']>;
  instagram_gte?: InputMaybe<Scalars['String']>;
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram_lt?: InputMaybe<Scalars['String']>;
  instagram_lte?: InputMaybe<Scalars['String']>;
  instagram_ne?: InputMaybe<Scalars['String']>;
  instagram_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseNumber_exists?: InputMaybe<Scalars['Boolean']>;
  licenseNumber_gt?: InputMaybe<Scalars['String']>;
  licenseNumber_gte?: InputMaybe<Scalars['String']>;
  licenseNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  licenseNumber_lt?: InputMaybe<Scalars['String']>;
  licenseNumber_lte?: InputMaybe<Scalars['String']>;
  licenseNumber_ne?: InputMaybe<Scalars['String']>;
  licenseNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_exists?: InputMaybe<Scalars['Boolean']>;
  linkedin_gt?: InputMaybe<Scalars['String']>;
  linkedin_gte?: InputMaybe<Scalars['String']>;
  linkedin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin_lt?: InputMaybe<Scalars['String']>;
  linkedin_lte?: InputMaybe<Scalars['String']>;
  linkedin_ne?: InputMaybe<Scalars['String']>;
  linkedin_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_gt?: InputMaybe<Scalars['String']>;
  location_gte?: InputMaybe<Scalars['String']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_lt?: InputMaybe<Scalars['String']>;
  location_lte?: InputMaybe<Scalars['String']>;
  location_ne?: InputMaybe<Scalars['String']>;
  location_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo?: InputMaybe<Scalars['String']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  logo_gt?: InputMaybe<Scalars['String']>;
  logo_gte?: InputMaybe<Scalars['String']>;
  logo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_lt?: InputMaybe<Scalars['String']>;
  logo_lte?: InputMaybe<Scalars['String']>;
  logo_ne?: InputMaybe<Scalars['String']>;
  logo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitType?: InputMaybe<Scalars['String']>;
  nonprofitType_exists?: InputMaybe<Scalars['Boolean']>;
  nonprofitType_gt?: InputMaybe<Scalars['String']>;
  nonprofitType_gte?: InputMaybe<Scalars['String']>;
  nonprofitType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitType_lt?: InputMaybe<Scalars['String']>;
  nonprofitType_lte?: InputMaybe<Scalars['String']>;
  nonprofitType_ne?: InputMaybe<Scalars['String']>;
  nonprofitType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orgObjective?: InputMaybe<Scalars['String']>;
  orgObjective_exists?: InputMaybe<Scalars['Boolean']>;
  orgObjective_gt?: InputMaybe<Scalars['String']>;
  orgObjective_gte?: InputMaybe<Scalars['String']>;
  orgObjective_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orgObjective_lt?: InputMaybe<Scalars['String']>;
  orgObjective_lte?: InputMaybe<Scalars['String']>;
  orgObjective_ne?: InputMaybe<Scalars['String']>;
  orgObjective_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccount?: InputMaybe<Scalars['String']>;
  organizationBankAccountName?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_exists?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccountName_gt?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_gte?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccountName_lt?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_lte?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_ne?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccountNumber?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_exists?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccountNumber_gt?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_gte?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccountNumber_lt?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_lte?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_ne?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccount_exists?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccount_gt?: InputMaybe<Scalars['String']>;
  organizationBankAccount_gte?: InputMaybe<Scalars['String']>;
  organizationBankAccount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccount_lt?: InputMaybe<Scalars['String']>;
  organizationBankAccount_lte?: InputMaybe<Scalars['String']>;
  organizationBankAccount_ne?: InputMaybe<Scalars['String']>;
  organizationBankAccount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationEmail?: InputMaybe<Scalars['String']>;
  organizationEmail_exists?: InputMaybe<Scalars['Boolean']>;
  organizationEmail_gt?: InputMaybe<Scalars['String']>;
  organizationEmail_gte?: InputMaybe<Scalars['String']>;
  organizationEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationEmail_lt?: InputMaybe<Scalars['String']>;
  organizationEmail_lte?: InputMaybe<Scalars['String']>;
  organizationEmail_ne?: InputMaybe<Scalars['String']>;
  organizationEmail_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationModerator?: InputMaybe<Scalars['String']>;
  organizationModerator_exists?: InputMaybe<Scalars['Boolean']>;
  organizationModerator_gt?: InputMaybe<Scalars['String']>;
  organizationModerator_gte?: InputMaybe<Scalars['String']>;
  organizationModerator_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationModerator_lt?: InputMaybe<Scalars['String']>;
  organizationModerator_lte?: InputMaybe<Scalars['String']>;
  organizationModerator_ne?: InputMaybe<Scalars['String']>;
  organizationModerator_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationName_exists?: InputMaybe<Scalars['Boolean']>;
  organizationName_gt?: InputMaybe<Scalars['String']>;
  organizationName_gte?: InputMaybe<Scalars['String']>;
  organizationName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationName_lt?: InputMaybe<Scalars['String']>;
  organizationName_lte?: InputMaybe<Scalars['String']>;
  organizationName_ne?: InputMaybe<Scalars['String']>;
  organizationName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationProfile?: InputMaybe<Scalars['String']>;
  organizationProfile_exists?: InputMaybe<Scalars['Boolean']>;
  organizationProfile_gt?: InputMaybe<Scalars['String']>;
  organizationProfile_gte?: InputMaybe<Scalars['String']>;
  organizationProfile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationProfile_lt?: InputMaybe<Scalars['String']>;
  organizationProfile_lte?: InputMaybe<Scalars['String']>;
  organizationProfile_ne?: InputMaybe<Scalars['String']>;
  organizationProfile_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSize?: InputMaybe<Scalars['String']>;
  organizationSize_exists?: InputMaybe<Scalars['Boolean']>;
  organizationSize_gt?: InputMaybe<Scalars['String']>;
  organizationSize_gte?: InputMaybe<Scalars['String']>;
  organizationSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSize_lt?: InputMaybe<Scalars['String']>;
  organizationSize_lte?: InputMaybe<Scalars['String']>;
  organizationSize_ne?: InputMaybe<Scalars['String']>;
  organizationSize_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSwiftCode?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_exists?: InputMaybe<Scalars['Boolean']>;
  organizationSwiftCode_gt?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_gte?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSwiftCode_lt?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_lte?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_ne?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationType?: InputMaybe<Scalars['String']>;
  organizationType_exists?: InputMaybe<Scalars['Boolean']>;
  organizationType_gt?: InputMaybe<Scalars['String']>;
  organizationType_gte?: InputMaybe<Scalars['String']>;
  organizationType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationType_lt?: InputMaybe<Scalars['String']>;
  organizationType_lte?: InputMaybe<Scalars['String']>;
  organizationType_ne?: InputMaybe<Scalars['String']>;
  organizationType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal1_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal1_gt?: InputMaybe<Scalars['String']>;
  ourGoal1_gte?: InputMaybe<Scalars['String']>;
  ourGoal1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal1_lt?: InputMaybe<Scalars['String']>;
  ourGoal1_lte?: InputMaybe<Scalars['String']>;
  ourGoal1_ne?: InputMaybe<Scalars['String']>;
  ourGoal1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal2_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal2_gt?: InputMaybe<Scalars['String']>;
  ourGoal2_gte?: InputMaybe<Scalars['String']>;
  ourGoal2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal2_lt?: InputMaybe<Scalars['String']>;
  ourGoal2_lte?: InputMaybe<Scalars['String']>;
  ourGoal2_ne?: InputMaybe<Scalars['String']>;
  ourGoal2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal3_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal3_gt?: InputMaybe<Scalars['String']>;
  ourGoal3_gte?: InputMaybe<Scalars['String']>;
  ourGoal3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal3_lt?: InputMaybe<Scalars['String']>;
  ourGoal3_lte?: InputMaybe<Scalars['String']>;
  ourGoal3_ne?: InputMaybe<Scalars['String']>;
  ourGoal3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal4_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal4_gt?: InputMaybe<Scalars['String']>;
  ourGoal4_gte?: InputMaybe<Scalars['String']>;
  ourGoal4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal4_lt?: InputMaybe<Scalars['String']>;
  ourGoal4_lte?: InputMaybe<Scalars['String']>;
  ourGoal4_ne?: InputMaybe<Scalars['String']>;
  ourGoal4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal5_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal5_gt?: InputMaybe<Scalars['String']>;
  ourGoal5_gte?: InputMaybe<Scalars['String']>;
  ourGoal5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal5_lt?: InputMaybe<Scalars['String']>;
  ourGoal5_lte?: InputMaybe<Scalars['String']>;
  ourGoal5_ne?: InputMaybe<Scalars['String']>;
  ourGoal5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourGoal6_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal6_gt?: InputMaybe<Scalars['String']>;
  ourGoal6_gte?: InputMaybe<Scalars['String']>;
  ourGoal6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal6_lt?: InputMaybe<Scalars['String']>;
  ourGoal6_lte?: InputMaybe<Scalars['String']>;
  ourGoal6_ne?: InputMaybe<Scalars['String']>;
  ourGoal6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourMissionDetail_exists?: InputMaybe<Scalars['Boolean']>;
  ourMissionDetail_gt?: InputMaybe<Scalars['String']>;
  ourMissionDetail_gte?: InputMaybe<Scalars['String']>;
  ourMissionDetail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourMissionDetail_lt?: InputMaybe<Scalars['String']>;
  ourMissionDetail_lte?: InputMaybe<Scalars['String']>;
  ourMissionDetail_ne?: InputMaybe<Scalars['String']>;
  ourMissionDetail_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourStoryDesc_exists?: InputMaybe<Scalars['Boolean']>;
  ourStoryDesc_gt?: InputMaybe<Scalars['String']>;
  ourStoryDesc_gte?: InputMaybe<Scalars['String']>;
  ourStoryDesc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStoryDesc_lt?: InputMaybe<Scalars['String']>;
  ourStoryDesc_lte?: InputMaybe<Scalars['String']>;
  ourStoryDesc_ne?: InputMaybe<Scalars['String']>;
  ourStoryDesc_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue1_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue1_gt?: InputMaybe<Scalars['String']>;
  ourValue1_gte?: InputMaybe<Scalars['String']>;
  ourValue1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue1_lt?: InputMaybe<Scalars['String']>;
  ourValue1_lte?: InputMaybe<Scalars['String']>;
  ourValue1_ne?: InputMaybe<Scalars['String']>;
  ourValue1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue2_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue2_gt?: InputMaybe<Scalars['String']>;
  ourValue2_gte?: InputMaybe<Scalars['String']>;
  ourValue2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue2_lt?: InputMaybe<Scalars['String']>;
  ourValue2_lte?: InputMaybe<Scalars['String']>;
  ourValue2_ne?: InputMaybe<Scalars['String']>;
  ourValue2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ourValue3_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue3_gt?: InputMaybe<Scalars['String']>;
  ourValue3_gte?: InputMaybe<Scalars['String']>;
  ourValue3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue3_lt?: InputMaybe<Scalars['String']>;
  ourValue3_lte?: InputMaybe<Scalars['String']>;
  ourValue3_ne?: InputMaybe<Scalars['String']>;
  ourValue3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  packageType?: InputMaybe<Scalars['Int']>;
  packageType_exists?: InputMaybe<Scalars['Boolean']>;
  packageType_gt?: InputMaybe<Scalars['Int']>;
  packageType_gte?: InputMaybe<Scalars['Int']>;
  packageType_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  packageType_lt?: InputMaybe<Scalars['Int']>;
  packageType_lte?: InputMaybe<Scalars['Int']>;
  packageType_ne?: InputMaybe<Scalars['Int']>;
  packageType_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  paypalClientId_exists?: InputMaybe<Scalars['Boolean']>;
  paypalClientId_gt?: InputMaybe<Scalars['String']>;
  paypalClientId_gte?: InputMaybe<Scalars['String']>;
  paypalClientId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paypalClientId_lt?: InputMaybe<Scalars['String']>;
  paypalClientId_lte?: InputMaybe<Scalars['String']>;
  paypalClientId_ne?: InputMaybe<Scalars['String']>;
  paypalClientId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_gt?: InputMaybe<Scalars['String']>;
  phoneNumber_gte?: InputMaybe<Scalars['String']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_lt?: InputMaybe<Scalars['String']>;
  phoneNumber_lte?: InputMaybe<Scalars['String']>;
  phoneNumber_ne?: InputMaybe<Scalars['String']>;
  phoneNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']>;
  postalCode_gt?: InputMaybe<Scalars['String']>;
  postalCode_gte?: InputMaybe<Scalars['String']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode_lt?: InputMaybe<Scalars['String']>;
  postalCode_lte?: InputMaybe<Scalars['String']>;
  postalCode_ne?: InputMaybe<Scalars['String']>;
  postalCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_ne?: InputMaybe<Scalars['String']>;
  role_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_gt?: InputMaybe<Scalars['String']>;
  twitter_gte?: InputMaybe<Scalars['String']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_lt?: InputMaybe<Scalars['String']>;
  twitter_lte?: InputMaybe<Scalars['String']>;
  twitter_ne?: InputMaybe<Scalars['String']>;
  twitter_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Scalars['String']>;
  username_exists?: InputMaybe<Scalars['Boolean']>;
  username_gt?: InputMaybe<Scalars['String']>;
  username_gte?: InputMaybe<Scalars['String']>;
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_lt?: InputMaybe<Scalars['String']>;
  username_lte?: InputMaybe<Scalars['String']>;
  username_ne?: InputMaybe<Scalars['String']>;
  username_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_ne?: InputMaybe<Scalars['String']>;
  website_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_exists?: InputMaybe<Scalars['Boolean']>;
  whatsapp_gt?: InputMaybe<Scalars['String']>;
  whatsapp_gte?: InputMaybe<Scalars['String']>;
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp_lt?: InputMaybe<Scalars['String']>;
  whatsapp_lte?: InputMaybe<Scalars['String']>;
  whatsapp_ne?: InputMaybe<Scalars['String']>;
  whatsapp_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditMode?: InputMaybe<Scalars['String']>;
  xenditMode_exists?: InputMaybe<Scalars['Boolean']>;
  xenditMode_gt?: InputMaybe<Scalars['String']>;
  xenditMode_gte?: InputMaybe<Scalars['String']>;
  xenditMode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditMode_lt?: InputMaybe<Scalars['String']>;
  xenditMode_lte?: InputMaybe<Scalars['String']>;
  xenditMode_ne?: InputMaybe<Scalars['String']>;
  xenditMode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_gt?: InputMaybe<Scalars['String']>;
  youtube_gte?: InputMaybe<Scalars['String']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_lt?: InputMaybe<Scalars['String']>;
  youtube_lte?: InputMaybe<Scalars['String']>;
  youtube_ne?: InputMaybe<Scalars['String']>;
  youtube_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NonprofitSecret = {
  __typename?: 'NonprofitSecret';
  _id?: Maybe<Scalars['ObjectId']>;
  nonprofitRealmId?: Maybe<Scalars['ObjectId']>;
  organizationId?: Maybe<Scalars['ObjectId']>;
  xenditLiveCallbackToken?: Maybe<Scalars['String']>;
  xenditLivePrivateKey?: Maybe<Scalars['String']>;
  xenditLivePublicKey?: Maybe<Scalars['String']>;
  xenditTestCallbackToken?: Maybe<Scalars['String']>;
  xenditTestPrivateKey?: Maybe<Scalars['String']>;
  xenditTestPublicKey?: Maybe<Scalars['String']>;
};

export type NonprofitSecretInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId?: InputMaybe<Scalars['ObjectId']>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  xenditLiveCallbackToken?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey?: InputMaybe<Scalars['String']>;
};

export type NonprofitSecretQueryInput = {
  AND?: InputMaybe<Array<NonprofitSecretQueryInput>>;
  OR?: InputMaybe<Array<NonprofitSecretQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  nonprofitRealmId?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  nonprofitRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  nonprofitRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['ObjectId']>;
  organizationId_gte?: InputMaybe<Scalars['ObjectId']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  organizationId_lt?: InputMaybe<Scalars['ObjectId']>;
  organizationId_lte?: InputMaybe<Scalars['ObjectId']>;
  organizationId_ne?: InputMaybe<Scalars['ObjectId']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  xenditLiveCallbackToken?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_exists?: InputMaybe<Scalars['Boolean']>;
  xenditLiveCallbackToken_gt?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_gte?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditLiveCallbackToken_lt?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_lte?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_ne?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditLivePrivateKey?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_exists?: InputMaybe<Scalars['Boolean']>;
  xenditLivePrivateKey_gt?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_gte?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditLivePrivateKey_lt?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_lte?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_ne?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditLivePublicKey?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_exists?: InputMaybe<Scalars['Boolean']>;
  xenditLivePublicKey_gt?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_gte?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditLivePublicKey_lt?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_lte?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_ne?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditTestCallbackToken?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_exists?: InputMaybe<Scalars['Boolean']>;
  xenditTestCallbackToken_gt?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_gte?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditTestCallbackToken_lt?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_lte?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_ne?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditTestPrivateKey?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_exists?: InputMaybe<Scalars['Boolean']>;
  xenditTestPrivateKey_gt?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_gte?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditTestPrivateKey_lt?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_lte?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_ne?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditTestPublicKey?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_exists?: InputMaybe<Scalars['Boolean']>;
  xenditTestPublicKey_gt?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_gte?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditTestPublicKey_lt?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_lte?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_ne?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum NonprofitSecretSortByInput {
  NonprofitrealmidAsc = 'NONPROFITREALMID_ASC',
  NonprofitrealmidDesc = 'NONPROFITREALMID_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  XenditlivecallbacktokenAsc = 'XENDITLIVECALLBACKTOKEN_ASC',
  XenditlivecallbacktokenDesc = 'XENDITLIVECALLBACKTOKEN_DESC',
  XenditliveprivatekeyAsc = 'XENDITLIVEPRIVATEKEY_ASC',
  XenditliveprivatekeyDesc = 'XENDITLIVEPRIVATEKEY_DESC',
  XenditlivepublickeyAsc = 'XENDITLIVEPUBLICKEY_ASC',
  XenditlivepublickeyDesc = 'XENDITLIVEPUBLICKEY_DESC',
  XendittestcallbacktokenAsc = 'XENDITTESTCALLBACKTOKEN_ASC',
  XendittestcallbacktokenDesc = 'XENDITTESTCALLBACKTOKEN_DESC',
  XendittestprivatekeyAsc = 'XENDITTESTPRIVATEKEY_ASC',
  XendittestprivatekeyDesc = 'XENDITTESTPRIVATEKEY_DESC',
  XendittestpublickeyAsc = 'XENDITTESTPUBLICKEY_ASC',
  XendittestpublickeyDesc = 'XENDITTESTPUBLICKEY_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type NonprofitSecretUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  nonprofitRealmId?: InputMaybe<Scalars['ObjectId']>;
  nonprofitRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  xenditLiveCallbackToken?: InputMaybe<Scalars['String']>;
  xenditLiveCallbackToken_unset?: InputMaybe<Scalars['Boolean']>;
  xenditLivePrivateKey?: InputMaybe<Scalars['String']>;
  xenditLivePrivateKey_unset?: InputMaybe<Scalars['Boolean']>;
  xenditLivePublicKey?: InputMaybe<Scalars['String']>;
  xenditLivePublicKey_unset?: InputMaybe<Scalars['Boolean']>;
  xenditTestCallbackToken?: InputMaybe<Scalars['String']>;
  xenditTestCallbackToken_unset?: InputMaybe<Scalars['Boolean']>;
  xenditTestPrivateKey?: InputMaybe<Scalars['String']>;
  xenditTestPrivateKey_unset?: InputMaybe<Scalars['Boolean']>;
  xenditTestPublicKey?: InputMaybe<Scalars['String']>;
  xenditTestPublicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export enum NonprofitSortByInput {
  AboutheadingAsc = 'ABOUTHEADING_ASC',
  AboutheadingDesc = 'ABOUTHEADING_DESC',
  AboutpictureAsc = 'ABOUTPICTURE_ASC',
  AboutpictureDesc = 'ABOUTPICTURE_DESC',
  ComissionerAsc = 'COMISSIONER_ASC',
  ComissionerDesc = 'COMISSIONER_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DefaultcurrencyAsc = 'DEFAULTCURRENCY_ASC',
  DefaultcurrencyDesc = 'DEFAULTCURRENCY_DESC',
  Defaulticongoal1Asc = 'DEFAULTICONGOAL1_ASC',
  Defaulticongoal1Desc = 'DEFAULTICONGOAL1_DESC',
  Defaulticongoal2Asc = 'DEFAULTICONGOAL2_ASC',
  Defaulticongoal2Desc = 'DEFAULTICONGOAL2_DESC',
  Defaulticongoal3Asc = 'DEFAULTICONGOAL3_ASC',
  Defaulticongoal3Desc = 'DEFAULTICONGOAL3_DESC',
  Defaulticongoal4Asc = 'DEFAULTICONGOAL4_ASC',
  Defaulticongoal4Desc = 'DEFAULTICONGOAL4_DESC',
  Defaulticongoal5Asc = 'DEFAULTICONGOAL5_ASC',
  Defaulticongoal5Desc = 'DEFAULTICONGOAL5_DESC',
  Defaulticongoal6Asc = 'DEFAULTICONGOAL6_ASC',
  Defaulticongoal6Desc = 'DEFAULTICONGOAL6_DESC',
  Donationtypeimage1Asc = 'DONATIONTYPEIMAGE1_ASC',
  Donationtypeimage1Desc = 'DONATIONTYPEIMAGE1_DESC',
  Donationtypeimage2Asc = 'DONATIONTYPEIMAGE2_ASC',
  Donationtypeimage2Desc = 'DONATIONTYPEIMAGE2_DESC',
  Donationtypeimage3Asc = 'DONATIONTYPEIMAGE3_ASC',
  Donationtypeimage3Desc = 'DONATIONTYPEIMAGE3_DESC',
  Donationtypeimage4Asc = 'DONATIONTYPEIMAGE4_ASC',
  Donationtypeimage4Desc = 'DONATIONTYPEIMAGE4_DESC',
  Donationtypeimage5Asc = 'DONATIONTYPEIMAGE5_ASC',
  Donationtypeimage5Desc = 'DONATIONTYPEIMAGE5_DESC',
  Donationtypeimage6Asc = 'DONATIONTYPEIMAGE6_ASC',
  Donationtypeimage6Desc = 'DONATIONTYPEIMAGE6_DESC',
  Donationtypetitle1Asc = 'DONATIONTYPETITLE1_ASC',
  Donationtypetitle1Desc = 'DONATIONTYPETITLE1_DESC',
  Donationtypetitle2Asc = 'DONATIONTYPETITLE2_ASC',
  Donationtypetitle2Desc = 'DONATIONTYPETITLE2_DESC',
  Donationtypetitle3Asc = 'DONATIONTYPETITLE3_ASC',
  Donationtypetitle3Desc = 'DONATIONTYPETITLE3_DESC',
  Donationtypetitle4Asc = 'DONATIONTYPETITLE4_ASC',
  Donationtypetitle4Desc = 'DONATIONTYPETITLE4_DESC',
  Donationtypetitle5Asc = 'DONATIONTYPETITLE5_ASC',
  Donationtypetitle5Desc = 'DONATIONTYPETITLE5_DESC',
  Donationtypetitle6Asc = 'DONATIONTYPETITLE6_ASC',
  Donationtypetitle6Desc = 'DONATIONTYPETITLE6_DESC',
  FacebookAsc = 'FACEBOOK_ASC',
  FacebookDesc = 'FACEBOOK_DESC',
  FaviconAsc = 'FAVICON_ASC',
  FaviconDesc = 'FAVICON_DESC',
  IdnumbercardAsc = 'IDNUMBERCARD_ASC',
  IdnumbercardDesc = 'IDNUMBERCARD_DESC',
  Impact1AmountAsc = 'IMPACT1AMOUNT_ASC',
  Impact1AmountDesc = 'IMPACT1AMOUNT_DESC',
  Impact1TitleAsc = 'IMPACT1TITLE_ASC',
  Impact1TitleDesc = 'IMPACT1TITLE_DESC',
  Impact2AmountAsc = 'IMPACT2AMOUNT_ASC',
  Impact2AmountDesc = 'IMPACT2AMOUNT_DESC',
  Impact2TitleAsc = 'IMPACT2TITLE_ASC',
  Impact2TitleDesc = 'IMPACT2TITLE_DESC',
  Impact3AmountAsc = 'IMPACT3AMOUNT_ASC',
  Impact3AmountDesc = 'IMPACT3AMOUNT_DESC',
  Impact3TitleAsc = 'IMPACT3TITLE_ASC',
  Impact3TitleDesc = 'IMPACT3TITLE_DESC',
  ImpactcategoryAsc = 'IMPACTCATEGORY_ASC',
  ImpactcategoryDesc = 'IMPACTCATEGORY_DESC',
  InstagramAsc = 'INSTAGRAM_ASC',
  InstagramDesc = 'INSTAGRAM_DESC',
  LicensenumberAsc = 'LICENSENUMBER_ASC',
  LicensenumberDesc = 'LICENSENUMBER_DESC',
  LinkedinAsc = 'LINKEDIN_ASC',
  LinkedinDesc = 'LINKEDIN_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  NonprofittypeAsc = 'NONPROFITTYPE_ASC',
  NonprofittypeDesc = 'NONPROFITTYPE_DESC',
  OrganizationbankaccountnameAsc = 'ORGANIZATIONBANKACCOUNTNAME_ASC',
  OrganizationbankaccountnameDesc = 'ORGANIZATIONBANKACCOUNTNAME_DESC',
  OrganizationbankaccountnumberAsc = 'ORGANIZATIONBANKACCOUNTNUMBER_ASC',
  OrganizationbankaccountnumberDesc = 'ORGANIZATIONBANKACCOUNTNUMBER_DESC',
  OrganizationbankaccountAsc = 'ORGANIZATIONBANKACCOUNT_ASC',
  OrganizationbankaccountDesc = 'ORGANIZATIONBANKACCOUNT_DESC',
  OrganizationemailAsc = 'ORGANIZATIONEMAIL_ASC',
  OrganizationemailDesc = 'ORGANIZATIONEMAIL_DESC',
  OrganizationmoderatorAsc = 'ORGANIZATIONMODERATOR_ASC',
  OrganizationmoderatorDesc = 'ORGANIZATIONMODERATOR_DESC',
  OrganizationnameAsc = 'ORGANIZATIONNAME_ASC',
  OrganizationnameDesc = 'ORGANIZATIONNAME_DESC',
  OrganizationprofileAsc = 'ORGANIZATIONPROFILE_ASC',
  OrganizationprofileDesc = 'ORGANIZATIONPROFILE_DESC',
  OrganizationsizeAsc = 'ORGANIZATIONSIZE_ASC',
  OrganizationsizeDesc = 'ORGANIZATIONSIZE_DESC',
  OrganizationswiftcodeAsc = 'ORGANIZATIONSWIFTCODE_ASC',
  OrganizationswiftcodeDesc = 'ORGANIZATIONSWIFTCODE_DESC',
  OrganizationtypeAsc = 'ORGANIZATIONTYPE_ASC',
  OrganizationtypeDesc = 'ORGANIZATIONTYPE_DESC',
  OrgobjectiveAsc = 'ORGOBJECTIVE_ASC',
  OrgobjectiveDesc = 'ORGOBJECTIVE_DESC',
  Ourgoal1Asc = 'OURGOAL1_ASC',
  Ourgoal1Desc = 'OURGOAL1_DESC',
  Ourgoal2Asc = 'OURGOAL2_ASC',
  Ourgoal2Desc = 'OURGOAL2_DESC',
  Ourgoal3Asc = 'OURGOAL3_ASC',
  Ourgoal3Desc = 'OURGOAL3_DESC',
  Ourgoal4Asc = 'OURGOAL4_ASC',
  Ourgoal4Desc = 'OURGOAL4_DESC',
  Ourgoal5Asc = 'OURGOAL5_ASC',
  Ourgoal5Desc = 'OURGOAL5_DESC',
  Ourgoal6Asc = 'OURGOAL6_ASC',
  Ourgoal6Desc = 'OURGOAL6_DESC',
  OurmissiondetailAsc = 'OURMISSIONDETAIL_ASC',
  OurmissiondetailDesc = 'OURMISSIONDETAIL_DESC',
  OurstorydescAsc = 'OURSTORYDESC_ASC',
  OurstorydescDesc = 'OURSTORYDESC_DESC',
  Ourvalue1Asc = 'OURVALUE1_ASC',
  Ourvalue1Desc = 'OURVALUE1_DESC',
  Ourvalue2Asc = 'OURVALUE2_ASC',
  Ourvalue2Desc = 'OURVALUE2_DESC',
  Ourvalue3Asc = 'OURVALUE3_ASC',
  Ourvalue3Desc = 'OURVALUE3_DESC',
  OwnerrealmidAsc = 'OWNERREALMID_ASC',
  OwnerrealmidDesc = 'OWNERREALMID_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  PackagetypeAsc = 'PACKAGETYPE_ASC',
  PackagetypeDesc = 'PACKAGETYPE_DESC',
  PaypalclientidAsc = 'PAYPALCLIENTID_ASC',
  PaypalclientidDesc = 'PAYPALCLIENTID_DESC',
  PhonenumberAsc = 'PHONENUMBER_ASC',
  PhonenumberDesc = 'PHONENUMBER_DESC',
  PostalcodeAsc = 'POSTALCODE_ASC',
  PostalcodeDesc = 'POSTALCODE_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  TwitterAsc = 'TWITTER_ASC',
  TwitterDesc = 'TWITTER_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  WebsiteAsc = 'WEBSITE_ASC',
  WebsiteDesc = 'WEBSITE_DESC',
  WhatsappAsc = 'WHATSAPP_ASC',
  WhatsappDesc = 'WHATSAPP_DESC',
  XenditmodeAsc = 'XENDITMODE_ASC',
  XenditmodeDesc = 'XENDITMODE_DESC',
  YoutubeAsc = 'YOUTUBE_ASC',
  YoutubeDesc = 'YOUTUBE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type NonprofitUpdateInput = {
  OrganizationBankAccountName?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_unset?: InputMaybe<Scalars['Boolean']>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  aboutHeading?: InputMaybe<Scalars['String']>;
  aboutHeading_unset?: InputMaybe<Scalars['Boolean']>;
  aboutPicture?: InputMaybe<Scalars['String']>;
  aboutPicture_unset?: InputMaybe<Scalars['Boolean']>;
  comissioner?: InputMaybe<Scalars['String']>;
  comissioner_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultCurrency_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage1_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage2_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage3_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage4_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage5_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeImage6_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_unset?: InputMaybe<Scalars['Boolean']>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_unset?: InputMaybe<Scalars['Boolean']>;
  favicon?: InputMaybe<Scalars['String']>;
  favicon_unset?: InputMaybe<Scalars['Boolean']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featured_unset?: InputMaybe<Scalars['Boolean']>;
  idNumberCard?: InputMaybe<Scalars['String']>;
  idNumberCard_unset?: InputMaybe<Scalars['Boolean']>;
  impact1Amount?: InputMaybe<Scalars['String']>;
  impact1Amount_unset?: InputMaybe<Scalars['Boolean']>;
  impact1Title?: InputMaybe<Scalars['String']>;
  impact1Title_unset?: InputMaybe<Scalars['Boolean']>;
  impact2Amount?: InputMaybe<Scalars['String']>;
  impact2Amount_unset?: InputMaybe<Scalars['Boolean']>;
  impact2Title?: InputMaybe<Scalars['String']>;
  impact2Title_unset?: InputMaybe<Scalars['Boolean']>;
  impact3Amount?: InputMaybe<Scalars['String']>;
  impact3Amount_unset?: InputMaybe<Scalars['Boolean']>;
  impact3Title?: InputMaybe<Scalars['String']>;
  impact3Title_unset?: InputMaybe<Scalars['Boolean']>;
  impactCategory?: InputMaybe<Scalars['String']>;
  impactCategory_unset?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  instagram_unset?: InputMaybe<Scalars['Boolean']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseNumber_unset?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_unset?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  location_unset?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  logo_unset?: InputMaybe<Scalars['Boolean']>;
  nonprofitType?: InputMaybe<Scalars['String']>;
  nonprofitType_unset?: InputMaybe<Scalars['Boolean']>;
  orgObjective?: InputMaybe<Scalars['String']>;
  orgObjective_unset?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccount?: InputMaybe<Scalars['String']>;
  organizationBankAccountName?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_unset?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccountNumber?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_unset?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccount_unset?: InputMaybe<Scalars['Boolean']>;
  organizationEmail?: InputMaybe<Scalars['String']>;
  organizationEmail_unset?: InputMaybe<Scalars['Boolean']>;
  organizationModerator?: InputMaybe<Scalars['String']>;
  organizationModerator_unset?: InputMaybe<Scalars['Boolean']>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationName_unset?: InputMaybe<Scalars['Boolean']>;
  organizationProfile?: InputMaybe<Scalars['String']>;
  organizationProfile_unset?: InputMaybe<Scalars['Boolean']>;
  organizationSize?: InputMaybe<Scalars['String']>;
  organizationSize_unset?: InputMaybe<Scalars['Boolean']>;
  organizationSwiftCode?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_unset?: InputMaybe<Scalars['Boolean']>;
  organizationType?: InputMaybe<Scalars['String']>;
  organizationType_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal1_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal2_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal3_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal4_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal5_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourGoal6_unset?: InputMaybe<Scalars['Boolean']>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourMissionDetail_unset?: InputMaybe<Scalars['Boolean']>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourStoryDesc_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue1_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue2_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ourValue3_unset?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  packageType?: InputMaybe<Scalars['Int']>;
  packageType_inc?: InputMaybe<Scalars['Int']>;
  packageType_unset?: InputMaybe<Scalars['Boolean']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  paypalClientId_unset?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_unset?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalCode_unset?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  role_unset?: InputMaybe<Scalars['Boolean']>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_unset?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  username_unset?: InputMaybe<Scalars['Boolean']>;
  website?: InputMaybe<Scalars['String']>;
  website_unset?: InputMaybe<Scalars['Boolean']>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_unset?: InputMaybe<Scalars['Boolean']>;
  xenditMode?: InputMaybe<Scalars['String']>;
  xenditMode_unset?: InputMaybe<Scalars['Boolean']>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Operator = {
  __typename?: 'Operator';
  _id?: Maybe<Scalars['ObjectId']>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  levelAccess?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['String']>;
  ownerUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type OperatorInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  coverImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  levelAccess?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  operatorId?: InputMaybe<Scalars['String']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type OperatorQueryInput = {
  AND?: InputMaybe<Array<OperatorQueryInput>>;
  OR?: InputMaybe<Array<OperatorQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  coverImage_gt?: InputMaybe<Scalars['String']>;
  coverImage_gte?: InputMaybe<Scalars['String']>;
  coverImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage_lt?: InputMaybe<Scalars['String']>;
  coverImage_lte?: InputMaybe<Scalars['String']>;
  coverImage_ne?: InputMaybe<Scalars['String']>;
  coverImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1?: InputMaybe<Scalars['String']>;
  image1_exists?: InputMaybe<Scalars['Boolean']>;
  image1_gt?: InputMaybe<Scalars['String']>;
  image1_gte?: InputMaybe<Scalars['String']>;
  image1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1_lt?: InputMaybe<Scalars['String']>;
  image1_lte?: InputMaybe<Scalars['String']>;
  image1_ne?: InputMaybe<Scalars['String']>;
  image1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2?: InputMaybe<Scalars['String']>;
  image2_exists?: InputMaybe<Scalars['Boolean']>;
  image2_gt?: InputMaybe<Scalars['String']>;
  image2_gte?: InputMaybe<Scalars['String']>;
  image2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2_lt?: InputMaybe<Scalars['String']>;
  image2_lte?: InputMaybe<Scalars['String']>;
  image2_ne?: InputMaybe<Scalars['String']>;
  image2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3?: InputMaybe<Scalars['String']>;
  image3_exists?: InputMaybe<Scalars['Boolean']>;
  image3_gt?: InputMaybe<Scalars['String']>;
  image3_gte?: InputMaybe<Scalars['String']>;
  image3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3_lt?: InputMaybe<Scalars['String']>;
  image3_lte?: InputMaybe<Scalars['String']>;
  image3_ne?: InputMaybe<Scalars['String']>;
  image3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_exists?: InputMaybe<Scalars['Boolean']>;
  isActive_gt?: InputMaybe<Scalars['String']>;
  isActive_gte?: InputMaybe<Scalars['String']>;
  isActive_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive_lt?: InputMaybe<Scalars['String']>;
  isActive_lte?: InputMaybe<Scalars['String']>;
  isActive_ne?: InputMaybe<Scalars['String']>;
  isActive_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  levelAccess?: InputMaybe<Scalars['String']>;
  levelAccess_exists?: InputMaybe<Scalars['Boolean']>;
  levelAccess_gt?: InputMaybe<Scalars['String']>;
  levelAccess_gte?: InputMaybe<Scalars['String']>;
  levelAccess_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  levelAccess_lt?: InputMaybe<Scalars['String']>;
  levelAccess_lte?: InputMaybe<Scalars['String']>;
  levelAccess_ne?: InputMaybe<Scalars['String']>;
  levelAccess_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  operatorId?: InputMaybe<Scalars['String']>;
  operatorId_exists?: InputMaybe<Scalars['Boolean']>;
  operatorId_gt?: InputMaybe<Scalars['String']>;
  operatorId_gte?: InputMaybe<Scalars['String']>;
  operatorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  operatorId_lt?: InputMaybe<Scalars['String']>;
  operatorId_lte?: InputMaybe<Scalars['String']>;
  operatorId_ne?: InputMaybe<Scalars['String']>;
  operatorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum OperatorSortByInput {
  CoverimageAsc = 'COVERIMAGE_ASC',
  CoverimageDesc = 'COVERIMAGE_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Image1Asc = 'IMAGE1_ASC',
  Image1Desc = 'IMAGE1_DESC',
  Image2Asc = 'IMAGE2_ASC',
  Image2Desc = 'IMAGE2_DESC',
  Image3Asc = 'IMAGE3_ASC',
  Image3Desc = 'IMAGE3_DESC',
  IsactiveAsc = 'ISACTIVE_ASC',
  IsactiveDesc = 'ISACTIVE_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  LevelaccessAsc = 'LEVELACCESS_ASC',
  LevelaccessDesc = 'LEVELACCESS_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OperatoridAsc = 'OPERATORID_ASC',
  OperatoridDesc = 'OPERATORID_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type OperatorUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_unset?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_unset?: InputMaybe<Scalars['Boolean']>;
  image1?: InputMaybe<Scalars['String']>;
  image1_unset?: InputMaybe<Scalars['Boolean']>;
  image2?: InputMaybe<Scalars['String']>;
  image2_unset?: InputMaybe<Scalars['Boolean']>;
  image3?: InputMaybe<Scalars['String']>;
  image3_unset?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  levelAccess?: InputMaybe<Scalars['String']>;
  levelAccess_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  operatorId?: InputMaybe<Scalars['String']>;
  operatorId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Organization = {
  __typename?: 'Organization';
  OrganizationBankAccountName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  aboutHeading?: Maybe<Scalars['String']>;
  aboutPicture?: Maybe<Scalars['String']>;
  comissioner?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  defaultCurrency?: Maybe<Scalars['String']>;
  defaultIconGoal1?: Maybe<Scalars['String']>;
  defaultIconGoal2?: Maybe<Scalars['String']>;
  defaultIconGoal3?: Maybe<Scalars['String']>;
  defaultIconGoal4?: Maybe<Scalars['String']>;
  defaultIconGoal5?: Maybe<Scalars['String']>;
  defaultIconGoal6?: Maybe<Scalars['String']>;
  donationTypeImage1?: Maybe<Scalars['String']>;
  donationTypeImage2?: Maybe<Scalars['String']>;
  donationTypeImage3?: Maybe<Scalars['String']>;
  donationTypeImage4?: Maybe<Scalars['String']>;
  donationTypeImage5?: Maybe<Scalars['String']>;
  donationTypeImage6?: Maybe<Scalars['String']>;
  donationTypeTitle1?: Maybe<Scalars['String']>;
  donationTypeTitle2?: Maybe<Scalars['String']>;
  donationTypeTitle3?: Maybe<Scalars['String']>;
  donationTypeTitle4?: Maybe<Scalars['String']>;
  donationTypeTitle5?: Maybe<Scalars['String']>;
  donationTypeTitle6?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  favicon?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredPos?: Maybe<Scalars['Int']>;
  idNumberCard?: Maybe<Scalars['String']>;
  impact1Amount?: Maybe<Scalars['String']>;
  impact1Title?: Maybe<Scalars['String']>;
  impact2Amount?: Maybe<Scalars['String']>;
  impact2Title?: Maybe<Scalars['String']>;
  impact3Amount?: Maybe<Scalars['String']>;
  impact3Title?: Maybe<Scalars['String']>;
  impactCategory?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  licenseNumber?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nonprofitType?: Maybe<Scalars['String']>;
  orgObjective?: Maybe<Scalars['String']>;
  organizationBankAccount?: Maybe<Scalars['String']>;
  organizationBankAccountName?: Maybe<Scalars['String']>;
  organizationBankAccountNumber?: Maybe<Scalars['String']>;
  organizationEmail?: Maybe<Scalars['String']>;
  organizationModerator?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  organizationProfile?: Maybe<Scalars['String']>;
  organizationSize?: Maybe<Scalars['String']>;
  organizationSwiftCode?: Maybe<Scalars['String']>;
  organizationType?: Maybe<Scalars['String']>;
  ourGoal1?: Maybe<Scalars['String']>;
  ourGoal2?: Maybe<Scalars['String']>;
  ourGoal3?: Maybe<Scalars['String']>;
  ourGoal4?: Maybe<Scalars['String']>;
  ourGoal5?: Maybe<Scalars['String']>;
  ourGoal6?: Maybe<Scalars['String']>;
  ourMissionDetail?: Maybe<Scalars['String']>;
  ourStoryDesc?: Maybe<Scalars['String']>;
  ourValue1?: Maybe<Scalars['String']>;
  ourValue2?: Maybe<Scalars['String']>;
  ourValue3?: Maybe<Scalars['String']>;
  ownerRealmId?: Maybe<Scalars['ObjectId']>;
  ownerUserId?: Maybe<Scalars['String']>;
  packageType?: Maybe<Scalars['Int']>;
  paypalClientId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  xenditMode?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type OrganizationInsertInput = {
  OrganizationBankAccountName?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  aboutHeading?: InputMaybe<Scalars['String']>;
  aboutPicture?: InputMaybe<Scalars['String']>;
  comissioner?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featuredPos?: InputMaybe<Scalars['Int']>;
  idNumberCard?: InputMaybe<Scalars['String']>;
  impact1Amount?: InputMaybe<Scalars['String']>;
  impact1Title?: InputMaybe<Scalars['String']>;
  impact2Amount?: InputMaybe<Scalars['String']>;
  impact2Title?: InputMaybe<Scalars['String']>;
  impact3Amount?: InputMaybe<Scalars['String']>;
  impact3Title?: InputMaybe<Scalars['String']>;
  impactCategory?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nonprofitType?: InputMaybe<Scalars['String']>;
  orgObjective?: InputMaybe<Scalars['String']>;
  organizationBankAccount?: InputMaybe<Scalars['String']>;
  organizationBankAccountName?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber?: InputMaybe<Scalars['String']>;
  organizationEmail?: InputMaybe<Scalars['String']>;
  organizationModerator?: InputMaybe<Scalars['String']>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationProfile?: InputMaybe<Scalars['String']>;
  organizationSize?: InputMaybe<Scalars['String']>;
  organizationSwiftCode?: InputMaybe<Scalars['String']>;
  organizationType?: InputMaybe<Scalars['String']>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<Scalars['Int']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['String']>;
  xenditMode?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type OrganizationQueryInput = {
  AND?: InputMaybe<Array<OrganizationQueryInput>>;
  OR?: InputMaybe<Array<OrganizationQueryInput>>;
  OrganizationBankAccountName?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_exists?: InputMaybe<Scalars['Boolean']>;
  OrganizationBankAccountName_gt?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_gte?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  OrganizationBankAccountName_lt?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_lte?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_ne?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  aboutHeading?: InputMaybe<Scalars['String']>;
  aboutHeading_exists?: InputMaybe<Scalars['Boolean']>;
  aboutHeading_gt?: InputMaybe<Scalars['String']>;
  aboutHeading_gte?: InputMaybe<Scalars['String']>;
  aboutHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutHeading_lt?: InputMaybe<Scalars['String']>;
  aboutHeading_lte?: InputMaybe<Scalars['String']>;
  aboutHeading_ne?: InputMaybe<Scalars['String']>;
  aboutHeading_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutPicture?: InputMaybe<Scalars['String']>;
  aboutPicture_exists?: InputMaybe<Scalars['Boolean']>;
  aboutPicture_gt?: InputMaybe<Scalars['String']>;
  aboutPicture_gte?: InputMaybe<Scalars['String']>;
  aboutPicture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutPicture_lt?: InputMaybe<Scalars['String']>;
  aboutPicture_lte?: InputMaybe<Scalars['String']>;
  aboutPicture_ne?: InputMaybe<Scalars['String']>;
  aboutPicture_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comissioner?: InputMaybe<Scalars['String']>;
  comissioner_exists?: InputMaybe<Scalars['Boolean']>;
  comissioner_gt?: InputMaybe<Scalars['String']>;
  comissioner_gte?: InputMaybe<Scalars['String']>;
  comissioner_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comissioner_lt?: InputMaybe<Scalars['String']>;
  comissioner_lte?: InputMaybe<Scalars['String']>;
  comissioner_ne?: InputMaybe<Scalars['String']>;
  comissioner_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactEmail_exists?: InputMaybe<Scalars['Boolean']>;
  contactEmail_gt?: InputMaybe<Scalars['String']>;
  contactEmail_gte?: InputMaybe<Scalars['String']>;
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactEmail_lt?: InputMaybe<Scalars['String']>;
  contactEmail_lte?: InputMaybe<Scalars['String']>;
  contactEmail_ne?: InputMaybe<Scalars['String']>;
  contactEmail_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactPhone?: InputMaybe<Scalars['String']>;
  contactPhone_exists?: InputMaybe<Scalars['Boolean']>;
  contactPhone_gt?: InputMaybe<Scalars['String']>;
  contactPhone_gte?: InputMaybe<Scalars['String']>;
  contactPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactPhone_lt?: InputMaybe<Scalars['String']>;
  contactPhone_lte?: InputMaybe<Scalars['String']>;
  contactPhone_ne?: InputMaybe<Scalars['String']>;
  contactPhone_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_ne?: InputMaybe<Scalars['String']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  defaultCurrency_gt?: InputMaybe<Scalars['String']>;
  defaultCurrency_gte?: InputMaybe<Scalars['String']>;
  defaultCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCurrency_lt?: InputMaybe<Scalars['String']>;
  defaultCurrency_lte?: InputMaybe<Scalars['String']>;
  defaultCurrency_ne?: InputMaybe<Scalars['String']>;
  defaultCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal1_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal1_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal2_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal2_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal3_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal3_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal4_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal4_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal5_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal5_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal6_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal6_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage1_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage1_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage1_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage1_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage1_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage1_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage2_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage2_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage2_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage2_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage2_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage2_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage3_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage3_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage3_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage3_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage3_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage3_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage4_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage4_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage4_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage4_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage4_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage4_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage5_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage5_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage5_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage5_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage5_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage5_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeImage6_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage6_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage6_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage6_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage6_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage6_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle1_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle1_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle2_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle2_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle3_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle3_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle4_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle4_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle5_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle5_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle6_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle6_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_gt?: InputMaybe<Scalars['String']>;
  facebook_gte?: InputMaybe<Scalars['String']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_lt?: InputMaybe<Scalars['String']>;
  facebook_lte?: InputMaybe<Scalars['String']>;
  facebook_ne?: InputMaybe<Scalars['String']>;
  facebook_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favicon?: InputMaybe<Scalars['String']>;
  favicon_exists?: InputMaybe<Scalars['Boolean']>;
  favicon_gt?: InputMaybe<Scalars['String']>;
  favicon_gte?: InputMaybe<Scalars['String']>;
  favicon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  favicon_lt?: InputMaybe<Scalars['String']>;
  favicon_lte?: InputMaybe<Scalars['String']>;
  favicon_ne?: InputMaybe<Scalars['String']>;
  favicon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featuredPos?: InputMaybe<Scalars['Int']>;
  featuredPos_exists?: InputMaybe<Scalars['Boolean']>;
  featuredPos_gt?: InputMaybe<Scalars['Int']>;
  featuredPos_gte?: InputMaybe<Scalars['Int']>;
  featuredPos_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  featuredPos_lt?: InputMaybe<Scalars['Int']>;
  featuredPos_lte?: InputMaybe<Scalars['Int']>;
  featuredPos_ne?: InputMaybe<Scalars['Int']>;
  featuredPos_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  featured_exists?: InputMaybe<Scalars['Boolean']>;
  featured_ne?: InputMaybe<Scalars['Boolean']>;
  idNumberCard?: InputMaybe<Scalars['String']>;
  idNumberCard_exists?: InputMaybe<Scalars['Boolean']>;
  idNumberCard_gt?: InputMaybe<Scalars['String']>;
  idNumberCard_gte?: InputMaybe<Scalars['String']>;
  idNumberCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  idNumberCard_lt?: InputMaybe<Scalars['String']>;
  idNumberCard_lte?: InputMaybe<Scalars['String']>;
  idNumberCard_ne?: InputMaybe<Scalars['String']>;
  idNumberCard_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Amount?: InputMaybe<Scalars['String']>;
  impact1Amount_exists?: InputMaybe<Scalars['Boolean']>;
  impact1Amount_gt?: InputMaybe<Scalars['String']>;
  impact1Amount_gte?: InputMaybe<Scalars['String']>;
  impact1Amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Amount_lt?: InputMaybe<Scalars['String']>;
  impact1Amount_lte?: InputMaybe<Scalars['String']>;
  impact1Amount_ne?: InputMaybe<Scalars['String']>;
  impact1Amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Title?: InputMaybe<Scalars['String']>;
  impact1Title_exists?: InputMaybe<Scalars['Boolean']>;
  impact1Title_gt?: InputMaybe<Scalars['String']>;
  impact1Title_gte?: InputMaybe<Scalars['String']>;
  impact1Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact1Title_lt?: InputMaybe<Scalars['String']>;
  impact1Title_lte?: InputMaybe<Scalars['String']>;
  impact1Title_ne?: InputMaybe<Scalars['String']>;
  impact1Title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Amount?: InputMaybe<Scalars['String']>;
  impact2Amount_exists?: InputMaybe<Scalars['Boolean']>;
  impact2Amount_gt?: InputMaybe<Scalars['String']>;
  impact2Amount_gte?: InputMaybe<Scalars['String']>;
  impact2Amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Amount_lt?: InputMaybe<Scalars['String']>;
  impact2Amount_lte?: InputMaybe<Scalars['String']>;
  impact2Amount_ne?: InputMaybe<Scalars['String']>;
  impact2Amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Title?: InputMaybe<Scalars['String']>;
  impact2Title_exists?: InputMaybe<Scalars['Boolean']>;
  impact2Title_gt?: InputMaybe<Scalars['String']>;
  impact2Title_gte?: InputMaybe<Scalars['String']>;
  impact2Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact2Title_lt?: InputMaybe<Scalars['String']>;
  impact2Title_lte?: InputMaybe<Scalars['String']>;
  impact2Title_ne?: InputMaybe<Scalars['String']>;
  impact2Title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Amount?: InputMaybe<Scalars['String']>;
  impact3Amount_exists?: InputMaybe<Scalars['Boolean']>;
  impact3Amount_gt?: InputMaybe<Scalars['String']>;
  impact3Amount_gte?: InputMaybe<Scalars['String']>;
  impact3Amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Amount_lt?: InputMaybe<Scalars['String']>;
  impact3Amount_lte?: InputMaybe<Scalars['String']>;
  impact3Amount_ne?: InputMaybe<Scalars['String']>;
  impact3Amount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Title?: InputMaybe<Scalars['String']>;
  impact3Title_exists?: InputMaybe<Scalars['Boolean']>;
  impact3Title_gt?: InputMaybe<Scalars['String']>;
  impact3Title_gte?: InputMaybe<Scalars['String']>;
  impact3Title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impact3Title_lt?: InputMaybe<Scalars['String']>;
  impact3Title_lte?: InputMaybe<Scalars['String']>;
  impact3Title_ne?: InputMaybe<Scalars['String']>;
  impact3Title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impactCategory?: InputMaybe<Scalars['String']>;
  impactCategory_exists?: InputMaybe<Scalars['Boolean']>;
  impactCategory_gt?: InputMaybe<Scalars['String']>;
  impactCategory_gte?: InputMaybe<Scalars['String']>;
  impactCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  impactCategory_lt?: InputMaybe<Scalars['String']>;
  impactCategory_lte?: InputMaybe<Scalars['String']>;
  impactCategory_ne?: InputMaybe<Scalars['String']>;
  impactCategory_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram?: InputMaybe<Scalars['String']>;
  instagram_exists?: InputMaybe<Scalars['Boolean']>;
  instagram_gt?: InputMaybe<Scalars['String']>;
  instagram_gte?: InputMaybe<Scalars['String']>;
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram_lt?: InputMaybe<Scalars['String']>;
  instagram_lte?: InputMaybe<Scalars['String']>;
  instagram_ne?: InputMaybe<Scalars['String']>;
  instagram_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseNumber_exists?: InputMaybe<Scalars['Boolean']>;
  licenseNumber_gt?: InputMaybe<Scalars['String']>;
  licenseNumber_gte?: InputMaybe<Scalars['String']>;
  licenseNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  licenseNumber_lt?: InputMaybe<Scalars['String']>;
  licenseNumber_lte?: InputMaybe<Scalars['String']>;
  licenseNumber_ne?: InputMaybe<Scalars['String']>;
  licenseNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_exists?: InputMaybe<Scalars['Boolean']>;
  linkedin_gt?: InputMaybe<Scalars['String']>;
  linkedin_gte?: InputMaybe<Scalars['String']>;
  linkedin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin_lt?: InputMaybe<Scalars['String']>;
  linkedin_lte?: InputMaybe<Scalars['String']>;
  linkedin_ne?: InputMaybe<Scalars['String']>;
  linkedin_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_gt?: InputMaybe<Scalars['String']>;
  location_gte?: InputMaybe<Scalars['String']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_lt?: InputMaybe<Scalars['String']>;
  location_lte?: InputMaybe<Scalars['String']>;
  location_ne?: InputMaybe<Scalars['String']>;
  location_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo?: InputMaybe<Scalars['String']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  logo_gt?: InputMaybe<Scalars['String']>;
  logo_gte?: InputMaybe<Scalars['String']>;
  logo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_lt?: InputMaybe<Scalars['String']>;
  logo_lte?: InputMaybe<Scalars['String']>;
  logo_ne?: InputMaybe<Scalars['String']>;
  logo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitType?: InputMaybe<Scalars['String']>;
  nonprofitType_exists?: InputMaybe<Scalars['Boolean']>;
  nonprofitType_gt?: InputMaybe<Scalars['String']>;
  nonprofitType_gte?: InputMaybe<Scalars['String']>;
  nonprofitType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonprofitType_lt?: InputMaybe<Scalars['String']>;
  nonprofitType_lte?: InputMaybe<Scalars['String']>;
  nonprofitType_ne?: InputMaybe<Scalars['String']>;
  nonprofitType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orgObjective?: InputMaybe<Scalars['String']>;
  orgObjective_exists?: InputMaybe<Scalars['Boolean']>;
  orgObjective_gt?: InputMaybe<Scalars['String']>;
  orgObjective_gte?: InputMaybe<Scalars['String']>;
  orgObjective_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orgObjective_lt?: InputMaybe<Scalars['String']>;
  orgObjective_lte?: InputMaybe<Scalars['String']>;
  orgObjective_ne?: InputMaybe<Scalars['String']>;
  orgObjective_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccount?: InputMaybe<Scalars['String']>;
  organizationBankAccountName?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_exists?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccountName_gt?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_gte?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccountName_lt?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_lte?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_ne?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccountNumber?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_exists?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccountNumber_gt?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_gte?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccountNumber_lt?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_lte?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_ne?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccount_exists?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccount_gt?: InputMaybe<Scalars['String']>;
  organizationBankAccount_gte?: InputMaybe<Scalars['String']>;
  organizationBankAccount_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationBankAccount_lt?: InputMaybe<Scalars['String']>;
  organizationBankAccount_lte?: InputMaybe<Scalars['String']>;
  organizationBankAccount_ne?: InputMaybe<Scalars['String']>;
  organizationBankAccount_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationEmail?: InputMaybe<Scalars['String']>;
  organizationEmail_exists?: InputMaybe<Scalars['Boolean']>;
  organizationEmail_gt?: InputMaybe<Scalars['String']>;
  organizationEmail_gte?: InputMaybe<Scalars['String']>;
  organizationEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationEmail_lt?: InputMaybe<Scalars['String']>;
  organizationEmail_lte?: InputMaybe<Scalars['String']>;
  organizationEmail_ne?: InputMaybe<Scalars['String']>;
  organizationEmail_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationModerator?: InputMaybe<Scalars['String']>;
  organizationModerator_exists?: InputMaybe<Scalars['Boolean']>;
  organizationModerator_gt?: InputMaybe<Scalars['String']>;
  organizationModerator_gte?: InputMaybe<Scalars['String']>;
  organizationModerator_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationModerator_lt?: InputMaybe<Scalars['String']>;
  organizationModerator_lte?: InputMaybe<Scalars['String']>;
  organizationModerator_ne?: InputMaybe<Scalars['String']>;
  organizationModerator_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationName_exists?: InputMaybe<Scalars['Boolean']>;
  organizationName_gt?: InputMaybe<Scalars['String']>;
  organizationName_gte?: InputMaybe<Scalars['String']>;
  organizationName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationName_lt?: InputMaybe<Scalars['String']>;
  organizationName_lte?: InputMaybe<Scalars['String']>;
  organizationName_ne?: InputMaybe<Scalars['String']>;
  organizationName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationProfile?: InputMaybe<Scalars['String']>;
  organizationProfile_exists?: InputMaybe<Scalars['Boolean']>;
  organizationProfile_gt?: InputMaybe<Scalars['String']>;
  organizationProfile_gte?: InputMaybe<Scalars['String']>;
  organizationProfile_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationProfile_lt?: InputMaybe<Scalars['String']>;
  organizationProfile_lte?: InputMaybe<Scalars['String']>;
  organizationProfile_ne?: InputMaybe<Scalars['String']>;
  organizationProfile_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSize?: InputMaybe<Scalars['String']>;
  organizationSize_exists?: InputMaybe<Scalars['Boolean']>;
  organizationSize_gt?: InputMaybe<Scalars['String']>;
  organizationSize_gte?: InputMaybe<Scalars['String']>;
  organizationSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSize_lt?: InputMaybe<Scalars['String']>;
  organizationSize_lte?: InputMaybe<Scalars['String']>;
  organizationSize_ne?: InputMaybe<Scalars['String']>;
  organizationSize_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSwiftCode?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_exists?: InputMaybe<Scalars['Boolean']>;
  organizationSwiftCode_gt?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_gte?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationSwiftCode_lt?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_lte?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_ne?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationType?: InputMaybe<Scalars['String']>;
  organizationType_exists?: InputMaybe<Scalars['Boolean']>;
  organizationType_gt?: InputMaybe<Scalars['String']>;
  organizationType_gte?: InputMaybe<Scalars['String']>;
  organizationType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationType_lt?: InputMaybe<Scalars['String']>;
  organizationType_lte?: InputMaybe<Scalars['String']>;
  organizationType_ne?: InputMaybe<Scalars['String']>;
  organizationType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal1_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal1_gt?: InputMaybe<Scalars['String']>;
  ourGoal1_gte?: InputMaybe<Scalars['String']>;
  ourGoal1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal1_lt?: InputMaybe<Scalars['String']>;
  ourGoal1_lte?: InputMaybe<Scalars['String']>;
  ourGoal1_ne?: InputMaybe<Scalars['String']>;
  ourGoal1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal2_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal2_gt?: InputMaybe<Scalars['String']>;
  ourGoal2_gte?: InputMaybe<Scalars['String']>;
  ourGoal2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal2_lt?: InputMaybe<Scalars['String']>;
  ourGoal2_lte?: InputMaybe<Scalars['String']>;
  ourGoal2_ne?: InputMaybe<Scalars['String']>;
  ourGoal2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal3_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal3_gt?: InputMaybe<Scalars['String']>;
  ourGoal3_gte?: InputMaybe<Scalars['String']>;
  ourGoal3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal3_lt?: InputMaybe<Scalars['String']>;
  ourGoal3_lte?: InputMaybe<Scalars['String']>;
  ourGoal3_ne?: InputMaybe<Scalars['String']>;
  ourGoal3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal4_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal4_gt?: InputMaybe<Scalars['String']>;
  ourGoal4_gte?: InputMaybe<Scalars['String']>;
  ourGoal4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal4_lt?: InputMaybe<Scalars['String']>;
  ourGoal4_lte?: InputMaybe<Scalars['String']>;
  ourGoal4_ne?: InputMaybe<Scalars['String']>;
  ourGoal4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal5_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal5_gt?: InputMaybe<Scalars['String']>;
  ourGoal5_gte?: InputMaybe<Scalars['String']>;
  ourGoal5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal5_lt?: InputMaybe<Scalars['String']>;
  ourGoal5_lte?: InputMaybe<Scalars['String']>;
  ourGoal5_ne?: InputMaybe<Scalars['String']>;
  ourGoal5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourGoal6_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal6_gt?: InputMaybe<Scalars['String']>;
  ourGoal6_gte?: InputMaybe<Scalars['String']>;
  ourGoal6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal6_lt?: InputMaybe<Scalars['String']>;
  ourGoal6_lte?: InputMaybe<Scalars['String']>;
  ourGoal6_ne?: InputMaybe<Scalars['String']>;
  ourGoal6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourMissionDetail_exists?: InputMaybe<Scalars['Boolean']>;
  ourMissionDetail_gt?: InputMaybe<Scalars['String']>;
  ourMissionDetail_gte?: InputMaybe<Scalars['String']>;
  ourMissionDetail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourMissionDetail_lt?: InputMaybe<Scalars['String']>;
  ourMissionDetail_lte?: InputMaybe<Scalars['String']>;
  ourMissionDetail_ne?: InputMaybe<Scalars['String']>;
  ourMissionDetail_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourStoryDesc_exists?: InputMaybe<Scalars['Boolean']>;
  ourStoryDesc_gt?: InputMaybe<Scalars['String']>;
  ourStoryDesc_gte?: InputMaybe<Scalars['String']>;
  ourStoryDesc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStoryDesc_lt?: InputMaybe<Scalars['String']>;
  ourStoryDesc_lte?: InputMaybe<Scalars['String']>;
  ourStoryDesc_ne?: InputMaybe<Scalars['String']>;
  ourStoryDesc_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue1_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue1_gt?: InputMaybe<Scalars['String']>;
  ourValue1_gte?: InputMaybe<Scalars['String']>;
  ourValue1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue1_lt?: InputMaybe<Scalars['String']>;
  ourValue1_lte?: InputMaybe<Scalars['String']>;
  ourValue1_ne?: InputMaybe<Scalars['String']>;
  ourValue1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue2_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue2_gt?: InputMaybe<Scalars['String']>;
  ourValue2_gte?: InputMaybe<Scalars['String']>;
  ourValue2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue2_lt?: InputMaybe<Scalars['String']>;
  ourValue2_lte?: InputMaybe<Scalars['String']>;
  ourValue2_ne?: InputMaybe<Scalars['String']>;
  ourValue2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ourValue3_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue3_gt?: InputMaybe<Scalars['String']>;
  ourValue3_gte?: InputMaybe<Scalars['String']>;
  ourValue3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue3_lt?: InputMaybe<Scalars['String']>;
  ourValue3_lte?: InputMaybe<Scalars['String']>;
  ourValue3_ne?: InputMaybe<Scalars['String']>;
  ourValue3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId_gt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_gte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerRealmId_lt?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_lte?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_ne?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  packageType?: InputMaybe<Scalars['Int']>;
  packageType_exists?: InputMaybe<Scalars['Boolean']>;
  packageType_gt?: InputMaybe<Scalars['Int']>;
  packageType_gte?: InputMaybe<Scalars['Int']>;
  packageType_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  packageType_lt?: InputMaybe<Scalars['Int']>;
  packageType_lte?: InputMaybe<Scalars['Int']>;
  packageType_ne?: InputMaybe<Scalars['Int']>;
  packageType_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  paypalClientId_exists?: InputMaybe<Scalars['Boolean']>;
  paypalClientId_gt?: InputMaybe<Scalars['String']>;
  paypalClientId_gte?: InputMaybe<Scalars['String']>;
  paypalClientId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paypalClientId_lt?: InputMaybe<Scalars['String']>;
  paypalClientId_lte?: InputMaybe<Scalars['String']>;
  paypalClientId_ne?: InputMaybe<Scalars['String']>;
  paypalClientId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_gt?: InputMaybe<Scalars['String']>;
  phoneNumber_gte?: InputMaybe<Scalars['String']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_lt?: InputMaybe<Scalars['String']>;
  phoneNumber_lte?: InputMaybe<Scalars['String']>;
  phoneNumber_ne?: InputMaybe<Scalars['String']>;
  phoneNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']>;
  postalCode_gt?: InputMaybe<Scalars['String']>;
  postalCode_gte?: InputMaybe<Scalars['String']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode_lt?: InputMaybe<Scalars['String']>;
  postalCode_lte?: InputMaybe<Scalars['String']>;
  postalCode_ne?: InputMaybe<Scalars['String']>;
  postalCode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_ne?: InputMaybe<Scalars['String']>;
  role_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_gt?: InputMaybe<Scalars['String']>;
  twitter_gte?: InputMaybe<Scalars['String']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_lt?: InputMaybe<Scalars['String']>;
  twitter_lte?: InputMaybe<Scalars['String']>;
  twitter_ne?: InputMaybe<Scalars['String']>;
  twitter_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username?: InputMaybe<Scalars['String']>;
  username_exists?: InputMaybe<Scalars['Boolean']>;
  username_gt?: InputMaybe<Scalars['String']>;
  username_gte?: InputMaybe<Scalars['String']>;
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_lt?: InputMaybe<Scalars['String']>;
  username_lte?: InputMaybe<Scalars['String']>;
  username_ne?: InputMaybe<Scalars['String']>;
  username_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_ne?: InputMaybe<Scalars['String']>;
  website_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_exists?: InputMaybe<Scalars['Boolean']>;
  whatsapp_gt?: InputMaybe<Scalars['String']>;
  whatsapp_gte?: InputMaybe<Scalars['String']>;
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp_lt?: InputMaybe<Scalars['String']>;
  whatsapp_lte?: InputMaybe<Scalars['String']>;
  whatsapp_ne?: InputMaybe<Scalars['String']>;
  whatsapp_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditMode?: InputMaybe<Scalars['String']>;
  xenditMode_exists?: InputMaybe<Scalars['Boolean']>;
  xenditMode_gt?: InputMaybe<Scalars['String']>;
  xenditMode_gte?: InputMaybe<Scalars['String']>;
  xenditMode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xenditMode_lt?: InputMaybe<Scalars['String']>;
  xenditMode_lte?: InputMaybe<Scalars['String']>;
  xenditMode_ne?: InputMaybe<Scalars['String']>;
  xenditMode_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_gt?: InputMaybe<Scalars['String']>;
  youtube_gte?: InputMaybe<Scalars['String']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_lt?: InputMaybe<Scalars['String']>;
  youtube_lte?: InputMaybe<Scalars['String']>;
  youtube_ne?: InputMaybe<Scalars['String']>;
  youtube_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum OrganizationSortByInput {
  AboutheadingAsc = 'ABOUTHEADING_ASC',
  AboutheadingDesc = 'ABOUTHEADING_DESC',
  AboutpictureAsc = 'ABOUTPICTURE_ASC',
  AboutpictureDesc = 'ABOUTPICTURE_DESC',
  ComissionerAsc = 'COMISSIONER_ASC',
  ComissionerDesc = 'COMISSIONER_DESC',
  ContactemailAsc = 'CONTACTEMAIL_ASC',
  ContactemailDesc = 'CONTACTEMAIL_DESC',
  ContactphoneAsc = 'CONTACTPHONE_ASC',
  ContactphoneDesc = 'CONTACTPHONE_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DefaultcurrencyAsc = 'DEFAULTCURRENCY_ASC',
  DefaultcurrencyDesc = 'DEFAULTCURRENCY_DESC',
  Defaulticongoal1Asc = 'DEFAULTICONGOAL1_ASC',
  Defaulticongoal1Desc = 'DEFAULTICONGOAL1_DESC',
  Defaulticongoal2Asc = 'DEFAULTICONGOAL2_ASC',
  Defaulticongoal2Desc = 'DEFAULTICONGOAL2_DESC',
  Defaulticongoal3Asc = 'DEFAULTICONGOAL3_ASC',
  Defaulticongoal3Desc = 'DEFAULTICONGOAL3_DESC',
  Defaulticongoal4Asc = 'DEFAULTICONGOAL4_ASC',
  Defaulticongoal4Desc = 'DEFAULTICONGOAL4_DESC',
  Defaulticongoal5Asc = 'DEFAULTICONGOAL5_ASC',
  Defaulticongoal5Desc = 'DEFAULTICONGOAL5_DESC',
  Defaulticongoal6Asc = 'DEFAULTICONGOAL6_ASC',
  Defaulticongoal6Desc = 'DEFAULTICONGOAL6_DESC',
  Donationtypeimage1Asc = 'DONATIONTYPEIMAGE1_ASC',
  Donationtypeimage1Desc = 'DONATIONTYPEIMAGE1_DESC',
  Donationtypeimage2Asc = 'DONATIONTYPEIMAGE2_ASC',
  Donationtypeimage2Desc = 'DONATIONTYPEIMAGE2_DESC',
  Donationtypeimage3Asc = 'DONATIONTYPEIMAGE3_ASC',
  Donationtypeimage3Desc = 'DONATIONTYPEIMAGE3_DESC',
  Donationtypeimage4Asc = 'DONATIONTYPEIMAGE4_ASC',
  Donationtypeimage4Desc = 'DONATIONTYPEIMAGE4_DESC',
  Donationtypeimage5Asc = 'DONATIONTYPEIMAGE5_ASC',
  Donationtypeimage5Desc = 'DONATIONTYPEIMAGE5_DESC',
  Donationtypeimage6Asc = 'DONATIONTYPEIMAGE6_ASC',
  Donationtypeimage6Desc = 'DONATIONTYPEIMAGE6_DESC',
  Donationtypetitle1Asc = 'DONATIONTYPETITLE1_ASC',
  Donationtypetitle1Desc = 'DONATIONTYPETITLE1_DESC',
  Donationtypetitle2Asc = 'DONATIONTYPETITLE2_ASC',
  Donationtypetitle2Desc = 'DONATIONTYPETITLE2_DESC',
  Donationtypetitle3Asc = 'DONATIONTYPETITLE3_ASC',
  Donationtypetitle3Desc = 'DONATIONTYPETITLE3_DESC',
  Donationtypetitle4Asc = 'DONATIONTYPETITLE4_ASC',
  Donationtypetitle4Desc = 'DONATIONTYPETITLE4_DESC',
  Donationtypetitle5Asc = 'DONATIONTYPETITLE5_ASC',
  Donationtypetitle5Desc = 'DONATIONTYPETITLE5_DESC',
  Donationtypetitle6Asc = 'DONATIONTYPETITLE6_ASC',
  Donationtypetitle6Desc = 'DONATIONTYPETITLE6_DESC',
  FacebookAsc = 'FACEBOOK_ASC',
  FacebookDesc = 'FACEBOOK_DESC',
  FaviconAsc = 'FAVICON_ASC',
  FaviconDesc = 'FAVICON_DESC',
  FeaturedposAsc = 'FEATUREDPOS_ASC',
  FeaturedposDesc = 'FEATUREDPOS_DESC',
  IdnumbercardAsc = 'IDNUMBERCARD_ASC',
  IdnumbercardDesc = 'IDNUMBERCARD_DESC',
  Impact1AmountAsc = 'IMPACT1AMOUNT_ASC',
  Impact1AmountDesc = 'IMPACT1AMOUNT_DESC',
  Impact1TitleAsc = 'IMPACT1TITLE_ASC',
  Impact1TitleDesc = 'IMPACT1TITLE_DESC',
  Impact2AmountAsc = 'IMPACT2AMOUNT_ASC',
  Impact2AmountDesc = 'IMPACT2AMOUNT_DESC',
  Impact2TitleAsc = 'IMPACT2TITLE_ASC',
  Impact2TitleDesc = 'IMPACT2TITLE_DESC',
  Impact3AmountAsc = 'IMPACT3AMOUNT_ASC',
  Impact3AmountDesc = 'IMPACT3AMOUNT_DESC',
  Impact3TitleAsc = 'IMPACT3TITLE_ASC',
  Impact3TitleDesc = 'IMPACT3TITLE_DESC',
  ImpactcategoryAsc = 'IMPACTCATEGORY_ASC',
  ImpactcategoryDesc = 'IMPACTCATEGORY_DESC',
  InstagramAsc = 'INSTAGRAM_ASC',
  InstagramDesc = 'INSTAGRAM_DESC',
  LicensenumberAsc = 'LICENSENUMBER_ASC',
  LicensenumberDesc = 'LICENSENUMBER_DESC',
  LinkedinAsc = 'LINKEDIN_ASC',
  LinkedinDesc = 'LINKEDIN_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NonprofittypeAsc = 'NONPROFITTYPE_ASC',
  NonprofittypeDesc = 'NONPROFITTYPE_DESC',
  OrganizationbankaccountnameAsc = 'ORGANIZATIONBANKACCOUNTNAME_ASC',
  OrganizationbankaccountnameDesc = 'ORGANIZATIONBANKACCOUNTNAME_DESC',
  OrganizationbankaccountnumberAsc = 'ORGANIZATIONBANKACCOUNTNUMBER_ASC',
  OrganizationbankaccountnumberDesc = 'ORGANIZATIONBANKACCOUNTNUMBER_DESC',
  OrganizationbankaccountAsc = 'ORGANIZATIONBANKACCOUNT_ASC',
  OrganizationbankaccountDesc = 'ORGANIZATIONBANKACCOUNT_DESC',
  OrganizationemailAsc = 'ORGANIZATIONEMAIL_ASC',
  OrganizationemailDesc = 'ORGANIZATIONEMAIL_DESC',
  OrganizationmoderatorAsc = 'ORGANIZATIONMODERATOR_ASC',
  OrganizationmoderatorDesc = 'ORGANIZATIONMODERATOR_DESC',
  OrganizationnameAsc = 'ORGANIZATIONNAME_ASC',
  OrganizationnameDesc = 'ORGANIZATIONNAME_DESC',
  OrganizationprofileAsc = 'ORGANIZATIONPROFILE_ASC',
  OrganizationprofileDesc = 'ORGANIZATIONPROFILE_DESC',
  OrganizationsizeAsc = 'ORGANIZATIONSIZE_ASC',
  OrganizationsizeDesc = 'ORGANIZATIONSIZE_DESC',
  OrganizationswiftcodeAsc = 'ORGANIZATIONSWIFTCODE_ASC',
  OrganizationswiftcodeDesc = 'ORGANIZATIONSWIFTCODE_DESC',
  OrganizationtypeAsc = 'ORGANIZATIONTYPE_ASC',
  OrganizationtypeDesc = 'ORGANIZATIONTYPE_DESC',
  OrgobjectiveAsc = 'ORGOBJECTIVE_ASC',
  OrgobjectiveDesc = 'ORGOBJECTIVE_DESC',
  Ourgoal1Asc = 'OURGOAL1_ASC',
  Ourgoal1Desc = 'OURGOAL1_DESC',
  Ourgoal2Asc = 'OURGOAL2_ASC',
  Ourgoal2Desc = 'OURGOAL2_DESC',
  Ourgoal3Asc = 'OURGOAL3_ASC',
  Ourgoal3Desc = 'OURGOAL3_DESC',
  Ourgoal4Asc = 'OURGOAL4_ASC',
  Ourgoal4Desc = 'OURGOAL4_DESC',
  Ourgoal5Asc = 'OURGOAL5_ASC',
  Ourgoal5Desc = 'OURGOAL5_DESC',
  Ourgoal6Asc = 'OURGOAL6_ASC',
  Ourgoal6Desc = 'OURGOAL6_DESC',
  OurmissiondetailAsc = 'OURMISSIONDETAIL_ASC',
  OurmissiondetailDesc = 'OURMISSIONDETAIL_DESC',
  OurstorydescAsc = 'OURSTORYDESC_ASC',
  OurstorydescDesc = 'OURSTORYDESC_DESC',
  Ourvalue1Asc = 'OURVALUE1_ASC',
  Ourvalue1Desc = 'OURVALUE1_DESC',
  Ourvalue2Asc = 'OURVALUE2_ASC',
  Ourvalue2Desc = 'OURVALUE2_DESC',
  Ourvalue3Asc = 'OURVALUE3_ASC',
  Ourvalue3Desc = 'OURVALUE3_DESC',
  OwnerrealmidAsc = 'OWNERREALMID_ASC',
  OwnerrealmidDesc = 'OWNERREALMID_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  PackagetypeAsc = 'PACKAGETYPE_ASC',
  PackagetypeDesc = 'PACKAGETYPE_DESC',
  PaypalclientidAsc = 'PAYPALCLIENTID_ASC',
  PaypalclientidDesc = 'PAYPALCLIENTID_DESC',
  PhonenumberAsc = 'PHONENUMBER_ASC',
  PhonenumberDesc = 'PHONENUMBER_DESC',
  PostalcodeAsc = 'POSTALCODE_ASC',
  PostalcodeDesc = 'POSTALCODE_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  TwitterAsc = 'TWITTER_ASC',
  TwitterDesc = 'TWITTER_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  WebsiteAsc = 'WEBSITE_ASC',
  WebsiteDesc = 'WEBSITE_DESC',
  WhatsappAsc = 'WHATSAPP_ASC',
  WhatsappDesc = 'WHATSAPP_DESC',
  XenditmodeAsc = 'XENDITMODE_ASC',
  XenditmodeDesc = 'XENDITMODE_DESC',
  YoutubeAsc = 'YOUTUBE_ASC',
  YoutubeDesc = 'YOUTUBE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type OrganizationTeam = {
  __typename?: 'OrganizationTeam';
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['ObjectId']>;
  organizationName?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
};

export type OrganizationTeamInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationName?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
};

export type OrganizationTeamQueryInput = {
  AND?: InputMaybe<Array<OrganizationTeamQueryInput>>;
  OR?: InputMaybe<Array<OrganizationTeamQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_exists?: InputMaybe<Scalars['Boolean']>;
  fullName_gt?: InputMaybe<Scalars['String']>;
  fullName_gte?: InputMaybe<Scalars['String']>;
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullName_lt?: InputMaybe<Scalars['String']>;
  fullName_lte?: InputMaybe<Scalars['String']>;
  fullName_ne?: InputMaybe<Scalars['String']>;
  fullName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['ObjectId']>;
  organizationId_gte?: InputMaybe<Scalars['ObjectId']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  organizationId_lt?: InputMaybe<Scalars['ObjectId']>;
  organizationId_lte?: InputMaybe<Scalars['ObjectId']>;
  organizationId_ne?: InputMaybe<Scalars['ObjectId']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationName_exists?: InputMaybe<Scalars['Boolean']>;
  organizationName_gt?: InputMaybe<Scalars['String']>;
  organizationName_gte?: InputMaybe<Scalars['String']>;
  organizationName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationName_lt?: InputMaybe<Scalars['String']>;
  organizationName_lte?: InputMaybe<Scalars['String']>;
  organizationName_ne?: InputMaybe<Scalars['String']>;
  organizationName_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture?: InputMaybe<Scalars['String']>;
  profilePicture_exists?: InputMaybe<Scalars['Boolean']>;
  profilePicture_gt?: InputMaybe<Scalars['String']>;
  profilePicture_gte?: InputMaybe<Scalars['String']>;
  profilePicture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture_lt?: InputMaybe<Scalars['String']>;
  profilePicture_lte?: InputMaybe<Scalars['String']>;
  profilePicture_ne?: InputMaybe<Scalars['String']>;
  profilePicture_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum OrganizationTeamSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FullnameAsc = 'FULLNAME_ASC',
  FullnameDesc = 'FULLNAME_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  OrganizationnameAsc = 'ORGANIZATIONNAME_ASC',
  OrganizationnameDesc = 'ORGANIZATIONNAME_DESC',
  ProfilepictureAsc = 'PROFILEPICTURE_ASC',
  ProfilepictureDesc = 'PROFILEPICTURE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type OrganizationTeamUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_unset?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['ObjectId']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationName_unset?: InputMaybe<Scalars['Boolean']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  profilePicture_unset?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationUpdateInput = {
  OrganizationBankAccountName?: InputMaybe<Scalars['String']>;
  OrganizationBankAccountName_unset?: InputMaybe<Scalars['Boolean']>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  aboutHeading?: InputMaybe<Scalars['String']>;
  aboutHeading_unset?: InputMaybe<Scalars['Boolean']>;
  aboutPicture?: InputMaybe<Scalars['String']>;
  aboutPicture_unset?: InputMaybe<Scalars['Boolean']>;
  comissioner?: InputMaybe<Scalars['String']>;
  comissioner_unset?: InputMaybe<Scalars['Boolean']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactEmail_unset?: InputMaybe<Scalars['Boolean']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  contactPhone_unset?: InputMaybe<Scalars['Boolean']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_unset?: InputMaybe<Scalars['Boolean']>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultCurrency_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage1_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage2_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage3_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage4_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage5_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeImage6_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_unset?: InputMaybe<Scalars['Boolean']>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_unset?: InputMaybe<Scalars['Boolean']>;
  favicon?: InputMaybe<Scalars['String']>;
  favicon_unset?: InputMaybe<Scalars['Boolean']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featuredPos?: InputMaybe<Scalars['Int']>;
  featuredPos_inc?: InputMaybe<Scalars['Int']>;
  featuredPos_unset?: InputMaybe<Scalars['Boolean']>;
  featured_unset?: InputMaybe<Scalars['Boolean']>;
  idNumberCard?: InputMaybe<Scalars['String']>;
  idNumberCard_unset?: InputMaybe<Scalars['Boolean']>;
  impact1Amount?: InputMaybe<Scalars['String']>;
  impact1Amount_unset?: InputMaybe<Scalars['Boolean']>;
  impact1Title?: InputMaybe<Scalars['String']>;
  impact1Title_unset?: InputMaybe<Scalars['Boolean']>;
  impact2Amount?: InputMaybe<Scalars['String']>;
  impact2Amount_unset?: InputMaybe<Scalars['Boolean']>;
  impact2Title?: InputMaybe<Scalars['String']>;
  impact2Title_unset?: InputMaybe<Scalars['Boolean']>;
  impact3Amount?: InputMaybe<Scalars['String']>;
  impact3Amount_unset?: InputMaybe<Scalars['Boolean']>;
  impact3Title?: InputMaybe<Scalars['String']>;
  impact3Title_unset?: InputMaybe<Scalars['Boolean']>;
  impactCategory?: InputMaybe<Scalars['String']>;
  impactCategory_unset?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  instagram_unset?: InputMaybe<Scalars['Boolean']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseNumber_unset?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_unset?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  location_unset?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  logo_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  nonprofitType?: InputMaybe<Scalars['String']>;
  nonprofitType_unset?: InputMaybe<Scalars['Boolean']>;
  orgObjective?: InputMaybe<Scalars['String']>;
  orgObjective_unset?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccount?: InputMaybe<Scalars['String']>;
  organizationBankAccountName?: InputMaybe<Scalars['String']>;
  organizationBankAccountName_unset?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccountNumber?: InputMaybe<Scalars['String']>;
  organizationBankAccountNumber_unset?: InputMaybe<Scalars['Boolean']>;
  organizationBankAccount_unset?: InputMaybe<Scalars['Boolean']>;
  organizationEmail?: InputMaybe<Scalars['String']>;
  organizationEmail_unset?: InputMaybe<Scalars['Boolean']>;
  organizationModerator?: InputMaybe<Scalars['String']>;
  organizationModerator_unset?: InputMaybe<Scalars['Boolean']>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationName_unset?: InputMaybe<Scalars['Boolean']>;
  organizationProfile?: InputMaybe<Scalars['String']>;
  organizationProfile_unset?: InputMaybe<Scalars['Boolean']>;
  organizationSize?: InputMaybe<Scalars['String']>;
  organizationSize_unset?: InputMaybe<Scalars['Boolean']>;
  organizationSwiftCode?: InputMaybe<Scalars['String']>;
  organizationSwiftCode_unset?: InputMaybe<Scalars['Boolean']>;
  organizationType?: InputMaybe<Scalars['String']>;
  organizationType_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal1_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal2_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal3_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal4_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal5_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourGoal6_unset?: InputMaybe<Scalars['Boolean']>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourMissionDetail_unset?: InputMaybe<Scalars['Boolean']>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourStoryDesc_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue1_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue2_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ourValue3_unset?: InputMaybe<Scalars['Boolean']>;
  ownerRealmId?: InputMaybe<Scalars['ObjectId']>;
  ownerRealmId_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  packageType?: InputMaybe<Scalars['Int']>;
  packageType_inc?: InputMaybe<Scalars['Int']>;
  packageType_unset?: InputMaybe<Scalars['Boolean']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  paypalClientId_unset?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_unset?: InputMaybe<Scalars['Boolean']>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalCode_unset?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  role_unset?: InputMaybe<Scalars['Boolean']>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_unset?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  username_unset?: InputMaybe<Scalars['Boolean']>;
  website?: InputMaybe<Scalars['String']>;
  website_unset?: InputMaybe<Scalars['Boolean']>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_unset?: InputMaybe<Scalars['Boolean']>;
  xenditMode?: InputMaybe<Scalars['String']>;
  xenditMode_unset?: InputMaybe<Scalars['Boolean']>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_unset?: InputMaybe<Scalars['Boolean']>;
};

export type PaymentDatum = {
  __typename?: 'PaymentDatum';
  _id?: Maybe<Scalars['ObjectId']>;
  donationId?: Maybe<Scalars['ObjectId']>;
  facilitatorAccessToken?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  payerId?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
};

export type PaymentDatumInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  facilitatorAccessToken?: InputMaybe<Scalars['String']>;
  merchantId?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  payerId?: InputMaybe<Scalars['String']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
};

export type PaymentDatumQueryInput = {
  AND?: InputMaybe<Array<PaymentDatumQueryInput>>;
  OR?: InputMaybe<Array<PaymentDatumQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  donationId_exists?: InputMaybe<Scalars['Boolean']>;
  donationId_gt?: InputMaybe<Scalars['ObjectId']>;
  donationId_gte?: InputMaybe<Scalars['ObjectId']>;
  donationId_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  donationId_lt?: InputMaybe<Scalars['ObjectId']>;
  donationId_lte?: InputMaybe<Scalars['ObjectId']>;
  donationId_ne?: InputMaybe<Scalars['ObjectId']>;
  donationId_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  facilitatorAccessToken?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_exists?: InputMaybe<Scalars['Boolean']>;
  facilitatorAccessToken_gt?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_gte?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facilitatorAccessToken_lt?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_lte?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_ne?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  merchantId?: InputMaybe<Scalars['String']>;
  merchantId_exists?: InputMaybe<Scalars['Boolean']>;
  merchantId_gt?: InputMaybe<Scalars['String']>;
  merchantId_gte?: InputMaybe<Scalars['String']>;
  merchantId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  merchantId_lt?: InputMaybe<Scalars['String']>;
  merchantId_lte?: InputMaybe<Scalars['String']>;
  merchantId_ne?: InputMaybe<Scalars['String']>;
  merchantId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderId?: InputMaybe<Scalars['String']>;
  orderId_exists?: InputMaybe<Scalars['Boolean']>;
  orderId_gt?: InputMaybe<Scalars['String']>;
  orderId_gte?: InputMaybe<Scalars['String']>;
  orderId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderId_lt?: InputMaybe<Scalars['String']>;
  orderId_lte?: InputMaybe<Scalars['String']>;
  orderId_ne?: InputMaybe<Scalars['String']>;
  orderId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  payerId?: InputMaybe<Scalars['String']>;
  payerId_exists?: InputMaybe<Scalars['Boolean']>;
  payerId_gt?: InputMaybe<Scalars['String']>;
  payerId_gte?: InputMaybe<Scalars['String']>;
  payerId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  payerId_lt?: InputMaybe<Scalars['String']>;
  payerId_lte?: InputMaybe<Scalars['String']>;
  payerId_ne?: InputMaybe<Scalars['String']>;
  payerId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentStatus?: InputMaybe<Scalars['String']>;
  paymentStatus_exists?: InputMaybe<Scalars['Boolean']>;
  paymentStatus_gt?: InputMaybe<Scalars['String']>;
  paymentStatus_gte?: InputMaybe<Scalars['String']>;
  paymentStatus_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentStatus_lt?: InputMaybe<Scalars['String']>;
  paymentStatus_lte?: InputMaybe<Scalars['String']>;
  paymentStatus_ne?: InputMaybe<Scalars['String']>;
  paymentStatus_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum PaymentDatumSortByInput {
  DonationidAsc = 'DONATIONID_ASC',
  DonationidDesc = 'DONATIONID_DESC',
  FacilitatoraccesstokenAsc = 'FACILITATORACCESSTOKEN_ASC',
  FacilitatoraccesstokenDesc = 'FACILITATORACCESSTOKEN_DESC',
  MerchantidAsc = 'MERCHANTID_ASC',
  MerchantidDesc = 'MERCHANTID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  PayeridAsc = 'PAYERID_ASC',
  PayeridDesc = 'PAYERID_DESC',
  PaymentstatusAsc = 'PAYMENTSTATUS_ASC',
  PaymentstatusDesc = 'PAYMENTSTATUS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type PaymentDatumUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  donationId?: InputMaybe<Scalars['ObjectId']>;
  donationId_unset?: InputMaybe<Scalars['Boolean']>;
  facilitatorAccessToken?: InputMaybe<Scalars['String']>;
  facilitatorAccessToken_unset?: InputMaybe<Scalars['Boolean']>;
  merchantId?: InputMaybe<Scalars['String']>;
  merchantId_unset?: InputMaybe<Scalars['Boolean']>;
  orderId?: InputMaybe<Scalars['String']>;
  orderId_unset?: InputMaybe<Scalars['Boolean']>;
  payerId?: InputMaybe<Scalars['String']>;
  payerId_unset?: InputMaybe<Scalars['Boolean']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
  paymentStatus_unset?: InputMaybe<Scalars['Boolean']>;
};

export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  _id?: Maybe<Scalars['ObjectId']>;
  apiKey?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  defaultCurrency?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  paymentGatewayId?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PaymentGatewayInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  apiKey?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  paymentGatewayId?: InputMaybe<Scalars['String']>;
  profileId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type PaymentGatewayQueryInput = {
  AND?: InputMaybe<Array<PaymentGatewayQueryInput>>;
  OR?: InputMaybe<Array<PaymentGatewayQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  apiKey?: InputMaybe<Scalars['String']>;
  apiKey_exists?: InputMaybe<Scalars['Boolean']>;
  apiKey_gt?: InputMaybe<Scalars['String']>;
  apiKey_gte?: InputMaybe<Scalars['String']>;
  apiKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  apiKey_lt?: InputMaybe<Scalars['String']>;
  apiKey_lte?: InputMaybe<Scalars['String']>;
  apiKey_ne?: InputMaybe<Scalars['String']>;
  apiKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  defaultCurrency_gt?: InputMaybe<Scalars['String']>;
  defaultCurrency_gte?: InputMaybe<Scalars['String']>;
  defaultCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultCurrency_lt?: InputMaybe<Scalars['String']>;
  defaultCurrency_lte?: InputMaybe<Scalars['String']>;
  defaultCurrency_ne?: InputMaybe<Scalars['String']>;
  defaultCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_exists?: InputMaybe<Scalars['Boolean']>;
  isActive_gt?: InputMaybe<Scalars['String']>;
  isActive_gte?: InputMaybe<Scalars['String']>;
  isActive_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive_lt?: InputMaybe<Scalars['String']>;
  isActive_lte?: InputMaybe<Scalars['String']>;
  isActive_ne?: InputMaybe<Scalars['String']>;
  isActive_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['String']>;
  organizationId_gte?: InputMaybe<Scalars['String']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId_lt?: InputMaybe<Scalars['String']>;
  organizationId_lte?: InputMaybe<Scalars['String']>;
  organizationId_ne?: InputMaybe<Scalars['String']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentGatewayId?: InputMaybe<Scalars['String']>;
  paymentGatewayId_exists?: InputMaybe<Scalars['Boolean']>;
  paymentGatewayId_gt?: InputMaybe<Scalars['String']>;
  paymentGatewayId_gte?: InputMaybe<Scalars['String']>;
  paymentGatewayId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paymentGatewayId_lt?: InputMaybe<Scalars['String']>;
  paymentGatewayId_lte?: InputMaybe<Scalars['String']>;
  paymentGatewayId_ne?: InputMaybe<Scalars['String']>;
  paymentGatewayId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profileId?: InputMaybe<Scalars['String']>;
  profileId_exists?: InputMaybe<Scalars['Boolean']>;
  profileId_gt?: InputMaybe<Scalars['String']>;
  profileId_gte?: InputMaybe<Scalars['String']>;
  profileId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profileId_lt?: InputMaybe<Scalars['String']>;
  profileId_lte?: InputMaybe<Scalars['String']>;
  profileId_ne?: InputMaybe<Scalars['String']>;
  profileId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum PaymentGatewaySortByInput {
  ApikeyAsc = 'APIKEY_ASC',
  ApikeyDesc = 'APIKEY_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DefaultcurrencyAsc = 'DEFAULTCURRENCY_ASC',
  DefaultcurrencyDesc = 'DEFAULTCURRENCY_DESC',
  IsactiveAsc = 'ISACTIVE_ASC',
  IsactiveDesc = 'ISACTIVE_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PaymentgatewayidAsc = 'PAYMENTGATEWAYID_ASC',
  PaymentgatewayidDesc = 'PAYMENTGATEWAYID_DESC',
  ProfileidAsc = 'PROFILEID_ASC',
  ProfileidDesc = 'PROFILEID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type PaymentGatewayUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  apiKey?: InputMaybe<Scalars['String']>;
  apiKey_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  defaultCurrency?: InputMaybe<Scalars['String']>;
  defaultCurrency_unset?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  paymentGatewayId?: InputMaybe<Scalars['String']>;
  paymentGatewayId_unset?: InputMaybe<Scalars['Boolean']>;
  profileId?: InputMaybe<Scalars['String']>;
  profileId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Project = {
  __typename?: 'Project';
  _id?: Maybe<Scalars['ObjectId']>;
  address?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameterSize?: Maybe<Scalars['String']>;
  hasAc?: Maybe<Scalars['String']>;
  hasClassroom?: Maybe<Scalars['String']>;
  hasFemaleSection?: Maybe<Scalars['String']>;
  hasGreenSpace?: Maybe<Scalars['String']>;
  hasParking?: Maybe<Scalars['String']>;
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  prayerSize?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  toiletSize?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  address?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  diameterSize?: InputMaybe<Scalars['String']>;
  hasAc?: InputMaybe<Scalars['String']>;
  hasClassroom?: InputMaybe<Scalars['String']>;
  hasFemaleSection?: InputMaybe<Scalars['String']>;
  hasGreenSpace?: InputMaybe<Scalars['String']>;
  hasParking?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  prayerSize?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  toiletSize?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ProjectOperatorMap = {
  __typename?: 'ProjectOperatorMap';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  projectOperatorMapId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectOperatorMapInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  createdAt?: InputMaybe<Scalars['String']>;
  operatorId?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  projectOperatorMapId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ProjectOperatorMapQueryInput = {
  AND?: InputMaybe<Array<ProjectOperatorMapQueryInput>>;
  OR?: InputMaybe<Array<ProjectOperatorMapQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  operatorId?: InputMaybe<Scalars['String']>;
  operatorId_exists?: InputMaybe<Scalars['Boolean']>;
  operatorId_gt?: InputMaybe<Scalars['String']>;
  operatorId_gte?: InputMaybe<Scalars['String']>;
  operatorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  operatorId_lt?: InputMaybe<Scalars['String']>;
  operatorId_lte?: InputMaybe<Scalars['String']>;
  operatorId_ne?: InputMaybe<Scalars['String']>;
  operatorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_exists?: InputMaybe<Scalars['Boolean']>;
  projectId_gt?: InputMaybe<Scalars['String']>;
  projectId_gte?: InputMaybe<Scalars['String']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId_lt?: InputMaybe<Scalars['String']>;
  projectId_lte?: InputMaybe<Scalars['String']>;
  projectId_ne?: InputMaybe<Scalars['String']>;
  projectId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectOperatorMapId?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_exists?: InputMaybe<Scalars['Boolean']>;
  projectOperatorMapId_gt?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_gte?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectOperatorMapId_lt?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_lte?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_ne?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ProjectOperatorMapSortByInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  OperatoridAsc = 'OPERATORID_ASC',
  OperatoridDesc = 'OPERATORID_DESC',
  ProjectidAsc = 'PROJECTID_ASC',
  ProjectidDesc = 'PROJECTID_DESC',
  ProjectoperatormapidAsc = 'PROJECTOPERATORMAPID_ASC',
  ProjectoperatormapidDesc = 'PROJECTOPERATORMAPID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ProjectOperatorMapUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  operatorId?: InputMaybe<Scalars['String']>;
  operatorId_unset?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_unset?: InputMaybe<Scalars['Boolean']>;
  projectOperatorMapId?: InputMaybe<Scalars['String']>;
  projectOperatorMapId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectQueryInput = {
  AND?: InputMaybe<Array<ProjectQueryInput>>;
  OR?: InputMaybe<Array<ProjectQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  address?: InputMaybe<Scalars['String']>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_ne?: InputMaybe<Scalars['String']>;
  address_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  coverImage_gt?: InputMaybe<Scalars['String']>;
  coverImage_gte?: InputMaybe<Scalars['String']>;
  coverImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage_lt?: InputMaybe<Scalars['String']>;
  coverImage_lte?: InputMaybe<Scalars['String']>;
  coverImage_ne?: InputMaybe<Scalars['String']>;
  coverImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  diameterSize?: InputMaybe<Scalars['String']>;
  diameterSize_exists?: InputMaybe<Scalars['Boolean']>;
  diameterSize_gt?: InputMaybe<Scalars['String']>;
  diameterSize_gte?: InputMaybe<Scalars['String']>;
  diameterSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  diameterSize_lt?: InputMaybe<Scalars['String']>;
  diameterSize_lte?: InputMaybe<Scalars['String']>;
  diameterSize_ne?: InputMaybe<Scalars['String']>;
  diameterSize_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasAc?: InputMaybe<Scalars['String']>;
  hasAc_exists?: InputMaybe<Scalars['Boolean']>;
  hasAc_gt?: InputMaybe<Scalars['String']>;
  hasAc_gte?: InputMaybe<Scalars['String']>;
  hasAc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasAc_lt?: InputMaybe<Scalars['String']>;
  hasAc_lte?: InputMaybe<Scalars['String']>;
  hasAc_ne?: InputMaybe<Scalars['String']>;
  hasAc_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasClassroom?: InputMaybe<Scalars['String']>;
  hasClassroom_exists?: InputMaybe<Scalars['Boolean']>;
  hasClassroom_gt?: InputMaybe<Scalars['String']>;
  hasClassroom_gte?: InputMaybe<Scalars['String']>;
  hasClassroom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasClassroom_lt?: InputMaybe<Scalars['String']>;
  hasClassroom_lte?: InputMaybe<Scalars['String']>;
  hasClassroom_ne?: InputMaybe<Scalars['String']>;
  hasClassroom_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasFemaleSection?: InputMaybe<Scalars['String']>;
  hasFemaleSection_exists?: InputMaybe<Scalars['Boolean']>;
  hasFemaleSection_gt?: InputMaybe<Scalars['String']>;
  hasFemaleSection_gte?: InputMaybe<Scalars['String']>;
  hasFemaleSection_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasFemaleSection_lt?: InputMaybe<Scalars['String']>;
  hasFemaleSection_lte?: InputMaybe<Scalars['String']>;
  hasFemaleSection_ne?: InputMaybe<Scalars['String']>;
  hasFemaleSection_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasGreenSpace?: InputMaybe<Scalars['String']>;
  hasGreenSpace_exists?: InputMaybe<Scalars['Boolean']>;
  hasGreenSpace_gt?: InputMaybe<Scalars['String']>;
  hasGreenSpace_gte?: InputMaybe<Scalars['String']>;
  hasGreenSpace_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasGreenSpace_lt?: InputMaybe<Scalars['String']>;
  hasGreenSpace_lte?: InputMaybe<Scalars['String']>;
  hasGreenSpace_ne?: InputMaybe<Scalars['String']>;
  hasGreenSpace_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasParking?: InputMaybe<Scalars['String']>;
  hasParking_exists?: InputMaybe<Scalars['Boolean']>;
  hasParking_gt?: InputMaybe<Scalars['String']>;
  hasParking_gte?: InputMaybe<Scalars['String']>;
  hasParking_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasParking_lt?: InputMaybe<Scalars['String']>;
  hasParking_lte?: InputMaybe<Scalars['String']>;
  hasParking_ne?: InputMaybe<Scalars['String']>;
  hasParking_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1?: InputMaybe<Scalars['String']>;
  image1_exists?: InputMaybe<Scalars['Boolean']>;
  image1_gt?: InputMaybe<Scalars['String']>;
  image1_gte?: InputMaybe<Scalars['String']>;
  image1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1_lt?: InputMaybe<Scalars['String']>;
  image1_lte?: InputMaybe<Scalars['String']>;
  image1_ne?: InputMaybe<Scalars['String']>;
  image1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2?: InputMaybe<Scalars['String']>;
  image2_exists?: InputMaybe<Scalars['Boolean']>;
  image2_gt?: InputMaybe<Scalars['String']>;
  image2_gte?: InputMaybe<Scalars['String']>;
  image2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2_lt?: InputMaybe<Scalars['String']>;
  image2_lte?: InputMaybe<Scalars['String']>;
  image2_ne?: InputMaybe<Scalars['String']>;
  image2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3?: InputMaybe<Scalars['String']>;
  image3_exists?: InputMaybe<Scalars['Boolean']>;
  image3_gt?: InputMaybe<Scalars['String']>;
  image3_gte?: InputMaybe<Scalars['String']>;
  image3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3_lt?: InputMaybe<Scalars['String']>;
  image3_lte?: InputMaybe<Scalars['String']>;
  image3_ne?: InputMaybe<Scalars['String']>;
  image3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipAddress?: InputMaybe<Scalars['String']>;
  ipAddress_exists?: InputMaybe<Scalars['Boolean']>;
  ipAddress_gt?: InputMaybe<Scalars['String']>;
  ipAddress_gte?: InputMaybe<Scalars['String']>;
  ipAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipAddress_lt?: InputMaybe<Scalars['String']>;
  ipAddress_lte?: InputMaybe<Scalars['String']>;
  ipAddress_ne?: InputMaybe<Scalars['String']>;
  ipAddress_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_exists?: InputMaybe<Scalars['Boolean']>;
  isPublished_gt?: InputMaybe<Scalars['String']>;
  isPublished_gte?: InputMaybe<Scalars['String']>;
  isPublished_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished_lt?: InputMaybe<Scalars['String']>;
  isPublished_lte?: InputMaybe<Scalars['String']>;
  isPublished_ne?: InputMaybe<Scalars['String']>;
  isPublished_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_gt?: InputMaybe<Scalars['String']>;
  location_gte?: InputMaybe<Scalars['String']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_lt?: InputMaybe<Scalars['String']>;
  location_lte?: InputMaybe<Scalars['String']>;
  location_ne?: InputMaybe<Scalars['String']>;
  location_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_exists?: InputMaybe<Scalars['Boolean']>;
  organizationId_gt?: InputMaybe<Scalars['String']>;
  organizationId_gte?: InputMaybe<Scalars['String']>;
  organizationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  organizationId_lt?: InputMaybe<Scalars['String']>;
  organizationId_lte?: InputMaybe<Scalars['String']>;
  organizationId_ne?: InputMaybe<Scalars['String']>;
  organizationId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prayerSize?: InputMaybe<Scalars['String']>;
  prayerSize_exists?: InputMaybe<Scalars['Boolean']>;
  prayerSize_gt?: InputMaybe<Scalars['String']>;
  prayerSize_gte?: InputMaybe<Scalars['String']>;
  prayerSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prayerSize_lt?: InputMaybe<Scalars['String']>;
  prayerSize_lte?: InputMaybe<Scalars['String']>;
  prayerSize_ne?: InputMaybe<Scalars['String']>;
  prayerSize_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_exists?: InputMaybe<Scalars['Boolean']>;
  projectId_gt?: InputMaybe<Scalars['String']>;
  projectId_gte?: InputMaybe<Scalars['String']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectId_lt?: InputMaybe<Scalars['String']>;
  projectId_lte?: InputMaybe<Scalars['String']>;
  projectId_ne?: InputMaybe<Scalars['String']>;
  projectId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toiletSize?: InputMaybe<Scalars['String']>;
  toiletSize_exists?: InputMaybe<Scalars['Boolean']>;
  toiletSize_gt?: InputMaybe<Scalars['String']>;
  toiletSize_gte?: InputMaybe<Scalars['String']>;
  toiletSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toiletSize_lt?: InputMaybe<Scalars['String']>;
  toiletSize_lte?: InputMaybe<Scalars['String']>;
  toiletSize_ne?: InputMaybe<Scalars['String']>;
  toiletSize_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ProjectSortByInput {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CoverimageAsc = 'COVERIMAGE_ASC',
  CoverimageDesc = 'COVERIMAGE_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DiametersizeAsc = 'DIAMETERSIZE_ASC',
  DiametersizeDesc = 'DIAMETERSIZE_DESC',
  HasacAsc = 'HASAC_ASC',
  HasacDesc = 'HASAC_DESC',
  HasclassroomAsc = 'HASCLASSROOM_ASC',
  HasclassroomDesc = 'HASCLASSROOM_DESC',
  HasfemalesectionAsc = 'HASFEMALESECTION_ASC',
  HasfemalesectionDesc = 'HASFEMALESECTION_DESC',
  HasgreenspaceAsc = 'HASGREENSPACE_ASC',
  HasgreenspaceDesc = 'HASGREENSPACE_DESC',
  HasparkingAsc = 'HASPARKING_ASC',
  HasparkingDesc = 'HASPARKING_DESC',
  Image1Asc = 'IMAGE1_ASC',
  Image1Desc = 'IMAGE1_DESC',
  Image2Asc = 'IMAGE2_ASC',
  Image2Desc = 'IMAGE2_DESC',
  Image3Asc = 'IMAGE3_ASC',
  Image3Desc = 'IMAGE3_DESC',
  IpaddressAsc = 'IPADDRESS_ASC',
  IpaddressDesc = 'IPADDRESS_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  IspublishedAsc = 'ISPUBLISHED_ASC',
  IspublishedDesc = 'ISPUBLISHED_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PrayersizeAsc = 'PRAYERSIZE_ASC',
  PrayersizeDesc = 'PRAYERSIZE_DESC',
  ProjectidAsc = 'PROJECTID_ASC',
  ProjectidDesc = 'PROJECTID_DESC',
  ToiletsizeAsc = 'TOILETSIZE_ASC',
  ToiletsizeDesc = 'TOILETSIZE_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ProjectUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  address_unset?: InputMaybe<Scalars['Boolean']>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_unset?: InputMaybe<Scalars['Boolean']>;
  diameterSize?: InputMaybe<Scalars['String']>;
  diameterSize_unset?: InputMaybe<Scalars['Boolean']>;
  hasAc?: InputMaybe<Scalars['String']>;
  hasAc_unset?: InputMaybe<Scalars['Boolean']>;
  hasClassroom?: InputMaybe<Scalars['String']>;
  hasClassroom_unset?: InputMaybe<Scalars['Boolean']>;
  hasFemaleSection?: InputMaybe<Scalars['String']>;
  hasFemaleSection_unset?: InputMaybe<Scalars['Boolean']>;
  hasGreenSpace?: InputMaybe<Scalars['String']>;
  hasGreenSpace_unset?: InputMaybe<Scalars['Boolean']>;
  hasParking?: InputMaybe<Scalars['String']>;
  hasParking_unset?: InputMaybe<Scalars['Boolean']>;
  image1?: InputMaybe<Scalars['String']>;
  image1_unset?: InputMaybe<Scalars['Boolean']>;
  image2?: InputMaybe<Scalars['String']>;
  image2_unset?: InputMaybe<Scalars['Boolean']>;
  image3?: InputMaybe<Scalars['String']>;
  image3_unset?: InputMaybe<Scalars['Boolean']>;
  ipAddress?: InputMaybe<Scalars['String']>;
  ipAddress_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_unset?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  location_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  organizationId?: InputMaybe<Scalars['String']>;
  organizationId_unset?: InputMaybe<Scalars['Boolean']>;
  prayerSize?: InputMaybe<Scalars['String']>;
  prayerSize_unset?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_unset?: InputMaybe<Scalars['Boolean']>;
  toiletSize?: InputMaybe<Scalars['String']>;
  toiletSize_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  affiliation?: Maybe<Affiliation>;
  affiliations: Array<Maybe<Affiliation>>;
  article?: Maybe<Article>;
  articles: Array<Maybe<Article>>;
  campaign?: Maybe<Campaign>;
  campaignActivities: Array<Maybe<CampaignActivity>>;
  campaignActivity?: Maybe<CampaignActivity>;
  campaignNotificationReport?: Maybe<CampaignNotificationReport>;
  campaignNotificationReports: Array<Maybe<CampaignNotificationReport>>;
  campaignVendorLog?: Maybe<CampaignVendorLog>;
  campaignVendorLogs: Array<Maybe<CampaignVendorLog>>;
  campaigns: Array<Maybe<Campaign>>;
  chartData: Array<Maybe<ChartDatum>>;
  chartDatum?: Maybe<ChartDatum>;
  commerce?: Maybe<Commerce>;
  commerces: Array<Maybe<Commerce>>;
  donationLog?: Maybe<DonationLog>;
  donationLogs: Array<Maybe<DonationLog>>;
  donationPayment?: Maybe<DonationPayment>;
  donationPayments: Array<Maybe<DonationPayment>>;
  donation_log?: Maybe<Donation_Log>;
  donation_logs: Array<Maybe<Donation_Log>>;
  donor?: Maybe<Donor>;
  donors: Array<Maybe<Donor>>;
  getRegion?: Maybe<GetRegionFunctionPayload>;
  gift?: Maybe<Gift>;
  gifts: Array<Maybe<Gift>>;
  item?: Maybe<Item>;
  items: Array<Maybe<Item>>;
  nonprofit?: Maybe<Nonprofit>;
  nonprofitAppearance?: Maybe<NonprofitAppearance>;
  nonprofitAppearances: Array<Maybe<NonprofitAppearance>>;
  nonprofitCount?: Maybe<Scalars['Int']>;
  nonprofitSecret?: Maybe<NonprofitSecret>;
  nonprofitSecrets: Array<Maybe<NonprofitSecret>>;
  nonprofits: Array<Maybe<Nonprofit>>;
  operator?: Maybe<Operator>;
  operators: Array<Maybe<Operator>>;
  organization?: Maybe<Organization>;
  organizationTeam?: Maybe<OrganizationTeam>;
  organizationTeams: Array<Maybe<OrganizationTeam>>;
  organizations: Array<Maybe<Organization>>;
  paymentData: Array<Maybe<PaymentDatum>>;
  paymentDatum?: Maybe<PaymentDatum>;
  paymentGateway?: Maybe<PaymentGateway>;
  paymentGateways: Array<Maybe<PaymentGateway>>;
  project?: Maybe<Project>;
  projectOperatorMap?: Maybe<ProjectOperatorMap>;
  projectOperatorMaps: Array<Maybe<ProjectOperatorMap>>;
  projects: Array<Maybe<Project>>;
  task?: Maybe<Task>;
  tasks: Array<Maybe<Task>>;
  testRaise?: Maybe<TestRaise>;
  testRaises: Array<Maybe<TestRaise>>;
  ticketLog?: Maybe<TicketLog>;
  ticketLogs: Array<Maybe<TicketLog>>;
  tmraInfo?: Maybe<TmraInfo>;
  tmraInfos: Array<Maybe<TmraInfo>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  vendor?: Maybe<Vendor>;
  vendors: Array<Maybe<Vendor>>;
  volunteer?: Maybe<Volunteer>;
  volunteerTaskLog?: Maybe<VolunteerTaskLog>;
  volunteerTaskLogs: Array<Maybe<VolunteerTaskLog>>;
  volunteers: Array<Maybe<Volunteer>>;
};


export type QueryAffiliationArgs = {
  query?: InputMaybe<AffiliationQueryInput>;
};


export type QueryAffiliationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<AffiliationQueryInput>;
  sortBy?: InputMaybe<AffiliationSortByInput>;
};


export type QueryArticleArgs = {
  query?: InputMaybe<ArticleQueryInput>;
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ArticleQueryInput>;
  sortBy?: InputMaybe<ArticleSortByInput>;
};


export type QueryCampaignArgs = {
  query?: InputMaybe<CampaignQueryInput>;
};


export type QueryCampaignActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<CampaignActivityQueryInput>;
  sortBy?: InputMaybe<CampaignActivitySortByInput>;
};


export type QueryCampaignActivityArgs = {
  query?: InputMaybe<CampaignActivityQueryInput>;
};


export type QueryCampaignNotificationReportArgs = {
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
};


export type QueryCampaignNotificationReportsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<CampaignNotificationReportQueryInput>;
  sortBy?: InputMaybe<CampaignNotificationReportSortByInput>;
};


export type QueryCampaignVendorLogArgs = {
  query?: InputMaybe<CampaignVendorLogQueryInput>;
};


export type QueryCampaignVendorLogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<CampaignVendorLogQueryInput>;
  sortBy?: InputMaybe<CampaignVendorLogSortByInput>;
};


export type QueryCampaignsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<CampaignQueryInput>;
  sortBy?: InputMaybe<CampaignSortByInput>;
};


export type QueryChartDataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ChartDatumQueryInput>;
  sortBy?: InputMaybe<ChartDatumSortByInput>;
};


export type QueryChartDatumArgs = {
  query?: InputMaybe<ChartDatumQueryInput>;
};


export type QueryCommerceArgs = {
  query?: InputMaybe<CommerceQueryInput>;
};


export type QueryCommercesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<CommerceQueryInput>;
  sortBy?: InputMaybe<CommerceSortByInput>;
};


export type QueryDonationLogArgs = {
  query?: InputMaybe<DonationLogQueryInput>;
};


export type QueryDonationLogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<DonationLogQueryInput>;
  sortBy?: InputMaybe<DonationLogSortByInput>;
};


export type QueryDonationPaymentArgs = {
  query?: InputMaybe<DonationPaymentQueryInput>;
};


export type QueryDonationPaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<DonationPaymentQueryInput>;
  sortBy?: InputMaybe<DonationPaymentSortByInput>;
};


export type QueryDonation_LogArgs = {
  query?: InputMaybe<Donation_LogQueryInput>;
};


export type QueryDonation_LogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Donation_LogQueryInput>;
  sortBy?: InputMaybe<Donation_LogSortByInput>;
};


export type QueryDonorArgs = {
  query?: InputMaybe<DonorQueryInput>;
};


export type QueryDonorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<DonorQueryInput>;
  sortBy?: InputMaybe<DonorSortByInput>;
};


export type QueryGiftArgs = {
  query?: InputMaybe<GiftQueryInput>;
};


export type QueryGiftsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<GiftQueryInput>;
  sortBy?: InputMaybe<GiftSortByInput>;
};


export type QueryItemArgs = {
  query?: InputMaybe<ItemQueryInput>;
};


export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ItemQueryInput>;
  sortBy?: InputMaybe<ItemSortByInput>;
};


export type QueryNonprofitArgs = {
  query?: InputMaybe<NonprofitQueryInput>;
};


export type QueryNonprofitAppearanceArgs = {
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
};


export type QueryNonprofitAppearancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<NonprofitAppearanceQueryInput>;
  sortBy?: InputMaybe<NonprofitAppearanceSortByInput>;
};


export type QueryNonprofitSecretArgs = {
  query?: InputMaybe<NonprofitSecretQueryInput>;
};


export type QueryNonprofitSecretsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<NonprofitSecretQueryInput>;
  sortBy?: InputMaybe<NonprofitSecretSortByInput>;
};


export type QueryNonprofitsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<NonprofitQueryInput>;
  sortBy?: InputMaybe<NonprofitSortByInput>;
};


export type QueryOperatorArgs = {
  query?: InputMaybe<OperatorQueryInput>;
};


export type QueryOperatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<OperatorQueryInput>;
  sortBy?: InputMaybe<OperatorSortByInput>;
};


export type QueryOrganizationArgs = {
  query?: InputMaybe<OrganizationQueryInput>;
};


export type QueryOrganizationTeamArgs = {
  query?: InputMaybe<OrganizationTeamQueryInput>;
};


export type QueryOrganizationTeamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<OrganizationTeamQueryInput>;
  sortBy?: InputMaybe<OrganizationTeamSortByInput>;
};


export type QueryOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<OrganizationQueryInput>;
  sortBy?: InputMaybe<OrganizationSortByInput>;
};


export type QueryPaymentDataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<PaymentDatumQueryInput>;
  sortBy?: InputMaybe<PaymentDatumSortByInput>;
};


export type QueryPaymentDatumArgs = {
  query?: InputMaybe<PaymentDatumQueryInput>;
};


export type QueryPaymentGatewayArgs = {
  query?: InputMaybe<PaymentGatewayQueryInput>;
};


export type QueryPaymentGatewaysArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<PaymentGatewayQueryInput>;
  sortBy?: InputMaybe<PaymentGatewaySortByInput>;
};


export type QueryProjectArgs = {
  query?: InputMaybe<ProjectQueryInput>;
};


export type QueryProjectOperatorMapArgs = {
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
};


export type QueryProjectOperatorMapsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ProjectOperatorMapQueryInput>;
  sortBy?: InputMaybe<ProjectOperatorMapSortByInput>;
};


export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ProjectQueryInput>;
  sortBy?: InputMaybe<ProjectSortByInput>;
};


export type QueryTaskArgs = {
  query?: InputMaybe<TaskQueryInput>;
};


export type QueryTasksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<TaskQueryInput>;
  sortBy?: InputMaybe<TaskSortByInput>;
};


export type QueryTestRaiseArgs = {
  query?: InputMaybe<TestRaiseQueryInput>;
};


export type QueryTestRaisesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<TestRaiseQueryInput>;
  sortBy?: InputMaybe<TestRaiseSortByInput>;
};


export type QueryTicketLogArgs = {
  query?: InputMaybe<TicketLogQueryInput>;
};


export type QueryTicketLogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<TicketLogQueryInput>;
  sortBy?: InputMaybe<TicketLogSortByInput>;
};


export type QueryTmraInfoArgs = {
  query?: InputMaybe<TmraInfoQueryInput>;
};


export type QueryTmraInfosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<TmraInfoQueryInput>;
  sortBy?: InputMaybe<TmraInfoSortByInput>;
};


export type QueryUserArgs = {
  query?: InputMaybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<UserQueryInput>;
  sortBy?: InputMaybe<UserSortByInput>;
};


export type QueryVendorArgs = {
  query?: InputMaybe<VendorQueryInput>;
};


export type QueryVendorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<VendorQueryInput>;
  sortBy?: InputMaybe<VendorSortByInput>;
};


export type QueryVolunteerArgs = {
  query?: InputMaybe<VolunteerQueryInput>;
};


export type QueryVolunteerTaskLogArgs = {
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
};


export type QueryVolunteerTaskLogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<VolunteerTaskLogQueryInput>;
  sortBy?: InputMaybe<VolunteerTaskLogSortByInput>;
};


export type QueryVolunteersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<VolunteerQueryInput>;
  sortBy?: InputMaybe<VolunteerSortByInput>;
};

export type Result = {
  __typename?: 'Result';
  path?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['String']>;
};

export type Success = {
  __typename?: 'Success';
  result?: Maybe<SuccessResult>;
};

export type SuccessForgot = {
  __typename?: 'SuccessForgot';
  success?: Maybe<SuccessForgotSuccess>;
};

export type SuccessForgotSuccess = {
  __typename?: 'SuccessForgotSuccess';
  message?: Maybe<Scalars['String']>;
};

export type SuccessResult = {
  __typename?: 'SuccessResult';
  error?: Maybe<SuccessResultError>;
  registration?: Maybe<SuccessResultRegistration>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<SuccessResultUser>;
};

export type SuccessResultError = {
  __typename?: 'SuccessResultError';
  message?: Maybe<SuccessResultErrorMessage>;
};

export type SuccessResultErrorMessage = {
  __typename?: 'SuccessResultErrorMessage';
  message0?: Maybe<Scalars['String']>;
  message1?: Maybe<Scalars['String']>;
  message2?: Maybe<Scalars['String']>;
  message3?: Maybe<Scalars['String']>;
};

export type SuccessResultRegistration = {
  __typename?: 'SuccessResultRegistration';
  applicationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  insertInstant?: Maybe<Scalars['String']>;
  lastLoginInstant?: Maybe<Scalars['String']>;
  lastUpdateInstant?: Maybe<Scalars['String']>;
  usernameStatus?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type SuccessResultUser = {
  __typename?: 'SuccessResultUser';
  active?: Maybe<Scalars['Boolean']>;
  connectorId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  insertInstant?: Maybe<Scalars['String']>;
  lastLoginInstant?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastUpdateInstant?: Maybe<Scalars['String']>;
  passwordChangeRequired?: Maybe<Scalars['Boolean']>;
  passwordLastUpdateInstant?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  twoFactorDelivery?: Maybe<Scalars['String']>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']>;
  usernameStatus?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type Task = {
  __typename?: 'Task';
  _id?: Maybe<Scalars['ObjectId']>;
  benefitDetails?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  enrollmentType?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  isDisaAvailable?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  isRemote?: Maybe<Scalars['String']>;
  isUrgent?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  needsInterview?: Maybe<Scalars['String']>;
  reasonToPay?: Maybe<Scalars['String']>;
  requiredAge?: Maybe<Scalars['String']>;
  requiredProfession?: Maybe<Scalars['String']>;
  requiredSkills?: Maybe<Scalars['String']>;
  seatNum?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  supportProvider?: Maybe<Scalars['String']>;
  taskDetails?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TaskInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  benefitDetails?: InputMaybe<Scalars['String']>;
  campaignId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  enrollmentType?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDisaAvailable?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['String']>;
  isRemote?: InputMaybe<Scalars['String']>;
  isUrgent?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  needsInterview?: InputMaybe<Scalars['String']>;
  reasonToPay?: InputMaybe<Scalars['String']>;
  requiredAge?: InputMaybe<Scalars['String']>;
  requiredProfession?: InputMaybe<Scalars['String']>;
  requiredSkills?: InputMaybe<Scalars['String']>;
  seatNum?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  supportProvider?: InputMaybe<Scalars['String']>;
  taskDetails?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type TaskQueryInput = {
  AND?: InputMaybe<Array<TaskQueryInput>>;
  OR?: InputMaybe<Array<TaskQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  benefitDetails?: InputMaybe<Scalars['String']>;
  benefitDetails_exists?: InputMaybe<Scalars['Boolean']>;
  benefitDetails_gt?: InputMaybe<Scalars['String']>;
  benefitDetails_gte?: InputMaybe<Scalars['String']>;
  benefitDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  benefitDetails_lt?: InputMaybe<Scalars['String']>;
  benefitDetails_lte?: InputMaybe<Scalars['String']>;
  benefitDetails_ne?: InputMaybe<Scalars['String']>;
  benefitDetails_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId?: InputMaybe<Scalars['String']>;
  campaignId_exists?: InputMaybe<Scalars['Boolean']>;
  campaignId_gt?: InputMaybe<Scalars['String']>;
  campaignId_gte?: InputMaybe<Scalars['String']>;
  campaignId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaignId_lt?: InputMaybe<Scalars['String']>;
  campaignId_lte?: InputMaybe<Scalars['String']>;
  campaignId_ne?: InputMaybe<Scalars['String']>;
  campaignId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']>;
  endDate_gt?: InputMaybe<Scalars['String']>;
  endDate_gte?: InputMaybe<Scalars['String']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_lt?: InputMaybe<Scalars['String']>;
  endDate_lte?: InputMaybe<Scalars['String']>;
  endDate_ne?: InputMaybe<Scalars['String']>;
  endDate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enrollmentType?: InputMaybe<Scalars['String']>;
  enrollmentType_exists?: InputMaybe<Scalars['Boolean']>;
  enrollmentType_gt?: InputMaybe<Scalars['String']>;
  enrollmentType_gte?: InputMaybe<Scalars['String']>;
  enrollmentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enrollmentType_lt?: InputMaybe<Scalars['String']>;
  enrollmentType_lte?: InputMaybe<Scalars['String']>;
  enrollmentType_ne?: InputMaybe<Scalars['String']>;
  enrollmentType_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender?: InputMaybe<Scalars['String']>;
  gender_exists?: InputMaybe<Scalars['Boolean']>;
  gender_gt?: InputMaybe<Scalars['String']>;
  gender_gte?: InputMaybe<Scalars['String']>;
  gender_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender_lt?: InputMaybe<Scalars['String']>;
  gender_lte?: InputMaybe<Scalars['String']>;
  gender_ne?: InputMaybe<Scalars['String']>;
  gender_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDisaAvailable?: InputMaybe<Scalars['String']>;
  isDisaAvailable_exists?: InputMaybe<Scalars['Boolean']>;
  isDisaAvailable_gt?: InputMaybe<Scalars['String']>;
  isDisaAvailable_gte?: InputMaybe<Scalars['String']>;
  isDisaAvailable_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDisaAvailable_lt?: InputMaybe<Scalars['String']>;
  isDisaAvailable_lte?: InputMaybe<Scalars['String']>;
  isDisaAvailable_ne?: InputMaybe<Scalars['String']>;
  isDisaAvailable_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_exists?: InputMaybe<Scalars['Boolean']>;
  isPublished_gt?: InputMaybe<Scalars['String']>;
  isPublished_gte?: InputMaybe<Scalars['String']>;
  isPublished_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isPublished_lt?: InputMaybe<Scalars['String']>;
  isPublished_lte?: InputMaybe<Scalars['String']>;
  isPublished_ne?: InputMaybe<Scalars['String']>;
  isPublished_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isRemote?: InputMaybe<Scalars['String']>;
  isRemote_exists?: InputMaybe<Scalars['Boolean']>;
  isRemote_gt?: InputMaybe<Scalars['String']>;
  isRemote_gte?: InputMaybe<Scalars['String']>;
  isRemote_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isRemote_lt?: InputMaybe<Scalars['String']>;
  isRemote_lte?: InputMaybe<Scalars['String']>;
  isRemote_ne?: InputMaybe<Scalars['String']>;
  isRemote_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isUrgent?: InputMaybe<Scalars['String']>;
  isUrgent_exists?: InputMaybe<Scalars['Boolean']>;
  isUrgent_gt?: InputMaybe<Scalars['String']>;
  isUrgent_gte?: InputMaybe<Scalars['String']>;
  isUrgent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isUrgent_lt?: InputMaybe<Scalars['String']>;
  isUrgent_lte?: InputMaybe<Scalars['String']>;
  isUrgent_ne?: InputMaybe<Scalars['String']>;
  isUrgent_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job?: InputMaybe<Scalars['String']>;
  job_exists?: InputMaybe<Scalars['Boolean']>;
  job_gt?: InputMaybe<Scalars['String']>;
  job_gte?: InputMaybe<Scalars['String']>;
  job_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  job_lt?: InputMaybe<Scalars['String']>;
  job_lte?: InputMaybe<Scalars['String']>;
  job_ne?: InputMaybe<Scalars['String']>;
  job_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  needsInterview?: InputMaybe<Scalars['String']>;
  needsInterview_exists?: InputMaybe<Scalars['Boolean']>;
  needsInterview_gt?: InputMaybe<Scalars['String']>;
  needsInterview_gte?: InputMaybe<Scalars['String']>;
  needsInterview_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  needsInterview_lt?: InputMaybe<Scalars['String']>;
  needsInterview_lte?: InputMaybe<Scalars['String']>;
  needsInterview_ne?: InputMaybe<Scalars['String']>;
  needsInterview_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reasonToPay?: InputMaybe<Scalars['String']>;
  reasonToPay_exists?: InputMaybe<Scalars['Boolean']>;
  reasonToPay_gt?: InputMaybe<Scalars['String']>;
  reasonToPay_gte?: InputMaybe<Scalars['String']>;
  reasonToPay_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reasonToPay_lt?: InputMaybe<Scalars['String']>;
  reasonToPay_lte?: InputMaybe<Scalars['String']>;
  reasonToPay_ne?: InputMaybe<Scalars['String']>;
  reasonToPay_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredAge?: InputMaybe<Scalars['String']>;
  requiredAge_exists?: InputMaybe<Scalars['Boolean']>;
  requiredAge_gt?: InputMaybe<Scalars['String']>;
  requiredAge_gte?: InputMaybe<Scalars['String']>;
  requiredAge_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredAge_lt?: InputMaybe<Scalars['String']>;
  requiredAge_lte?: InputMaybe<Scalars['String']>;
  requiredAge_ne?: InputMaybe<Scalars['String']>;
  requiredAge_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredProfession?: InputMaybe<Scalars['String']>;
  requiredProfession_exists?: InputMaybe<Scalars['Boolean']>;
  requiredProfession_gt?: InputMaybe<Scalars['String']>;
  requiredProfession_gte?: InputMaybe<Scalars['String']>;
  requiredProfession_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredProfession_lt?: InputMaybe<Scalars['String']>;
  requiredProfession_lte?: InputMaybe<Scalars['String']>;
  requiredProfession_ne?: InputMaybe<Scalars['String']>;
  requiredProfession_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredSkills?: InputMaybe<Scalars['String']>;
  requiredSkills_exists?: InputMaybe<Scalars['Boolean']>;
  requiredSkills_gt?: InputMaybe<Scalars['String']>;
  requiredSkills_gte?: InputMaybe<Scalars['String']>;
  requiredSkills_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  requiredSkills_lt?: InputMaybe<Scalars['String']>;
  requiredSkills_lte?: InputMaybe<Scalars['String']>;
  requiredSkills_ne?: InputMaybe<Scalars['String']>;
  requiredSkills_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seatNum?: InputMaybe<Scalars['String']>;
  seatNum_exists?: InputMaybe<Scalars['Boolean']>;
  seatNum_gt?: InputMaybe<Scalars['String']>;
  seatNum_gte?: InputMaybe<Scalars['String']>;
  seatNum_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seatNum_lt?: InputMaybe<Scalars['String']>;
  seatNum_lte?: InputMaybe<Scalars['String']>;
  seatNum_ne?: InputMaybe<Scalars['String']>;
  seatNum_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['String']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']>;
  startDate_gt?: InputMaybe<Scalars['String']>;
  startDate_gte?: InputMaybe<Scalars['String']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate_lt?: InputMaybe<Scalars['String']>;
  startDate_lte?: InputMaybe<Scalars['String']>;
  startDate_ne?: InputMaybe<Scalars['String']>;
  startDate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportProvider?: InputMaybe<Scalars['String']>;
  supportProvider_exists?: InputMaybe<Scalars['Boolean']>;
  supportProvider_gt?: InputMaybe<Scalars['String']>;
  supportProvider_gte?: InputMaybe<Scalars['String']>;
  supportProvider_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supportProvider_lt?: InputMaybe<Scalars['String']>;
  supportProvider_lte?: InputMaybe<Scalars['String']>;
  supportProvider_ne?: InputMaybe<Scalars['String']>;
  supportProvider_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskDetails?: InputMaybe<Scalars['String']>;
  taskDetails_exists?: InputMaybe<Scalars['Boolean']>;
  taskDetails_gt?: InputMaybe<Scalars['String']>;
  taskDetails_gte?: InputMaybe<Scalars['String']>;
  taskDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskDetails_lt?: InputMaybe<Scalars['String']>;
  taskDetails_lte?: InputMaybe<Scalars['String']>;
  taskDetails_ne?: InputMaybe<Scalars['String']>;
  taskDetails_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskId?: InputMaybe<Scalars['String']>;
  taskId_exists?: InputMaybe<Scalars['Boolean']>;
  taskId_gt?: InputMaybe<Scalars['String']>;
  taskId_gte?: InputMaybe<Scalars['String']>;
  taskId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskId_lt?: InputMaybe<Scalars['String']>;
  taskId_lte?: InputMaybe<Scalars['String']>;
  taskId_ne?: InputMaybe<Scalars['String']>;
  taskId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum TaskSortByInput {
  BenefitdetailsAsc = 'BENEFITDETAILS_ASC',
  BenefitdetailsDesc = 'BENEFITDETAILS_DESC',
  CampaignidAsc = 'CAMPAIGNID_ASC',
  CampaignidDesc = 'CAMPAIGNID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  EnddateAsc = 'ENDDATE_ASC',
  EnddateDesc = 'ENDDATE_DESC',
  EnrollmenttypeAsc = 'ENROLLMENTTYPE_ASC',
  EnrollmenttypeDesc = 'ENROLLMENTTYPE_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  IsdisaavailableAsc = 'ISDISAAVAILABLE_ASC',
  IsdisaavailableDesc = 'ISDISAAVAILABLE_DESC',
  IspublishedAsc = 'ISPUBLISHED_ASC',
  IspublishedDesc = 'ISPUBLISHED_DESC',
  IsremoteAsc = 'ISREMOTE_ASC',
  IsremoteDesc = 'ISREMOTE_DESC',
  IsurgentAsc = 'ISURGENT_ASC',
  IsurgentDesc = 'ISURGENT_DESC',
  JobAsc = 'JOB_ASC',
  JobDesc = 'JOB_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NeedsinterviewAsc = 'NEEDSINTERVIEW_ASC',
  NeedsinterviewDesc = 'NEEDSINTERVIEW_DESC',
  ReasontopayAsc = 'REASONTOPAY_ASC',
  ReasontopayDesc = 'REASONTOPAY_DESC',
  RequiredageAsc = 'REQUIREDAGE_ASC',
  RequiredageDesc = 'REQUIREDAGE_DESC',
  RequiredprofessionAsc = 'REQUIREDPROFESSION_ASC',
  RequiredprofessionDesc = 'REQUIREDPROFESSION_DESC',
  RequiredskillsAsc = 'REQUIREDSKILLS_ASC',
  RequiredskillsDesc = 'REQUIREDSKILLS_DESC',
  SeatnumAsc = 'SEATNUM_ASC',
  SeatnumDesc = 'SEATNUM_DESC',
  StartdateAsc = 'STARTDATE_ASC',
  StartdateDesc = 'STARTDATE_DESC',
  SupportproviderAsc = 'SUPPORTPROVIDER_ASC',
  SupportproviderDesc = 'SUPPORTPROVIDER_DESC',
  TaskdetailsAsc = 'TASKDETAILS_ASC',
  TaskdetailsDesc = 'TASKDETAILS_DESC',
  TaskidAsc = 'TASKID_ASC',
  TaskidDesc = 'TASKID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TaskUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  benefitDetails?: InputMaybe<Scalars['String']>;
  benefitDetails_unset?: InputMaybe<Scalars['Boolean']>;
  campaignId?: InputMaybe<Scalars['String']>;
  campaignId_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_unset?: InputMaybe<Scalars['Boolean']>;
  enrollmentType?: InputMaybe<Scalars['String']>;
  enrollmentType_unset?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<Scalars['String']>;
  gender_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  isDisaAvailable?: InputMaybe<Scalars['String']>;
  isDisaAvailable_unset?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['String']>;
  isPublished_unset?: InputMaybe<Scalars['Boolean']>;
  isRemote?: InputMaybe<Scalars['String']>;
  isRemote_unset?: InputMaybe<Scalars['Boolean']>;
  isUrgent?: InputMaybe<Scalars['String']>;
  isUrgent_unset?: InputMaybe<Scalars['Boolean']>;
  job?: InputMaybe<Scalars['String']>;
  job_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  needsInterview?: InputMaybe<Scalars['String']>;
  needsInterview_unset?: InputMaybe<Scalars['Boolean']>;
  reasonToPay?: InputMaybe<Scalars['String']>;
  reasonToPay_unset?: InputMaybe<Scalars['Boolean']>;
  requiredAge?: InputMaybe<Scalars['String']>;
  requiredAge_unset?: InputMaybe<Scalars['Boolean']>;
  requiredProfession?: InputMaybe<Scalars['String']>;
  requiredProfession_unset?: InputMaybe<Scalars['Boolean']>;
  requiredSkills?: InputMaybe<Scalars['String']>;
  requiredSkills_unset?: InputMaybe<Scalars['Boolean']>;
  seatNum?: InputMaybe<Scalars['String']>;
  seatNum_unset?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['String']>;
  startDate_unset?: InputMaybe<Scalars['Boolean']>;
  supportProvider?: InputMaybe<Scalars['String']>;
  supportProvider_unset?: InputMaybe<Scalars['Boolean']>;
  taskDetails?: InputMaybe<Scalars['String']>;
  taskDetails_unset?: InputMaybe<Scalars['Boolean']>;
  taskId?: InputMaybe<Scalars['String']>;
  taskId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TestRaise = {
  __typename?: 'TestRaise';
  _id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type TestRaiseInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type TestRaiseQueryInput = {
  AND?: InputMaybe<Array<TestRaiseQueryInput>>;
  OR?: InputMaybe<Array<TestRaiseQueryInput>>;
  _id?: InputMaybe<Scalars['String']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['String']>;
  _id_gte?: InputMaybe<Scalars['String']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_lt?: InputMaybe<Scalars['String']>;
  _id_lte?: InputMaybe<Scalars['String']>;
  _id_ne?: InputMaybe<Scalars['String']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password?: InputMaybe<Scalars['String']>;
  password_exists?: InputMaybe<Scalars['Boolean']>;
  password_gt?: InputMaybe<Scalars['String']>;
  password_gte?: InputMaybe<Scalars['String']>;
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password_lt?: InputMaybe<Scalars['String']>;
  password_lte?: InputMaybe<Scalars['String']>;
  password_ne?: InputMaybe<Scalars['String']>;
  password_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum TestRaiseSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TestRaiseUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  password_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TicketLog = {
  __typename?: 'TicketLog';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['String']>;
  resolvedBy?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  ticketId?: Maybe<Scalars['String']>;
  ticketLogId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TicketLogInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  createdAt?: InputMaybe<Scalars['String']>;
  resolvedBy?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  ticketId?: InputMaybe<Scalars['String']>;
  ticketLogId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type TicketLogQueryInput = {
  AND?: InputMaybe<Array<TicketLogQueryInput>>;
  OR?: InputMaybe<Array<TicketLogQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  resolvedBy?: InputMaybe<Scalars['String']>;
  resolvedBy_exists?: InputMaybe<Scalars['Boolean']>;
  resolvedBy_gt?: InputMaybe<Scalars['String']>;
  resolvedBy_gte?: InputMaybe<Scalars['String']>;
  resolvedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  resolvedBy_lt?: InputMaybe<Scalars['String']>;
  resolvedBy_lte?: InputMaybe<Scalars['String']>;
  resolvedBy_ne?: InputMaybe<Scalars['String']>;
  resolvedBy_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
  status_exists?: InputMaybe<Scalars['Boolean']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_ne?: InputMaybe<Scalars['String']>;
  status_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ticketId?: InputMaybe<Scalars['String']>;
  ticketId_exists?: InputMaybe<Scalars['Boolean']>;
  ticketId_gt?: InputMaybe<Scalars['String']>;
  ticketId_gte?: InputMaybe<Scalars['String']>;
  ticketId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ticketId_lt?: InputMaybe<Scalars['String']>;
  ticketId_lte?: InputMaybe<Scalars['String']>;
  ticketId_ne?: InputMaybe<Scalars['String']>;
  ticketId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ticketLogId?: InputMaybe<Scalars['String']>;
  ticketLogId_exists?: InputMaybe<Scalars['Boolean']>;
  ticketLogId_gt?: InputMaybe<Scalars['String']>;
  ticketLogId_gte?: InputMaybe<Scalars['String']>;
  ticketLogId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ticketLogId_lt?: InputMaybe<Scalars['String']>;
  ticketLogId_lte?: InputMaybe<Scalars['String']>;
  ticketLogId_ne?: InputMaybe<Scalars['String']>;
  ticketLogId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum TicketLogSortByInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  ResolvedbyAsc = 'RESOLVEDBY_ASC',
  ResolvedbyDesc = 'RESOLVEDBY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TicketidAsc = 'TICKETID_ASC',
  TicketidDesc = 'TICKETID_DESC',
  TicketlogidAsc = 'TICKETLOGID_ASC',
  TicketlogidDesc = 'TICKETLOGID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TicketLogUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  resolvedBy?: InputMaybe<Scalars['String']>;
  resolvedBy_unset?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  status_unset?: InputMaybe<Scalars['Boolean']>;
  ticketId?: InputMaybe<Scalars['String']>;
  ticketId_unset?: InputMaybe<Scalars['Boolean']>;
  ticketLogId?: InputMaybe<Scalars['String']>;
  ticketLogId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TmraInfo = {
  __typename?: 'TmraInfo';
  _id?: Maybe<Scalars['ObjectId']>;
  defaultIconGoal1?: Maybe<Scalars['String']>;
  defaultIconGoal2?: Maybe<Scalars['String']>;
  defaultIconGoal3?: Maybe<Scalars['String']>;
  defaultIconGoal4?: Maybe<Scalars['String']>;
  defaultIconGoal5?: Maybe<Scalars['String']>;
  defaultIconGoal6?: Maybe<Scalars['String']>;
  donationTypeImage1?: Maybe<Scalars['String']>;
  donationTypeImage2?: Maybe<Scalars['String']>;
  donationTypeImage3?: Maybe<Scalars['String']>;
  donationTypeImage4?: Maybe<Scalars['String']>;
  donationTypeImage5?: Maybe<Scalars['String']>;
  donationTypeImage6?: Maybe<Scalars['String']>;
  donationTypeTitle1?: Maybe<Scalars['String']>;
  donationTypeTitle2?: Maybe<Scalars['String']>;
  donationTypeTitle3?: Maybe<Scalars['String']>;
  donationTypeTitle4?: Maybe<Scalars['String']>;
  donationTypeTitle5?: Maybe<Scalars['String']>;
  donationTypeTitle6?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ourGoal1?: Maybe<Scalars['String']>;
  ourGoal2?: Maybe<Scalars['String']>;
  ourGoal3?: Maybe<Scalars['String']>;
  ourGoal4?: Maybe<Scalars['String']>;
  ourGoal5?: Maybe<Scalars['String']>;
  ourGoal6?: Maybe<Scalars['String']>;
  ourMissionDetail?: Maybe<Scalars['String']>;
  ourStoryDesc?: Maybe<Scalars['String']>;
  ourValue1?: Maybe<Scalars['String']>;
  ourValue2?: Maybe<Scalars['String']>;
  ourValue3?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
};

export type TmraInfoInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue3?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type TmraInfoQueryInput = {
  AND?: InputMaybe<Array<TmraInfoQueryInput>>;
  OR?: InputMaybe<Array<TmraInfoQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal1_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal1_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal2_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal2_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal3_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal3_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal4_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal4_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal5_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal5_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_exists?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal6_gt?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_gte?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultIconGoal6_lt?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_lte?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_ne?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage1_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage1_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage1_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage1_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage1_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage1_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage2_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage2_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage2_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage2_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage2_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage2_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage3_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage3_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage3_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage3_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage3_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage3_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage4_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage4_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage4_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage4_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage4_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage4_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage5_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage5_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage5_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage5_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage5_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage5_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeImage6_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage6_gt?: InputMaybe<Scalars['String']>;
  donationTypeImage6_gte?: InputMaybe<Scalars['String']>;
  donationTypeImage6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeImage6_lt?: InputMaybe<Scalars['String']>;
  donationTypeImage6_lte?: InputMaybe<Scalars['String']>;
  donationTypeImage6_ne?: InputMaybe<Scalars['String']>;
  donationTypeImage6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle1_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle1_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle2_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle2_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle3_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle3_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle4_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle4_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle5_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle5_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_exists?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle6_gt?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_gte?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donationTypeTitle6_lt?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_lte?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_ne?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal1_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal1_gt?: InputMaybe<Scalars['String']>;
  ourGoal1_gte?: InputMaybe<Scalars['String']>;
  ourGoal1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal1_lt?: InputMaybe<Scalars['String']>;
  ourGoal1_lte?: InputMaybe<Scalars['String']>;
  ourGoal1_ne?: InputMaybe<Scalars['String']>;
  ourGoal1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal2_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal2_gt?: InputMaybe<Scalars['String']>;
  ourGoal2_gte?: InputMaybe<Scalars['String']>;
  ourGoal2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal2_lt?: InputMaybe<Scalars['String']>;
  ourGoal2_lte?: InputMaybe<Scalars['String']>;
  ourGoal2_ne?: InputMaybe<Scalars['String']>;
  ourGoal2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal3_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal3_gt?: InputMaybe<Scalars['String']>;
  ourGoal3_gte?: InputMaybe<Scalars['String']>;
  ourGoal3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal3_lt?: InputMaybe<Scalars['String']>;
  ourGoal3_lte?: InputMaybe<Scalars['String']>;
  ourGoal3_ne?: InputMaybe<Scalars['String']>;
  ourGoal3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal4_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal4_gt?: InputMaybe<Scalars['String']>;
  ourGoal4_gte?: InputMaybe<Scalars['String']>;
  ourGoal4_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal4_lt?: InputMaybe<Scalars['String']>;
  ourGoal4_lte?: InputMaybe<Scalars['String']>;
  ourGoal4_ne?: InputMaybe<Scalars['String']>;
  ourGoal4_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal5_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal5_gt?: InputMaybe<Scalars['String']>;
  ourGoal5_gte?: InputMaybe<Scalars['String']>;
  ourGoal5_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal5_lt?: InputMaybe<Scalars['String']>;
  ourGoal5_lte?: InputMaybe<Scalars['String']>;
  ourGoal5_ne?: InputMaybe<Scalars['String']>;
  ourGoal5_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourGoal6_exists?: InputMaybe<Scalars['Boolean']>;
  ourGoal6_gt?: InputMaybe<Scalars['String']>;
  ourGoal6_gte?: InputMaybe<Scalars['String']>;
  ourGoal6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourGoal6_lt?: InputMaybe<Scalars['String']>;
  ourGoal6_lte?: InputMaybe<Scalars['String']>;
  ourGoal6_ne?: InputMaybe<Scalars['String']>;
  ourGoal6_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourMissionDetail_exists?: InputMaybe<Scalars['Boolean']>;
  ourMissionDetail_gt?: InputMaybe<Scalars['String']>;
  ourMissionDetail_gte?: InputMaybe<Scalars['String']>;
  ourMissionDetail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourMissionDetail_lt?: InputMaybe<Scalars['String']>;
  ourMissionDetail_lte?: InputMaybe<Scalars['String']>;
  ourMissionDetail_ne?: InputMaybe<Scalars['String']>;
  ourMissionDetail_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourStoryDesc_exists?: InputMaybe<Scalars['Boolean']>;
  ourStoryDesc_gt?: InputMaybe<Scalars['String']>;
  ourStoryDesc_gte?: InputMaybe<Scalars['String']>;
  ourStoryDesc_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourStoryDesc_lt?: InputMaybe<Scalars['String']>;
  ourStoryDesc_lte?: InputMaybe<Scalars['String']>;
  ourStoryDesc_ne?: InputMaybe<Scalars['String']>;
  ourStoryDesc_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue1_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue1_gt?: InputMaybe<Scalars['String']>;
  ourValue1_gte?: InputMaybe<Scalars['String']>;
  ourValue1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue1_lt?: InputMaybe<Scalars['String']>;
  ourValue1_lte?: InputMaybe<Scalars['String']>;
  ourValue1_ne?: InputMaybe<Scalars['String']>;
  ourValue1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue2_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue2_gt?: InputMaybe<Scalars['String']>;
  ourValue2_gte?: InputMaybe<Scalars['String']>;
  ourValue2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue2_lt?: InputMaybe<Scalars['String']>;
  ourValue2_lte?: InputMaybe<Scalars['String']>;
  ourValue2_ne?: InputMaybe<Scalars['String']>;
  ourValue2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ourValue3_exists?: InputMaybe<Scalars['Boolean']>;
  ourValue3_gt?: InputMaybe<Scalars['String']>;
  ourValue3_gte?: InputMaybe<Scalars['String']>;
  ourValue3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ourValue3_lt?: InputMaybe<Scalars['String']>;
  ourValue3_lte?: InputMaybe<Scalars['String']>;
  ourValue3_ne?: InputMaybe<Scalars['String']>;
  ourValue3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_gt?: InputMaybe<Scalars['String']>;
  phoneNumber_gte?: InputMaybe<Scalars['String']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_lt?: InputMaybe<Scalars['String']>;
  phoneNumber_lte?: InputMaybe<Scalars['String']>;
  phoneNumber_ne?: InputMaybe<Scalars['String']>;
  phoneNumber_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_exists?: InputMaybe<Scalars['Boolean']>;
  whatsapp_gt?: InputMaybe<Scalars['String']>;
  whatsapp_gte?: InputMaybe<Scalars['String']>;
  whatsapp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatsapp_lt?: InputMaybe<Scalars['String']>;
  whatsapp_lte?: InputMaybe<Scalars['String']>;
  whatsapp_ne?: InputMaybe<Scalars['String']>;
  whatsapp_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum TmraInfoSortByInput {
  Defaulticongoal1Asc = 'DEFAULTICONGOAL1_ASC',
  Defaulticongoal1Desc = 'DEFAULTICONGOAL1_DESC',
  Defaulticongoal2Asc = 'DEFAULTICONGOAL2_ASC',
  Defaulticongoal2Desc = 'DEFAULTICONGOAL2_DESC',
  Defaulticongoal3Asc = 'DEFAULTICONGOAL3_ASC',
  Defaulticongoal3Desc = 'DEFAULTICONGOAL3_DESC',
  Defaulticongoal4Asc = 'DEFAULTICONGOAL4_ASC',
  Defaulticongoal4Desc = 'DEFAULTICONGOAL4_DESC',
  Defaulticongoal5Asc = 'DEFAULTICONGOAL5_ASC',
  Defaulticongoal5Desc = 'DEFAULTICONGOAL5_DESC',
  Defaulticongoal6Asc = 'DEFAULTICONGOAL6_ASC',
  Defaulticongoal6Desc = 'DEFAULTICONGOAL6_DESC',
  Donationtypeimage1Asc = 'DONATIONTYPEIMAGE1_ASC',
  Donationtypeimage1Desc = 'DONATIONTYPEIMAGE1_DESC',
  Donationtypeimage2Asc = 'DONATIONTYPEIMAGE2_ASC',
  Donationtypeimage2Desc = 'DONATIONTYPEIMAGE2_DESC',
  Donationtypeimage3Asc = 'DONATIONTYPEIMAGE3_ASC',
  Donationtypeimage3Desc = 'DONATIONTYPEIMAGE3_DESC',
  Donationtypeimage4Asc = 'DONATIONTYPEIMAGE4_ASC',
  Donationtypeimage4Desc = 'DONATIONTYPEIMAGE4_DESC',
  Donationtypeimage5Asc = 'DONATIONTYPEIMAGE5_ASC',
  Donationtypeimage5Desc = 'DONATIONTYPEIMAGE5_DESC',
  Donationtypeimage6Asc = 'DONATIONTYPEIMAGE6_ASC',
  Donationtypeimage6Desc = 'DONATIONTYPEIMAGE6_DESC',
  Donationtypetitle1Asc = 'DONATIONTYPETITLE1_ASC',
  Donationtypetitle1Desc = 'DONATIONTYPETITLE1_DESC',
  Donationtypetitle2Asc = 'DONATIONTYPETITLE2_ASC',
  Donationtypetitle2Desc = 'DONATIONTYPETITLE2_DESC',
  Donationtypetitle3Asc = 'DONATIONTYPETITLE3_ASC',
  Donationtypetitle3Desc = 'DONATIONTYPETITLE3_DESC',
  Donationtypetitle4Asc = 'DONATIONTYPETITLE4_ASC',
  Donationtypetitle4Desc = 'DONATIONTYPETITLE4_DESC',
  Donationtypetitle5Asc = 'DONATIONTYPETITLE5_ASC',
  Donationtypetitle5Desc = 'DONATIONTYPETITLE5_DESC',
  Donationtypetitle6Asc = 'DONATIONTYPETITLE6_ASC',
  Donationtypetitle6Desc = 'DONATIONTYPETITLE6_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Ourgoal1Asc = 'OURGOAL1_ASC',
  Ourgoal1Desc = 'OURGOAL1_DESC',
  Ourgoal2Asc = 'OURGOAL2_ASC',
  Ourgoal2Desc = 'OURGOAL2_DESC',
  Ourgoal3Asc = 'OURGOAL3_ASC',
  Ourgoal3Desc = 'OURGOAL3_DESC',
  Ourgoal4Asc = 'OURGOAL4_ASC',
  Ourgoal4Desc = 'OURGOAL4_DESC',
  Ourgoal5Asc = 'OURGOAL5_ASC',
  Ourgoal5Desc = 'OURGOAL5_DESC',
  Ourgoal6Asc = 'OURGOAL6_ASC',
  Ourgoal6Desc = 'OURGOAL6_DESC',
  OurmissiondetailAsc = 'OURMISSIONDETAIL_ASC',
  OurmissiondetailDesc = 'OURMISSIONDETAIL_DESC',
  OurstorydescAsc = 'OURSTORYDESC_ASC',
  OurstorydescDesc = 'OURSTORYDESC_DESC',
  Ourvalue1Asc = 'OURVALUE1_ASC',
  Ourvalue1Desc = 'OURVALUE1_DESC',
  Ourvalue2Asc = 'OURVALUE2_ASC',
  Ourvalue2Desc = 'OURVALUE2_DESC',
  Ourvalue3Asc = 'OURVALUE3_ASC',
  Ourvalue3Desc = 'OURVALUE3_DESC',
  PhonenumberAsc = 'PHONENUMBER_ASC',
  PhonenumberDesc = 'PHONENUMBER_DESC',
  WhatsappAsc = 'WHATSAPP_ASC',
  WhatsappDesc = 'WHATSAPP_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TmraInfoUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal1?: InputMaybe<Scalars['String']>;
  defaultIconGoal1_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal2?: InputMaybe<Scalars['String']>;
  defaultIconGoal2_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal3?: InputMaybe<Scalars['String']>;
  defaultIconGoal3_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal4?: InputMaybe<Scalars['String']>;
  defaultIconGoal4_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal5?: InputMaybe<Scalars['String']>;
  defaultIconGoal5_unset?: InputMaybe<Scalars['Boolean']>;
  defaultIconGoal6?: InputMaybe<Scalars['String']>;
  defaultIconGoal6_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage1?: InputMaybe<Scalars['String']>;
  donationTypeImage1_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage2?: InputMaybe<Scalars['String']>;
  donationTypeImage2_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage3?: InputMaybe<Scalars['String']>;
  donationTypeImage3_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage4?: InputMaybe<Scalars['String']>;
  donationTypeImage4_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage5?: InputMaybe<Scalars['String']>;
  donationTypeImage5_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeImage6?: InputMaybe<Scalars['String']>;
  donationTypeImage6_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle1?: InputMaybe<Scalars['String']>;
  donationTypeTitle1_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle2?: InputMaybe<Scalars['String']>;
  donationTypeTitle2_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle3?: InputMaybe<Scalars['String']>;
  donationTypeTitle3_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle4?: InputMaybe<Scalars['String']>;
  donationTypeTitle4_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle5?: InputMaybe<Scalars['String']>;
  donationTypeTitle5_unset?: InputMaybe<Scalars['Boolean']>;
  donationTypeTitle6?: InputMaybe<Scalars['String']>;
  donationTypeTitle6_unset?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal1?: InputMaybe<Scalars['String']>;
  ourGoal1_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal2?: InputMaybe<Scalars['String']>;
  ourGoal2_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal3?: InputMaybe<Scalars['String']>;
  ourGoal3_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal4?: InputMaybe<Scalars['String']>;
  ourGoal4_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal5?: InputMaybe<Scalars['String']>;
  ourGoal5_unset?: InputMaybe<Scalars['Boolean']>;
  ourGoal6?: InputMaybe<Scalars['String']>;
  ourGoal6_unset?: InputMaybe<Scalars['Boolean']>;
  ourMissionDetail?: InputMaybe<Scalars['String']>;
  ourMissionDetail_unset?: InputMaybe<Scalars['Boolean']>;
  ourStoryDesc?: InputMaybe<Scalars['String']>;
  ourStoryDesc_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue1?: InputMaybe<Scalars['String']>;
  ourValue1_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue2?: InputMaybe<Scalars['String']>;
  ourValue2_unset?: InputMaybe<Scalars['Boolean']>;
  ourValue3?: InputMaybe<Scalars['String']>;
  ourValue3_unset?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_unset?: InputMaybe<Scalars['Boolean']>;
  whatsapp?: InputMaybe<Scalars['String']>;
  whatsapp_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type UploadImage = {
  currentPhoto?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  imageExtension?: InputMaybe<Scalars['String']>;
  imageName?: InputMaybe<Scalars['String']>;
  imagePrefix?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  profilPicture?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  profilPicture?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UserQueryInput = {
  AND?: InputMaybe<Array<UserQueryInput>>;
  OR?: InputMaybe<Array<UserQueryInput>>;
  _id?: InputMaybe<Scalars['String']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['String']>;
  _id_gte?: InputMaybe<Scalars['String']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_lt?: InputMaybe<Scalars['String']>;
  _id_lte?: InputMaybe<Scalars['String']>;
  _id_ne?: InputMaybe<Scalars['String']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_ne?: InputMaybe<Scalars['String']>;
  email_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_exists?: InputMaybe<Scalars['Boolean']>;
  firstname_gt?: InputMaybe<Scalars['String']>;
  firstname_gte?: InputMaybe<Scalars['String']>;
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstname_lt?: InputMaybe<Scalars['String']>;
  firstname_lte?: InputMaybe<Scalars['String']>;
  firstname_ne?: InputMaybe<Scalars['String']>;
  firstname_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_exists?: InputMaybe<Scalars['Boolean']>;
  lastname_gt?: InputMaybe<Scalars['String']>;
  lastname_gte?: InputMaybe<Scalars['String']>;
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastname_lt?: InputMaybe<Scalars['String']>;
  lastname_lte?: InputMaybe<Scalars['String']>;
  lastname_ne?: InputMaybe<Scalars['String']>;
  lastname_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilPicture?: InputMaybe<Scalars['String']>;
  profilPicture_exists?: InputMaybe<Scalars['Boolean']>;
  profilPicture_gt?: InputMaybe<Scalars['String']>;
  profilPicture_gte?: InputMaybe<Scalars['String']>;
  profilPicture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilPicture_lt?: InputMaybe<Scalars['String']>;
  profilPicture_lte?: InputMaybe<Scalars['String']>;
  profilPicture_ne?: InputMaybe<Scalars['String']>;
  profilPicture_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture?: InputMaybe<Scalars['String']>;
  profilePicture_exists?: InputMaybe<Scalars['Boolean']>;
  profilePicture_gt?: InputMaybe<Scalars['String']>;
  profilePicture_gte?: InputMaybe<Scalars['String']>;
  profilePicture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture_lt?: InputMaybe<Scalars['String']>;
  profilePicture_lte?: InputMaybe<Scalars['String']>;
  profilePicture_ne?: InputMaybe<Scalars['String']>;
  profilePicture_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum UserSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  ProfilepictureAsc = 'PROFILEPICTURE_ASC',
  ProfilepictureDesc = 'PROFILEPICTURE_DESC',
  ProfilpictureAsc = 'PROFILPICTURE_ASC',
  ProfilpictureDesc = 'PROFILPICTURE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UserUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  email_unset?: InputMaybe<Scalars['Boolean']>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_unset?: InputMaybe<Scalars['Boolean']>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_unset?: InputMaybe<Scalars['Boolean']>;
  profilPicture?: InputMaybe<Scalars['String']>;
  profilPicture_unset?: InputMaybe<Scalars['Boolean']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  profilePicture_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  _id?: Maybe<Scalars['ObjectId']>;
  channels?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerUserId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
};

export type VendorInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  channels?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  vendorId?: InputMaybe<Scalars['String']>;
};

export type VendorQueryInput = {
  AND?: InputMaybe<Array<VendorQueryInput>>;
  OR?: InputMaybe<Array<VendorQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  channels?: InputMaybe<Scalars['String']>;
  channels_exists?: InputMaybe<Scalars['Boolean']>;
  channels_gt?: InputMaybe<Scalars['String']>;
  channels_gte?: InputMaybe<Scalars['String']>;
  channels_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  channels_lt?: InputMaybe<Scalars['String']>;
  channels_lte?: InputMaybe<Scalars['String']>;
  channels_ne?: InputMaybe<Scalars['String']>;
  channels_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  coverImage_gt?: InputMaybe<Scalars['String']>;
  coverImage_gte?: InputMaybe<Scalars['String']>;
  coverImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage_lt?: InputMaybe<Scalars['String']>;
  coverImage_lte?: InputMaybe<Scalars['String']>;
  coverImage_ne?: InputMaybe<Scalars['String']>;
  coverImage_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1?: InputMaybe<Scalars['String']>;
  image1_exists?: InputMaybe<Scalars['Boolean']>;
  image1_gt?: InputMaybe<Scalars['String']>;
  image1_gte?: InputMaybe<Scalars['String']>;
  image1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1_lt?: InputMaybe<Scalars['String']>;
  image1_lte?: InputMaybe<Scalars['String']>;
  image1_ne?: InputMaybe<Scalars['String']>;
  image1_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2?: InputMaybe<Scalars['String']>;
  image2_exists?: InputMaybe<Scalars['Boolean']>;
  image2_gt?: InputMaybe<Scalars['String']>;
  image2_gte?: InputMaybe<Scalars['String']>;
  image2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2_lt?: InputMaybe<Scalars['String']>;
  image2_lte?: InputMaybe<Scalars['String']>;
  image2_ne?: InputMaybe<Scalars['String']>;
  image2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3?: InputMaybe<Scalars['String']>;
  image3_exists?: InputMaybe<Scalars['Boolean']>;
  image3_gt?: InputMaybe<Scalars['String']>;
  image3_gte?: InputMaybe<Scalars['String']>;
  image3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image3_lt?: InputMaybe<Scalars['String']>;
  image3_lte?: InputMaybe<Scalars['String']>;
  image3_ne?: InputMaybe<Scalars['String']>;
  image3_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_exists?: InputMaybe<Scalars['Boolean']>;
  isActive_gt?: InputMaybe<Scalars['String']>;
  isActive_gte?: InputMaybe<Scalars['String']>;
  isActive_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive_lt?: InputMaybe<Scalars['String']>;
  isActive_lte?: InputMaybe<Scalars['String']>;
  isActive_ne?: InputMaybe<Scalars['String']>;
  isActive_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_exists?: InputMaybe<Scalars['Boolean']>;
  ownerUserId_gt?: InputMaybe<Scalars['String']>;
  ownerUserId_gte?: InputMaybe<Scalars['String']>;
  ownerUserId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ownerUserId_lt?: InputMaybe<Scalars['String']>;
  ownerUserId_lte?: InputMaybe<Scalars['String']>;
  ownerUserId_ne?: InputMaybe<Scalars['String']>;
  ownerUserId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorId?: InputMaybe<Scalars['String']>;
  vendorId_exists?: InputMaybe<Scalars['Boolean']>;
  vendorId_gt?: InputMaybe<Scalars['String']>;
  vendorId_gte?: InputMaybe<Scalars['String']>;
  vendorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vendorId_lt?: InputMaybe<Scalars['String']>;
  vendorId_lte?: InputMaybe<Scalars['String']>;
  vendorId_ne?: InputMaybe<Scalars['String']>;
  vendorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum VendorSortByInput {
  ChannelsAsc = 'CHANNELS_ASC',
  ChannelsDesc = 'CHANNELS_DESC',
  CoverimageAsc = 'COVERIMAGE_ASC',
  CoverimageDesc = 'COVERIMAGE_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  Image1Asc = 'IMAGE1_ASC',
  Image1Desc = 'IMAGE1_DESC',
  Image2Asc = 'IMAGE2_ASC',
  Image2Desc = 'IMAGE2_DESC',
  Image3Asc = 'IMAGE3_ASC',
  Image3Desc = 'IMAGE3_DESC',
  IsactiveAsc = 'ISACTIVE_ASC',
  IsactiveDesc = 'ISACTIVE_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OwneruseridAsc = 'OWNERUSERID_ASC',
  OwneruseridDesc = 'OWNERUSERID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  VendoridAsc = 'VENDORID_ASC',
  VendoridDesc = 'VENDORID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type VendorUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  channels?: InputMaybe<Scalars['String']>;
  channels_unset?: InputMaybe<Scalars['Boolean']>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImage_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  image1?: InputMaybe<Scalars['String']>;
  image1_unset?: InputMaybe<Scalars['Boolean']>;
  image2?: InputMaybe<Scalars['String']>;
  image2_unset?: InputMaybe<Scalars['Boolean']>;
  image3?: InputMaybe<Scalars['String']>;
  image3_unset?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  ownerUserId?: InputMaybe<Scalars['String']>;
  ownerUserId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
  vendorId?: InputMaybe<Scalars['String']>;
  vendorId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Volunteer = {
  __typename?: 'Volunteer';
  _id?: Maybe<Scalars['ObjectId']>;
  abilities?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  donorId?: Maybe<Scalars['String']>;
  freeTime?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  volunteerId?: Maybe<Scalars['String']>;
};

export type VolunteerInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  abilities?: InputMaybe<Scalars['String']>;
  channel?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  donorId?: InputMaybe<Scalars['String']>;
  freeTime?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  volunteerId?: InputMaybe<Scalars['String']>;
};

export type VolunteerQueryInput = {
  AND?: InputMaybe<Array<VolunteerQueryInput>>;
  OR?: InputMaybe<Array<VolunteerQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  abilities?: InputMaybe<Scalars['String']>;
  abilities_exists?: InputMaybe<Scalars['Boolean']>;
  abilities_gt?: InputMaybe<Scalars['String']>;
  abilities_gte?: InputMaybe<Scalars['String']>;
  abilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  abilities_lt?: InputMaybe<Scalars['String']>;
  abilities_lte?: InputMaybe<Scalars['String']>;
  abilities_ne?: InputMaybe<Scalars['String']>;
  abilities_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  channel?: InputMaybe<Scalars['String']>;
  channel_exists?: InputMaybe<Scalars['Boolean']>;
  channel_gt?: InputMaybe<Scalars['String']>;
  channel_gte?: InputMaybe<Scalars['String']>;
  channel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  channel_lt?: InputMaybe<Scalars['String']>;
  channel_lte?: InputMaybe<Scalars['String']>;
  channel_ne?: InputMaybe<Scalars['String']>;
  channel_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  document?: InputMaybe<Scalars['String']>;
  document_exists?: InputMaybe<Scalars['Boolean']>;
  document_gt?: InputMaybe<Scalars['String']>;
  document_gte?: InputMaybe<Scalars['String']>;
  document_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  document_lt?: InputMaybe<Scalars['String']>;
  document_lte?: InputMaybe<Scalars['String']>;
  document_ne?: InputMaybe<Scalars['String']>;
  document_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorId?: InputMaybe<Scalars['String']>;
  donorId_exists?: InputMaybe<Scalars['Boolean']>;
  donorId_gt?: InputMaybe<Scalars['String']>;
  donorId_gte?: InputMaybe<Scalars['String']>;
  donorId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  donorId_lt?: InputMaybe<Scalars['String']>;
  donorId_lte?: InputMaybe<Scalars['String']>;
  donorId_ne?: InputMaybe<Scalars['String']>;
  donorId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  freeTime?: InputMaybe<Scalars['String']>;
  freeTime_exists?: InputMaybe<Scalars['Boolean']>;
  freeTime_gt?: InputMaybe<Scalars['String']>;
  freeTime_gte?: InputMaybe<Scalars['String']>;
  freeTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  freeTime_lt?: InputMaybe<Scalars['String']>;
  freeTime_lte?: InputMaybe<Scalars['String']>;
  freeTime_ne?: InputMaybe<Scalars['String']>;
  freeTime_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_exists?: InputMaybe<Scalars['Boolean']>;
  isActive_gt?: InputMaybe<Scalars['String']>;
  isActive_gte?: InputMaybe<Scalars['String']>;
  isActive_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive_lt?: InputMaybe<Scalars['String']>;
  isActive_lte?: InputMaybe<Scalars['String']>;
  isActive_ne?: InputMaybe<Scalars['String']>;
  isActive_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_exists?: InputMaybe<Scalars['Boolean']>;
  isDeleted_gt?: InputMaybe<Scalars['String']>;
  isDeleted_gte?: InputMaybe<Scalars['String']>;
  isDeleted_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDeleted_lt?: InputMaybe<Scalars['String']>;
  isDeleted_lte?: InputMaybe<Scalars['String']>;
  isDeleted_ne?: InputMaybe<Scalars['String']>;
  isDeleted_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_gt?: InputMaybe<Scalars['String']>;
  location_gte?: InputMaybe<Scalars['String']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_lt?: InputMaybe<Scalars['String']>;
  location_lte?: InputMaybe<Scalars['String']>;
  location_ne?: InputMaybe<Scalars['String']>;
  location_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volunteerId?: InputMaybe<Scalars['String']>;
  volunteerId_exists?: InputMaybe<Scalars['Boolean']>;
  volunteerId_gt?: InputMaybe<Scalars['String']>;
  volunteerId_gte?: InputMaybe<Scalars['String']>;
  volunteerId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volunteerId_lt?: InputMaybe<Scalars['String']>;
  volunteerId_lte?: InputMaybe<Scalars['String']>;
  volunteerId_ne?: InputMaybe<Scalars['String']>;
  volunteerId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum VolunteerSortByInput {
  AbilitiesAsc = 'ABILITIES_ASC',
  AbilitiesDesc = 'ABILITIES_DESC',
  ChannelAsc = 'CHANNEL_ASC',
  ChannelDesc = 'CHANNEL_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DocumentAsc = 'DOCUMENT_ASC',
  DocumentDesc = 'DOCUMENT_DESC',
  DonoridAsc = 'DONORID_ASC',
  DonoridDesc = 'DONORID_DESC',
  FreetimeAsc = 'FREETIME_ASC',
  FreetimeDesc = 'FREETIME_DESC',
  IsactiveAsc = 'ISACTIVE_ASC',
  IsactiveDesc = 'ISACTIVE_DESC',
  IsdeletedAsc = 'ISDELETED_ASC',
  IsdeletedDesc = 'ISDELETED_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  VolunteeridAsc = 'VOLUNTEERID_ASC',
  VolunteeridDesc = 'VOLUNTEERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type VolunteerTaskLog = {
  __typename?: 'VolunteerTaskLog';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  volunteerId?: Maybe<Scalars['String']>;
  volunteerTaskLogId?: Maybe<Scalars['String']>;
};

export type VolunteerTaskLogInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  createdAt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  volunteerId?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId?: InputMaybe<Scalars['String']>;
};

export type VolunteerTaskLogQueryInput = {
  AND?: InputMaybe<Array<VolunteerTaskLogQueryInput>>;
  OR?: InputMaybe<Array<VolunteerTaskLogQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_exists?: InputMaybe<Scalars['Boolean']>;
  createdAt_gt?: InputMaybe<Scalars['String']>;
  createdAt_gte?: InputMaybe<Scalars['String']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt_lt?: InputMaybe<Scalars['String']>;
  createdAt_lte?: InputMaybe<Scalars['String']>;
  createdAt_ne?: InputMaybe<Scalars['String']>;
  createdAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Scalars['String']>;
  status_exists?: InputMaybe<Scalars['Boolean']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_ne?: InputMaybe<Scalars['String']>;
  status_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskId?: InputMaybe<Scalars['String']>;
  taskId_exists?: InputMaybe<Scalars['Boolean']>;
  taskId_gt?: InputMaybe<Scalars['String']>;
  taskId_gte?: InputMaybe<Scalars['String']>;
  taskId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskId_lt?: InputMaybe<Scalars['String']>;
  taskId_lte?: InputMaybe<Scalars['String']>;
  taskId_ne?: InputMaybe<Scalars['String']>;
  taskId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_exists?: InputMaybe<Scalars['Boolean']>;
  updatedAt_gt?: InputMaybe<Scalars['String']>;
  updatedAt_gte?: InputMaybe<Scalars['String']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updatedAt_lt?: InputMaybe<Scalars['String']>;
  updatedAt_lte?: InputMaybe<Scalars['String']>;
  updatedAt_ne?: InputMaybe<Scalars['String']>;
  updatedAt_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volunteerId?: InputMaybe<Scalars['String']>;
  volunteerId_exists?: InputMaybe<Scalars['Boolean']>;
  volunteerId_gt?: InputMaybe<Scalars['String']>;
  volunteerId_gte?: InputMaybe<Scalars['String']>;
  volunteerId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volunteerId_lt?: InputMaybe<Scalars['String']>;
  volunteerId_lte?: InputMaybe<Scalars['String']>;
  volunteerId_ne?: InputMaybe<Scalars['String']>;
  volunteerId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volunteerTaskLogId?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_exists?: InputMaybe<Scalars['Boolean']>;
  volunteerTaskLogId_gt?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_gte?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volunteerTaskLogId_lt?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_lte?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_ne?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum VolunteerTaskLogSortByInput {
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TaskidAsc = 'TASKID_ASC',
  TaskidDesc = 'TASKID_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  VolunteeridAsc = 'VOLUNTEERID_ASC',
  VolunteeridDesc = 'VOLUNTEERID_DESC',
  VolunteertasklogidAsc = 'VOLUNTEERTASKLOGID_ASC',
  VolunteertasklogidDesc = 'VOLUNTEERTASKLOGID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type VolunteerTaskLogUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
  status_unset?: InputMaybe<Scalars['Boolean']>;
  taskId?: InputMaybe<Scalars['String']>;
  taskId_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
  volunteerId?: InputMaybe<Scalars['String']>;
  volunteerId_unset?: InputMaybe<Scalars['Boolean']>;
  volunteerTaskLogId?: InputMaybe<Scalars['String']>;
  volunteerTaskLogId_unset?: InputMaybe<Scalars['Boolean']>;
};

export type VolunteerUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  abilities?: InputMaybe<Scalars['String']>;
  abilities_unset?: InputMaybe<Scalars['Boolean']>;
  channel?: InputMaybe<Scalars['String']>;
  channel_unset?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['String']>;
  createdAt_unset?: InputMaybe<Scalars['Boolean']>;
  document?: InputMaybe<Scalars['String']>;
  document_unset?: InputMaybe<Scalars['Boolean']>;
  donorId?: InputMaybe<Scalars['String']>;
  donorId_unset?: InputMaybe<Scalars['Boolean']>;
  freeTime?: InputMaybe<Scalars['String']>;
  freeTime_unset?: InputMaybe<Scalars['Boolean']>;
  isActive?: InputMaybe<Scalars['String']>;
  isActive_unset?: InputMaybe<Scalars['Boolean']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  isDeleted_unset?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  location_unset?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  updatedAt_unset?: InputMaybe<Scalars['Boolean']>;
  volunteerId?: InputMaybe<Scalars['String']>;
  volunteerId_unset?: InputMaybe<Scalars['Boolean']>;
};

export const OrganizationInfoFragmentDoc = gql`
    fragment OrganizationInfo on Organization {
  _id
  username
  name
  organizationProfile
  aboutPicture
  favicon
  defaultCurrency
}
    `;
export const FindManyPublishedCampaignsByOrganizationIdDocument = gql`
    query findManyPublishedCampaignsByOrganizationId($organizationId: ObjectId!) {
  campaigns(query: {organizationId: $organizationId, isPublished: "Y"}) {
    _id
    organizationId
    title
    createdAt
    updatedAt
    creatorUserId
    updaterUserId
    description
    images
    coverImage
    coverImageIndex
    islamCharityType
    methods
    currencyCode
    amountProgress
    amountTarget
    campaignDescription
    campaignImage
    campaignName
    campaignType
    organizationId
    ownerUserId
    totalDonation
    donorReached
    isPublished
  }
}
    `;

export function useFindManyPublishedCampaignsByOrganizationIdQuery(options: Omit<Urql.UseQueryArgs<FindManyPublishedCampaignsByOrganizationIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyPublishedCampaignsByOrganizationIdQuery>({ query: FindManyPublishedCampaignsByOrganizationIdDocument, ...options });
};
export const FindManyCampaignsByOrganizationIdDocument = gql`
    query findManyCampaignsByOrganizationId($organizationId: ObjectId!) {
  campaigns(query: {organizationId: $organizationId}) {
    _id
    organizationId
    title
    createdAt
    updatedAt
    creatorUserId
    updaterUserId
    description
    images
    coverImage
    coverImageIndex
    islamCharityType
    methods
    currencyCode
    amountProgress
    amountTarget
    campaignDescription
    campaignImage
    campaignName
    campaignType
    organizationId
    ownerUserId
    totalDonation
    donorReached
    isPublished
  }
}
    `;

export function useFindManyCampaignsByOrganizationIdQuery(options: Omit<Urql.UseQueryArgs<FindManyCampaignsByOrganizationIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyCampaignsByOrganizationIdQuery>({ query: FindManyCampaignsByOrganizationIdDocument, ...options });
};
export const FindOneCampaignByIdDocument = gql`
    query findOneCampaignById($organizationId: ObjectId!, $campaignId: ObjectId!) {
  campaign(query: {organizationId: $organizationId, _id: $campaignId}) {
    _id
    organizationId
    title
    createdAt
    updatedAt
    creatorUserId
    updaterUserId
    description
    images
    coverImage
    coverImageIndex
    islamCharityType
    methods
    currencyCode
    amountTarget
    campaignDescription
    campaignImage
    campaignName
    campaignType
    organizationId
    ownerUserId
    totalDonation
    donorReached
    isPublished
  }
}
    `;

export function useFindOneCampaignByIdQuery(options: Omit<Urql.UseQueryArgs<FindOneCampaignByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOneCampaignByIdQuery>({ query: FindOneCampaignByIdDocument, ...options });
};
export const InsertCampaignDocument = gql`
    mutation insertCampaign($organizationId: ObjectId!, $title: String!, $createdAt: DateTime, $creatorUserId: String!, $description: String!, $islamCharityType: CampaignIslamCharityType!, $methods: [String], $currencyCode: String!, $amountTarget: Decimal!, $marketingPlanEnabled: Boolean, $marketingPlan: String, $isPublished: String) {
  insertOneCampaign(
    data: {organizationId: $organizationId, title: $title, createdAt: $createdAt, updatedAt: $createdAt, creatorUserId: $creatorUserId, updaterUserId: $creatorUserId, description: $description, islamCharityType: $islamCharityType, methods: $methods, currencyCode: $currencyCode, amountProgress: "0", amountTarget: $amountTarget, images: [], marketingPlanEnabled: $marketingPlanEnabled, marketingPlan: $marketingPlan, isPublished: $isPublished}
  ) {
    _id
  }
}
    `;

export function useInsertCampaignMutation() {
  return Urql.useMutation<InsertCampaignMutation, InsertCampaignMutationVariables>(InsertCampaignDocument);
};
export const UploadImageDocument = gql`
    mutation uploadImage($imageName: String!, $imageUrl: String!, $imagePrefix: String!, $imageExtension: String!, $fullName: String!, $currentPhoto: String!) {
  uploadImage(
    input: {imageUrl: $imageUrl, imageName: $imageName, imagePrefix: $imagePrefix, imageExtension: $imageExtension, fullName: $fullName, currentPhoto: $currentPhoto}
  ) {
    response
    path
  }
}
    `;

export function useUploadImageMutation() {
  return Urql.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument);
};
export const UpdateCampaignImagesDocument = gql`
    mutation updateCampaignImages($_id: ObjectId!, $images: [String], $coverImage: String, $coverImageIndex: Int) {
  updateOneCampaign(
    query: {_id: $_id}
    set: {images: $images, coverImage: $coverImage, coverImageIndex: $coverImageIndex}
  ) {
    _id
    images
    coverImage
    coverImageIndex
  }
}
    `;

export function useUpdateCampaignImagesMutation() {
  return Urql.useMutation<UpdateCampaignImagesMutation, UpdateCampaignImagesMutationVariables>(UpdateCampaignImagesDocument);
};
export const UpdateCampaignDetailDocument = gql`
    mutation updateCampaignDetail($organizationId: ObjectId!, $campaignId: ObjectId!, $updatedAt: DateTime, $title: String!, $description: String!, $islamCharityType: CampaignIslamCharityType!, $methods: [String], $amountTarget: Decimal!, $marketingPlanEnabled: Boolean, $marketingPlan: String, $isPublished: String) {
  updateOneCampaign(
    query: {organizationId: $organizationId, _id: $campaignId}
    set: {updatedAt: $updatedAt, title: $title, description: $description, islamCharityType: $islamCharityType, methods: $methods, amountTarget: $amountTarget, marketingPlanEnabled: $marketingPlanEnabled, marketingPlan: $marketingPlan, isPublished: $isPublished}
  ) {
    _id
  }
}
    `;

export function useUpdateCampaignDetailMutation() {
  return Urql.useMutation<UpdateCampaignDetailMutation, UpdateCampaignDetailMutationVariables>(UpdateCampaignDetailDocument);
};
export const PurgeCampaignDocument = gql`
    mutation purgeCampaign($organizationId: ObjectId!, $campaignId: ObjectId!) {
  deleteOneCampaign(query: {organizationId: $organizationId, _id: $campaignId}) {
    _id
  }
}
    `;

export function usePurgeCampaignMutation() {
  return Urql.useMutation<PurgeCampaignMutation, PurgeCampaignMutationVariables>(PurgeCampaignDocument);
};
export const FindOneOrganizationByIdDocument = gql`
    query findOneOrganizationById($id: ObjectId!) {
  organization(query: {_id: $id}) {
    ...OrganizationInfo
  }
}
    ${OrganizationInfoFragmentDoc}`;

export function useFindOneOrganizationByIdQuery(options: Omit<Urql.UseQueryArgs<FindOneOrganizationByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOneOrganizationByIdQuery>({ query: FindOneOrganizationByIdDocument, ...options });
};
export const FindOneOrganizationByUsernameDocument = gql`
    query findOneOrganizationByUsername($username: String!) {
  organization(query: {username: $username}) {
    ...OrganizationInfo
  }
}
    ${OrganizationInfoFragmentDoc}`;

export function useFindOneOrganizationByUsernameQuery(options: Omit<Urql.UseQueryArgs<FindOneOrganizationByUsernameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindOneOrganizationByUsernameQuery>({ query: FindOneOrganizationByUsernameDocument, ...options });
};
export const FindManyOrganizationsByFeaturedDocument = gql`
    query findManyOrganizationsByFeatured {
  organizations(query: {featured: true}, sortBy: FEATUREDPOS_ASC) {
    _id
    username
    name
    organizationProfile
    aboutPicture
    favicon
  }
}
    `;

export function useFindManyOrganizationsByFeaturedQuery(options: Omit<Urql.UseQueryArgs<FindManyOrganizationsByFeaturedQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FindManyOrganizationsByFeaturedQuery>({ query: FindManyOrganizationsByFeaturedDocument, ...options });
};
export const GetOrganizationAppearanceDocument = gql`
    query getOrganizationAppearance($_id: ObjectId!) {
  nonprofitAppearance(query: {_id: $_id}) {
    _id
    primaryColor
    secondaryColor
    logo
    themesColor
    usePallete
    headerAndFooter
    accent
    lButton
    ourStory
    whyShouldWe
    peopleSay
    mainImageUrl
    secondaryImage
    eventImagesUrl1
    eventImagesUrl2
    eventImagesUrl3
    detailStory1
    detailStory2
    detailStory3
    videoUrl
    whySupportUs1
    whySupportUs2
    whySupportUs3
    favIcon
  }
  organization(query: {_id: $_id}) {
    _id
    username
    name
  }
}
    `;

export function useGetOrganizationAppearanceQuery(options: Omit<Urql.UseQueryArgs<GetOrganizationAppearanceQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetOrganizationAppearanceQuery>({ query: GetOrganizationAppearanceDocument, ...options });
};
export type FindManyPublishedCampaignsByOrganizationIdQueryVariables = Exact<{
  organizationId: Scalars['ObjectId'];
}>;


export type FindManyPublishedCampaignsByOrganizationIdQuery = { __typename?: 'Query', campaigns: Array<{ __typename?: 'Campaign', _id?: any | null | undefined, organizationId?: any | null | undefined, title?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, creatorUserId?: string | null | undefined, updaterUserId?: string | null | undefined, description?: string | null | undefined, images?: Array<string | null | undefined> | null | undefined, coverImage?: string | null | undefined, coverImageIndex?: number | null | undefined, islamCharityType?: CampaignIslamCharityType | null | undefined, methods?: Array<string | null | undefined> | null | undefined, currencyCode?: string | null | undefined, amountProgress?: any | null | undefined, amountTarget?: any | null | undefined, campaignDescription?: string | null | undefined, campaignImage?: string | null | undefined, campaignName?: string | null | undefined, campaignType?: string | null | undefined, ownerUserId?: string | null | undefined, totalDonation?: string | null | undefined, donorReached?: string | null | undefined, isPublished?: string | null | undefined } | null | undefined> };

export type FindManyCampaignsByOrganizationIdQueryVariables = Exact<{
  organizationId: Scalars['ObjectId'];
}>;


export type FindManyCampaignsByOrganizationIdQuery = { __typename?: 'Query', campaigns: Array<{ __typename?: 'Campaign', _id?: any | null | undefined, organizationId?: any | null | undefined, title?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, creatorUserId?: string | null | undefined, updaterUserId?: string | null | undefined, description?: string | null | undefined, images?: Array<string | null | undefined> | null | undefined, coverImage?: string | null | undefined, coverImageIndex?: number | null | undefined, islamCharityType?: CampaignIslamCharityType | null | undefined, methods?: Array<string | null | undefined> | null | undefined, currencyCode?: string | null | undefined, amountProgress?: any | null | undefined, amountTarget?: any | null | undefined, campaignDescription?: string | null | undefined, campaignImage?: string | null | undefined, campaignName?: string | null | undefined, campaignType?: string | null | undefined, ownerUserId?: string | null | undefined, totalDonation?: string | null | undefined, donorReached?: string | null | undefined, isPublished?: string | null | undefined } | null | undefined> };

export type FindOneCampaignByIdQueryVariables = Exact<{
  organizationId: Scalars['ObjectId'];
  campaignId: Scalars['ObjectId'];
}>;


export type FindOneCampaignByIdQuery = { __typename?: 'Query', campaign?: { __typename?: 'Campaign', _id?: any | null | undefined, organizationId?: any | null | undefined, title?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, creatorUserId?: string | null | undefined, updaterUserId?: string | null | undefined, description?: string | null | undefined, images?: Array<string | null | undefined> | null | undefined, coverImage?: string | null | undefined, coverImageIndex?: number | null | undefined, islamCharityType?: CampaignIslamCharityType | null | undefined, methods?: Array<string | null | undefined> | null | undefined, currencyCode?: string | null | undefined, amountTarget?: any | null | undefined, campaignDescription?: string | null | undefined, campaignImage?: string | null | undefined, campaignName?: string | null | undefined, campaignType?: string | null | undefined, ownerUserId?: string | null | undefined, totalDonation?: string | null | undefined, donorReached?: string | null | undefined, isPublished?: string | null | undefined } | null | undefined };

export type InsertCampaignMutationVariables = Exact<{
  organizationId: Scalars['ObjectId'];
  title: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorUserId: Scalars['String'];
  description: Scalars['String'];
  islamCharityType: CampaignIslamCharityType;
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  currencyCode: Scalars['String'];
  amountTarget: Scalars['Decimal'];
  marketingPlanEnabled?: InputMaybe<Scalars['Boolean']>;
  marketingPlan?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['String']>;
}>;


export type InsertCampaignMutation = { __typename?: 'Mutation', insertOneCampaign?: { __typename?: 'Campaign', _id?: any | null | undefined } | null | undefined };

export type UploadImageMutationVariables = Exact<{
  imageName: Scalars['String'];
  imageUrl: Scalars['String'];
  imagePrefix: Scalars['String'];
  imageExtension: Scalars['String'];
  fullName: Scalars['String'];
  currentPhoto: Scalars['String'];
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage?: { __typename?: 'Result', response?: string | null | undefined, path?: string | null | undefined } | null | undefined };

export type UpdateCampaignImagesMutationVariables = Exact<{
  _id: Scalars['ObjectId'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverImageIndex?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateCampaignImagesMutation = { __typename?: 'Mutation', updateOneCampaign?: { __typename?: 'Campaign', _id?: any | null | undefined, images?: Array<string | null | undefined> | null | undefined, coverImage?: string | null | undefined, coverImageIndex?: number | null | undefined } | null | undefined };

export type UpdateCampaignDetailMutationVariables = Exact<{
  organizationId: Scalars['ObjectId'];
  campaignId: Scalars['ObjectId'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  description: Scalars['String'];
  islamCharityType: CampaignIslamCharityType;
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  amountTarget: Scalars['Decimal'];
  marketingPlanEnabled?: InputMaybe<Scalars['Boolean']>;
  marketingPlan?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['String']>;
}>;


export type UpdateCampaignDetailMutation = { __typename?: 'Mutation', updateOneCampaign?: { __typename?: 'Campaign', _id?: any | null | undefined } | null | undefined };

export type PurgeCampaignMutationVariables = Exact<{
  organizationId: Scalars['ObjectId'];
  campaignId: Scalars['ObjectId'];
}>;


export type PurgeCampaignMutation = { __typename?: 'Mutation', deleteOneCampaign?: { __typename?: 'Campaign', _id?: any | null | undefined } | null | undefined };

export type OrganizationInfoFragment = { __typename?: 'Organization', _id?: any | null | undefined, username?: string | null | undefined, name?: string | null | undefined, organizationProfile?: string | null | undefined, aboutPicture?: string | null | undefined, favicon?: string | null | undefined, defaultCurrency?: string | null | undefined };

export type FindOneOrganizationByIdQueryVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type FindOneOrganizationByIdQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', _id?: any | null | undefined, username?: string | null | undefined, name?: string | null | undefined, organizationProfile?: string | null | undefined, aboutPicture?: string | null | undefined, favicon?: string | null | undefined, defaultCurrency?: string | null | undefined } | null | undefined };

export type FindOneOrganizationByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FindOneOrganizationByUsernameQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', _id?: any | null | undefined, username?: string | null | undefined, name?: string | null | undefined, organizationProfile?: string | null | undefined, aboutPicture?: string | null | undefined, favicon?: string | null | undefined, defaultCurrency?: string | null | undefined } | null | undefined };

export type FindManyOrganizationsByFeaturedQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyOrganizationsByFeaturedQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', _id?: any | null | undefined, username?: string | null | undefined, name?: string | null | undefined, organizationProfile?: string | null | undefined, aboutPicture?: string | null | undefined, favicon?: string | null | undefined } | null | undefined> };

export type GetOrganizationAppearanceQueryVariables = Exact<{
  _id: Scalars['ObjectId'];
}>;


export type GetOrganizationAppearanceQuery = { __typename?: 'Query', nonprofitAppearance?: { __typename?: 'NonprofitAppearance', _id?: any | null | undefined, primaryColor?: string | null | undefined, secondaryColor?: string | null | undefined, logo?: string | null | undefined, themesColor?: string | null | undefined, usePallete?: boolean | null | undefined, headerAndFooter?: string | null | undefined, accent?: string | null | undefined, lButton?: string | null | undefined, ourStory?: string | null | undefined, whyShouldWe?: string | null | undefined, peopleSay?: string | null | undefined, mainImageUrl?: string | null | undefined, secondaryImage?: string | null | undefined, eventImagesUrl1?: string | null | undefined, eventImagesUrl2?: string | null | undefined, eventImagesUrl3?: string | null | undefined, detailStory1?: string | null | undefined, detailStory2?: string | null | undefined, detailStory3?: string | null | undefined, videoUrl?: string | null | undefined, whySupportUs1?: string | null | undefined, whySupportUs2?: string | null | undefined, whySupportUs3?: string | null | undefined, favIcon?: string | null | undefined } | null | undefined, organization?: { __typename?: 'Organization', _id?: any | null | undefined, username?: string | null | undefined, name?: string | null | undefined } | null | undefined };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Affiliation",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "point",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "referralURL",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "visitorDonation",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "visitorVisit",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Article",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "articleId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isPublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "operatorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Campaign",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amountProgress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amountTarget",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignDescription",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "contributionValue",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "costBeneficiaries",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coverImageIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "creatorUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationPlaces",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donorReached",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "images",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isPublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "islamCharityType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "marketingPlan",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "marketingPlanEnabled",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methods",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "numberBeneficiaries",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "percentageGovernance",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalDonation",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updaterUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CampaignActivity",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "author",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "avatar",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "datetime",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CampaignNotificationReport",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignPhoto",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nonprofitRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sendEmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CampaignVendorLog",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignVendorLogId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "vendorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ChartDatum",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "day",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hour",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "month",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "week",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "year",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Commerce",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "commerceId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteManyPayload",
        "fields": [
          {
            "name": "deletedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DonationLog",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationStatus",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ipAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "paymentGatewayId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "projectId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "transactionId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DonationPayment",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "errorData",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "errorHeader",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Donation_log",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationStatus",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donorRealmId",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "donorUserId",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "lastErrorCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastErrorData",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastErrorHeader",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nonprofitRealmId",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nonprofitUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Donor",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "about",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "facebook",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "linkedin",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mobile",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profilePic",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetDonorListResult",
        "fields": [
          {
            "name": "donorNameList",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "GetDonorListResultDonorNameList",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetDonorListResultDonorNameList",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetRegionFunctionPayload",
        "fields": [
          {
            "name": "ipify",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Gift",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "beneficiaryName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "beneficiaryPhoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "cardTemplate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "copyToSms",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "countryOrigin",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationArea",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donorRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donorUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hideAmount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "senderName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "InsertManyPayload",
        "fields": [
          {
            "name": "insertedIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Item",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "category",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultPrice",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isPublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "itemId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "projectId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalNeed",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updateAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "deleteManyAffiliations",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyArticles",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCampaignActivities",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCampaignNotificationReports",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCampaignVendorLogs",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCampaigns",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyChartData",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyCommerces",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyDonationLogs",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyDonationPayments",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyDonation_logs",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyDonors",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyGifts",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyItems",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyNonprofitAppearances",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyNonprofitSecrets",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyNonprofits",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOperators",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOrganizationTeams",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyOrganizations",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyPaymentData",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyPaymentGateways",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyProjectOperatorMaps",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyProjects",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyTasks",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyTestRaises",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyTicketLogs",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyTmraInfos",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyUsers",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyVendors",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyVolunteerTaskLogs",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteManyVolunteers",
            "type": {
              "kind": "OBJECT",
              "name": "DeleteManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "deleteOneAffiliation",
            "type": {
              "kind": "OBJECT",
              "name": "Affiliation",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneCampaign",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneCampaignActivity",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignActivity",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneCampaignNotificationReport",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignNotificationReport",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneCampaignVendorLog",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignVendorLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneChartDatum",
            "type": {
              "kind": "OBJECT",
              "name": "ChartDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneCommerce",
            "type": {
              "kind": "OBJECT",
              "name": "Commerce",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneDonationLog",
            "type": {
              "kind": "OBJECT",
              "name": "DonationLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneDonationPayment",
            "type": {
              "kind": "OBJECT",
              "name": "DonationPayment",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneDonation_log",
            "type": {
              "kind": "OBJECT",
              "name": "Donation_log",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneDonor",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneGift",
            "type": {
              "kind": "OBJECT",
              "name": "Gift",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneItem",
            "type": {
              "kind": "OBJECT",
              "name": "Item",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneNonprofit",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneNonprofitAppearance",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitAppearance",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneNonprofitSecret",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitSecret",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneOperator",
            "type": {
              "kind": "OBJECT",
              "name": "Operator",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneOrganization",
            "type": {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneOrganizationTeam",
            "type": {
              "kind": "OBJECT",
              "name": "OrganizationTeam",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOnePaymentDatum",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOnePaymentGateway",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentGateway",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneProjectOperatorMap",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectOperatorMap",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneTask",
            "type": {
              "kind": "OBJECT",
              "name": "Task",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneTestRaise",
            "type": {
              "kind": "OBJECT",
              "name": "TestRaise",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneTicketLog",
            "type": {
              "kind": "OBJECT",
              "name": "TicketLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneTmraInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TmraInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneVendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneVolunteer",
            "type": {
              "kind": "OBJECT",
              "name": "Volunteer",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteOneVolunteerTaskLog",
            "type": {
              "kind": "OBJECT",
              "name": "VolunteerTaskLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "forgotPassword",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessForgot",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "getDonorList",
            "type": {
              "kind": "OBJECT",
              "name": "GetDonorListResult",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insertFusionAuthUser",
            "type": {
              "kind": "OBJECT",
              "name": "Success",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insertManyAffiliations",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyArticles",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyCampaignActivities",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyCampaignNotificationReports",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyCampaignVendorLogs",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyCampaigns",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyChartData",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyCommerces",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyDonationLogs",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyDonationPayments",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyDonation_logs",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyDonors",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyGifts",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyItems",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyNonprofitAppearances",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyNonprofitSecrets",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyNonprofits",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyOperators",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyOrganizationTeams",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyOrganizations",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyPaymentData",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyPaymentGateways",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyProjectOperatorMaps",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyProjects",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyTasks",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyTestRaises",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyTicketLogs",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyTmraInfos",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyUsers",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyVendors",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyVolunteerTaskLogs",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertManyVolunteers",
            "type": {
              "kind": "OBJECT",
              "name": "InsertManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneAffiliation",
            "type": {
              "kind": "OBJECT",
              "name": "Affiliation",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneCampaign",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneCampaignActivity",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignActivity",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneCampaignNotificationReport",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignNotificationReport",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneCampaignVendorLog",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignVendorLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneChartDatum",
            "type": {
              "kind": "OBJECT",
              "name": "ChartDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneCommerce",
            "type": {
              "kind": "OBJECT",
              "name": "Commerce",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneDonationLog",
            "type": {
              "kind": "OBJECT",
              "name": "DonationLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneDonationPayment",
            "type": {
              "kind": "OBJECT",
              "name": "DonationPayment",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneDonation_log",
            "type": {
              "kind": "OBJECT",
              "name": "Donation_log",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneDonor",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneGift",
            "type": {
              "kind": "OBJECT",
              "name": "Gift",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneItem",
            "type": {
              "kind": "OBJECT",
              "name": "Item",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneNonprofit",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneNonprofitAppearance",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitAppearance",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneNonprofitSecret",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitSecret",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneOperator",
            "type": {
              "kind": "OBJECT",
              "name": "Operator",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneOrganization",
            "type": {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneOrganizationTeam",
            "type": {
              "kind": "OBJECT",
              "name": "OrganizationTeam",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOnePaymentDatum",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOnePaymentGateway",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentGateway",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneProjectOperatorMap",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectOperatorMap",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneTask",
            "type": {
              "kind": "OBJECT",
              "name": "Task",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneTestRaise",
            "type": {
              "kind": "OBJECT",
              "name": "TestRaise",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneTicketLog",
            "type": {
              "kind": "OBJECT",
              "name": "TicketLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneTmraInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TmraInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneVendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneVolunteer",
            "type": {
              "kind": "OBJECT",
              "name": "Volunteer",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insertOneVolunteerTaskLog",
            "type": {
              "kind": "OBJECT",
              "name": "VolunteerTaskLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "nonprofitDonorList",
            "type": {
              "kind": "OBJECT",
              "name": "NonProfitDonorListResult",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneAffiliation",
            "type": {
              "kind": "OBJECT",
              "name": "Affiliation",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneCampaign",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneCampaignActivity",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignActivity",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneCampaignNotificationReport",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignNotificationReport",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneCampaignVendorLog",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignVendorLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneChartDatum",
            "type": {
              "kind": "OBJECT",
              "name": "ChartDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneCommerce",
            "type": {
              "kind": "OBJECT",
              "name": "Commerce",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneDonationLog",
            "type": {
              "kind": "OBJECT",
              "name": "DonationLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneDonationPayment",
            "type": {
              "kind": "OBJECT",
              "name": "DonationPayment",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneDonation_log",
            "type": {
              "kind": "OBJECT",
              "name": "Donation_log",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneDonor",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneGift",
            "type": {
              "kind": "OBJECT",
              "name": "Gift",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneItem",
            "type": {
              "kind": "OBJECT",
              "name": "Item",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneNonprofit",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneNonprofitAppearance",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitAppearance",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneNonprofitSecret",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitSecret",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneOperator",
            "type": {
              "kind": "OBJECT",
              "name": "Operator",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneOrganization",
            "type": {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneOrganizationTeam",
            "type": {
              "kind": "OBJECT",
              "name": "OrganizationTeam",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOnePaymentDatum",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOnePaymentGateway",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentGateway",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneProjectOperatorMap",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectOperatorMap",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneTask",
            "type": {
              "kind": "OBJECT",
              "name": "Task",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneTestRaise",
            "type": {
              "kind": "OBJECT",
              "name": "TestRaise",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneTicketLog",
            "type": {
              "kind": "OBJECT",
              "name": "TicketLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneTmraInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TmraInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneVendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneVolunteer",
            "type": {
              "kind": "OBJECT",
              "name": "Volunteer",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "replaceOneVolunteerTaskLog",
            "type": {
              "kind": "OBJECT",
              "name": "VolunteerTaskLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateManyAffiliations",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyArticles",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyCampaignActivities",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyCampaignNotificationReports",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyCampaignVendorLogs",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyCampaigns",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyChartData",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyCommerces",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyDonationLogs",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyDonationPayments",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyDonation_logs",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyDonors",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyGifts",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyItems",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyNonprofitAppearances",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyNonprofitSecrets",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyNonprofits",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyOperators",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyOrganizationTeams",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyOrganizations",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyPaymentData",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyPaymentGateways",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyProjectOperatorMaps",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyProjects",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyTasks",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyTestRaises",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyTicketLogs",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyTmraInfos",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyUsers",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyVendors",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyVolunteerTaskLogs",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyVolunteers",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateManyPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneAffiliation",
            "type": {
              "kind": "OBJECT",
              "name": "Affiliation",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneCampaign",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneCampaignActivity",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignActivity",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneCampaignNotificationReport",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignNotificationReport",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneCampaignVendorLog",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignVendorLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneChartDatum",
            "type": {
              "kind": "OBJECT",
              "name": "ChartDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneCommerce",
            "type": {
              "kind": "OBJECT",
              "name": "Commerce",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneDonationLog",
            "type": {
              "kind": "OBJECT",
              "name": "DonationLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneDonationPayment",
            "type": {
              "kind": "OBJECT",
              "name": "DonationPayment",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneDonation_log",
            "type": {
              "kind": "OBJECT",
              "name": "Donation_log",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneDonor",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneGift",
            "type": {
              "kind": "OBJECT",
              "name": "Gift",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneItem",
            "type": {
              "kind": "OBJECT",
              "name": "Item",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneNonprofit",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneNonprofitAppearance",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitAppearance",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneNonprofitSecret",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitSecret",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneOperator",
            "type": {
              "kind": "OBJECT",
              "name": "Operator",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneOrganization",
            "type": {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneOrganizationTeam",
            "type": {
              "kind": "OBJECT",
              "name": "OrganizationTeam",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOnePaymentDatum",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOnePaymentGateway",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentGateway",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneProjectOperatorMap",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectOperatorMap",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneTask",
            "type": {
              "kind": "OBJECT",
              "name": "Task",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneTestRaise",
            "type": {
              "kind": "OBJECT",
              "name": "TestRaise",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneTicketLog",
            "type": {
              "kind": "OBJECT",
              "name": "TicketLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneTmraInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TmraInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneVendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneVolunteer",
            "type": {
              "kind": "OBJECT",
              "name": "Volunteer",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateOneVolunteerTaskLog",
            "type": {
              "kind": "OBJECT",
              "name": "VolunteerTaskLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "set",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "uploadImage",
            "type": {
              "kind": "OBJECT",
              "name": "Result",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneAffiliation",
            "type": {
              "kind": "OBJECT",
              "name": "Affiliation",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneArticle",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneCampaign",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneCampaignActivity",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignActivity",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneCampaignNotificationReport",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignNotificationReport",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneCampaignVendorLog",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignVendorLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneChartDatum",
            "type": {
              "kind": "OBJECT",
              "name": "ChartDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneCommerce",
            "type": {
              "kind": "OBJECT",
              "name": "Commerce",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneDonationLog",
            "type": {
              "kind": "OBJECT",
              "name": "DonationLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneDonationPayment",
            "type": {
              "kind": "OBJECT",
              "name": "DonationPayment",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneDonation_log",
            "type": {
              "kind": "OBJECT",
              "name": "Donation_log",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneDonor",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneGift",
            "type": {
              "kind": "OBJECT",
              "name": "Gift",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneItem",
            "type": {
              "kind": "OBJECT",
              "name": "Item",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneNonprofit",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneNonprofitAppearance",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitAppearance",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneNonprofitSecret",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitSecret",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneOperator",
            "type": {
              "kind": "OBJECT",
              "name": "Operator",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneOrganization",
            "type": {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneOrganizationTeam",
            "type": {
              "kind": "OBJECT",
              "name": "OrganizationTeam",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOnePaymentDatum",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOnePaymentGateway",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentGateway",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneProject",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneProjectOperatorMap",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectOperatorMap",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneTask",
            "type": {
              "kind": "OBJECT",
              "name": "Task",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneTestRaise",
            "type": {
              "kind": "OBJECT",
              "name": "TestRaise",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneTicketLog",
            "type": {
              "kind": "OBJECT",
              "name": "TicketLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneTmraInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TmraInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneVendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneVolunteer",
            "type": {
              "kind": "OBJECT",
              "name": "Volunteer",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "upsertOneVolunteerTaskLog",
            "type": {
              "kind": "OBJECT",
              "name": "VolunteerTaskLog",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NonProfitDonorListResult",
        "fields": [
          {
            "name": "donorNameList",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "NonProfitDonorListResultDonorNameList",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NonProfitDonorListResultDonorNameList",
        "fields": [
          {
            "name": "country",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Nonprofit",
        "fields": [
          {
            "name": "OrganizationBankAccountName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "aboutHeading",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "aboutPicture",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "comissioner",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultCurrency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "facebook",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "favicon",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "featured",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "idNumberCard",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact1Amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact1Title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact2Amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact2Title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact3Amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact3Title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impactCategory",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instagram",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "licenseNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "linkedin",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nonprofitType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orgObjective",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationBankAccount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationBankAccountName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationBankAccountNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationEmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationModerator",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationProfile",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationSize",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationSwiftCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourMissionDetail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourStoryDesc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "packageType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "paypalClientId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "postalCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "website",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whatsapp",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditMode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "youtube",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NonprofitAppearance",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "detailStory1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "detailStory2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "detailStory3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "eventImagesUrl1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "eventImagesUrl2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "eventImagesUrl3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "favIcon",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "headerAndFooter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lButton",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mainImageUrl",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourStory",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "peopleSay",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "primaryColor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "secondaryColor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "secondaryImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "themesColor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "usePallete",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "videoUrl",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whyShouldWe",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whySupportUs1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whySupportUs2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whySupportUs3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NonprofitSecret",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nonprofitRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditLiveCallbackToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditLivePrivateKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditLivePublicKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditTestCallbackToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditTestPrivateKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditTestPublicKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Operator",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "levelAccess",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "operatorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Organization",
        "fields": [
          {
            "name": "OrganizationBankAccountName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "aboutHeading",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "aboutPicture",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "comissioner",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "contactEmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "contactPhone",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultCurrency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "facebook",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "favicon",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "featured",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "featuredPos",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "idNumberCard",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact1Amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact1Title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact2Amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact2Title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact3Amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impact3Title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impactCategory",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "instagram",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "licenseNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "linkedin",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nonprofitType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orgObjective",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationBankAccount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationBankAccountName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationBankAccountNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationEmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationModerator",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationProfile",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationSize",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationSwiftCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourMissionDetail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourStoryDesc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerRealmId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "packageType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "paypalClientId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "postalCode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "website",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whatsapp",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "xenditMode",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "youtube",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OrganizationTeam",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fullName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profilePicture",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaymentDatum",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "facilitatorAccessToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "merchantId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "orderId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "paymentStatus",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaymentGateway",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "apiKey",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultCurrency",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "paymentGatewayId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profileId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Project",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "diameterSize",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasAc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasClassroom",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasFemaleSection",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasGreenSpace",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasParking",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ipAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isPublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "prayerSize",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "projectId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "toiletSize",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProjectOperatorMap",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "operatorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "projectId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "projectOperatorMapId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "affiliation",
            "type": {
              "kind": "OBJECT",
              "name": "Affiliation",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "affiliations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Affiliation",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "article",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "articles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Article",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaign",
            "type": {
              "kind": "OBJECT",
              "name": "Campaign",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaignActivities",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CampaignActivity",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaignActivity",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignActivity",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaignNotificationReport",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignNotificationReport",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaignNotificationReports",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CampaignNotificationReport",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaignVendorLog",
            "type": {
              "kind": "OBJECT",
              "name": "CampaignVendorLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaignVendorLogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CampaignVendorLog",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "campaigns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Campaign",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chartData",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ChartDatum",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chartDatum",
            "type": {
              "kind": "OBJECT",
              "name": "ChartDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "commerce",
            "type": {
              "kind": "OBJECT",
              "name": "Commerce",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "commerces",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commerce",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donationLog",
            "type": {
              "kind": "OBJECT",
              "name": "DonationLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donationLogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DonationLog",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donationPayment",
            "type": {
              "kind": "OBJECT",
              "name": "DonationPayment",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donationPayments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DonationPayment",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donation_log",
            "type": {
              "kind": "OBJECT",
              "name": "Donation_log",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donation_logs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Donation_log",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donor",
            "type": {
              "kind": "OBJECT",
              "name": "Donor",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "donors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Donor",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "getRegion",
            "type": {
              "kind": "OBJECT",
              "name": "GetRegionFunctionPayload",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "gift",
            "type": {
              "kind": "OBJECT",
              "name": "Gift",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "gifts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Gift",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "item",
            "type": {
              "kind": "OBJECT",
              "name": "Item",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Item",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "nonprofit",
            "type": {
              "kind": "OBJECT",
              "name": "Nonprofit",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "nonprofitAppearance",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitAppearance",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "nonprofitAppearances",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "NonprofitAppearance",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "nonprofitCount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "nonprofitSecret",
            "type": {
              "kind": "OBJECT",
              "name": "NonprofitSecret",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "nonprofitSecrets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "NonprofitSecret",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "nonprofits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Nonprofit",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "operator",
            "type": {
              "kind": "OBJECT",
              "name": "Operator",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "operators",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Operator",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "organization",
            "type": {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "organizationTeam",
            "type": {
              "kind": "OBJECT",
              "name": "OrganizationTeam",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "organizationTeams",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "OrganizationTeam",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "organizations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Organization",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "paymentData",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PaymentDatum",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "paymentDatum",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentDatum",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "paymentGateway",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentGateway",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "paymentGateways",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PaymentGateway",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "project",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "projectOperatorMap",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectOperatorMap",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "projectOperatorMaps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectOperatorMap",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "projects",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "task",
            "type": {
              "kind": "OBJECT",
              "name": "Task",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "tasks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Task",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "testRaise",
            "type": {
              "kind": "OBJECT",
              "name": "TestRaise",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "testRaises",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestRaise",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "ticketLog",
            "type": {
              "kind": "OBJECT",
              "name": "TicketLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "ticketLogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TicketLog",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "tmraInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TmraInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "tmraInfos",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TmraInfo",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "vendor",
            "type": {
              "kind": "OBJECT",
              "name": "Vendor",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "vendors",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Vendor",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "volunteer",
            "type": {
              "kind": "OBJECT",
              "name": "Volunteer",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "volunteerTaskLog",
            "type": {
              "kind": "OBJECT",
              "name": "VolunteerTaskLog",
              "ofType": null
            },
            "args": [
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "volunteerTaskLogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "VolunteerTaskLog",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "volunteers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Volunteer",
                  "ofType": null
                }
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sortBy",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Result",
        "fields": [
          {
            "name": "path",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "response",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Success",
        "fields": [
          {
            "name": "result",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessResult",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessForgot",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessForgotSuccess",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessForgotSuccess",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessResult",
        "fields": [
          {
            "name": "error",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessResultError",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "registration",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessResultRegistration",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessResultUser",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessResultError",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "OBJECT",
              "name": "SuccessResultErrorMessage",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessResultErrorMessage",
        "fields": [
          {
            "name": "message0",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessResultRegistration",
        "fields": [
          {
            "name": "applicationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "insertInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastLoginInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastUpdateInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "usernameStatus",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SuccessResultUser",
        "fields": [
          {
            "name": "active",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "connectorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "firstName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "insertInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastLoginInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastUpdateInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "passwordChangeRequired",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "passwordLastUpdateInstant",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "tenantId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twoFactorDelivery",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twoFactorEnabled",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "usernameStatus",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "verified",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Task",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "benefitDetails",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "campaignId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "enrollmentType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDisaAvailable",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isPublished",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isRemote",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isUrgent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "job",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "needsInterview",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "reasonToPay",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "requiredAge",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "requiredProfession",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "requiredSkills",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "seatNum",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "startDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "supportProvider",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "taskDetails",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "taskId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TestRaise",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TicketLog",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resolvedBy",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ticketId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ticketLogId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TmraInfo",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "defaultIconGoal6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeImage6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donationTypeTitle6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal4",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal5",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourGoal6",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourMissionDetail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourStoryDesc",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ourValue3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "whatsapp",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateManyPayload",
        "fields": [
          {
            "name": "matchedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "modifiedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "firstname",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "lastname",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profilPicture",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profilePicture",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Vendor",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "channels",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "coverImage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image1",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image3",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ownerUserId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "vendorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Volunteer",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "abilities",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "channel",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "document",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "donorId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "freeTime",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isActive",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isDeleted",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "volunteerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "VolunteerTaskLog",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "taskId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "volunteerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "volunteerTaskLogId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;