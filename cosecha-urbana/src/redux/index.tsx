import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { plantSlice } from "./slices/plantSlice";
import { authSlice } from "./slices/authSlice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "plants"],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  plants: plantSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
