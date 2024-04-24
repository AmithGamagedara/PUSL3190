import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../helpers/Upcoming_data.json';


const RegistrationForm = ({ eventId, onRegister }) => {

    const { id } = useParams(); 
    const event = data.find(e => e.id === parseInt(id));
  
    if (!event) {
      return <div>Event not found</div>;
    }
    
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    contactNumber: "",
    chiefInstructor: "",
    associationName: "",
    birthday: "",
    age: "",
    gender: "",
    kyuLevel: "",
    weight: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(eventId, userData);
  };

  return ( 
    <div className='bg-[#161616] py-24 items-center justify-center min-h-screen flex'>
        <div className='w-full max-w-xl px-12 py-8 bg-white shadow-md sm:rounded-lg'>
            <div className='mb-8 text-center text-[#161616]'>
      <h2 className="text-2xl font-semibold">Registration Form</h2>
      <p>({event.title})</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="text" name="address" value={userData.address} onChange={handleChange} placeholder="Address" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="text" name="contactNumber" value={userData.contactNumber} onChange={handleChange} placeholder="Contact Number" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="text" name="chiefInstructor" value={userData.chiefInstructor} onChange={handleChange} placeholder="Chief Instructor" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="text" name="associationName" value={userData.associationName} onChange={handleChange} placeholder="Name of Association" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="date" name="birthday" value={userData.birthday} onChange={handleChange} required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Age" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <select name="gender" value={userData.gender} onChange={handleChange} required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="kyuLevel" value={userData.kyuLevel} onChange={handleChange} placeholder="KYU Level" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <input type="number" name="weight" value={userData.weight} onChange={handleChange} placeholder="Weight (kg)" required className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#161616]" />
        <button type="submit" className="block w-full px-4 py-2 mt-12 mb-4 font-semibold text-white bg-[#FF1616] rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
