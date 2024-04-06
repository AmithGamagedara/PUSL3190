import React from "react";
import { useState } from "react";
import Logo from "../assets/SL-Karate-Logo.svg";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sign-in logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161616] py-16">
      <div className="flex flex-col items-center justify-center mt-4">
        <img src={Logo} alt="Logo" className="h-6" />
        <span className="p-8 text-2xl font-semibold text-white">
          Sign in to your account
        </span>
      </div>

      <div className="w-full max-w-md px-12 py-12 bg-white shadow-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center justify-between mt-4 mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe" className="text-sm">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#FF1616] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          Don't have an account?&nbsp;&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
