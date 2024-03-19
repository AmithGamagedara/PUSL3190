import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../helpers/News_n_Media.json";

function News_Details() {
  const { id } = useParams();
  const news_card = newsData.find((item) => item.id === parseInt(id));

  if (!news_card) {
    return <div>News not found</div>;
  }

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.content}</p>
    </div>
  );
}

export default News_Details;
