import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-95 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
          <span className="text-red-600">SL</span>
          <span className="text-slate-50">KARATE</span>
        </h1>
        <ul className="flex gap-12 font-medium">
          <Link to="/" >
            <li className="hidden sm:inline text-slate-50 hover:text-red-600 duration-500">
              Home
            </li>
          </Link>
          <Link to="/news">
            <li className="hidden sm:inline text-slate-50 hover:text-red-600 duration-500">
              News
            </li>
          </Link>
          <Link to="/events">
            <li className="hidden sm:inline text-slate-50 hover:text-red-600 duration-500">
              Events
            </li>
          </Link>
          <Link to="/ranking">
            <li className="hidden sm:inline text-slate-50 hover:text-red-600 duration-500">
              Rankings
            </li>
          </Link>
          <Link to="/learning">
            <li className="hidden sm:inline text-slate-50 hover:text-red-600 duration-500">
              Learning
            </li>
          </Link>
        </ul>

        <form>
          <select
            id="languages"
            class=" text-sm rounded-lg  block w-full p-1 text-slate-50 bg-black"
          >
            <option selected>En</option>
            <option value="SL">Si</option>
          </select>
        </form>
        <Link to="/signup">
          <button
            class="h-10 px-6 font-medium rounded-md bg-red-600 text-white"
            type="Signup"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
