import { useAtom } from "jotai";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Layout } from "src/components/Layout";
import { todosAtom } from "src/state/todo";
import { Todo } from "src/types";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useAtom<Todo[]>(todosAtom);

  return (
    <Layout>
      <Component {...pageProps} todos={todos} setTodos={setTodos} />
    </Layout>
  );
}
