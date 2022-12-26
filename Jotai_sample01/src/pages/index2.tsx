import { atom, useAtom } from "jotai";
import { atomWithReset, useResetAtom, RESET, useUpdateAtom } from "jotai/utils";
import { centsAtom, dollarsAtom } from "src/state/state";

const Index2 = () => {
  const [dollars] = useAtom(dollarsAtom);
  const [cents, setCents] = useAtom(centsAtom);
  const resetCents = useResetAtom(centsAtom);

  return (
    <>
      <h3>Current balance dollars ${dollars}</h3>
      <h3>Current balance cents ${cents}</h3>
      <button onClick={() => setCents(200)}>Set $2</button>
      <button onClick={() => setCents(300)}>Set $3</button>
      <button onClick={resetCents}>Reset</button>
    </>
  );
};

export default Index2;
