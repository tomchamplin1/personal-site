"use client";

import Link from "next/link";
import { React } from "react";

export default function Navbar() {
  return (
    <nav className="pt-20 mx-80 bg-black">
      <div className="flex align-left pl-12">
        <ul className="flex md:flex-row md:space-x-8 md:text-sm lg:text-lg tracking-wider text-gray-500 font-medium">
          <li>
            <Link
              href="/"
              className={({ isActive }) =>
                "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:border-black md:bg-transparent md:p-0 tracking-wider" +
                (isActive ? " text-white" : " text-gray-500")
              }
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={({ isActive }) =>
                "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 border-black md:border-black border-gray-100 md:bg-transparent md:p-0 tracking-wider" +
                (isActive ? " text-white" : " text-gray-500")
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={({ isActive }) =>
                "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 border-black md:border-black border-gray-100 md:bg-transparent md:p-0 tracking-wider" +
                (isActive ? " text-white" : " text-gray-500")
              }
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
