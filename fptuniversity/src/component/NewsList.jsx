import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { NEWS } from "../utils/news";

function NewsList() {
  const filteredNews = NEWS.filter((news) => news.status === true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filteredNews.map((news) => (
        <div key={news.id} className="bg-white rounded-lg shadow p-4">
          <img
            src={news.image}
            alt={news.name}
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{news.name}</h3>
          <p className="text-gray-500 mb-2">{news.description}</p>
          <p className="text-gray-500">{news.date}</p>
          <NavLink
            to={`/news/${news.id}`}
            className="text-white font-semibold mt-2 flex items-center justify-center"
          >
            <div className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              <BsEyeFill className="mr-1" /> Xem Chi Tiết
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
