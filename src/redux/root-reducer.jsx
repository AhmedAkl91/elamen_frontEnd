import { combineReducers } from 'redux';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

import ApiServicesRequests from './api/front/api-reservation';
// ----------------------------------------------------------------------
export const createNoopStorage = () => ({
  getItem(_key) {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem(_key) {
    return Promise.resolve();
  },
});
export const storage =
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();
export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};
export const rootReducer = combineReducers({
  [ApiServicesRequests.reducerPath]: ApiServicesRequests.reducer,
});
