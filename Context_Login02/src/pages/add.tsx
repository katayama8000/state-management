import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ComponentProps, useContext } from "react";
import { useAuth } from "src/state/auth";
import { useTodosDispatch } from "src/state/todo";

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatch();

  const userState = useAuth();
  const router = useRouter();
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    if (!userState.isLogin) {
      alert("ログインしてください");
      router.push("/login");
      return;
    }
    event.preventDefault();
    const text = event.currentTarget.text.value;
    addTodo(text);
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
