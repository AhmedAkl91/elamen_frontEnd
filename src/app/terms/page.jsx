import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import TermsView from 'src/sections/terms/view/terms-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.terms')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <TermsView />;
}
