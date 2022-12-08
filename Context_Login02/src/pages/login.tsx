import React, { useContext } from "react";
import { useAuth, useAuthDispatch } from "src/state/auth";

const Login = () => {
  const userState = useAuth();
  const { login } = useAuthDispatch();

  return (
    <div>
      <h4>this is a login page</h4>
      <button onClick={login}>login</button>
      <div>{userState.isLogin ? "ログイン中" : "ログインしていません"}</div>
    </div>
  );
};

export default Login;
