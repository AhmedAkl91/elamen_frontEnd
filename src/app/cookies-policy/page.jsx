import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import CookiesPolicyView from 'src/sections/cookies-policy/view/cookies-policy-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.cookies')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <CookiesPolicyView />;
}
