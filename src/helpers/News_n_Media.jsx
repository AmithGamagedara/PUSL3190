import React from "react";
import { Link } from "react-router-dom";
import Bg_Image from "../assets/bg-image.jpg";
import Tournement_01 from "../assets/Tournement-01.jpg";
import news_data from "../helpers/News_n_Media.json";

export default function News_n_Media() {
  return (
    <div className="w-full bg-[#161616] py-4 sm:py-8 ">
      <h2 className="flex items-center justify-center p-4 font-bold underline underline-offset-1 te:xt-sm sm:p-8 text-slate-50 sm:text-xl decoration-[#FF1616] decoration-4">
        News & Media
      </h2>
      <div className="container flex items-center justify-center min-h-screen mx-auto">
        <div className="grid grid-cols-1 px-24 sm:grid-cols-3">
          {/* card-01 */}
          {news_data.map((news_card) => (
            <div key={""} className="mb-12 card">
              <div className="flex flex-col px-8">
                <div className="overflow-hidden rounded-xl">
                  <img src={news_card.image} alt="" />
                </div>
                <h5 className="mt-4 text-xl font-semibold text-white sm:text-2xl line-clamp-2">
                  {news_card.title}
                </h5>
                <p className="mt-8 text-sm text-white sm:text-lg line-clamp-3">
                  {news_card.description}
                </p>
                <a
                  href=""
                  className="py-4 mt-12 font-semibold text-center text-white transition-all duration-200 ease-out bg-[#FF1616]  rounded-lg hover:bg-red-500 focus:scale-95"
                >
                  Read more...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/news"
        className="flex justify-end px-32 text-sm text-white sm:text-base"
      >
        See All
      </Link>
    </div>
  );
}
