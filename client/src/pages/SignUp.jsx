import React, { useState } from "react";
import Logo from "../assets/SL-Karate-Logo.svg";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [userType, setUserType] = useState("student");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [associationName, setAssociationName] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = firstName ? "" : "First name is required.";
    tempErrors.lastName = lastName ? "" : "Last name is required.";
    tempErrors.email = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? "" : "Email is not valid.";
    tempErrors.mobileNumber = mobileNumber.length === 10 ? "" : "Mobile number is not valid.";
    tempErrors.password = password.length > 5 ? "" : "Password must be at least 6 characters long.";
    tempErrors.confirmPassword = (password === confirmPassword) ? "" : "Passwords do not match.";
    tempErrors.acceptTerms = acceptTerms ? "" : "You must accept the terms and conditions.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Sign-up logic or API call
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161616] py-24">
      <div className="flex flex-col items-center justify-center mt-4">
        <img src={Logo} alt="Logo" className="h-6" />
        <p className="p-8 text-2xl font-semibold text-white">
          Create an Account
        </p>
      </div>

      <div className="w-full max-w-md px-12 py-12 bg-white shadow-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userType" className="block">User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="student">Student</option>
              <option value="association">Association</option>
            </select>
          </div>
          {userType === "student" && (
            <>
              <div className="mb-4">
                <label htmlFor="firstName" className="block">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
                {errors.firstName && <p className="text-xs italic text-red-500">{errors.firstName}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
                {errors.lastName && <p className="text-xs italic text-red-500">{errors.lastName}</p>}
              </div>
            </>
          )}
          {userType === "association" && (
            <>
              <div className="mb-4">
                <label htmlFor="associationName" className="block">Association Name:</label>
                <input
                  type="text"
                  id="associationName"
                  value={associationName}
                  onChange={(e) => setAssociationName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
                {errors.associationName && <p className="text-xs italic text-red-500">{errors.associationName}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="licenseId" className="block">License ID:</label>
                <input
                  type="text"
                  id="licenseId"
                  value={licenseId}
                  onChange={(e) => setLicenseId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
                {errors.licenseId && <p className="text-xs italic text-red-500">{errors.licenseId}</p>}
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.email && <p className="text-xs italic text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.mobileNumber && <p className="text-xs italic text-red-500">{errors.mobileNumber}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.password && <p className="text-xs italic text-red-500">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.confirmPassword && <p className="text-xs italic text-red-500">{errors.confirmPassword}</p>}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="acceptTerms" className="text-sm">
              I accept the Terms and Conditions
            </label>
            {errors.acceptTerms && <p className="text-xs italic text-red-500">{errors.acceptTerms}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#FF1616] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
