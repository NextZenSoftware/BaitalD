import React, { useState } from "react";
import { Link } from "react-router-dom";
import Common from "../common/Common";


const CleaningAndMaintenanceServices = () => {


  const services = [
    {
      title: "Deep Cleaning Services",
      description:
        "Deep Cleaning Services provide thorough and detailed cleaning of residential or commercial spaces, targeting hard-to-reach areas and removing dirt, grime, and allergens.",
    },
    {
      title: "Villa & Apartments Cleaning Services",
      description:
        "Villa & Apartment Cleaning Services provide professional cleaning tailored to the specific needs of villas and apartments. These services cover every area of the property, including living spaces, kitchens, bathrooms, and bedrooms, ensuring a clean, hygienic, and inviting environment.",
    },
    {
      title: "Sofa Cleaning Services",
      description:
        "Sofas accumulate dust particles, stains, pests, termites, and food crumbs, which can harm your family’s health. Our sofa shampooing services help remove dirt and extend the life of your furniture.",
    },
    {
      title: "All Over Building Maintenance Services",
      description:
        "All Over Building Maintenance Services provide comprehensive solutions to maintain the functionality, safety, and appearance of buildings, covering cleaning, repairs, and routine upkeep for residential or commercial properties.",
    },
    {
      title: "Electrical & AC Maintenance Services",
      description:
        "Electrical & AC Maintenance Services ensure the efficient performance of electrical systems and air conditioning units through regular inspections, repairs, and servicing, promoting safety and comfort.",
    },
    {
      title: "Plumbing Maintenance Services",
      description:
        "Leaky faucets? Clogged drains? Our plumbing experts provide prompt repair, replacement, and maintenance services to ensure your water systems are running smoothly.",
    },
    // {
    //   title: "AC servicing and repair",
    //   description:
    //     "Regular AC servicing ensures efficient cooling and helps avoid sudden breakdowns. Our technicians provide filter cleaning, gas refilling, and complete AC maintenance services.",
    // },
    {
      title: "Pest Control Services",
      description:
        "Say goodbye to pests with our professional pest control solutions. We ensure a safe, pest-free environment using eco-friendly treatments.",
    },
    {
      title: "Carpentry Services",
      description:
        "Whether it’s fixing broken furniture, installing shelves, or custom carpentry projects, our skilled carpenters deliver high-quality work tailored to your needs.",
    },
    {
      title: "Painting and Wall Maintenance",
      description:
        "Transform your home with our painting services. We offer wall repair, waterproofing, and a variety of paint finishes to refresh your space.",
    },
  ];

  return (
    <>
      <div className="p-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-8 text-2xl font-bold text-center">
            Cleaning Services & Building Maintenance
          </h1>
          {services.map((service, index) => (
            <div
              key={index}

              className="items-center justify-between p-6 mb-6 space-y-4 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-xl lg:flex"

            >
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>

                {/* <p className="text-gray-600 lg:hidden md:hidden">
                  {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
                </p> */}

                <p className="leading-snug text-gray-600 sm:text-base">{service.description}</p>

              </div>
              <div>
                <Link
                  to={"/contact"}

                  className="px-4 py-2 text-white transition bg-green-600 rounded-md lg:ml-5 hover:bg-green-700"

                >
                  Booking
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between max-w-5xl mx-auto ">
          <div> <Link
            to={"/maintaince"}

            className="px-4 py-2 text-white transition bg-green-600 rounded-md lg:py-3 hover:bg-green-700"

          >
            Maintaince Services
          </Link></div>
          <div>
          <Link
            to={"/cleaning"}

            className="px-4 py-2 text-white transition bg-green-600 rounded-md lg:py-3 lg:ml-5 hover:bg-green-700"

          >
            Cleaning Services
          </Link>
        </div>
        </div>
      
      </div>
    </>
  );
};
const ServiceCard = ({ service }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="p-4">
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
export default CleaningAndMaintenanceServices;