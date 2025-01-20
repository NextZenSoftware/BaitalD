import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Common from "../components/common/Common";
import Map from "../components/Map/Map";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const CleaningServices = () => {
  const services = [
    {
      title: "Deep Cleaning",
      description:
        "Deep Cleaning Services provide thorough and detailed cleaning of residential or commercial spaces, targeting hard-to-reach areas and removing dirt, grime, and allergens.",
      image: "/images/cleaning4.jpg", // Replace with your image paths
    },
    {
      title: "Villa & Apartments Cleaning",
      description:
        "Villa & Apartment Cleaning Services provide professional cleaning tailored to the specific needs of villas and apartments. These services cover every area of the property, including living spaces, kitchens, bathrooms, and bedrooms, ensuring a clean, hygienic, and inviting environment.",
      image: "/images/villa5.jpg",
    },
    {
      title: "Sofa Cleaning",
      description:
        "Professional sofa shampooing and stain removal to extend furniture life and maintain hygiene.",
      image: "/images/sofa1.jpg",
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
        <title>Cleaning Services - Professional Cleaning in Dubai</title>
        <meta
          name="description"
          content="Get professional cleaning services in Dubai, including sofa cleaning, building cleaning, and general maintenance. Trust our expert team for the best results."
        />
      </Helmet>
      <Layout>

        <Common />
        <div className="p-6 bg-gray-100">
          <h1 className="mb-8 lg:text-3xl text-2xl font-bold text-center animate-fadeIn aos-box" data-aos="fade-up">

            Cleaning Services
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

export default CleaningServices;
