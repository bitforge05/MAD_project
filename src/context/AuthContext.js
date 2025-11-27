import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Mock login
        setUser({
            id: '1',
            name: 'Demo User',
            email: email,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
        });
        return true;
    };

    const signup = (name, email, password) => {
        // Mock signup
        setUser({
            id: '1',
            name: name,
            email: email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
        });
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
