import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const makeConfigureStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfigureStore();
  } else {
    const persistConfig = {
      key: "nextjs",
      whitelist: ["auth"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let store: any = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== "production",
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    });

    store.__persistor = persistStore(store);

    return store;
  }
};

export type AppStore = ReturnType<typeof makeConfigureStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
