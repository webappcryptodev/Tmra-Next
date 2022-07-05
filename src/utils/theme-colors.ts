import { themesColor as defaultThemeColor } from './mock-data/theme-colors';

export const getHeaderFooterColor = appereances => {
  let color = 'primary.main';
  if (appereances?.usePallete) {
    if (appereances?.headerAndFooter) {
      color = appereances?.headerAndFooter;
    }
  } else if (appereances?.themesColor) {
    color = appereances?.themesColor;
  }
  return color;
};

export const getAccentColor = appereances => {
  let color = 'primary.main';
  if (appereances?.usePallete) {
    if (appereances?.accent) {
      color = appereances?.accent;
    }
  } else if (appereances?.themesColor) {
    color = defaultThemeColor[appereances?.themesColor.toLowerCase()].darker;
  }
  return color;
};

export const getButtonColor = appereances => {
  let color = 'primary.main';
  if (appereances?.usePallete) {
    if (appereances?.lButton) {
      color = appereances?.lButton;
    }
  } else if (appereances?.themesColor) {
    color = defaultThemeColor[appereances?.themesColor.toLowerCase()].lighter;
  }
  return color;
};
