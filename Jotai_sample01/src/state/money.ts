import { atom } from "jotai";
import { atomWithReset, RESET, atomWithReducer } from "jotai/utils";

export const dollarsAtom = atomWithReset(1);
export const centsAtom = atom(
  (get) => get(dollarsAtom) * 100,
  (get, set, newValue: number | typeof RESET) =>
    set(dollarsAtom, newValue === RESET ? newValue : newValue / 100)
);

export const countReducer = (prev: number, action: { type: "inc" | "dec" }) => {
  if (action.type === "inc") return prev + 1;
  if (action.type === "dec") return prev - 1;
  throw new Error("unknown action type");
};
export const countReducerAtom = atomWithReducer(0, countReducer);
