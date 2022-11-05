import { Reducer } from "redux";
import { Todo } from "src/types";

// const
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// action
export const addTodo = (text: Todo["text"]) => {
  return {
    type: ADD_TODO,
    payload: { text },
  } as const;
};

export const toggleTodo = (id: Todo["id"]) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  } as const;
};

export const deleteTodo = (id: Todo["id"]) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  } as const;
};

type Action = ReturnType<
  typeof addTodo | typeof toggleTodo | typeof deleteTodo
>;

// initial state
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// reducer
export const todosReducer: Reducer<Todo[], Action> = (
  state = TODOS,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
