import { configureStore } from '@reduxjs/toolkit';

import { authReducer, exampleReducer } from './reducers';

export const store = configureStore({
  reducer: {
    exampleReducer,
    authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
