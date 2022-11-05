import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "src/types";
import { RootState } from "state";
import { toggleTodo } from "state/todos";

const Home: NextPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const toggleIsDone = (id: Todo["id"]) => {
    dispatch(toggleTodo({ id }));
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
