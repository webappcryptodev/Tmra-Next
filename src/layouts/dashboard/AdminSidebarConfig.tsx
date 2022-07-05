// routes
import { NavConfig } from '@components/NavSection';
import config from '@configuration';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
// components
import SvgIconStyle from '../../components/SvgIconStyle';
import { getAdminDashboardPaths } from '../../routes/paths';

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

const adminSidebarConfig: () => NavConfig = () => {
  const paths = getAdminDashboardPaths();
  return [
    // GENERAL
    // ----------------------------------------------------------------------
    {
      subheaderKey: 'core.section.platform',
      enabled: true,
      items: [
        {
          titleKey: 'core.menu.overview',
          path: paths.overview,
          icon: ICONS.dashboard,
          enabled: true,
          exactPath: true,
        },
        {
          titleKey: 'orgs.menu.organizations',
          path: paths.organizations,
          icon: <BusinessCenterIcon />,
          enabled: true,
        },
        {
          titleKey: 'core.menu.users',
          path: paths.users,
          icon: <PeopleIcon />,
          enabled: true,
        },
      ],
    },

    // MANAGEMENT
    // ----------------------------------------------------------------------
    {
      subheaderKey: 'orgs.section.management',
      enabled:
        config.admin.dashboard.notifications.enabled || config.admin.dashboard.settings.enabled,
      items: [
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
        },
      ],
    },
  ];
};

export default adminSidebarConfig;
