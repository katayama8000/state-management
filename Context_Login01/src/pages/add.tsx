import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ComponentProps, Dispatch, SetStateAction, useContext } from "react";
import { TodoContext, UserContext } from "./_app";

const Add: NextPage = () => {
  const { setTodos } = useContext(TodoContext);
  const { userState } = useContext(UserContext);
  const router = useRouter();
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    if (!userState.isLogin) {
      alert("ログインしてください");
      router.push("/login");
    }
    event.preventDefault();
    const text = event.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
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
