import { atom, selector } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ],
});

export const todosLengthState = selector({
  key: "todosLengthState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});
