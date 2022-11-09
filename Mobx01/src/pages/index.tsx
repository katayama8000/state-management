import { observer } from "mobx-react";
import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "src/types";
import { todoStore } from "../state/todo";

const Home: NextPage = observer(() => {
  return (
    <div>
      <h3>TODO一覧</h3>
      {todoStore.todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => todoStore.toggleTodo(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
});

export default Home;
