import { apiService as api } from '../../apiService';

export const addTagTypes = ['blogs', 'get_blog_details'];

const ApiBlogDetails = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getBlogDetails: build.query({
        query: ({ id, lang }) => ({
          url: `blogs/${id}`,
          lang,
        }),
        providesTags: (result) => [{ type: 'blogs', id: result?.seq }],
      }),
    }),
  });
export default ApiBlogDetails;
export const { useGetBlogDetailsQuery } = ApiBlogDetails;
