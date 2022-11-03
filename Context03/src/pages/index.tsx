import type { NextPage } from "next";
import { Dispatch, SetStateAction, useContext } from "react";
import { TodosContext, TodosDispatchContext } from "src/state/todo";
import { Todo } from "src/types";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = () => {
  const todos = useContext(TodosContext);
  const setTodos = useContext(TodosDispatchContext);
  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

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
