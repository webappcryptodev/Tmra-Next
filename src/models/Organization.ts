import * as mongoose from 'mongoose';

export enum FeatureEnabled {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

export const organizationSchema = new mongoose.Schema(
  {
    name: String,
  },
  { collection: 'organization' },
);

export const OrganizationClass =
  mongoose.models.organization ?? mongoose.model('organization', organizationSchema);

export interface NonprofitAppearance {
  _id: string | null;
  id: string | null;
  aboutFeature?: FeatureEnabled;
  blogFeature?: FeatureEnabled;
  donateFeature?: FeatureEnabled;
  contactFeature?: FeatureEnabled;
  cartFeature?: FeatureEnabled;
  languageFeature?: FeatureEnabled;
  signInFeature?: FeatureEnabled;
  legalFeature?: FeatureEnabled;
  faqFeature?: FeatureEnabled;
  newsFeature?: FeatureEnabled;
  helpFeature?: FeatureEnabled;
  socialMediaFeature?: FeatureEnabled;
}

export interface IPropsLoginOrganization {
  _id?: string | null;
  id?: string | null;
  organizationEmail?: string | null;
  ownerRealmId?: string | null;
  organizationModerator?: string | null;
  organizationSwiftCode?: string | null;
  OrganizationBankAccountName?: string | null;
  ownerUserId?: string | null;
  organizationType?: string | null;
  username?: string | null;
  organizationSize?: string | null;
  organizationProfile?: string | null;
  impact1Amount?: string | null;
  impact1Title?: string | null;
  favicon?: string | null;
  impact2Amount?: string | null;
  impact2Title?: string | null;
  impact3Amount?: string | null;
  impact3Title?: string | null;
  defaultCurrency?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  contactWhatsapp?: string | null;
  xenditMode?: string | null;
  aboutBody?: string | null;
  aboutHeading?: string | null;
  paypalClientId?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  featured?: boolean | false;
  name?: string | null;
  featuredPos?: number;
  licenseNumber?: string | null;
  orgObjective?: string | null;
  organizationName?: string | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  state?: string | null;
  zipCode?: string | null;
  twitter?: string | null;
  aboutPicture?: string | null;
}

export const nonprofitAppearanceSchema = new mongoose.Schema<NonprofitAppearance>(
  {
    aboutFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    blogFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    donateFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    contactFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    cartFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    languageFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    signInFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    legalFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    faqFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    newsFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    helpFeature: {
      type: String,
      enum: FeatureEnabled,
    },
    socialMediaFeature: {
      type: String,
      enum: FeatureEnabled,
    },
  },
  { collection: 'nonprofitAppearance' },
);

export const NonprofitAppearanceClass =
  mongoose.models.nonprofitAppearance ??
  mongoose.model('nonprofitAppearance', nonprofitAppearanceSchema);
