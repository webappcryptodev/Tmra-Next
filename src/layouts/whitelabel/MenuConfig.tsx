import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import { Icon } from '@iconify/react';
// routes
// import { getLandingMainPaths } from '@routes/paths';
// import config from '@configuration';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    titleKey: 'Our Story',
    key: 'menu.our-story',
    path: '#',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    spyTo: 'our_story',
    enabled: true,
  },
  {
    titleKey: 'Impact',
    key: 'menu.impact',
    path: '#',
    icon: <Icon icon={'healthicons:i-note-action'} {...ICON_SIZE} />,
    spyTo: 'charity_impact',
    enabled: true,
  },
  {
    titleKey: 'Why Us',
    key: 'menu.why-us',
    path: '#',
    icon: <Icon icon={'fluent:people-checkmark-20-regular'} {...ICON_SIZE} />,
    spyTo: 'why_us',
    enabled: true,
  },
  // {
  //   titleKey: 'Testimonials',
  //   key: 'menu.testimonials',
  //   path: '#',
  //   icon: <Icon icon={'dashicons:testimonial'} {...ICON_SIZE} />,
  //   spyTo: 'testimonials',
  //   enabled: true,
  // },
];

export default menuConfig;
