import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/caraousal1.jpg",
  "/images/caraousal8.png",
  "/images/caraousal3.jpg",
  "/images/caraousal5.jpg",
  "/images/caraousal6.jpg",
  "/images/caraousal2.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative lg:mt-32 mt-36 w-full h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Moving Text (Marquee) */}
      <div className="absolute top-0 left-0 z-10 w-full py-2 overflow-hidden bg-gray-100 border-t whitespace-nowrap bg-opacity-40">
        <div className="inline-block animate-marquee">
          <span className="px-4 text-sm font-semibold font-inter  text-red-500 sm:text-lg md:text-xl lg:text-2xl">
            Get the best Cleaning and Maintenance Service. Call Us: +971-504282001,  +971-589138900
          </span>
        </div>
      </div>

      {/* Overlay Shadow */}
      <div className="absolute z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-40"></div>


      <div className="absolute z-10 flex items-center justify-center w-full top-1/2 whitespace-nowrap ">
        <span className="px-4 font-semibold text-center text-white animate-fadeIn sm:text-md md:text-2xl lg:text-3xl font-inter">
          WELCOME TO BAITALTAHZEEB <br />
          CLEANING & MAINTENANCE <br />
          SERVICES

        </span>
      </div>

      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute z-20 p-1 text-white -translate-y-1/2 bg-green-600 rounded-full hover:bg-green-700 left-2 sm:left-4 top-1/2 sm:p-2"
      >
        <ChevronLeft size={20} className="sm:size-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 p-1 text-white -translate-y-1/2 bg-green-600 rounded-full hover:bg-green-700 right-2 sm:right-4 top-1/2 sm:p-2"
      >
        <ChevronRight size={20} className="sm:size-10" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute z-20 flex space-x-1 -translate-x-1/2 bottom-2 sm:bottom-4 left-1/2 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;