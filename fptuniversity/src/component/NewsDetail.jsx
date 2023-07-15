import React from "react";
import { useParams } from "react-router-dom";
import { NEWS } from "../utils/news";
import Header from "./Header";

function NewsDetail() {
  const { id } = useParams();
  const news = NEWS.find((item) => item.id === parseInt(id));

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start bg-primary">
      <Header />
      <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <img src={news.image} alt={news.name} className="w-full h-auto" />
        <h2 className="text-3xl font-bold">{news.name}</h2>
        <p className="text-gray-500">{news.date}</p>
        <p className="text-gray-700">{news.description}</p>
      </div>
    </div>
  );
}

export default NewsDetail;
