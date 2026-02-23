import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import { HomeView } from 'src/sections/home/home-view';

// ----------------------------------------------------------------------
export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string
  return {
    title: `${t('page.home')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <HomeView />;
}
