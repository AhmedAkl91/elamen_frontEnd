import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_blogs'];

const ApiBlogs = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getBlogs: build.query({
        query: (lang) => ({
          url: `blogs`,
          lang,
        }),
        providesTags: ['get_blogs'],
      }),
    }),
  });
export default ApiBlogs;
export const { useGetBlogsQuery } = ApiBlogs;
