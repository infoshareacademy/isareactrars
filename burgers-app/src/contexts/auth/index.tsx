import { createContext, useState, useContext, type ReactNode } from "react";

type AuthContextState = {
    user: string | null,
    login: (email: string, password: string) => void
}

const AuthContext = createContext<AuthContextState>({
    user: null,
    login: () => {}
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(() => {
        let userProfle = localStorage.getItem("user");
        if (userProfle) {
          return JSON.parse(userProfle);
        }
        return null;
      });
    
      const login = (email: string, password: string) => {
        fetch(".../auth/login", { method: 'POST', body: JSON.stringify({ email, password }) })
            .then(r => r.json())
            .then(data => {
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
            })
      };

    return <AuthContext.Provider value={
        {
            user,
            login
        }
    }>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);