import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
    comments: commentsReducer,
    promotions: promotionsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat([logger])

});
