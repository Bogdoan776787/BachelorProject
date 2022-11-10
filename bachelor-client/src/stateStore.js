import { configureStore } from "@reduxjs/toolkit";
import userState from "./requirements/userState";
import api from "./services/api";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const appReducer = combineReducers({
  user: userState,
  [api.reducerPath]: api.reducer,
});

const rootPersistConfig = {
  key: "root",
  storage,
  blackList: [api.reducerPath],
};

const persistedReducer = persistReducer(rootPersistConfig, appReducer);

const stateStore = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, api.middleware],
});
export default stateStore;
