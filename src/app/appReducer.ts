import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/baseApi'; // Укажи правильный путь к baseApi

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer, // Добавляем редюсер API
});

export type RootState = ReturnType<typeof rootReducer>;
