/* eslint-disable @typescript-eslint/no-unused-vars */
// routes
import { getMyPaths, PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavConfig } from '@components/NavSection';

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

const mySidebarConfig: () => NavConfig = () => {
  const paths = getMyPaths();
  return [
    // GENERAL
    // ----------------------------------------------------------------------
    {
      subheaderKey: 'core.section.general',
      items: [
        {
          titleKey: 'fundraising.menu.my_donations',
          path: paths.my,
          exactPath: true,
          icon: <AccountBalanceWalletIcon />,
          enabled: true,
        },
        // {
        //   titleKey: 'fundraising.menu.my_donations',
        //   path: paths.donations,
        //   icon: <AccountBalanceWalletIcon />,
        //   enabled: true,
        // },
      ],
    },

    // MANAGEMENT
    // ----------------------------------------------------------------------
    {
      subheaderKey: 'core.section.platform',
      items: [
        {
          titleKey: 'core.menu.notifications',
          path: paths.notifications,
          icon: <EditNotificationsIcon />,
          enabled: false,
        },
        {
          titleKey: 'core.menu.settings',
          path: paths.settings,
          icon: <SettingsIcon />,
          enabled: true,
        },
      ],
    },
  ];
};

export default mySidebarConfig;
