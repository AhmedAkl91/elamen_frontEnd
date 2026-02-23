import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import ApiServicesRequests from './api/front/api-reservation';
import { rootReducer, rootPersistConfig } from './root-reducer';
// ----------------------------------------------------------------------

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([ApiServicesRequests.middleware]),
});
export const persistor = persistStore(store);
// export const useSelector: TypedUseSelectorHook = useAppSelector;
//
