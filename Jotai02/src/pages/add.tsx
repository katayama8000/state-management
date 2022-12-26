import { useAtom } from "jotai";
import type { NextPage } from "next";
import { ComponentProps, FormEvent } from "react";
import { addTodoAtom } from "src/state/todo";
import { isLoggedInAtom } from "../state/user";

const Add: NextPage = () => {
  const [_, addTodo] = useAtom(addTodoAtom);
  const [isLoggedInUser] = useAtom(isLoggedInAtom);
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (
    event: FormEvent<HTMLFormElement>
  ) => {
    if (!isLoggedInUser) {
      alert("ログインしてください");
      return;
    }
    event.preventDefault();
    const text = event.currentTarget.text.value;
    addTodo({ text });
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
