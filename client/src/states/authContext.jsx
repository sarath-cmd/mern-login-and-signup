import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  const updateUser = (Userstate) => {
    setUser(Userstate);
  };

  return (
    <AuthContext.Provider value={{ user, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
