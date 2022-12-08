import React, { useContext } from "react";
import { UserContext } from "./_app";

const Login = () => {
  const { userState, setUserState } = useContext(UserContext);
  const login = () => {
    console.log(userState);
    setUserState({ isLogin: true, name: "taro", age: 30 });
  };
  return (
    <div>
      <h4>this is a login page</h4>
      <button onClick={login}>login</button>
      <div>{userState.isLogin ? "ログイン中" : "ログインしていません"}</div>
    </div>
  );
};

export default Login;
