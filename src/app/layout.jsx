import 'src/styles/main.css';

import { Cairo } from 'next/font/google';

import img from 'src/assets/fav.png';
import { CONFIG } from 'src/config-global';
import { primary } from 'src/theme/core/palette';
import { LocalizationProvider } from 'src/locales';
import { detectLanguage } from 'src/locales/server';
import ReduxProvider from 'src/redux/redux-provider';
import { I18nProvider } from 'src/locales/i18n-provider';
import { CustomThemeProvider } from 'src/theme/theme-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { detectSettings } from 'src/components/settings/server';
import { defaultSettings, SettingsProvider } from 'src/components/settings';
// ----------------------------------------------------------------------
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default async function RootLayout({ children }) {
  const lang = CONFIG.isStaticExport ? 'en' : await detectLanguage();

  const isRTL = ['ar'].includes(lang);

  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();
  return (
    <html lang={lang ?? 'en'} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        {/* <meta name="robots" content="noindex" /> */}
        <meta charSet="utf-8" />
        {/* <link rel="icon" type="image/png" sizes="32x32" href={img.src} /> */}

        <link rel="preconnect" href="http://api.elkabbanylawfirm.com" />
        <link rel="dns-prefetch" href="http://api.elkabbanylawfirm.com" />
        <link rel="icon" type="image/png" sizes="32x32" href={img.src} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />

        {/* Schema.org */}
      </head>
      <body className={cairo.className}>
        {getInitColorSchemeScript}
        <I18nProvider lang={CONFIG.isStaticExport ? undefined : lang}>
          <ReduxProvider>
            <LocalizationProvider>
              <SettingsProvider
                settings={settings}
                caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
              >
                <CustomThemeProvider>
                  <MotionLazy>
                    <Snackbar />
                    <ProgressBar />
                    <div id="smooth-wrapper">
                      <div id="smooth-content">{children}</div>
                    </div>
                  </MotionLazy>
                </CustomThemeProvider>
              </SettingsProvider>
            </LocalizationProvider>
          </ReduxProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
