import { ReactElement } from 'react';

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: ReactElement;
  key: string;
  children?: {
    subheader: string;
    items: {
      title: string;
      key: string;
      path: string;
    }[];
  }[];
  spyTo?: string;
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};
