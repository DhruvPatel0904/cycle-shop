import { useState } from "react";
import Home from "./page/Home";
import Bicycle from "./page/Bicycle";
import Accessories from "./page/Accessories";
import About_us from "./page/About_us";
import Contact from "./page/Contact";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar-2";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar2 />}>
            <Route index element={<Home />} />
            <Route path="/About_us" element={<About_us />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>

            <Route path="/" element={<Navbar />}>
              <Route path="/Bicycle" element={<Bicycle />} />
              <Route path="/Accessories" element={<Accessories />} />
            </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
