import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, signupUser, fetchCurrentUser } from '../services/authService'; // We'll create this service

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('neki_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          const currentUser = await fetchCurrentUser(token);
          setUser(currentUser);
        } catch (error) {
          console.error("Failed to fetch current user", error);
          localStorage.removeItem('neki_token');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };
    initializeAuth();
  }, [token]);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    localStorage.setItem('neki_token', data.access_token);
    setToken(data.access_token);
    // Fetch user details after login
    const currentUser = await fetchCurrentUser(data.access_token);
    setUser(currentUser);
    return currentUser;
  };

  const signup = async (email, password) => {
    const newUser = await signupUser(email, password);
    // Optionally log in the user directly after signup
    // await login(email, password); 
    return newUser; // Or redirect to login
  };

  const logout = () => {
    localStorage.removeItem('neki_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
