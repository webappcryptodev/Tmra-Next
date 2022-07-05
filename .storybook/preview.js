import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import { muiTheme } from 'storybook-addon-material-ui5';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  i18n,
  locale: 'en-US',
  locales: {
    'en-US': { title: 'English (United States)', left: '🇺🇸' },
    'ar-SA': { title: 'Arabic (Saudi Arabia)', left: '🇸🇦' },
    'id-ID': { title: 'Indonesian (Indonesia)', left: '🇮🇩' },
  },
};

// function RtlDecoratorInner(Story) {
//   const { i18n } = useTranslation();
//   const themeDirection = i18n.language.startsWith('ar') ? 'rtl' : 'ltr';
//   return (
//     <div dir={themeDirection}>
//       <Story />
//     </div>
//   );
// }

function RtlDecorator(Story, context) {
  // context.parameters;
  console.log('parameters:', context.parameters);
  const themeDirection = context.parameters.i18n.language?.startsWith('ar') ? 'rtl' : 'ltr';
  return (
    <div dir={themeDirection}>
      <Story />
    </div>
  );
  // return <Suspense fallback={<div>Loading locale...</div>}>{RtlDecoratorInner(Story)}</Suspense>;
}

export const decorators = [RtlDecorator, muiTheme()];
