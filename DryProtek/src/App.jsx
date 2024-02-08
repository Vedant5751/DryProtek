import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Gallery />
      <Router>
        <Routes>
          <Route path="" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
