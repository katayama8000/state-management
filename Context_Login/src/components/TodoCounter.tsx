import { FC, useContext } from "react";
import { TodoContext } from "src/pages/_app";

export const TodoCounter: FC = () => {
  const todo = useContext(TodoContext);
  const completedTodo = todo.todos.filter((todo) => todo.isDone);
  return (
    <div>
      <h3>TODO: {todo.todos.length}件</h3>
      <h3>completedTodo:{completedTodo.length}件</h3>
    </div>
  );
};
