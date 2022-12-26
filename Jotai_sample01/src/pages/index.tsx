import { useAtom, useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";
import type { NextPage } from "next";
import {
  priceAtom,
  readOnlyAtom,
  readWriteAtom,
  resetAtom,
  writeOnlyAtom,
} from "src/state/state";

const Home: NextPage = () => {
  const [num, setNum] = useAtom(priceAtom);
  const doubleNum = useAtomValue(readOnlyAtom);
  const [, discount] = useAtom(writeOnlyAtom);
  const [price, setNewPrice] = useAtom(readWriteAtom);
  const setReset = useResetAtom(resetAtom);
  return (
    <div>
      <h3>TODO一覧</h3>
      <span>price</span>
      <p>{num}</p>
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
