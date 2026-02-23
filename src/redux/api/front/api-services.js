import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_services'];

const apiServices = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getServices: build.query({
        query: (lang) => ({
          url: `services-faqs`,
          lang,
        }),
        providesTags: ['get_services'],
      }),
    }),
  });
export default apiServices;
export const { useGetServicesQuery } = apiServices;
