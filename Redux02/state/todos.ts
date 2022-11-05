import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/types";

// initial state
const initialState: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      const newState = [...state, newTodo];
      return newState;
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      const newState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return newState;
    },
    deleteTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      const newState = state.filter((todo) => todo.id !== action.payload.id);
      return newState;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

// import { Reducer } from "redux";
// import { Todo } from "src/types";

// // const
// const ADD_TODO = "ADD_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

// // action
// export const addTodo = (text: Todo["text"]) => {
//   return {
//     type: ADD_TODO,
//     payload: { text },
//   } as const;
// };

// export const toggleTodo = (id: Todo["id"]) => {
//   return {
//     type: TOGGLE_TODO,
//     payload: { id },
//   } as const;
// };

// type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// // reducer
// export const todosReducer: Reducer<Todo[], Action> = (
//   state = TODOS,
//   action
// ) => {
//   switch (action.type) {
//     case ADD_TODO:
//       const newTodo: Todo = {
//         id: state.length + 1,
//         text: action.payload.text,
//         isDone: false,
//       };
//       return [...state, newTodo];
//     case TOGGLE_TODO:
//       return state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, isDone: !todo.isDone };
//         }
//         return todo;
//       });
//     default:
//       return state;
//   }
// };
