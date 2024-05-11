import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MdEventAvailable,
  MdSchedule,
  MdFlight,
  MdHotel,
  MdContactPhone,
} from "react-icons/md";
import data from "../../helpers/Upcoming_data.json";
import Footer from "../Footer/Footer";

export default function Event_Details() {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));
  const [timeUntilStart, setTimeUntilStart] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeUntilStart = () => {
      const eventStartTime = new Date(card.startTime);
      const currentTime = new Date();
      const difference = eventStartTime - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeUntilStart({ days, hours, minutes, seconds });
      } else {
        setTimeUntilStart({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(calculateTimeUntilStart, 1000);
    return () => clearInterval(timerInterval);
  }, [card]);

  useEffect(() => {
    // Initialize AOS with a default animation duration
    AOS.init({ duration: 1000 });
  }, []);

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

  const renderIconButton = (Icon, text, link) => {
    return (
      <Link to={link} className="flex items-center justify-center p-4">
        <div className="flex items-center justify-center bg-red-600 rounded-md h-36 w-36 hover:bg-red-700">
          <div className="flex flex-col items-center space-y-2">
            <Icon className="text-4xl text-white" />
            <div className="text-white">{text}</div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* Background Image */}
        <div className="relative flex-grow">
          <img
            src={card.image}
            alt="Event Background"
            className="absolute inset-0 object-cover object-top w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-24">
            <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
              {card.title}
            </h1>
            <Link
              to={`/events/${card.id}/register`}
              className="inline-block px-6 py-3 mt-4 font-semibold text-white rounded-md bg-[#FF1616] hover:bg-red-600 focus:outline-none focus:bg-red-600 shadow-md cursor-pointer z-10"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Timer Section */}
      <div className="flex items-center justify-center p-8 text-white bg-black">
        {renderTimer(timeUntilStart.days, "days")}
        <div className="px-2 text-sm font-bold sm:text-3xl">:</div>
        {renderTimer(timeUntilStart.hours, "hours")}
        <div className="px-2 text-sm font-bold sm:text-3xl">:</div>
        {renderTimer(timeUntilStart.minutes, "minutes")}
        <div class="px-2 text-sm font-bold sm:text-3xl">:</div>
        {renderTimer(timeUntilStart.seconds, "seconds")}
      </div>

      {/* Sections for Registration, Timetable, Hotels, Flights, and Contact */}
      <div className="bg-[#161616]">
        <div className="flex justify-center p-8 pt-20" data-aos="fade-up">
          {renderIconButton(
            MdEventAvailable,
            "Registration",
            `/events/${card.id}/register`
          )}
          {renderIconButton(
            MdSchedule,
            "Timetable",
            `/events/${card.id}/timetable`
          )}
          {renderIconButton(MdHotel, "Hotels", `/events/${card.id}/hotels`)}
          {renderIconButton(MdFlight, "Flights", `/events/${card.id}/flights`)}
          {renderIconButton(
            MdContactPhone,
            "Contact",
            `/events/${card.id}/contact`
          )}
        </div>
      </div>

      {/* Grid Layout for Buttons */}
      <div className="bg-[#161616] px-24">
        <div
          className="grid grid-cols-3 gap-8 p-8 pt-12"
          data-aos="fade-up"
        >
          <Link
            to={`/events/${card.id}/statistic`}
            className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
          >
            <span className="font-semibold">Statistic</span>
          </Link>
          <Link
            to={`/events/${card.id}/results`}
            className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
          >
            <span className="font-semibold">Results</span>
          </Link>
          <Link
            to={`/events/${card.id}/medal-statistic`}
            className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
          >
            <span className="font-semibold">Medal Statistic</span>
          </Link>
          <Link
            to={`/events/${card.id}/information`}
            className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
          >
            <span className="font-semibold">Information</span>
          </Link>
          <Link
            to={`/events/${card.id}/categories`}
            className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
          >
            <span className="font-semibold">Categories</span>
          </Link>
          <Link
            to={`/events/${card.id}/downloads`}
            className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
          >
            <span className="font-semibold">Downloads</span>
          </Link>
          <div className="flex justify-center col-span-1">
            <Link
              to={`/events/${card.id}/gallery`}
              className="flex items-center justify-center w-full h-20 px-8 py-3 text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:bg-white hover:text-black hover:border-transparent"
            >
              <span className="font-semibold">Gallery</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#161616] pt-12">
        <Footer/>
      </div>
      
    </div>
  );
}
