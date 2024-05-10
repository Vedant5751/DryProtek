import React, { useState } from "react";
import Searchbar from "./NavComponents/Searchbar";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  function toggleDropdown(dropdownId) {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  }

  return (
    <>
      <div className="-mt-4 z-0 mx-24 shadow-xl rounded-b-lg border border-red-500 sticky top-0 bg-white font-bold">
        <div className="grid grid-cols-[37.5%_12.5%_12.5%_12.5%_12.5%_12.5%_12.5%_12.5%] ">
          <div className="rounded-bl-lg border border-blue-500 bg-blue-200">
            <Searchbar />
          </div>

          <button
            className="flex  border border-blue-500 bg-green-200"
            onClick={() => toggleDropdown("dropdown2")}
          >
            <p className="mx-auto my-auto flex">
              Products
              <svg
                className="w-2.5 h-2.5 ms-3 mt-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </p>
          </button>
          <button
            className="flex  border border-blue-500 bg-red-200"
            onClick={() => toggleDropdown("dropdown3")}
          >
            <p className="mx-auto my-auto flex">
              Applications
              <svg
                className="w-2.5 h-2.5 ms-3 mt-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </p>
          </button>

          <div className="flex  border border-blue-500 bg-slate-200">
            <p className="mx-auto my-auto flex">Case Studies</p>
          </div>

          <div className="flex  border border-blue-500 bg-amber-200">
            <p className="mx-auto my-auto flex">Contact us</p>
          </div>

          <div className="flex flex-col rounded-br-lg border border-blue-500 bg-stone-200">
            <button
              className="mx-auto my-auto flex"
              onClick={() => toggleDropdown("dropdown")}
            >
              More
              <svg
                className="w-2.5 h-2.5 ms-3 mt-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`absolute mt-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
                openDropdown === "dropdown" ? "" : "hidden"
              }`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Info & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Datasheets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CAD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CAWS Clauses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    CPD
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Purchasing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="dropdown2"
          className={`z-0 ${
            openDropdown === "dropdown2" ? "" : "hidden"
          } rounded-b-lg border border-red-500 sticky top-0 bg-white font-bold`}
        >
          Hello There
        </div>
        <div
          id="dropdown3"
          className={`z-0 ${
            openDropdown === "dropdown3" ? "" : "hidden"
          } rounded-b-lg border border-red-500 sticky top-0 bg-white font-bold`}
        >
          Hello Theres
        </div>
      </div>
      <div id="select-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
</div> 
    </>
  );
}
