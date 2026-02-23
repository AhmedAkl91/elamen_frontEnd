import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import CategoryView from 'src/sections/category/category-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.experience')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page({ params }) {
  const { id } = params;
  return <CategoryView id={id} />;
}
