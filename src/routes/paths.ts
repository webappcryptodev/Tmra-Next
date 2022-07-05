// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

/**
 * These are pages that are used by all organizations, especially in whitelabel deployment.
 */
export interface LandingGenericPaths {
  root: string;
  privacy: string;
  terms: string;
  about: string | undefined;
  contact: string | undefined;
  signIn: string;
  join: string;
  signup: string;
  resetPassword: string;
  zakat: string;
  giving_options: string;
  verif(verifId: string): string;
  resendVerif: string;
  changePassword(passwordId: string): string;
  organizationDetail: (organizationUsername: string) => string;
  givingSadaqahCampaigns: (organizationUsername: string) => string;
  campaignDetail: (organizationUsername: string, campaignId: string) => string;
  amountDonation: (organizationUsername: string, campaignId: string) => string;
  paymentStatus: (paymentId: string) => string;
}

/**
 * These are pages that are used by Tmra main.
 */
export interface LandingMainPaths {
  howItWorks: string;
  pricing: string;
  customers: string;
  demoBooking: string;
  whyUs: string;
  faq: string;
  news: string;
  blog: string;
  help: string;
  checkout: string;
}

export interface MyPaths {
  my: string;
  donations: string;
  notifications: string;
  settings: string;
}

export function getLandingMainPaths(): LandingGenericPaths & LandingMainPaths {
  return {
    root: '/',
    privacy: '/privacy',
    terms: '/terms',
    about: '/about',
    contact: '/contact',
    signIn: '/user/login',
    join: '/user/signup/nonprofit',
    signup: '/user/signup/donor',
    resetPassword: '/user/reset-password',
    changePassword: (passwordId: string) => `/user/reset-password/${passwordId}/change-password`,
    howItWorks: '/how-it-works',
    pricing: '/pricing',
    customers: '/customers',
    zakat: '/zakat',
    giving_options: '/giving-options',
    verif: (verifId: string) => `/verif/${verifId}`,
    resendVerif: '/verif/resend',
    demoBooking: '/demo-booking',
    whyUs: '/why-us',
    faq: '/faq',
    news: '/news',
    blog: '/blog',
    help: '/help',
    checkout: '/checkout',
    organizationDetail: organizationUsername => `/org/${organizationUsername}`,
    givingSadaqahCampaigns: organizationUsername => `/org/${organizationUsername}/campaigns`,
    campaignDetail: (organizationUsername, campaignId) =>
      `/org/${organizationUsername}/campaign/${campaignId}`,
    amountDonation: (organizationUsername, campaignId) =>
      `/org/${organizationUsername}/campaign/${campaignId}/amount`,
    paymentStatus: paymentId => `/payment/${paymentId}/status`,
  };
}

export function getMyPaths(): MyPaths {
  return {
    my: '/my',
    donations: '/my/donations',
    notifications: '/my/notifications',
    settings: '/my/settings',
  };
}

export interface OrgDashboardPaths {
  onboarding: string;
  overview: string;
  insights: string;
  insights2: string;
  organization: string;
  campaigns: string;
  campaignsNew: string;
  campaignsDetail: (campaignId: string) => string;
  campaignsEdit: (campaignId: string) => string;
  donations: string;
  messages: string;
  messagesNew(campaignId: string): string;
  messagesList(campaignId: string): string;
  donors: string;
  users: string;
  settings: string;
  settingsPayment: string;
  settingsAppearance: string;
  settingsAccount: string;
  settingPassword: string;
  notifications: string;
  zakatTransactions: string;
}

export function getOrgDashboardPaths(orgId: string | undefined): OrgDashboardPaths {
  return {
    onboarding: `/onboarding/organization/${orgId}`,
    overview: `/manage/organization/${orgId}`,
    insights: `/manage/organization/${orgId}/insights`,
    insights2: `/manage/organization/${orgId}/insights2`,
    organization: `/manage/organization/${orgId}/organization`,
    campaigns: `/manage/organization/${orgId}/campaign`,
    campaignsNew: `/manage/organization/${orgId}/campaign/new`,
    campaignsDetail: (campaignId: string) => `/manage/organization/${orgId}/campaign/${campaignId}`,
    campaignsEdit: (campaignId: string) =>
      `/manage/organization/${orgId}/campaign/${campaignId}/edit`,
    donations: `/manage/organization/${orgId}/donation`,
    messages: `/manage/organization/${orgId}/message`,
    messagesNew: (campaignId: string) => `/manage/organization/${orgId}/message/${campaignId}/new/`,
    messagesList: (campaignId: string) =>
      `/manage/organization/${orgId}/message/${campaignId}/list/`,
    donors: `/manage/organization/${orgId}/donor`,
    users: `/manage/organization/${orgId}/user`,
    settings: `/manage/organization/${orgId}/settings`,
    settingsPayment: `/manage/organization/${orgId}/settings/payment`,
    settingsAppearance: `/manage/organization/${orgId}/settings/appearance`,
    settingsAccount: `/manage/organization/${orgId}/settings/account`,
    settingPassword: `/manage/organization/${orgId}/settings/password`,
    notifications: `/manage/organization/${orgId}/notifications`,
    zakatTransactions: `/manage/organization/${orgId}/zakat-transactions`,
  };
}

export interface AdminDashboardPaths {
  overview: string;
  organizations: string;
  users: string;
  notifications: string;
  settings: string;
}

export function getAdminDashboardPaths(): AdminDashboardPaths {
  return {
    overview: '/admin',
    organizations: '/admin/orgs',
    users: '/admin/users',
    notifications: '/admin/notifications',
    settings: '/admin/settings',
  };
}

export const PATH_AUTH = {
  signIn: '/user/login',
  signUpAsNonprofit: '/user/signup/nonprofit',
  resetPassword: '/reset-password',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/one'),
    pageTwo: path(ROOTS_DASHBOARD, '/two'),
    pageThree: path(ROOTS_DASHBOARD, '/three'),
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/app'),
    pageFour: path(ROOTS_DASHBOARD, '/app/four'),
    pageFive: path(ROOTS_DASHBOARD, '/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/app/six'),
  },
};
