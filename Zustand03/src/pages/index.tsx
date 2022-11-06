import type { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useStore } from "src/state";
import { Todo } from "src/types";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = () => {
  const todos = useStore((state) => state.todos);
  const toggleIsDone = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const fetchUsers = useStore((state) => state.fetchUsers);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
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
          <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
