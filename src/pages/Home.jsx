import React from "react";
import Wrapper from "../components/Wrapper";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import Modal from "../components/Modal";


export default function Home() {
  return (
    <>
      <div>
        <Wrapper />
        <Carousel />
        <Navbar />
        <Content />
        <Footer1 />
        <Footer2 />
        {/* <Modal /> */}
        <h1>Schedule Callback</h1>
      </div>
    </>
  );
}
