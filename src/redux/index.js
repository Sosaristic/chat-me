import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authSlice from "./AuthSlice";
import themeSlice from "./ThemeSlice";

const persistAuthConfig = {
  key: "auth",
  storage,

};


const allReducers = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
});

const persistedReducers = persistReducer(persistAuthConfig, allReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
