import React from "react";
import data from '../helpers/Upcoming_data.json'; 
import { Link } from "react-router-dom";

const Upcoming_Event = () => {

  return (
    <div className="w-full bg-[#161616] py-4 sm:py-8">
      <h2 className="flex items-center justify-center p-4 font-bold underline underline-offset-1 te:xt-sm sm:p-8 text-slate-50 sm:text-xl decoration-[#FF1616] decoration-4">
        Upcoming Events
      </h2>

      <div className="flex flex-wrap justify-center px-32">
      {data.map((card, index) => (
        <div key={index} className="m-4 mx-auto overflow-hidden bg-[#161616] shadow-md w-96 rounded-xl">
          <div className="p-4">
            <h2 className="mb-2 text-2xl font-bold text-[#FFD600]">{card.title}</h2>
            <div className="flex justify-between mb-2">
              <span className="font-bold text-white text-[32px]">{card.startDate}
              <span className="font-bold text-white text-[20px]"> {card.startMonth}</span>
              </span>
              <span className="font-bold text-white text-[32px]">{card.endDate}
              <span className="font-bold text-white text-[20px]"> {card.endMonth}</span>
              </span>
            </div>
            <p className="mb-4 text-xl text-white font-semi-bold">{card.location}</p>
            <button className="w-full px-4 py-4 mx-autopy-4 font-semibold text-center text-white transition-all duration-200 ease-out bg-[#FF1616]  rounded-lg hover:bg-red-500 focus:scale-95">
              {card.moreInfo}
            </button>
          </div>
        </div>
      ))}
    </div>
    <Link
        to="/events"
        className="flex justify-end px-32 text-sm text-white sm:text-base"
      >
        See All
      </Link>

    </div>
  );
}


export default Upcoming_Event;