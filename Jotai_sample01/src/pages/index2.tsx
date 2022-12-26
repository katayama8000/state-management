import { useAtom } from "jotai";
import { useResetAtom, useReducerAtom } from "jotai/utils";
import {
  centsAtom,
  countReducer,
  countReducerAtom,
  dollarsAtom,
} from "src/state/state";

const Index2 = () => {
  const [dollars] = useAtom(dollarsAtom);
  const [cents, setCents] = useAtom(centsAtom);
  const resetCents = useResetAtom(centsAtom);
  const [count, dispatch] = useAtom(countReducerAtom);

  return (
    <>
      <h3>Current balance dollars ${dollars}</h3>
      <h3>Current balance cents ${cents}</h3>
      <button onClick={() => setCents(200)}>Set $2</button>
      <button onClick={() => setCents(300)}>Set $3</button>
      <button onClick={resetCents}>Reset</button>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: "inc" })}>+1</button>
        <button onClick={() => dispatch({ type: "dec" })}>-1</button>
      </div>
    </>
  );
};

export default Index2;
