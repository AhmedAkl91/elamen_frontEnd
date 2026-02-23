import { apiService as api } from '../../apiService';

export const addTagTypes = ['products', 'get_product_Details'];
const ApiProductDetails = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getProductDetails: build.query({
        query: ({ id, lang }) => ({
          url: `products/${id}`,
          lang,
        }),
        providesTags: (result) => [{ type: 'products', id: result?.seq }],
      }),
    }),
  });
export default ApiProductDetails;

export const { useGetProductDetailsQuery } = ApiProductDetails;
