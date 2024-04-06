import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Events from "./pages/Events";
import Rankings from "./pages/Rankings";
import Learnings from "./pages/Learnings";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/Header/Header";
import News_Details from "./components/News/News_Container";
import Assosiation_Profile from "./pages/Assosiation/Assosiation_Profile";
import User_Profile from "./pages/User/User_Profile";
import Event_Details from "./components/Event/Event_Container";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
        <Route path="/news/:id" element={<News_Details/>} />
        <Route path="/events/:id" element={<Event_Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
