import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Adiciona role do localStorage
    setIsLoggedIn(!!token);
    setRole(userRole); // Define o valor de role
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role'); // Remove role ao fazer logout
    setIsLoggedIn(false);
    setRole(null); // Limpa o valor de role
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
