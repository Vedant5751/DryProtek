import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <h1 className="bg-green-500 font-bold underline">Carousel</h1>
        <h1 className="bg-red-500 font-bold underline">Floating Navbar</h1>
        <h1 className="bg-blue-500 font-bold underline">Applications</h1>
        <h1 className="bg-orange-500 font-bold underline">Product News</h1>
        <h1 className="bg-gray-500 font-bold underline">Product Articles</h1>
        <h1 className="bg-yellow-500 font-bold underline">Products</h1>
        <h1 className="bg-cyan-500 font-bold underline">Products</h1>
        <h1 className="bg-lime-500 font-bold underline">Products</h1>
      </div>
    </>
  );
}

export default Home;
