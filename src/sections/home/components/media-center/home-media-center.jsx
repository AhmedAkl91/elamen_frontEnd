import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetArticlesListQuery } from 'src/redux/api/front/api-articles';

import MediaItem from './components/media-item';

export default function HomeMediaCenter({ title11, title12 }) {
  const { currentLang } = useTranslate();
  const [dataArticles, setDataArticles] = useState([]);
  const { data: articles, isLoading } = useGetArticlesListQuery();
  useEffect(() => {
    const check = () => {
      if (articles) {
        setDataArticles(articles.articles.articles);
      }
    };
    check();
  }, [articles]);
  return (
    <section className="bg-white relative py-5">
      <div className="relative text-center bg-cover bg-center bg-no-repeat h-auto">
        <div className="relative z-10 top-[20%]">
          <p className="text-[var(--thm-base-light)] uppercase tracking-wide font-semibold">
            {title11}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--thm-base-dark)] max-sm:text-2xl">
            {title12}
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid gap-4 px-4 w-[100vw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative ">
        {dataArticles.map((article) => (
          <MediaItem
            key={article.id}
            id={article.id}
            article={article?.translations[currentLang.value]}
          />
        ))}
      </div>
    </section>
  );
}
