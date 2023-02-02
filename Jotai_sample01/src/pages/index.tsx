import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import type { NextPage } from "next";
import {
  add100Atom,
  priceAtom,
  readOnlyAtom,
  readWriteAtom,
  writeOnlyAtom,
} from "src/state/state";

const Home: NextPage = () => {
  const [num, setNum] = useAtom(priceAtom);
  const doubleNum = useAtomValue(readOnlyAtom);
  const discount = useSetAtom(writeOnlyAtom);
  const [price, setNewPrice] = useAtom(readWriteAtom);
  const setReset = useResetAtom(priceAtom);
  const addHundred = useAtom(add100Atom);
  return (
    <div>
      <h3>TODO一覧</h3>
      <span>price</span>
      <p>{num}</p>
      <span>+100</span>
      <p>{addHundred}</p>
      <span>double-price</span>
      <p>{doubleNum}</p>
      <button onClick={() => setNum((prev) => prev + 1)}>+1</button>
      <button onClick={() => setNum((prev) => prev - 1)}>-1</button>
      <button onClick={() => discount({ discount: 0.9 })}>10%OFF</button>
      <p>{price}</p>
      <button onClick={() => setNewPrice(10)}>10円</button>
      <button onClick={() => setNewPrice(100)}>100円</button>
      <button onClick={() => setNewPrice(1000)}>1000円</button>
      <button onClick={setReset}>reset</button>
    </div>
  );
};

export default Home;
