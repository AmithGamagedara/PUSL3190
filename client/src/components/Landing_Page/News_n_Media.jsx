import React from "react";
import { Link } from "react-router-dom";
import news_data from "../../helpers/News_n_Media.json";

export default function News_n_Media() {
  const sortedNewsData = news_data.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="w-full bg-[#161616] py-4 sm:py-8 ">
      <h1 className="px-8 mt-12 text-xl font-bold cursor-pointer sm:px-32">
      <span className="text-[#FF1616]">#News</span>
        <span className="text-slate-50">&Media</span>
      </h1>

      <div className="container flex items-center justify-center min-h-screen mx-auto -mt-6">
        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-24">
          {sortedNewsData.map((news_card) => (
            <div key={news_card.id} className="mb-12 overflow-hidden card">
              <div className="flex flex-col px-8">
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="object-cover w-full h-36 sm:h-60"
                    src={news_card.image}
                    alt={news_card.title}
                  />
                  
                </div>
                <h5 className="mt-4 text-xl font-semibold text-white sm:text-2xl line-clamp-2">
                  {news_card.title}
                </h5>
                <p className="mt-4 text-sm text-white sm:mt-8 sm:text-lg line-clamp-3">
                  {news_card.description}
                </p>
                <Link
                  to={`/news/${news_card.id}`}
                  className="py-4 mt-8 sm:mt-12 font-semibold text-center text-white transition-all duration-200 ease-out bg-[#FF1616] rounded-lg hover:bg-red-500 focus:scale-95"
                >
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/news"
        className="flex justify-end px-32 -mt-4 text-sm text-white sm:text-base sm:-mt-16"
      >
        See All
      </Link>
    </div>
  );
}
