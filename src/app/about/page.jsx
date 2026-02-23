import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import AboutView from 'src/sections/about/view/about-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.about')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <AboutView />;
}
