import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

function HeaderNS() {
  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6 bg-gray-700 ">
      <nav className="flex items-center justify-center gap-8">
        <ul className="hidden md:flex items-center justify-center gap-16">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/"}
          >
            <div className="flex items-center px-4">
              <AiFillHome className="mr-1" />
              Home
            </div>
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
    </header>
  );
}

export default HeaderNS;
