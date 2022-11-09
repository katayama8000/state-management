import { FC } from "react";
import { todoStore } from "../state/todo";
import { observer } from "mobx-react";

export const TodoCounter: FC = observer(() => {
  return <h2>TODO: {todoStore.todosLength}件</h2>;
});
