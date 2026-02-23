import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import PrivacyPolicyView from 'src/sections/privacy/view/privacy-policy-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string
  return {
    title: `${t('page.privacy')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <PrivacyPolicyView />;
}
