import React, { createContext, useState } from 'react';


interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// initial context 
const initialAuthContext: AuthContextType = {
    isAuthenticated: false,
    login: () => { },
    logout: () => { }
}

// authentication Context
export const AuthContext = createContext<AuthContextType>(initialAuthContext)


export const AuthProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = () => {
        console.log("Is authenticated", true)
        setIsAuthenticated(true);
    };

    const logout = () => {
        console.log("Is authenticated", false)
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


