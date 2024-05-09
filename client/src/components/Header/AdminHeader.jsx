import React from 'react';
import { NavLink } from 'react-router-dom';  // Changed from Link to NavLink
import { useAuth } from '../../pages/AuthContext';
import Logo from "../../assets/SL-Karate-Logo.svg";

const AdminHeader = () => {
    const { user, signOut, login } = useAuth();

    return (
        <header className="p-4 text-white bg-[#101010]/95 shadow-lg shadow-zinc-700/50 fixed top-0 left-0 w-full">
            <div className="container flex items-center justify-between px-16 mx-auto">
                <h1 className="text-lg font-bold">Admin <span className="text-[#FF1616]">Dashboard</span></h1>
                <nav>
                    {user ? (
                        <ul className="flex space-x-8">
                            <li>
                                <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : ""}>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/events" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : ""}>Events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/learnings" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : ""}>Learnings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/news" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : ""}>News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/rankings" className={({ isActive }) => isActive ? "text-[#FF1616] font-bold" : ""}>Rankings</NavLink>
                            </li>
                            <li>
                                <button onClick={signOut} className="px-12 text-red-600 hover:text-red-700">Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="flex space-x-8">
                            <li>
                            <button onClick={login} className="px-12 text-red-600 hover:text-red-700">Login</button>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default AdminHeader;

