import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import HomeEngineering from "./pages/HomeEngineering";
import GoUp from "./components/GoUp";
import CekiDemiri from "./pages/CekiDemiri";
import BrandPage from "./pages/BrandPage";
import ModelPage from "./pages/ModelPage";
import InstagramButton from "./components/InstagramButton";
import WhatsAppButton from "./components/WhatsAppButton";
import Marka from "./pages/Markalar";
import ProductsPage from "./pages/ProductsPage";
import Hakkimizda from "./pages/Hakkimizda";


const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeEngineering />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/cekidemiri" element={<CekiDemiri />} />
            <Route path="/cekidemiri/:brandName" element={<BrandPage />} />
            <Route path="/cekidemiri/:brandName/:modelName" element={<ModelPage />} />
            <Route path="/markalar" element={<Marka />} />
            <Route path="/markalar/:brandName" element={<ProductsPage />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />            
          </Routes>
          <WhatsAppButton />
          <InstagramButton />
          <GoUp />
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;