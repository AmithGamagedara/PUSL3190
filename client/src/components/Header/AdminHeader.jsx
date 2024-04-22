import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../pages/AuthContext';
import Logo from "../../assets/SL-Karate-Logo.svg";

const AdminHeader = () => {
    const { user, signOut } = useAuth();

    return (
        <header className="p-4 text-white bg-[#101010]/95 shadow-lg shadow-zinc-700/50 fixed top-0 left-0 w-full">
            <div className="container flex items-center justify-between px-16 mx-auto">
                <h1 className="text-lg font-bold">Admin <span className="text-[#FF1616]">Dashboard</span></h1>
                <nav>
                    {user ? (
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/admin/dashboard" className="hover:text-gray-300">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/admin/events" className="hover:text-gray-300">Events</Link>
                            </li>
                            <li>
                                <Link to="/admin/learnings" className="hover:text-gray-300">Learnings</Link>
                            </li>
                            <li>
                                <Link to="/admin/news" className="hover:text-gray-300">News</Link>
                            </li>
                            <li>
                                <Link to="/admin/rankings" className="hover:text-gray-300">Rankings</Link>
                            </li>
                            <li>
                                <button onClick={signOut} className="px-12 text-red-600 hover:text-red-700">Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/login" className="px-12 text-red-600 hover:text-red-700">Login</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default AdminHeader;
