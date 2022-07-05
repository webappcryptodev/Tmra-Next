import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import pricetagsFill from '@iconify/icons-eva/pricetags-fill';
import logInFill from '@iconify/icons-eva/log-in-fill';
import playCircleFill from '@iconify/icons-eva/play-circle-fill';
import { Icon } from '@iconify/react';
// routes
import { getLandingMainPaths } from '@routes/paths';
import config from '@configuration';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const landingMainPaths = getLandingMainPaths();

const menuConfig = [
  {
    titleKey: 'How It Works',
    key: 'menu.how-it-works',
    path: landingMainPaths.howItWorks,
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    enabled: true,
  },
  {
    titleKey: 'Pricing',
    key: 'menu.pricing',
    path: landingMainPaths.pricing,
    icon: <Icon icon={pricetagsFill} {...ICON_SIZE} />,
    enabled: config.main.landing.pricing.enabled,
  },
  {
    titleKey: 'Sign in',
    key: 'menu.sign-in',
    path: landingMainPaths.signIn,
    icon: <Icon icon={logInFill} {...ICON_SIZE} />,
    enabled: true,
  },
  {
    titleKey: 'Start Free',
    key: 'menu.start-free',
    path: landingMainPaths.join,
    icon: <Icon icon={playCircleFill} {...ICON_SIZE} />,
    enabled: true,
  },
];

export default menuConfig;
