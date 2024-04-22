import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password, userType) => {
    // Here, implement your authentication logic or integrate with your backend/API
    console.log("Signing in", email, password);
    // Simulate authentication logic
    if (userType === "user" && email === "user@example.com" && password === "password123") {
      const userData = { name: "John Doe", email, userType: "user" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } else if (userType === "association" && email === "association@example.com" && password === "password123") {
      const associationData = { name: "Association Name", email, userType: "association" };
      setUser(associationData);
      localStorage.setItem("user", JSON.stringify(associationData));
      return true;
    } else if (userType === "admin" && email === "admin@example.com" && password === "password123") {
      const adminData = { name: "Admin", email, userType: "admin" };
      setUser(adminData);
      localStorage.setItem("user", JSON.stringify(adminData));
      return true;
    }
    return false;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
