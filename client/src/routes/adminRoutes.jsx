import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminSignIn from "../pages/Admin/AdminSignIn";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminSignIn/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        </Routes>
    );
};

export default AdminRoutes;