import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
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
export const TodosDispatchContext = createContext<{
  toggleIsDone: (id: Todo["id"]) => void;
  addTodo: (text: Todo["text"]) => void;
}>({
  toggleIsDone: () => {
    throw new Error("No default value");
  },
  addTodo: () => {
    throw new Error("No default value");
  },
});

type Props = {
  children: React.ReactNode;
};

export const TodosProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const toggleIsDone = useCallback((id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  }, []);

  const addTodo = useCallback((text: Todo["text"]) => {
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
  }, []);

  const todosDispatchValue = useMemo(
    () => ({ toggleIsDone, addTodo }),
    [toggleIsDone, addTodo]
  );

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatchValue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const todos = useContext(TodosContext);
  return todos;
};

export const useTodosDispatch = () => {
  const todosDispatch = useContext(TodosDispatchContext);
  return todosDispatch;
};
