import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";
import { store } from "state";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </Layout>
    </Provider>
  );
}
