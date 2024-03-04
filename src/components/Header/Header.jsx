import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#101010]/95 shadow-lg shadow-zinc-700/50">
      <div className="flex items-center justify-between max-w-6xl p-3 px-10 mx-auto sm:p-3 sm:px-0">
        <h1 className="flex flex-wrap text-sm font-bold cursor-pointer sm:text-xl">
          <span className="text-[#FF1616]">SL</span>
          <span className="text-slate-50">KARATE</span>
        </h1>
        <ul className="flex gap-12 font-medium">
          <Link to="/">
            
            <li className="hidden duration-500 sm:inline text-slate-50 hover:text-[#FF1616]">
              Home
            </li>
          </Link>
          <Link to="/news">
            <li className="hidden duration-500 sm:inline text-slate-50 hover:text-[#FF1616]">
              News
            </li>
          </Link>
          <Link to="/events">
            <li className="hidden duration-500 sm:inline text-slate-50 hover:text-[#FF1616]">
              Events
            </li>
          </Link>
          <Link to="/ranking">
            <li className="hidden duration-500 sm:inline text-slate-50 hover:text-[#FF1616]">
              Rankings
            </li>
          </Link>
          <Link to="/learning">
            <li className="hidden duration-500 sm:inline text-slate-50 hover:text-[#FF1616]">
              Learning
            </li>
          </Link>
        </ul>

        <form>
          <select
            id="languages"
            class=" text-xs sm:text-sm rounded-lg  block w-full p-1 text-slate-50 bg-[#101010]"
          >
            <option selected>En</option>
            <option value="SL">Si</option>
          </select>
        </form>
        <Link to="/signup">
          <button
            class="h-8 px-4 sm:px-6 sm:h-10 text-sm sm:text-base font-medium rounded-md bg-[#FF1616] text-white"
            type="Signup"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
