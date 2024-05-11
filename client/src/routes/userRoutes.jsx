import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Events from "../pages/Events";
import Rankings from "../pages/Rankings";
import Learnings from "../pages/Learnings";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import News_Details from "../components/News/News_Container";
import Event_Details from "../components/Event/Event_Container";
import User_Profile from "../pages/User/User_Profile";
import Assosiation_Profile from "../pages/Assosiation/Assosiation_Profile";
import RegistrationForm from "../components/Event/RegistrationForm";
import AccuracyCheck from "../components/Learnings/AccuracyCheck";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user_profile" element={<User_Profile/>} />
            <Route path="/assosiation_profile" element={<Assosiation_Profile/>} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/ranking" element={<Rankings />} />
            <Route path="/learning" element={<Learnings />} />
            <Route path="/learning/accuracy-check" element={<AccuracyCheck />} />
            <Route path="/news/:id" element={<News_Details/>} />
            <Route path="/events/:id" element={<Event_Details/>} />
            <Route path="/events/:id/register" element={<RegistrationForm/>} />
        </Routes>
    );
};

export default UserRoutes;