'use client';

import { useTranslate } from 'src/locales';
import { useGetHomeQuery } from 'src/redux/api/front/api-home';
import { useGetAboutQuery } from 'src/redux/api/front/api-about';

import CometBlog from './components/blog';
import Company from './components/company';
import Categories from './components/categories';
import Distributor from './components/distributor';
import HomeFeature from './components/home-feature';
import { SliderView } from './components/slider-view';
import HomeProducts from './components/home-products';
import TitleProducts from './components/title-products';
import Sectors from './components/sectors';
import { useGetSectorsQuery } from 'src/redux/api/front/api-sectors';
import { SplashScreen } from 'src/components/loading-screen';

export function HomeView() {
  const { currentLang, t } = useTranslate();
  const { i18n } = useTranslate();
  const dir = i18n.dir();
  const { data: home, isLoading } = useGetHomeQuery(currentLang.value);
  const { data: about } = useGetAboutQuery(currentLang.value);

  const { data: sectors } = useGetSectorsQuery(currentLang.value);

  // or loader
  const companyData = home?.company_detail?.[0];
  const currentCategories = home?.categories?.filter((cat) => cat.is_home) || [];
  const sectorsData = sectors?.data || [];

  if (isLoading || !home) {
    return <SplashScreen />;
  }

  return (
    <>
      <SliderView slider={home?.slider} />
      <HomeFeature features={home?.slider_features} />
      <Categories categories={home?.categories} />
      <Distributor distributor={home?.exclusive_distributors} />

      <Sectors sectors={sectorsData} dir={dir} />

      {currentCategories.map((el) => (
        <div key={el.id}>
          <TitleProducts title={el.name} subtitle={el.slug} text={el.description} />
          <HomeProducts slides={3} products={home.products} id={el.id} />
        </div>
      ))}

      <TitleProducts title={t('home.about.title')} text={t('home.about.sub.title')} />
      <Company detail={about?.about?.main} />
      <TitleProducts title={t('blog.title')} text={t('blog.text')} />
      <CometBlog blogs={home?.blogs} />
    </>
  );
}
