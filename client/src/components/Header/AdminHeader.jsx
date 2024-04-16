import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/SL-Karate-Logo.svg";

const AdminHeader = () => {
    return (
        <header className="p-4 text-white bg-[#101010]/95 shadow-lg shadow-zinc-700/50 fixed top-0 left-0 w-full">
            <div className="container flex items-center justify-between px-16 mx-auto">
                <h1 className="text-lg font-bold">Admin <span className="text-[#FF1616]">Dashboard</span></h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/admin/dashboard" className="hover:text-gray-300">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/users" className="hover:text-gray-300">Users</Link>
                        </li>
                        <li>
                            <Link to="/admin/settings" className="hover:text-gray-300">Settings</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="hover:text-gray-300">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AdminHeader;
