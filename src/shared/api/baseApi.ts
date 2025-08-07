import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getFromLS } from '@/shared/helpers/manageLocalStorage';

import { ApiTags } from './apiTags';
import { apiAccessTokenIsBrokenEvent } from './apiAccessTokenIsBrokenEvent';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.yeatwork.ru/',
  credentials: 'include',
  prepareHeaders: (headers) => {
    const accessToken = getFromLS('accessToken');

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 && args.url !== '/auth/refresh') {
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh',
        method: 'GET',
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const accessToken = (refreshResult.data as { access_token?: string })?.access_token;
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(apiAccessTokenIsBrokenEvent());
    }
  }

  return result;
};

export const baseApi = createApi({
  tagTypes: Object.values(ApiTags),
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
