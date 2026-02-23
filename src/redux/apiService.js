import Axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

import { BASE_URL_FRONT } from 'src/config';

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params, lang }) => {
    try {
      const result = await Axios({
        baseURL: BASE_URL_FRONT,
        url,
        method,
        data,
        params,
        headers: {
          'Accept-Language': lang || 'en',
        },
      });

      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status || 'FETCH_ERROR',
          data: axiosError.response?.data || axiosError.message || 'Something went wrong',
        },
      };
    }
  };

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  reducerPath: 'apiService',
});

export default apiService;
