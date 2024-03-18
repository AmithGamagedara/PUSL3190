import React from "react";
import data from "../helpers/Upcoming_data.json";
import { GrLocation } from "react-icons/gr";

export default function Events() {
  return (
    <div className="items-center justify-center min-h-screen px-32 py-16 bg-[#161616]">
      <h1 className="pt-10 pb-6 text-sm font-bold sm:text-2xl">
        <span className="text-[#FF1616]">Upcoming Events</span>
      </h1>
      {data.map((card, index) => (
        <div
          key={index}
          className="flex mb-8 overflow-hidden shadow-lg rounded-xl bg-zinc-800"
        >
          {/* Left Side - Image */}
          <div className="w-1/4">
            <img
              className="object-cover w-full h-full"
              src={card.image}
              alt="Event"
            />
          </div>

          {/* Right Side - Content */}
          <div className="items-center w-3/4 p-4 px-12">
            {/* Title */}
            <h2 className="mb-2 text-2xl font-semibold text-[#ffd600]">
              {card.title}
            </h2>

            {/* Date and Location */}
            <div className="flex justify-between mb-2">
              <span className="font-bold text-white text-[24px] sm:text-[32px]">
                {card.startDate}
                <span className="font-bold text-white text-[12px] sm:text-[20px]">
                  {" "}
                  {card.startMonth}
                </span>
              </span>
            </div>

            <p className="flex items-center mb-4 text-sm text-white sm:text-xl font-semi-bold">
              <span className="mr-2">
                <GrLocation />{" "}
              </span>
              {card.location}
            </p>

            {/* Bottom Section - Registration Status and More Info Button */}
            <div className="flex items-center justify-between mt-4">
              {/* Registration Status */}
              <p
                className={`text-base font-bold  mb-2 ${
                  card.registrationStatus === "Open"
                    ? "text-[#00FF00]"
                    : "text-[#FF0000]"
                }`}
              >
                Registration {card.registrationStatus}
              </p>

              {/* More Info Button */}
              <a
                href={card.moreInfo}
                className="inline-block px-4 py-2 text-white transition duration-300 bg-[#FF1616] hover:bg-red-500 rounded-lg"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
