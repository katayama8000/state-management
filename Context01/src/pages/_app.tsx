import type { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const ThemeConext = createContext("light");
export const LangContext = createContext("ja");

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ja");

  return (
    <ThemeConext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <Layout todoCount={todos.length}>
          <button
            onClick={() => {
              setTheme((prev) => (prev === "light" ? "dark" : "light"));
              setLang((prev) => (prev === "ja" ? "en" : "ja"));
            }}
          >
            テーマ切り替え
          </button>
          {theme}
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </LangContext.Provider>
    </ThemeConext.Provider>
  );
}
