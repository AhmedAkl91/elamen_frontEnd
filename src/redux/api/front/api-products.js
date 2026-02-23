import { apiService as api } from '../../apiService';

export const addTagTypes = ['get_products'];

const ApiProducts = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getProducts: build.query({
        query: (lang) => ({
          url: `products`,
          lang,
        }),
        providesTags: ['get_products'],
      }),
    }),
  });
export default ApiProducts;
export const { useGetProductsQuery } = ApiProducts;
