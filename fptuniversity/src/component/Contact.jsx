import React, { useState } from "react";
import { HeaderNS } from "../component";
import { NEWS } from "../utils/news";

function Contact() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Input validation
    if (title.length < 5 || title.length > 250) {
      setErrorMessage("Title should be between 5 and 250 characters.");
    } else {
      // Reset error message and set the form as submitted
      setErrorMessage("");
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <HeaderNS />
      <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <div className="flex">
          <div className="w-3/4">
            <div className="mb-4 text-center">
              <label htmlFor="title" className="text-lg font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Please input your title"
                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 text-center">
              <label htmlFor="description" className="text-lg font-medium">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Please input your description"
                rows={4}
                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            {isSubmitted && (
              <div className="bg-green-200 text-green-800 py-2 px-4 rounded-md mt-4">
                Form submitted successfully!
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-200 text-red-800 py-2 px-4 rounded-md mt-4">
                {errorMessage}
              </div>
            )}
          </div>
          <div className="flex-1 pl-8">
            <h2 className="text-2xl font-semibold">News List</h2>
            <ul>
              {NEWS.filter((news) => news.status).map((newsItem) => (
                <li key={newsItem.id}>
                  <div className="p-2 border border-gray-500">
                    {newsItem.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
