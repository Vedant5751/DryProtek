import React from "react";
import Wrapper from "../components/Wrapper";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";


export default function Home() {
  return (
    <>
      <div>
        <Wrapper />
        <Carousel />
        <Navbar />
        <h1>Product Showcase</h1>
        <Footer1 />
        <Footer2 />
        <h1>Schedule Callback</h1>
      </div>
    </>
  );
}
