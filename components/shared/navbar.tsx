import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
              className="menu menu-compact dropdown-content mt-1 p-2 shadow rounded-box w-36 bg-gray-800"
            >
              <li>
                <a
                  className="text-lg"
                  onClick={() => window.location.assign("./")}
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  className="text-lg"
                  onClick={() => {
                    window.location.assign("./about");
                  }}
                >
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
