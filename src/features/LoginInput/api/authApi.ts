import { baseApi } from '@/shared/api/baseApi';
import { removeFromLS, setToLS } from '@/shared/helpers/manageLocalStorage';
import {
  LoginBodyRequest,
  LoginResponse,
  RefreshResponse,
  SignUpBodyRequest,
  SignUpResponse,
} from '../model/types/auth';
import { ExtraArgument } from '@/shared/config/store/types';
import { ROUTES } from '@/shared/config/router/routes';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginBodyRequest>({
      query: (auth) => ({
        url: 'auth/login',
        method: 'POST',
        body: auth,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setToLS('accessToken', result.data.access_token);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    register: build.mutation<SignUpResponse, SignUpBodyRequest>({
      query: (registration) => ({
        url: 'auth/signUp',
        method: 'POST',
        body: registration,
      }),
      async onQueryStarted(_, { queryFulfilled, extra }) {
        try {
          const result = await queryFulfilled;
          setToLS('accessToken', result.data.access_token);
          const typedExtra = extra as ExtraArgument;
          typedExtra.navigate('/');
        } catch (error) {
          console.error(error);
        }
      },
    }),
    logout: build.query<void, void>({
      query: () => 'auth/logout',
      async onQueryStarted(_, { queryFulfilled, extra, dispatch }) {
        try {
          await queryFulfilled;
          removeFromLS('accessToken');
          const typedExtra = extra as ExtraArgument;
          typedExtra.navigate(ROUTES.auth.login.page);
          dispatch(baseApi.util.resetApiState());
        } catch (error) {
          console.error(error);
        }
      },
    }),
    refresh: build.query<RefreshResponse, void>({
      query: () => 'auth/refresh',
      async onQueryStarted(_, { queryFulfilled, extra }) {
        try {
          const result = await queryFulfilled;
          setToLS('accessToken', result.data.access_token);
        } catch (error) {
          console.error(error);
          removeFromLS('accessToken');
          const typedExtra = extra as ExtraArgument;
          typedExtra.navigate(ROUTES.auth.login.page);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLazyLogoutQuery, useLazyRefreshQuery } =
  authApi;
