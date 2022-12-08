import { FC } from "react";
import { useTodos } from "../state/todo";

export const TodoCounter: FC = () => {
  const todos = useTodos();
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <div>
      <h3>TODO: {todos.length}件</h3>
      <h3>completedTodo:{completedTodos.length}件</h3>
    </div>
  );
};
