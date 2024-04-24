import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../helpers/Upcoming_data.json";
import { FaRegCalendarAlt, FaHotel, FaPlane, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Event_Details() {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));
  const [timeUntilStart, setTimeUntilStart] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeUntilStart = () => {
      const eventStartTime = new Date(card.startTime);
      const currentTime = new Date();
      const difference = eventStartTime - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeUntilStart({ days, hours, minutes, seconds });
      } else {
        setTimeUntilStart({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(calculateTimeUntilStart, 1000);

    return () => clearInterval(timerInterval);
  }, [card]);

  if (!card) {
    return <div className="py-16">Event not found</div>;
  }

  const renderTimer = (value, label) => {
    return (
      <div className="w-16 h-16 p-4 border-2 border-white rounded-lg sm:w-24 sm:h-24">
        <div className="text-center">
          <div className="font-bold sm:text-3xl">{value}</div>
          <div className="text-xs sm:text-sm">{label}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* Background image */}
        <div className="relative flex-grow">
  <img
    src={card.image} 
    alt="Background"
    className="absolute inset-0 object-cover object-top w-full h-full"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  {/* Title and registration button */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-24">
    <h1 className="text-4xl font-bold text-center text-white md:text-6xl">{card.title}</h1>
    <Link to={`/events/${card.id}/register`} className="inline-block px-6 py-3 mt-4 font-semibold text-white rounded-md bg-[#FF1616] hover:bg-red-600 focus:outline-none focus:bg-red-600 shadow-md cursor-pointer z-10">
      Register Now
    </Link>
  </div>
</div>
        
      </div>
       {/* Timer section */}
       <div className="flex items-center justify-center p-8 text-white bg-black">
          {renderTimer(timeUntilStart.days, 'days')}
          <div className="px-2 text-sm font-bold sm:text-3xl">:</div>
          {renderTimer(timeUntilStart.hours, 'hours')}
          <div className="px-2 text-sm font-bold sm:text-3xl">:</div>
          {renderTimer(timeUntilStart.minutes, 'minutes')}
          <div className="px-2 text-sm font-bold sm:text-3xl">:</div>
          {renderTimer(timeUntilStart.seconds, 'seconds')}
        </div>
        
        {/* Sections for registration, timetable, hotels, flights, and contact */}
        <div className="flex justify-center p-8 pt-12 bg-[#161616]">
  <div className="flex items-center justify-center p-4">
    <div className="flex items-center justify-center p-4 bg-red-600 rounded-md h-36 w-36">
      <div className="flex flex-col items-center space-y-2">
        <FaRegCalendarAlt className="text-3xl text-white" />
        <div className="text-white">Registration</div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center p-4">
    <div className="flex items-center justify-center bg-red-600 rounded-md h-36 w-36">
      <div className="flex flex-col items-center space-y-2">
        <FaRegCalendarAlt className="text-3xl text-white" />
        <div className="text-white">Timetable</div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center p-4">
    <div className="flex items-center justify-center bg-red-600 rounded-md h-36 w-36">
      <div className="flex flex-col items-center space-y-2">
        <FaHotel className="text-3xl text-white" />
        <div className="text-white">Hotels</div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center p-4">
    <div className="flex items-center justify-center bg-red-600 rounded-md h-36 w-36">
      <div className="flex flex-col items-center space-y-2">
        <FaPlane className="text-3xl text-white" />
        <div className="text-white">Flights</div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center p-4">
    <div className="flex items-center justify-center bg-red-600 rounded-md h-36 w-36">
      <div className="flex flex-col items-center space-y-2">
        <FaPhone className="text-3xl text-white" />
        <div className="text-white">Contact</div>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-rows-4 grid-flow-col gap-4  items-center justify-center">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>
        
    </div>
  );
}