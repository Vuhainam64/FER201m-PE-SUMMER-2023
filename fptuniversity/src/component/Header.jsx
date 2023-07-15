import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

function Header() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện tìm kiếm với từ khóa searchKeyword
    // Thêm logic tại đây để xử lý tìm kiếm
  };

  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6 bg-gray-700 ">
      <nav className="flex items-center justify-center gap-8">
        <NavLink to={"/"} className="flex items-center justify-center gap-4">
          <img src={Logo} className="w-12" alt="" />
        </NavLink>
        <ul className="hidden md:flex items-center justify-center gap-16">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/news"}
          >
            News
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
        </ul>
      </nav>

      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
