import { rootReducer } from './phonebook/reducers';
import { configureStore  } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});