import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminSignIn from "../pages/Admin/AdminSignIn";
import AdminEvents from "../pages/Admin/AdminEvents";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminSignIn/>} />
            <Route path="/dashboard" element={<AdminDashboard/>} />
            <Route path="/events" element={<AdminEvents/>} /> 
        </Routes>
    );
};

export default AdminRoutes;