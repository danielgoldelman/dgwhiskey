import { useState } from "react";
import { types } from "../statics";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  interface TypeSingleInterface {
    type: string;
  }

  function TypeSingle({ type }: TypeSingleInterface) {
    return (
      <li>
        <Link
          href={{
            pathname: "./type",
            query: {
              type: type,
            },
          }}
        >
          <div className="text-lg">{type}</div>
        </Link>
      </li>
    );
  }

  function TypesSubmenu() {
    return (
      <ul
        tabIndex={0}
        className="dropdown-content dropdown-left mt-1 p-2 shadow rounded-box w-36 bg-gray-800"
        style={{ left: "-105%" }}
      >
        <TypeSingle type={types.bourbon.str} />
        <TypeSingle type={types.rye.str} />
        <TypeSingle type={types.tennessee.str} />
        <TypeSingle type={types.singleMalt.str} />
        <TypeSingle type={types.singlePot.str} />
        <TypeSingle type={types.blended.str} />
      </ul>
    );
  }

  return (
    <header className="navbar sticky z-50 top-0 border-b border-gray-200 shadow-lg py-5 bg-[#0d1117]">
      <div className="navbar-start w-7/12 relative left-[7%] sm:left-[5%] xl:left-[3%] text-3xl">
        {"DG \xa0 Whisk(e)y"}
      </div>
      <div className="navbar-end">
        <div
          className="dropdown dropdown-end relative right-[7%] sm:right-[5%] xl:right-[3%]"
          onClick={toggleDropdown}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-7 h-7 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          {isOpen ? (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-1 p-2 shadow rounded-box w-36 bg-gray-800 dropdown-left"
            >
              <li>
                <a className="text-lg" href="./">
                  Homepage
                </a>
              </li>
              <li className="submenu">
                <span className="text-lg">Types</span>
                  <TypesSubmenu />
              </li>
              <li>
                <a className="text-lg" href="./about">
                  About
                </a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}
