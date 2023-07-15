import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./containers";
import { Contact, NewsDetail } from "./component";

function App() {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
