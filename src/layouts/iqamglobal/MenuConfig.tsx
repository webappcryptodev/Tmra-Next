//
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import { getLandingMainPaths } from '@routes/paths';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const paths = getLandingMainPaths();

const menuConfig = [
  {
    title: 'Our Story',
    key: 'menu.our-story',
    path: '/#our_story',
    icon: <Iconify icon={bookOpenFill} {...ICON_SIZE} />,
    spyTo: 'our_story',
    enabled: true,
  },
  {
    title: 'Impact',
    key: 'menu.impact',
    path: '/#charity_impact',
    icon: <Iconify icon={'healthicons:i-note-action'} {...ICON_SIZE} />,
    spyTo: 'charity_impact',
    enabled: true,
  },
  {
    title: 'Why Us',
    key: 'menu.why-us',
    path: '/#why_us',
    icon: <Iconify icon={'fluent:people-checkmark-20-regular'} {...ICON_SIZE} />,
    spyTo: 'why_us',
    enabled: true,
  },
  {
    title: 'Our Campaign',
    key: 'menu.campaigns.our',
    path: '/#campaign',
    icon: <Iconify icon={'ic:baseline-campaign'} {...ICON_SIZE} />,
    spyTo: 'campaign',
    enabled: true,
  },
  // {
  //   title: 'Home',
  //   key: 'menu.home',
  //   icon: <Iconify icon={'eva:home-outline'} {...ICON_SIZE} />,
  //   path: '/',
  // },
  // {
  //   title: 'Campaigns',
  //   key: 'menu.campaigns',
  //   icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
  //   path: '#',
  // },
  // {
  //   title: 'Marketplace',
  //   key: 'menu.marketplace',
  //   icon: <Iconify icon={'eva:shopping-bag-outline'} {...ICON_SIZE} />,
  //   path: '#',
  // },
  {
    title: 'Other Services',
    key: 'menu.other-service',
    path: '#',
    icon: <Iconify icon={'ic:round-devices-other'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'menu.other-service',
        items: [
          { title: 'Zakat Calculator', key: 'menu.zakat', path: paths.zakat },
          // { title: 'Gift Cards', key: 'menu.gift-cards', path: '#' },
        ],
      },
    ],
  },
  // {
  //   title: 'Community',
  //   key: 'menu.community',
  //   icon: <Iconify icon={'fluent:people-community-16-regular'} {...ICON_SIZE} />,
  //   path: '#',
  // },
  {
    title: 'Blog',
    key: 'menu.blog',
    icon: <Iconify icon={'fluent:comment-note-20-regular'} {...ICON_SIZE} />,
    path: '/blog',
  },
];

export default menuConfig;
