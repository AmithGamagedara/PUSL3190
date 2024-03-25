import React from "react";
import { useParams } from "react-router-dom";
import news_data from "../../helpers/News_n_Media.json";

function News_Details() {
  const { id } = useParams();
  const news_card = news_data.find((item) => item.id === parseInt(id));

  if (!news_card) {
    return <div className="py-16">News not found</div>;
  }

  return (
    <div className="py-16 w-full bg-[#161616]">
      <div className="max-w-screen-xl p-8 mx-auto">
        <div className="max-w-full overflow-hidden">
          <img
            className="object-cover object-top w-full rounded-lg max-h-3/4 h-96"
            src={news_card.image}
            alt=""
          />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-3xl font-semibold text-[#FFD600]">
            {news_card.title}
          </h2>
          <p className="text-white text-medium">{news_card.description}</p>
        </div>
      </div>
    </div>
  );
}

export default News_Details;
