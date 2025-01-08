import React from "react";

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
      icons: "/images/carpentry2.jpg",
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
    <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 md:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-black">
        Our Service Providers across{" "}
        <span className="text-green-600">UAE</span>
      </h2>

      <p className="text-sm sm:text-base text-gray-500 text-center mt-4">      

        We believe there is a need for quality professional cleaning services in
        UAE. After the successful services in CityName and its neighbor cities,
        we thought it is time to reach more people across India by offering our
        professional cleaning services as well as dry cleaning services. So, we
        extended our cleaning services at affordable prices.
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-4 mt-4 sm:mt-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="shadow-md rounded-sm relative overflow-hidden"
            >
              <img
                className="w-full h-48 sm:h-60 md:h-64 object-cover hover:scale-105 transition-all duration-300"
                src={item.icons}
                alt={item.title}
              />
              <div className="bg-black opacity-50 text-white absolute inset-x-0 bottom-0">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center py-2">        
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