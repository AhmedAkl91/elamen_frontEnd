import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_products'];

const ApiAbout = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAbout: build.query({
        query: (lang) => ({
          url: `about`,
          lang,
        }),
        providesTags: ['get_products'],
      }),
    }),
  });
export default ApiAbout;
export const { useGetAboutQuery } = ApiAbout;
