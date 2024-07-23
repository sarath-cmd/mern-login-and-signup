import { createContext, useContext, useState} from "react";

const LoginContext = createContext()

export function LoginProvider({ children }) {
    const [AuthState, setAuthState] = useState(false);

    const updateLogin = (Authvalue) => {
      setAuthState(Authvalue);
    };
  
    return (
      <LoginContext.Provider value={{ AuthState, updateLogin}}>
        {children}
      </LoginContext.Provider>
    );
  }
  
export function useLogin() {
  return useContext(LoginContext);
}