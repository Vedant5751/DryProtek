import React from "react";

export default function Content() {
  return (
    <>
      <div className="text-center p-2 border border-red-500 ">

        <div className="p-2 border border-green-500 ">Wrapper </div>
        <div className=" border border-red-500 grid grid-cols-4">
          <div class="col-span-1 bg-blue-200">Element 1</div>
          <div class="col-span-1 bg-green-200">Element 2</div>
          <div class="col-span-1 bg-yellow-200">Element 3</div>
          <div class="col-span-1 bg-blue-200">Element 4</div>
        </div>
        <div className="border border-blue-500">Button</div>

        <div className="border border-slate-900">Title</div>
        <div className="border border-slate-900">Carousel</div>
        <div className="border border-slate-900">rule</div>

        <div className="border border-slate-900">Title</div>
        <div className="border border-slate-900">Carousel</div>
        <div className="border border-slate-900">rule</div>

        <div className="border border-slate-900">Title</div>
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
        <div className="border border-blue-500">Button</div>
        
        <div className="p-2 border border-green-500 ">Wrapper </div>
        <div className=" border border-red-500 grid grid-cols-3">
          <div class="col-span-1 bg-blue-200">Element 1</div>
          <div class="col-span-1 bg-green-200">Element 2</div>
          <div class="col-span-1 bg-yellow-200">Element 3</div>
          <div class="col-span-1 bg-blue-200">Element 4</div>
          <div class="col-span-1 bg-blue-200">Element 5</div>
          <div class="col-span-1 bg-blue-200">Element 6</div>
        </div>
      </div>
    </>
  );
}
