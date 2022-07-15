import { configureStore } from '@reduxjs/toolkit';
import comicReducer from './features/comics';

export const store = configureStore({
  reducer: {
    comics: comicReducer,
  },
});
