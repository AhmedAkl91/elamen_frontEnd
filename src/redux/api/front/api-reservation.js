import { apiService as api } from '../../apiService';

export const addTagTypes = ['add_request', 'requests'];

const ApiServicesRequests = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      AddRequest: build.mutation({
        query: (data) => ({
          url: `service-requests/add-request`,
          method: 'POST',
          data,
        }),
        invalidatesTags: ['requests', 'add_request'],
      }),
    }),
  });
export default ApiServicesRequests;
export const { useAddRequestMutation } = ApiServicesRequests;
