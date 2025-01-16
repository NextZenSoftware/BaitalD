import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      id: 1,
      icons: "/images/sofa2.jpg",
      title: "Sofa Cleaning",
    },
    {
      id: 2,
      icons: "/images/cleaning1.jpg",
      title: "Deep Cleaning",
    },
    {
      id: 3,
      icons: "/images/villa2.jpg",
      title: "Villa & Apartments Cleaning",
    },
    {
      id: 4,
      icons: "/images/painting4.jpg",
      title: "Painting",
    },
    {
      id: 5,
      icons: "/images/carpentry5.jpg",
      title: "Carpentry",
    },
    {
      id: 6,
      icons: "/images/plumber4.png",
      title: "Plumbering",
    },
    {
      id: 7,
      icons: "/images/electric1.jpeg",
      title: "Electrical & AC Maintaining",
    },
    {
      id: 8,
      icons: "/images/pest1.jpg",
      title: "Pest Control",
    },
    {
      id: 9,
      icons: "/images/building5.jpg",
      title: "All Over Building Maintaining",
    },
  ];
  return (
    <div className="px-4 mx-auto mt-16 max-w-7xl sm:px-6 md:px-8">
      <h2
        className="text-xl font-semibold text-center text-black sm:text-2xl md:text-3xl animate-fadeIn aos-box"
        data-aos="fade-up"
      >
        Our Service Providers across <span className="text-green-600">UAE</span>
      </h2>

      <p
        className="mt-2 text-gray-600 text-[16px] font-semibold slide-in-left animate-fadeIn aos-box "
        data-aos="fade-up"
      >
        We believe there is a need for quality professional cleaning services
        and building maintenance in UAE. After the successful services in Dubai
        and its neighbor cities, we thought it is time to reach more people
        across UAE by offering our professional cleaning services and building
        maintenance. So, we extended our cleaning services and building
        maintenance at affordable prices.
      </p>
      <div>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-4 sm:mt-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-md shadow-md border-[8px] border-green-500 animate-fadeIn aos-box"
              data-aos="fade-up"
            >
              <Link to="/contact">
                <img
                  className="object-cover w-full h-48 transition-all duration-300 cursor-pointer sm:h-60 md:h-64 hover:scale-105"
                  src={item.icons}
                  alt={item.title}
                />
              </Link>
              <Link to="/contact">
                <div className="absolute right-0 flex justify-between py-1 mb-2 font-bold bg-green-600 top-5 opacity-70 sm:px-4 hover:bg-green-700 ">
                  <p className="font-normal font-montserrat text-[12px] sm:text-[12px] text-white px-1">
                    Book Now
                  </p>
                </div>
              </Link>
              <div className="absolute inset-x-0 bottom-0 text-white bg-black opacity-50">
                <h3 className="py-2 text-sm font-semibold text-center sm:text-base md:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
