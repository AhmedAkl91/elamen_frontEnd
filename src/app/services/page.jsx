import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import { ServicesView } from 'src/sections/services/view/services-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.services')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <ServicesView />;
}
