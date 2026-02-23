'use client';

import { useTranslate } from 'src/locales';
import { useGetBlogsQuery } from 'src/redux/api/front/api-blogs';
import { PageBreadcrumb } from 'src/layouts/main/components/header/view/breadcrumb-desktop';

import MediaItem from './media-item';

// ----------------------------------------------------------------------

export function MediaView({ id }) {
  const { t, currentLang } = useTranslate();

  const { data, isLoading, isError } = useGetBlogsQuery(currentLang.value);
  const blogs = data?.data;

  const blogDetails = data?.data?.find((el) => el.id === Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading media</div>;
  }

  if (!blogDetails) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <PageBreadcrumb
        title={blogDetails?.title}
        text="blog.text"
        url="/blogs"
        parent="page.blogs"
      />
      <MediaItem id={id} article={blogDetails} articles={blogs || []} />
    </>
  );
}
