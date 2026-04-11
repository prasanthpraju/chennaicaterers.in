import React from "react";
import { HashRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Ensure correct casing
import Home from "./pages/Home"; // Ensure correct casing
import About from "./pages/About";
import Contact from "./pages/Contact";
import CateringServices from "./pages/CateringServices";
import SubMenuDetails from "./pages/Menu/SubMenuDetails";

// Menu Routes

import MenuDetails from "./pages/Menu/MenuDetails";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Main content wrapper flex-grow ensures footer pushes to bottom */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<CateringServices />} />
           <Route path="/gallery" element={<Gallery/>}/>

          {/* Added missing route for viewing specific menu details */}
          <Route path="/menu/:type" element={<MenuDetails />} />
          <Route path="/menu-item/:id" element={<SubMenuDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
