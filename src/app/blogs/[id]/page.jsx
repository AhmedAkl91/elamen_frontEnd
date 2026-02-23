import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import { MediaView } from 'src/sections/blogs/details/media-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.media')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page({ params }) {
  const { id } = params;
  return <MediaView id={id} />;
}
