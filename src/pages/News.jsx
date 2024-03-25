import React from "react";
import Tournement_01 from "../assets/Tournement-01.jpg";
import news_data from "../helpers/News_n_Media.json";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div className="items-center justify-center min-h-screen px-32 py-16 bg-[#161616] text-slate-50">
      <h1 className="pt-10 pb-6 text-sm font-bold sm:text-2xl">
        <span className="text-[#FF1616]">News & Media</span>
      </h1>

      {/* News card */}
      {news_data.map((news_card) => (
        <div key={news_card.id}>
          <Link to={`/news/${news_card.id}`}>
            <div className="flex mb-8 overflow-hidden shadow-lg rounded-xl bg-zinc-800">
              {/* Left Side (Image) */}
              <div className="w-1/4">
                <img
                  className="object-cover w-full h-full"
                  src={news_card.image}
                  alt="Tournement_01"
                />
              </div>

              {/* Right Side (Content) */}
              <div className="w-3/4 p-4 px-12">
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {news_card.title}
                </h2>
                <p className="italic text-white line-clamp-6">
                  {news_card.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
