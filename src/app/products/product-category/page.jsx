import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';
import CategoriesView from 'src/sections/category/categories-items-view';

export async function generateMetadata() {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: `${t('page.products')} |  ${t(CONFIG.site.name)}`,
  };
}
export default function Page() {
  return <CategoriesView />;
}
