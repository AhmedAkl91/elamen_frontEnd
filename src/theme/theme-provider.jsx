'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// import { useTranslate } from 'src/locales';
import { useTranslate } from 'src/locales';

import { useSettingsContext } from 'src/components/settings';

import { createTheme } from './create-theme';
import { RTL } from './with-settings/right-to-left';
import { schemeConfig } from './color-scheme-script';
// ----------------------------------------------------------------------
export function CustomThemeProvider({ children }) {
  const { currentLang } = useTranslate();
  const settings = useSettingsContext();
  const theme = createTheme(currentLang?.systemValue, settings);
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeProvider
        theme={theme}
        defaultMode={schemeConfig.defaultMode}
        modeStorageKey={schemeConfig.modeStorageKey}
      >
        <CssBaseline />
        <RTL direction={settings.direction}>{children}</RTL>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
