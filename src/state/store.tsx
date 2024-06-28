import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import eventsSliceReducer from "../slices/eventsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    events: eventsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
