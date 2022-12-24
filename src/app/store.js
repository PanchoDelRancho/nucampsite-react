import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    promotions: promotionsReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat([logger])

});
