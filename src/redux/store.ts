import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import albumReducer from './album/albumSlice';
import authReducer from './auth/authSlice';
import userDataReducer from './userData/userDataSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  userData: userDataReducer,
  album: albumReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
