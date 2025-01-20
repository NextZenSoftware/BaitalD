import React, { useEffect, useState } from "react";
import Common from "../components/common/Common";
import Layout from "../components/Layout/Layout";
import Map from "../components/Map/Map";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const MaintenanceServices = () => {
  const services = [
    {
      title: "Electrical & AC Servicing",
      description:
        "Electrical & AC Services ensure the efficient performance of electrical systems and air conditioning units through regular inspections, repairs, and servicing, promoting safety and comfort.",
      image: "/images/ac1.png",
    },
    {
      title: "Plumbing Services",
      description:
        "Fix leaks, unclog drains, and repair water systems quickly and efficiently.",
      image: "/images/plumber3.png",
    },
    // {
    //   title: "AC Servicing",
    //   description:
    //     "Comprehensive AC servicing, filter cleaning, and gas refilling for optimal cooling.",
    //   image: "/images/cleaning2.jpg",
    // },
    {
      title: "Painting Services",
      description:
        "Refresh your space with high-quality painting and wall maintenance services.",
      image: "/images/carpentry4.jpg",
    },
    {
      title: "Pest Control",
      description:
        "Eco-friendly pest control solutions for a safe and pest-free home.",
      image: "/images/pest5.jpg",
    },
    {
      title: "Carpentry Work",
      description:
        "Custom carpentry services, including furniture repairs and installations.",
      image: "/images/carpentry5.jpg",
    },
    {
      title: "All Over Building Maintenance",
      description:
        "Expert roof inspections and repairs to prevent leaks and damages.",
      image: "/images/building1.jpg",
    },
    
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)   
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Maintenance Services - Professional Solutions in Dubai</title>
        <meta
          name="description"
          content="Explore our maintenance services in Dubai, offering expert solutions for sofa cleaning, building repairs, and more. Book your service today!"
        />
      </Helmet>
      <Layout>
        <Common />

        <div className="p-6 bg-gray-100">
          <h1 className="mb-8 lg:text-3xl text-2xl font-bold text-center animate-fadeIn aos-box" data-aos="fade-up">
            Maintenance Services
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn aos-box" data-aos="fade-up">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        <Map />
      </Layout>
    </>
  );
};

const ServiceCard = ({ service }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-lg animate-fadeIn aos-box" data-aos="fade-up">
      <img
        src={service.image}
        alt={service.title}
        className="object-cover w-full h-56"
      />
      <Link to="/contact">
        <div className="absolute right-0 flex justify-between py-1 mb-2 font-bold bg-green-600 top-5 opacity-70 sm:px-4 hover:bg-green-700 ">
          <p className="font-normal font-montserrat text-[12px] sm:text-[12px] text-white px-1">
            Book Now
          </p>
        </div>
      </Link>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          {service.title}
        </h2>
        <p className="text-gray-600">
          {showMore
            ? service.description
            : `${service.description.substring(0, 60)}... `}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 hover:underline"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default MaintenanceServices;
