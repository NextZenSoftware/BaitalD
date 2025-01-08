
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import CleaningServices from './pages/CleaningServices';
import MaintenanceServices from './pages/MaintenanceServices';
import Photos from './pages/Photos';
import Videos from './pages/Videos';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cleaning" element={<CleaningServices />} />
        <Route path="/maintaince" element={<MaintenanceServices />} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </>
  );
}

export default App
