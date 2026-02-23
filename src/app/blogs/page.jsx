import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import { MediaCenterView } from 'src/sections/blogs/view/media-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.blogs')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <MediaCenterView />;
}
