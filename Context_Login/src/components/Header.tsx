import Link from "next/link";
import { FC, useContext } from "react";
import { UserContext } from "src/pages/_app";
import { TodoCounter } from "./TodoCounter";

export const Header: FC = () => {
  const { userState, setUserState } = useContext(UserContext);
  const logout = () => {
    setUserState({ ...userState, isLogin: false });
  };

  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
        <Link href="login">
          <a>Login</a>
        </Link>
        <button onClick={logout}>logout</button>
      </nav>

      <TodoCounter />
    </header>
  );
};
