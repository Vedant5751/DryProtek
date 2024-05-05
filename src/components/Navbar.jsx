import React from "react";

export default function Navbar() {
  return (
    <div className="-mt-4 mx-24 shadow-xl  border border-red-500 sticky top-0 bg-white">
        <div className="grid grid-cols-[37.5%_12.5%_12.5%_12.5%_12.5%_12.5%_12.5%_12.5%]">
          <div className="border border-blue-500 bg-blue-200">Element 1</div>
          <div className="border border-blue-500 bg-green-200">Element 2</div>
          <div className="border border-blue-500 bg-yellow-200">Element 3</div>
          <div className="border border-blue-500 bg-amber-500">Element 4</div>
          <div className="border border-blue-500 bg-slate-500">Element 5</div>
          <div className="border border-blue-500 bg-stone-600">Element 6</div>
        </div>
      </div>
  );
}
