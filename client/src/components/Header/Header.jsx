import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/SL-Karate-Logo.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#101010]/95 shadow-lg shadow-zinc-700/50">
      <div className="flex items-center justify-between max-w-6xl px-6 py-3 mx-auto sm:px-10">
        <div className="flex items-center">
          <div className="mr-36 logo">
            <img src={Logo} alt="Logo" className="h-6" />
          </div>
          <ul className="hidden gap-12 font-medium sm:flex">
            <li>
              <Link
                to="/"
                className="text-slate-50 hover:text-[#FF1616] duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="text-slate-50 hover:text-[#FF1616] duration-500"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="text-slate-50 hover:text-[#FF1616] duration-500"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/ranking"
                className="text-slate-50 hover:text-[#FF1616] duration-500"
              >
                Rankings
              </Link>
            </li>
            <li>
              <Link
                to="/learning"
                className="text-slate-50 hover:text-[#FF1616] duration-500"
              >
                Learning
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden sm:block">
          <form>
            <select
              id="languages"
              className="text-xs sm:text-sm rounded-lg block p-1 text-slate-50 bg-[#101010]"
            >
              <option selected>En</option>
              <option value="SL">Si</option>
            </select>
          </form>
        </div>

        <div className="flex items-center">
          <Link to="/signup">
            <button
              className="h-8 px-4 sm:px-6 sm:h-10 text-sm sm:text-base font-medium rounded-md bg-[#FF1616] text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-4"
              type="Signup"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Responsive Links */}
      <div className="px-6 py-2 mt-4 sm:hidden">
        <ul className="flex flex-col gap-2 font-medium">
          <li>
            <Link
              to="/"
              className="text-slate-50 hover:text-[#FF1616] duration-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-slate-50 hover:text-[#FF1616] duration-500"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="text-slate-50 hover:text-[#FF1616] duration-500"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/ranking"
              className="text-slate-50 hover:text-[#FF1616] duration-500"
            >
              Rankings
            </Link>
          </li>
          <li>
            <Link
              to="/learning"
              className="text-slate-50 hover:text-[#FF1616] duration-500"
            >
              Learning
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
