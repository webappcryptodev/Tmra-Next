import { ReactNode, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { useAppSelector } from '@redux/hooks';
import mySidebarConfig from './MySidebarConfig';
import adminSidebarConfig from './AdminSidebarConfig';
import { useTranslation } from 'next-i18next';

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

type DashboardLayoutProps = {
  children?: ReactNode;
};

export default function AdminDashboardLayout({ children }: DashboardLayoutProps) {
  const theme = useTheme();
  const { collapseClick } = useCollapseDrawer();
  const [open, setOpen] = useState(false);
  const currentUser = useAppSelector(state => state.currentUser);
  const { t } = useTranslation();

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        navConfig={adminSidebarConfig()}
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
        currentName={t('app.name')}
        currentSubtitle={t('core.platform')}
        currentImageUrl={'/static/logo.svg'}
      />

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
