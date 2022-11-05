import { todosReducer } from "./todos";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
