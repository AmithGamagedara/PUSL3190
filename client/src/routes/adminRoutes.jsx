import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminSignIn from "../pages/Admin/AdminSignIn";
import AdminEvents from "../pages/Admin/AdminEvents";
import EventForm from "../components/Admin_Page/EventForm";
import AdminLearning from "../pages/Admin/AdminLeraning";
import AdminNews from "../pages/Admin/AdminNews";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminSignIn/>} />
            <Route path="/dashboard" element={<AdminDashboard/>} />
            <Route path="/events" element={<AdminEvents/>} /> 
            <Route path="/events_add_form" element={<EventForm/>} /> 
            <Route path="/learnings" element={<AdminLearning/>} /> 
            <Route path="/news" element={<AdminNews/>} /> 
            
        </Routes>
    );
};

export default AdminRoutes;