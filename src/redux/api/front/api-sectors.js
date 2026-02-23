import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_sectors'];

const ApiSectors = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getSectors: build.query({
        query: (lang) => ({
          url: `sectors`,
          lang,
        }),
        providesTags: ['get_sectors'],
      }),
    }),
  });
export default ApiSectors;
export const { useGetSectorsQuery } = ApiSectors;
