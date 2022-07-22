import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './reducers';

export const store = configureStore({
  reducer: {
    authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
