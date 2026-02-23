import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_config'];

const ApiConfig = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getConfig: build.query({
        query: (lang) => ({
          url: `settings`,
          lang,
        }),
        providesTags: ['get_config'],
      }),
    }),
  });
export default ApiConfig;
export const { useGetConfigQuery } = ApiConfig;
