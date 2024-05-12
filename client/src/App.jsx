import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./pages/AuthContext"; 
import Header from "./components/Header/Header";
import AdminHeader from "./components/Header/AdminHeader";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider> 
        <ConditionalHeader />
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

const ConditionalHeader = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/admin');
  return isAdminRoute ? <AdminHeader /> : <Header />;
}

export default App;
