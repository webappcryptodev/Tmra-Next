/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
import { ReactNode, useState } from 'react';
import RuntimeConfigs from '@utils/runtime-configs';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import orgSidebarConfig from './OrgSidebarConfig';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
}));

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

const { publicRuntimeConfig } = getConfig() as RuntimeConfigs;

type DashboardLayoutProps = {
  children?: ReactNode;
  organization?: { _id?: string | null; name?: string | null; favicon?: string | null } | null;
};

export default function OrgDashboardLayout({ children, organization }: DashboardLayoutProps) {
  const theme = useTheme();
  const { collapseClick } = useCollapseDrawer();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const faviconUrl = `${publicRuntimeConfig.bunny.cdn.urlMedia}/${organization?.favicon}?w=128`;

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      {organization?._id && (
        <DashboardSidebar
          isOpenSidebar={open}
          onCloseSidebar={() => setOpen(false)}
          currentName={organization?.name}
          currentSubtitle={organization ? t('core.organization') : undefined}
          currentImageUrl={faviconUrl}
          navConfig={orgSidebarConfig({ organization: { id: organization._id } })}
        />
      )}

      <MainStyle
        sx={{
          transition: theme.transitions.create('margin', {
            duration: theme.transitions.duration.complex,
          }),
          ...(collapseClick && {
            ml: '102px',
          }),
        }}
      >
        {children}
      </MainStyle>
    </RootStyle>
  );
}
