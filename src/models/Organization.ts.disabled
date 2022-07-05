import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose';

export enum FeatureEnabled {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

@modelOptions({ schemaOptions: { collection: 'organization' } })
export class OrganizationClass {
  @prop()
  public name?: string;
}

@modelOptions({ schemaOptions: { collection: 'nonprofitAppearance' } })
export class NonprofitAppearanceClass {
  @prop()
  public name?: string;

  @prop({ type: String, enum: FeatureEnabled })
  public aboutFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public blogFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public donateFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public contactFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public cartFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public languageFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public signInFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public legalFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public faqFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public newsFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public helpCenterFeature?: FeatureEnabled;

  @prop({ type: String, enum: FeatureEnabled })
  public socialMediaFeature?: FeatureEnabled;
}

export const OrganizationModel = getModelForClass(OrganizationClass);
export const NonprofitAppearanceModel = getModelForClass(NonprofitAppearanceClass);
