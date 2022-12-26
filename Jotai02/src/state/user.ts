import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import type { User } from "src/types";

export const userAtom = atom<User>({
  name: "John Doe",
  isLoggedIn: false,
  age: 20,
});

export const isLoggedInAtom = selectAtom<User, boolean>(
  userAtom,
  (user) => user.isLoggedIn
);
export const isAdultAtom = selectAtom(userAtom, (user) => user.age >= 18);
