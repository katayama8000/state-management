import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// 参照
export const TodosContext = createContext(TODOS);

// 更新
export const TodosDispatchContext = createContext<
  Dispatch<SetStateAction<Todo[]>>
>(() => {
  throw new Error("No default value");
});

type Props = {
  children: React.ReactNode;
};

export const TodosProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={setTodos}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
