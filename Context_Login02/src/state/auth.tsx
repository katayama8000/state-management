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
import { User } from "src/types";

const USERSTATE: User = { name: "foo", isLogin: false, age: 20 };

const AuthContext = createContext(USERSTATE);
const AuthDispatchContext = createContext<{
  login: () => void;
  logout: () => void;
}>({
  login: () => {
    throw new Error("No default value");
  },
  logout: () => {
    throw new Error("No default value");
  },
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [userState, setUserState] = useState<User>(USERSTATE);

  const login = useCallback(() => {
    setUserState({ ...userState, isLogin: true });
  }, [userState]);

  const logout = useCallback(() => {
    setUserState({ ...userState, isLogin: false });
  }, [userState]);

  const AuthDispatchValue = useMemo(() => ({ login, logout }), [login, logout]);

  return (
    <AuthContext.Provider value={userState}>
      <AuthDispatchContext.Provider value={AuthDispatchValue}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
