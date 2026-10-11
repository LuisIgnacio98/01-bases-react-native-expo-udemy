import {
  createContext,
  useContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "unauthenticated" = "unauthenticated",
}

interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  const loginWithEmailAndPassword = (email: string, password: string) => {
    // Simulate an API call to login
    setUser({ name: "John Doe", email: email });

    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,
        //getter
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,
        //methods
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
