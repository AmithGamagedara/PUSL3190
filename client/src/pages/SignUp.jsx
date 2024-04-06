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

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAssociationNameChange = (e) => {
    setAssociationName(e.target.value);
  };

  const handleLicenseIdChange = (e) => {
    setLicenseId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAcceptTermsChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sign-up logic here
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
            <label htmlFor="userType" className="block">
              User Type:
            </label>
            <select
              id="userType"
              value={userType}
              onChange={handleUserTypeChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="student">Student</option>
              <option value="association">Association</option>
            </select>
          </div>
          {userType === "student" && (
            <>
              <div className="mb-4">
                <label htmlFor="firstName" className="block">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            </>
          )}
          {userType === "association" && (
            <>
              <div className="mb-4">
                <label htmlFor="associationName" className="block">
                  Association Name:
                </label>
                <input
                  type="text"
                  id="associationName"
                  value={associationName}
                  onChange={handleAssociationNameChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="licenseId" className="block">
                  License ID:
                </label>
                <input
                  type="text"
                  id="licenseId"
                  value={licenseId}
                  onChange={handleLicenseIdChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={handleAcceptTermsChange}
              className="mr-2"
            />
            <label htmlFor="acceptTerms" className="text-sm">
              I accept the Terms and Conditions
            </label>
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
          Already have an account?&nbsp;&nbsp;
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
