import { useAtom } from "jotai";
import Link from "next/link";
import { FC } from "react";
import { userAtom } from "src/state/user";
import { TodoCounter } from "./TodoCounter";

export const Header: FC = () => {
  const [user, setUser] = useAtom(userAtom);

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
        <button
          onClick={() =>
            setUser({
              ...user,
              isLoggedIn: true,
            })
          }
        >
          ログイン
        </button>
        <button
          onClick={() =>
            setUser({
              ...user,
              isLoggedIn: false,
            })
          }
        >
          ログアウト
        </button>
        <button>{user.isLoggedIn ? "ログイン中" : "ログアウト中"}</button>
      </nav>

      <TodoCounter />
    </header>
  );
};
