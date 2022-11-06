import { Todo } from "src/types";
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import produce from "immer";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

type State = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
};

export const useStore = create<State>()(
  devtools((set) => ({
    todos: TODOS,
    addTodo: (text) => {
      set(
        produce((state) => {
          state.todos.push({
            id: state.todos.length + 1,
            text,
            isDone: false,
          });
        })
      );
    },
    toggleTodo: (id) => {
      set(
        produce((state) => {
          state.todos.forEach((todo: Todo) => {
            if (todo.id === id) {
              todo.isDone = !todo.isDone;
            }
          });
        })
      );
    },
    deleteTodo: (id) => {
      set(
        produce((state) => {
          state.todos = state.todos.filter((todo: Todo) => todo.id !== id);
        })
      );
    },
  }))
);
