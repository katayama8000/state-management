import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo, User } from "src/types";
import { TodosProvider } from "src/state/todo";
import { AuthProvider } from "src/state/auth";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <TodosProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TodosProvider>
    </AuthProvider>
  );
}
