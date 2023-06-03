import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { valueSlice } from "./Values/valuesSlice";

export const store = configureStore({
    reducer: {
      value: valueSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false
    })
  });