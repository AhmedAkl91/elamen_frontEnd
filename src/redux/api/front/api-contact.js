import { apiService as api } from '../../apiService';

export const addTagTypes = ['messages', 'get_messages'];

const ApiContacts = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      addContact: build.mutation({
        query: (data) => ({
          url: `contact`,
          method: 'POST',
          data,
        }),
        invalidatesTags: (result) => ['messages', { type: 'messages', id: result?.seq }],
      }),
    }),
  });
export default ApiContacts;
export const { useAddContactMutation } = ApiContacts;
