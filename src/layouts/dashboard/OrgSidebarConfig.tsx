// routes
import { NavConfig } from '@components/NavSection';
import config from '@configuration';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CampaignIcon from '@mui/icons-material/Campaign';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import ForumIcon from '@mui/icons-material/Forum';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleIcon from '@mui/icons-material/People';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// components
import SvgIconStyle from '../../components/SvgIconStyle';
import { getOrgDashboardPaths } from '../../routes/paths';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const orgSidebarConfig: ({ organization: { id: string } }) => NavConfig = ({ organization }) => {
  const paths = getOrgDashboardPaths(organization.id);
  return [
    // GENERAL
    // ----------------------------------------------------------------------
    {
      subheaderKey: 'orgs.section.operations',
      items: [
        {
          titleKey: 'core.menu.overview',
          path: paths.overview,
          icon: ICONS.dashboard,
          enabled: true,
          exactPath: true,
        },
        {
          titleKey: 'fundraising.menu.insights',
          path: paths.insights,
          icon: <LightbulbIcon />,
          enabled: config.org.dashboard.insights.enabled,
        },
        {
          titleKey: 'orgs.menu.organization',
          path: paths.organization,
          icon: <BusinessCenterIcon />,
          enabled: false,
        },
        {
          titleKey: 'fundraising.menu.campaigns',
          path: paths.campaigns,
          icon: <CampaignIcon />,
          enabled: true,
        },
        {
          titleKey: 'fundraising.menu.donations',
          path: paths.donations,
          icon: <AccountBalanceWalletIcon />,
          enabled: config.org.dashboard.donations.enabled,
        },
        {
          titleKey: 'fundraising.menu.messages',
          path: paths.messages,
          icon: <ForumIcon />,
          enabled: config.org.dashboard.messages.enabled,
        },
        {
          titleKey: 'fundraising.menu.donors',
          path: paths.donors,
          icon: <PersonSearchIcon />,
          enabled: config.org.dashboard.donors.enabled,
        },
        {
          titleKey: 'fundraising.menu.zakat_transactions',
          path: paths.zakatTransactions,
          icon: <ReceiptLongIcon />,
          enabled: true,
        },
      ],
    },

    // MANAGEMENT
    // ----------------------------------------------------------------------
    {
      subheaderKey: 'orgs.section.management',
      items: [
        {
          titleKey: 'core.menu.users',
          path: paths.users,
          icon: <PeopleIcon />,
          enabled: config.admin.dashboard.user.enabled,

          // children: [
          //   { title: 'Four', path: PATH_DASHBOARD.app.pageFour },
          //   { title: 'Five', path: PATH_DASHBOARD.app.pageFive },
          //   { title: 'Six', path: PATH_DASHBOARD.app.pageSix },
          // ],
        },
        {
          titleKey: 'core.menu.notifications',
          path: paths.notifications,
          icon: <EditNotificationsIcon />,
          enabled: config.admin.dashboard.notifications.enabled,
        },
        {
          titleKey: 'core.menu.settings',
          icon: <SettingsIcon />,
          path: paths.settings,
          enabled: config.admin.dashboard.settings.enabled,
          children: [
            {
              titleKey: 'Account',
              path: paths.settingsAccount,
              icon: <SettingsIcon />,
              enabled: true,
            },
            {
              titleKey: 'Appearance',
              path: paths.settingsAppearance,
              icon: <SettingsIcon />,
              enabled: true,
            },
            {
              titleKey: 'Payment',
              path: paths.settingsPayment,
              icon: <SettingsIcon />,
              enabled: true,
            },
          ],
        },
      ],
    },
  ];
};

export default orgSidebarConfig;
