'use client';

import { useState, useEffect } from 'react';

import { useTranslate } from 'src/locales';
import { useGetBlogsQuery } from 'src/redux/api/front/api-blogs';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';
import Link from 'next/link';

// ----------------------------------------------------------------------
export function MediaCenterView() {
  const { t, i18n, currentLang } = useTranslate();
  const dir = i18n.dir();
  const [fetchData, setFetchData] = useState([]);
  const { data } = useGetBlogsQuery(currentLang.value);
  useEffect(() => {
    const check = () => {
      if (data) {
        setFetchData(data.data);
      }
    };
    check();
  }, [data]);

  //----------------------------------------------------------------------
  return (
    <>
      <PageBreadcrumb title="page.blogs" text="blog.text" />

      <section className="bg-[#f4f4f4] p-0">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {fetchData?.map((post, i) => (
              <article key={i} className="bg-white shadow-sm relative pb-2">
                <span className=" absolute top-2 left-2 z-10 items-center  bg-red-500 py-1 px-3 text-xs font-semibold text-white ">
                  {post.created_at}
                </span>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover line-clamp-2"
                />

                <div className="px-4 py-2  flex gap-1 ">
                  <Link href={`/blogs/${post.id}`}>
                    <h3 className="text-sm font-bold text-red-600  flex items-center justify-center h-5">
                      {post.title}
                    </h3>
                  </Link>
                </div>
                <div className="px-4 ">
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.content}</p>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="mt-4 inline-block text-sm font-semibold capitalize text-gray-800 hover:text-red-500"
                  >
                    read more ›
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
