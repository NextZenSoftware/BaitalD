import React from "react";
import { useLocation } from "react-router-dom";

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
    "/maintaince": "Our Maintaince Services",
    "/photos": "Photos Gallery",
    "/videos": "Videos Gallery",
  };

  const currentPage = pageTitles[location.pathname] || "Welcome";

  return (
    <div className="relative w-full h-[320px] mt-20">
      <img
        src="/images/cleaning7.jpg"
        alt="Cleaning"
        className="object-cover object-center w-full h-full"
      />
   
      <div className="absolute inset-0 bg-black opacity-60"></div>
 
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="pt-5 text-4xl font-bold text-white ">{currentPage}</h1>
      </div>
    </div>
  );
};

export default Common;
