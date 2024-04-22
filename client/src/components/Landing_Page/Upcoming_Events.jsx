import React from "react";
import data from "../../helpers/Upcoming_data.json";
import { Link } from "react-router-dom";

const Upcoming_Event = () => {
 
  const sortedData = data.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="w-full bg-[#161616] py-4 sm:py-6 ">
      <h1 className="px-8 mt-8 text-xl font-bold cursor-pointer sm:px-32">
      <span className="text-[#FF1616]">#Upcoming</span>
        <span className="text-slate-50">Events</span>
      </h1>

      <div className="container mx-auto mt-4">
        <div className="flex flex-wrap justify-center px-4 sm:px-24">
          {sortedData.map((card) => (
            <div
              key={card.id}
              className="m-4 overflow-hidden bg-[#202020] shadow-md rounded-xl"
              style={{ width: 'calc(100% / 3 - 2rem)' }}  
            >
              <div className="p-4">
                <h2 className="mb-2 text-lg font-bold text-yellow-500 sm:text-2xl line-clamp-2">
                  {card.title}
                </h2>
                <div className="flex justify-between text-white">
                  <div>
                    <span className="text-xl font-bold sm:text-3xl">
                      {card.startDate}
                    </span>
                    <span className="text-xs sm:text-lg">
                      {" "}{card.startMonth}
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-bold sm:text-3xl">
                      {card.endDate}
                    </span>
                    <span className="text-xs sm:text-lg">
                      {" "}{card.endMonth}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm font-semibold text-white sm:text-xl">
                  {card.location}
                </p>
                <Link to={`/events/${card.id}`} className="block mt-4">
                  <button className="w-full py-2 font-semibold text-white transition duration-150 ease-in-out bg-red-600 rounded hover:bg-red-700">
                    {card.moreInfo}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/events"
        className="flex justify-end px-32 mt-4 text-white sm:text-lg"
      >
        See All
      </Link>
    </div>
  );
};

export default Upcoming_Event;
