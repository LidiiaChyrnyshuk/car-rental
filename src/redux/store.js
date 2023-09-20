import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';

import { favoriteReducer } from './favorite/favoriteSlice';

const persistConfig = {
  key: 'favoritesCar',
  storage,
  whitelist: ['cars'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: persistReducer(persistConfig, favoriteReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
