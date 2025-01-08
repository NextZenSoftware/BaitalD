import React from "react";
import Layout from "../components/Layout/Layout";
import Common from "../components/common/Common";
import { Helmet } from "react-helmet";

const Videos = () => {
  return (
    <>
      <Helmet>
        <title>Video - See Our Cleaning & Maintenance Work</title>
        <meta
          name="description"
          content="View our Videos of successful cleaning and maintenance projects in Dubai. From sofa cleaning to building maintenance, see the results of our professional services."
        />
      </Helmet>
      <Layout>
        <Common />
        <div className="bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-center mb-8">
            A few Videos shared by our happy clients.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cleaning Video */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <iframe
                className="w-full h-48 rounded-md"
                src="https://www.youtube.com/embed/wiMi9JCqE9FaU0ng"
                title="Cleaning Service Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-xl font-semibold mt-4">Cleaning Services</h2>
              <p className="text-gray-600 mt-2">
                A glimpse into our professional cleaning services. See how we
                make spaces shine!
              </p>
            </div>

            {/* Maintenance Video */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <iframe
                className="w-full h-48 rounded-md"
                src="https://www.youtube.com/embed/wiMi9JCqE9FaU0ng"
                title="Maintenance Service Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-xl font-semibold mt-4">
                Maintenance Services
              </h2>
              <p className="text-gray-600 mt-2">
                Explore our expert maintenance services that ensure everything
                stays in top condition.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Videos;
