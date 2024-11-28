
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../Redux/bookSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
