import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HireUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)
    });
  }, []);
  const data = [
    {
      id: 1,
      icons: "/images/skill.png",
      title: "Highly Skilled and Attentive Services",
    },
    {
      id: 2,
      icons: "/images/certified.png",
      title: "Home Depot Certified Technicians",
    },
    {
      id: 3,
      icons: "/images/price.png",
      title: "Upfront Pricing",
    },
    {
      id: 4,
      icons: "/images/local.png",
      title: "Local Owned and Operated",
    },
  ];
  return (
    <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 ">
      <h2
        className="text-xl font-semibold text-center text-black sm:text-2xl md:text-3xl aos-box"
        data-aos="fade-up"
      >
        Why do you <span className="text-green-600">Hire us?</span>
      </h2>
      <div>
        <div
          className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 sm:mt-8 aos-box"
          data-aos="fade-up"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 text-center transition-all duration-300 rounded-lg shadow-md bg-slate-100 hover:bg-slate-200"
            >
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                src={item.icons}
                alt={item.title}
              />
              <h3 className="mt-2 text-sm font-semibold text-center text-green-600 sm:text-base md:text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireUs;
