import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";
import AdminHeader from "./components/Header/AdminHeader";

const App = () => {
  return (
    <BrowserRouter>
      <ConditionalHeader />
      <UserRoutes />
      <AdminRoutes />
    </BrowserRouter>
  );
};

const ConditionalHeader = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/admin');
  return isAdminRoute ? <AdminHeader /> : <Header />;
}

export default App;