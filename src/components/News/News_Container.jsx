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
    <div className="py-16">
      <h2>{news_card.title}</h2>
      <p>{news_card.description}</p>
    </div>
  );
}

export default News_Details;
