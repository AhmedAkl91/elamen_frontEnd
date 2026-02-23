import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';
import SectorsView from 'src/sections/sectors/sectors-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.sectors')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <SectorsView />;
}
