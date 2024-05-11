import React from "react";
import { Link } from "react-router-dom";
import news_data from "../../helpers/News_n_Media.json";

export default function News_n_Media() {
  // Sort the news data to get the latest three items
  const sortedNewsData = news_data.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="w-full bg-[#161616] py-4 sm:py-8">
      <h1 className="px-8 mt-12 text-xl font-bold cursor-pointer sm:px-32">
        <span className="text-[#FF1616] font-sans">#News</span>
        <span className="font-sans text-slate-50">&Media</span>
      </h1>

      <div className="container flex items-center justify-center min-h-screen mx-auto -mt-20">
        <div className="grid grid-cols-1 gap-16 px-4 sm:grid-cols-3 sm:px-24">
          {sortedNewsData.map((news_card) => (
            <div key={news_card.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#202020] dark:border-gray-800">
              <Link to={`/news/${news_card.id}`}>
                <img
                  className="object-cover w-full rounded-t-lg h-36 sm:h-60"
                  src={news_card.image}
                  alt={news_card.title}
                />
              </Link>
              <div className="p-5">
                <Link to={`/news/${news_card.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {news_card.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {news_card.description}
                </p>
                <Link
                  to={`/news/${news_card.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/news"
        className="flex justify-end -mt-4 font-sans text-sm text-white px-28 sm:text-base sm:-mt-16"
      >
        See All
      </Link>
    </div>
  );
}
