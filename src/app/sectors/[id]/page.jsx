import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';
import SectorDetailsView from 'src/sections/sectors/sector-details-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.sectors')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page({ params }) {
  const { id } = params;
  return <SectorDetailsView id={id} />;
}
