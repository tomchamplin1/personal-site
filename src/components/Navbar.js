import { React } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="pt-20 mx-80">
      <div class="flex align-left pl-12">
        <ul class="flex md:flex-row md:space-x-8 md:text-sm lg:text-lg tracking-wider text-gray-500 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 border-black md:border-black border-gray-100 md:bg-transparent md:p-0 tracking-wider" +
                (isActive ? " text-white" : " text-gray-500")
              }
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 border-black md:border-black border-gray-100 md:bg-transparent md:p-0 tracking-wider" +
                (isActive ? " text-white" : " text-gray-500")
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 border-black md:border-black border-gray-100 md:bg-transparent md:p-0 tracking-wider" +
                (isActive ? " text-white" : " text-gray-500")
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
