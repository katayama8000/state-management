import type { NextPage } from "next";
import { Dispatch, SetStateAction, useContext } from "react";
import { Todo } from "src/types";
import { useTodos, useTodosDispatch } from "src/state/todo";

const Home: NextPage = () => {
  const todos = useTodos();
  const { toggleIsDone } = useTodosDispatch();
  // const toggleIsDone = (id: Todo["id"]) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, isDone: !todo.isDone };
  //       }
  //       return todo;
  //     });
  //   });
  // };

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
function useTodo(): { todos: any; setTodos: any } {
  throw new Error("Function not implemented.");
}
