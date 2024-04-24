import React, { useState } from "react";
import Logo from "../assets/SL-Karate-Logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); 
  const [errors, setErrors] = useState({});
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({...errors, email: null});
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({...errors, password: null});
    }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const validate = () => {
    let isValid = true;
    const validationErrors = {};

    if (!email) {
      isValid = false;
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      validationErrors.email = "Email is invalid";
    }

    if (!password) {
      isValid = false;
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      validationErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (signIn(email, password, userType)) {
        console.log("Signed in successfully!");
        navigate("/");
      } else {
        console.log("Sign-in failed!");
      }
    }
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
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={handleUserTypeChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="user">User</option>
              <option value="association">Association</option>
            </select>
          </div>
          
          <div className="mt-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-xs italic text-red-500">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-xs italic text-red-500">{errors.password}</p>}
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#FF1616] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          Don't have an account?&nbsp;
          <Link to="/signup" className="font-medium text-blue-600 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
