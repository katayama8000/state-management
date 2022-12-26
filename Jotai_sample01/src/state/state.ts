import { atom } from "jotai";

export const priceAtom = atom<number>(10);
export const messageAtom = atom<string>("hello");
export const productAtom = atom<{ id: number; name: string }>({
  id: 12,
  name: "good stuff",
});

export const readOnlyAtom = atom<number>((get) => get(priceAtom) * 2);
export const writeOnlyAtom = atom<null, { discount: number }, void>(
  null, // it's a convention to pass `null` for the first argument
  (get, set, update) => {
    // `update` is any single value we receive for updating this atom
    set(priceAtom, get(priceAtom) - update.discount);
  }
);
export const readWriteAtom = atom<number, number, void>(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice) => {
    set(priceAtom, newPrice / 2);
    // you can set as many atoms as you want at the same time
  }
);
