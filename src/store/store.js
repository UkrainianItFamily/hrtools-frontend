import { configureStore } from '@reduxjs/toolkit';

import { exampleReducer } from './reducers';

export const store = configureStore({
  reducer: {
    exampleReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
