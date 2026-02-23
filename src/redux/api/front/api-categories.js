import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_categories'];

const ApiCategories = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getCategories: build.query({
        query: (lang) => ({
          url: `categories`,
          lang,
        }),
        providesTags: ['get_categories'],
      }),
    }),
  });
export default ApiCategories;
export const { useGetCategoriesQuery } = ApiCategories;
