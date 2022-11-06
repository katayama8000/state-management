import type { NextPage } from "next";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { useStore } from "src/state/todo";

import { Todo } from "src/types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Add: NextPage<Props> = () => {
  const todos = useStore((state) => state.addTodo);
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text: string = event.currentTarget.text.value;
    todos(text);
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
