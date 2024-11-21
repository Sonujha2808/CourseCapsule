import React, { createContext, useContext, useState, useEffect } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Initializing state with values from localStorage if present
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const authData = JSON.parse(localStorage.getItem("authData"));
        return authData?.authenticated === true;
    });

    const [user, setUser] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem("authData"));
        return storedUser ? storedUser.userDetails : null;
    });

    // Function to check authentication status from localStorage
    const checkAuthStatus = () => {
        const authData = JSON.parse(localStorage.getItem("authData"));
        const isAuth = authData?.authenticated;
        setIsAuthenticated(isAuth);

        if (isAuth && authData.userDetails) {
            setUser(authData.userDetails);
        }
    };

    // Function to handle login and save user data in both state and localStorage
    const loginAndSaveTheUser = (response) => {
        if (Object.keys(response).length > 0) {
            setUser(response);
            setIsAuthenticated(true);
            localStorage.setItem("authData", JSON.stringify({
                authenticated: true,
                userDetails: response
            }));
        }
    };


    // not logically true disable function 
    // // Function to handle logout and clear user data from state and localStorage
    const logoutTheUser = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("authData");
    };



    // Run checkAuthStatus when the app loads to restore the auth state
    useEffect(() => {
        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            user,
            loginAndSaveTheUser,
            logoutTheUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};










