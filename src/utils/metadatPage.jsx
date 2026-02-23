import { getServerTranslations } from 'src/locales/server';

export async function generateMetadata({ title, description }) {
  const { t } = await getServerTranslations(); // here use your way to get translation string

  return {
    title: t(`${title}`),
    description: t(`${description}`),
  };
}
