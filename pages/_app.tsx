// scroll bar
import NotistackProvider from '@components/NotistackProvider';
import ProgressBar from '@components/ProgressBar';
import RtlLayout from '@components/RtlLayout';
import ThemePrimaryColor from '@components/ThemePrimaryColor';
import { FusionAuthProvider } from '@contexts/FusionAuthContext';
import { AuthProvider } from '@contexts/JWTContext';
import { RealmUrqlProvider } from '@contexts/RealmUrqlContext';
import { CacheProvider, EmotionCache } from '@emotion/react';
// contexts
import { store } from '@redux/store';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// editor
import '../src/utils/highlight';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import 'simplebar/src/simplebar.css';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
import { SettingsProvider } from 'src/contexts/SettingsContext';
// theme
import ThemeConfig from 'src/theme';
import GlobalStyles from 'src/theme/globalStyles';
// utils
import createEmotionCache from 'src/utils/createEmotionCache';

import '@formatjs/intl-displaynames/polyfill';
import '@formatjs/intl-displaynames/locale-data/ar';
import '@formatjs/intl-displaynames/locale-data/en';
import '@formatjs/intl-displaynames/locale-data/id';

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const themeDirection = router.locale?.startsWith('ar') ? 'rtl' : 'ltr';

  return (
    <AuthProvider>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <ThemeConfig themeDirection={themeDirection}>
              <ThemePrimaryColor>
                <RtlLayout>
                  <NotistackProvider>
                    <Provider store={store}>
                      <FusionAuthProvider>
                        <RealmUrqlProvider>
                          {/* <NoSsr>
                  <Settings />
                </NoSsr> */}
                          <GlobalStyles />
                          <ProgressBar />
                          {/* Hendy's note: Disable LoadingScreen first - https://www.notion.so/hendyirawan/FE-Loading-Page-Logo-8ff3bc94e1dd46a4ad0ee817c6519cd6 */}
                          {/* <LoadingScreen /> */}
                          <Component {...pageProps} />
                        </RealmUrqlProvider>
                      </FusionAuthProvider>
                    </Provider>
                  </NotistackProvider>
                </RtlLayout>
              </ThemePrimaryColor>
            </ThemeConfig>
          </CacheProvider>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);

// import React from 'react';
// import { AppProps } from 'next/app';
// import '@styles/global.css';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { Hydrate } from 'react-query/hydration';
// import { Provider } from 'react-redux';
// // theme
// import ThemeConfig from '../src/theme';
// import GlobalStyles from '../src/theme/globalStyles';

// function MyApp({ Component, pageProps, ...rest }: AppProps): JSX.Element {
//   const queryClient = new QueryClient();
//   return (
//     <ThemeConfig>
//       <GlobalStyles />
//       <QueryClientProvider client={queryClient}>
//         <Hydrate state={pageProps.dehydratedState}>
//           <Provider store={store}>
//             <Component {...pageProps} />
//           </Provider>
//         </Hydrate>
//       </QueryClientProvider>
//     </ThemeConfig>
//   );
// }
