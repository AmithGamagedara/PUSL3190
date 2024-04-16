import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLogin/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        </Routes>
    );
};

export default AdminRoutes;