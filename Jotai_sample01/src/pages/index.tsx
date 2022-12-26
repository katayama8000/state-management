import { useAtom } from "jotai";
import type { NextPage } from "next";
import {
  priceAtom,
  readOnlyAtom,
  readWriteAtom,
  writeOnlyAtom,
} from "src/state/state";

const Home: NextPage = () => {
  const [num, setNum] = useAtom(priceAtom);
  const [doubleNum] = useAtom(readOnlyAtom);
  const [, discount] = useAtom(writeOnlyAtom);
  const [price, setNewPrice] = useAtom(readWriteAtom);
  return (
    <div>
      <h3>TODO一覧</h3>
      <p>{num}</p>
      <p>{doubleNum}</p>
      <button onClick={() => setNum((prev) => prev + 1)}>+1</button>
      <button onClick={() => setNum((prev) => prev - 1)}>-1</button>
      <button onClick={() => discount({ discount: 0.9 })}>10%OFF</button>
      <p>{price}</p>
      <button onClick={() => setNewPrice(10)}>半額</button>
    </div>
  );
};

export default Home;
