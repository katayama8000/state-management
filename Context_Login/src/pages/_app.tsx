import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo, User } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const USERSTATE: User = {
  name: "John",
  age: 20,
  isLogin: false,
};

export const TodoContext = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    throw new Error("No default value");
  },
});

export const UserContext = createContext<{
  userState: User;
  setUserState: Dispatch<SetStateAction<User>>;
}>({
  userState: USERSTATE,
  setUserState: () => {
    throw new Error("No default value");
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [userState, setUserState] = useState<User>(USERSTATE);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TodoContext.Provider>
    </UserContext.Provider>
  );
}
