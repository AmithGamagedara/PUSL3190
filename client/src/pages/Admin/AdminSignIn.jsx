import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";

export default function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      if (signIn(email, password, "admin")) {
        console.log("Admin signed in successfully!");
          navigate("/admin/dashboard");
      } else {
        console.log("Admin sign-in failed!");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161616] py-16">
      <div className="flex flex-col items-center justify-center mt-4">
        <span className="p-8 text-2xl font-semibold text-white">
          Admin Sign in
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
          {/* Add link to admin sign up page if needed */}
        </div>
      </div>
    </div>
  );
}
