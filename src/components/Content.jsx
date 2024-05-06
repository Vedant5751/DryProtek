import React from "react";

export default function Content() {
  return (
    <>
      <div className="text-center  border border-red-500 ">
        <div className="p-2 border border-green-500 ">Wrapper </div>
        <div className=" border border-red-500 grid grid-cols-4">
          <div class="col-span-1 bg-blue-200">Element 1</div>
          <div class="col-span-1 bg-green-200">Element 2</div>
          <div class="col-span-1 bg-yellow-200">Element 3</div>
          <div class="col-span-1 bg-blue-200">Element 4</div>
        </div>

        <div className="border border-blue-500 bg-neutral-300 p-6">
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-sm px-5 py-2.5">
            Other Applications
          </a>
        </div>

        <p className="text-2xl font-bold text-blue-800 p-4">Latest News</p>
        <div className="border border-slate-900">Carousel</div>
        <div className="border border-slate-900">rule</div>

        <p className="text-2xl font-bold text-blue-800 p-4">Latest Articles</p>
        <div className="border border-slate-900">Carousel</div>
        <div className="border border-slate-900">rule</div>

        <p className="text-2xl font-bold text-blue-800 p-4">Our Products</p>
        <div className=" border border-red-500 grid grid-cols-3">
          <div class="col-span-1 bg-blue-200">Element 1</div>
          <div class="col-span-1 bg-green-200">Element 2</div>
          <div class="col-span-1 bg-yellow-200">Element 3</div>
          <div class="col-span-1 bg-blue-200">Element 4</div>
          <div class="col-span-1 bg-blue-200">Element 5</div>
          <div class="col-span-1 bg-blue-200">Element 6</div>
          <div class="col-span-1 bg-blue-200">Element 7</div>
          <div class="col-span-1 bg-blue-200">Element 8</div>
          <div class="col-span-1 bg-blue-200">Element 9</div>
        </div>

        <div className="border border-blue-500 bg-neutral-300 p-6">
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-sm px-5 py-2.5">
            Full Product Range
          </a>
        </div>

        <p className="text-2xl font-bold text-blue-800 p-4">
          Other DryProtek Websites
        </p>
        <div className="grid grid-cols-3 mx-28 mb-10">
          <div class="p-16 border-b-2 border-r-2 border-b-slate-400 border-r-slate-400 bg-blue-200">
            Element 1
          </div>
          <div class="p-16 border-b-2 border-r-2 border-b-slate-400 border-r-slate-400  bg-green-200">
            Element 2
          </div>
          <div class="p-16 border-b-2 border-b-slate-400 bg-yellow-200">
            Element 3
          </div>
          <div class="p-16 border-r-2 border-r-slate-400 bg-blue-200">
            Element 4
          </div>
          <div class="p-16 border-r-2 border-r-slate-400 bg-blue-200">
            Element 5
          </div>
          <div class="p-16 bg-blue-200">
            Element 6
          </div>

        </div>
      </div>
    </>
  );
}
