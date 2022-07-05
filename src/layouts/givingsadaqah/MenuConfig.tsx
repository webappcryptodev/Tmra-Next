// import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import { Icon } from '@iconify/react';
// routes
// import { getLandingMainPaths } from '@routes/paths';
// import config from '@configuration';

// ----------------------------------------------------------------------

// const paths = getLandingMainPaths();

const ICON_SIZE = {
  width: 22,
  height: 22,
};

// Disable first for GivingSadaqah
const menuConfig = [
  {
    titleKey: 'Home',
    key: 'menu.home',
    path: '/',
    icon: <Icon icon={'ant-design:home-filled'} {...ICON_SIZE} />,
    enabled: true,
  },
  {
    titleKey: 'About Us',
    key: 'menu.about',
    path: '/about',
    icon: <Icon icon={'fa-solid:info-circle'} {...ICON_SIZE} />,
    enabled: true,
  },
  {
    titleKey: 'Blog',
    key: 'menu.blog',
    path: '/blog',
    icon: <Icon icon={'brandico:blogger-rect'} {...ICON_SIZE} />,
    enabled: true,
  },
  {
    titleKey: 'Campaigns',
    key: 'menu.campaigns',
    path: '/org/givingsadaqah/campaign',
    icon: <Icon icon={'ic:round-grain'} {...ICON_SIZE} />,
    enabled: true,
  },
  {
    titleKey: 'Donate',
    key: 'menu.donate',
    path: '/donate',
    icon: <Icon icon={'fa-solid:donate'} {...ICON_SIZE} />,
    enabled: false,
    children: [
      {
        subheaderKey: 'Giving Options',
        items: [
          {
            titleKey: 'Giving Options',
            key: 'menu.giving_options',
            path: '/giving-options',
            enabled: true,
          },
        ],
      },
      {
        subheaderKey: 'Ongoing Appeals',
        items: [
          {
            titleKey: 'Ongoing Appeals',
            key: 'menu.ongoing_appeals',
            path: '/ongoing-appeals',
            enabled: true,
          },
        ],
      },
    ],
  },
  {
    titleKey: 'Other Service',
    key: 'menu.other-service',
    path: '/zakat',
    icon: <Icon icon={'carbon:cloud-service-management'} {...ICON_SIZE} />,
    enabled: true,
    children: [
      {
        subheaderKey: 'Zakat Calculator',
        items: [
          {
            titleKey: 'Zakat Calculator',
            key: 'menu.zakat',
            path: '/zakat',
            enabled: true,
          },
        ],
      },
    ],
  },
  {
    titleKey: 'Contact Us',
    key: 'menu.contact',
    path: '/contact',
    icon: <Icon icon={'ic:round-connect-without-contact'} {...ICON_SIZE} />,
    enabled: false,
    // children: [
    //   {
    //     subheaderKey: 'Privacy Policy',
    //     items: [
    //       {
    //         titleKey: 'Privacy Policy',
    //         key: 'menu.privacy',
    //         path: '/terms',
    //         enabled: true,
    //       },
    //     ],
    //   },
    // ],
  },
  {
    titleKey: 'Terms of Use',
    key: 'menu.terms',
    path: '/terms',
    icon: <Icon icon={'dashicons:testimonial'} {...ICON_SIZE} />,
    enabled: false,
  },
  {
    titleKey: 'FAQ',
    key: 'menu.faq',
    path: '/faq',
    icon: <Icon icon={'wpf:faq'} {...ICON_SIZE} />,
    enabled: false,
  },
];

export default menuConfig;
