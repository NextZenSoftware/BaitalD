import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Common from "../components/common/Common";
import Map from "../components/Map/Map";
import { Helmet } from "react-helmet";

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
    // {
    //   title: "Home Deep Cleaning",
    //   description:
    //     "Comprehensive cleaning of every corner, including bedrooms, living areas, and bathrooms.",
    //   image: "/images/cleaning5.jpg",
    // },
    // {
    //   title: "Window Cleaning",
    //   description:
    //     "Sparkling clean windows with streak-free cleaning for homes and offices.",
    //   image: "/images/cleaning5.jpg",
    // },
    // {
    //   title: "Carpet Cleaning",
    //   description:
    //     "Expert carpet shampooing and cleaning to remove dirt, stains, and allergens.",
    //   image: "/images/cleaning5.jpg",
    // },
    // {
    //   title: "Floor Polishing",
    //   description:
    //     "Floor polishing services to bring back the shine and ensure durability.",
    //   image: "/images/cleaning5.jpg",
    // },
    // {
    //   title: "Curtain Cleaning",
    //   description:
    //     "Gentle cleaning of curtains to remove dust and allergens without damaging fabric.",
    //   image: "/images/cleaning5.jpg",
    // },
    // {
    //   title: "Commercial Cleaning",
    //   description:
    //     "Professional cleaning services for offices and commercial spaces to maintain a clean environment.",
    //   image: "/images/cleaning5.jpg",
    // },
  ];

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
          <h1 className="mb-8 text-3xl font-bold text-center">

            Cleaning Services
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        src={service.image}
        alt={service.title}
        className="object-cover w-full h-56"
      />
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
