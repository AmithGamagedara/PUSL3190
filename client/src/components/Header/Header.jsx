import React from "react";
import { NavLink } from "react-router-dom"; // Changed from Link to NavLink
import { FiUser } from 'react-icons/fi'; // Import the user icon from react-icons
import Logo from "../../assets/SL-Karate-Logo.svg";
import { useAuth } from "../../pages/AuthContext";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#101010]/95 shadow-lg shadow-zinc-700/50 z-50 ">
      <div className="flex items-center justify-between max-w-6xl px-6 py-3 mx-auto sm:px-6">
        <div className="flex items-center">
          <div className="mr-36 logo">
            <img src={Logo} alt="SL Karate Logo" className="h-6" />
          </div>
          <ul className="hidden gap-12 font-sans font-medium sm:flex">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Home</NavLink></li>
            <li><NavLink to="/news" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>News</NavLink></li>
            <li><NavLink to="/events" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Events</NavLink></li>
            <li><NavLink to="/ranking" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Rankings</NavLink></li>
            <li><NavLink to="/learning" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Learning</NavLink></li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <form>
            <select id="languages" className="text-xs sm:text-sm font-sans rounded-lg block p-1 text-slate-50 bg-[#101010]">
              <option selected>En</option>
              <option value="SL">Si</option>
            </select>
          </form>
        </div>

        <div className="flex items-center">
          {user ? (
            <NavLink to={user.userType === "user" ? "/user_profile" : "/association_profile"} className="flex items-center cursor-pointer">
              <FiUser className="h-8 mr-4 text-white sm:h-10" /> 
              <span className="hidden text-white sm:block">{user.name}</span>
            </NavLink>
          ) : (
            <NavLink to="/signin">
              <button
                className="h-8 px-4 sm:px-6 sm:h-10 text-sm font-sans sm:text-base font-medium rounded-md bg-[#FF1616] text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-4"
                type="button"
              >
                Sign In
              </button>
            </NavLink>
          )}
        </div>
      </div>

      <div className="px-6 py-2 mt-4 sm:hidden">
        <ul className="flex flex-col gap-2 font-sans font-medium">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Home</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>News</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Events</NavLink></li>
          <li><NavLink to="/ranking" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Rankings</NavLink></li>
          <li><NavLink to="/learning" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : "text-slate-50 hover:text-[#FF1616] duration-800"}>Learning</NavLink></li>
        </ul>
      </div>
    </header>
  );
}
