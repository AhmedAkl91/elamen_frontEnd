import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_home'];

const ApiHome = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getHome: build.query({
        query: (lang) => ({
          url: `home`,
          lang,
        }),
        providesTags: ['get_home'],
      }),
    }),
  });
export default ApiHome;
export const { useGetHomeQuery } = ApiHome;
