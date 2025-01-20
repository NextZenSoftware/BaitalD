import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Common = () => {
  const location = useLocation();
  //console.log(location.pathname);
 // console.log("loactivate" , location)

 
  const pageTitles = {
    "/about": "About Us",
    "/contact": "Contact Us",
    "/services": "Services",
    "/gallery": "Gallery",
    "/cleaning": "Our Cleaning Services",
    "/maintaince": "Our Maintenance Services",
    "/photos": "Photos Gallery",
    "/videos": "Videos Gallery",
  };

  const currentPage = pageTitles[location.pathname] || "Welcome";
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)   
    });
  }, []);

  return (
    <div className="relative w-full h-[320px] mt-20">
      <img
        src="/images/cleaning7.jpg"
        alt="Cleaning"
        className="object-cover object-center w-full h-full"
      />
   
      <div className="absolute inset-0 bg-black opacity-60"></div>
 
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="px-2 pt-5 text-2xl font-bold text-white lg:text-4xl animate-fadeIn aos-box" data-aos="fade-up">{currentPage}</h1>
      </div>
    </div>
  );
};

export default Common;
