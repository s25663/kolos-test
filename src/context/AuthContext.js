// context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const login = user => {
        setAuthenticatedUser(user);
    };

    const logout = () => {
        setAuthenticatedUser(null);
    };

    return (
        <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
