import React from "react";
import Searchbar from "./NavComponents/Searchbar";

export default function Navbar() {
  return (
    <div className="-mt-4 mx-24 shadow-xl rounded-b-lg border border-red-500 sticky top-0 bg-white font-bold">
      <div className="grid grid-cols-[37.5%_12.5%_12.5%_12.5%_12.5%_12.5%_12.5%_12.5%] ">
        <div className="rounded-bl-lg border border-blue-500 bg-blue-200 ">
          <Searchbar />
        </div>

        <div className="flex  border border-blue-500 bg-green-200">
          <p className="mx-auto my-auto flex">
            Products
            <svg
              class="w-2.5 h-2.5 ms-3 mt-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </p>
        </div>

        <div className="flex  border border-blue-500 bg-red-200">
          <p className="mx-auto my-auto flex">
            Applications
            <svg
              class="w-2.5 h-2.5 ms-3 mt-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </p>
        </div>

        <div className="flex  border border-blue-500 bg-slate-200">
          <p className="mx-auto my-auto flex">Case Studies</p>
        </div>

        <div className="flex  border border-blue-500 bg-amber-200">
          <p className="mx-auto my-auto flex">Contact us</p>
        </div>

        <div className="flex rounded-br-lg border border-blue-500 bg-stone-200">
          <p className="mx-auto my-auto flex">
            More
            <svg
              class="w-2.5 h-2.5 ms-3 mt-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
