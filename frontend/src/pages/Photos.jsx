import React from 'react'
import Layout from '../components/Layout/Layout'
import Common from '../components/common/Common'
import { Helmet } from 'react-helmet';

const Photos = () => {
  const PhotosClicked = [
    {
      id: 1,
      image: "/images/pest1.jpg",
    },
    {
      id: 2,
      image: "/images/cleaning1.jpg",
    },
    {
      id: 13,
      description:
        "Comprehensive AC servicing, filter cleaning, and gas refilling for optimal cooling.",
      image: "/images/sofa2.jpg",
    },
    {
      id: 4,
      description:
        "Refresh your space with high-quality painting and wall maintenance services.",
      image: "/images/villa2.jpg",
    },
    {
      id: 5,
      description:
        "Eco-friendly pest control solutions for a safe and pest-free home.",
      image: "/images/painting4.jpg",
    },
    {
      id: 6,
      description:
        "Custom carpentry services, including furniture repairs and installations.",
      image: "/images/carpentry5.jpg",
    },
    // {
    //   id: 7,
    //   description:
    //     "Expert roof inspections and repairs to prevent leaks and damages.",
    //   image: "/images/cleaning2.jpg",
    // },
    // {
    //   id: 8,
    //   description:
    //     "Protect your home with advanced waterproofing solutions for walls and roofs.",
    //   image: "/images/cleaning2.jpg",
    // },
    // {
    //   id: 9,
    //   description:
    //     "Repair and maintenance services for all major home appliances.",
    //   image: "/images/cleaning2.jpg",
    // },
  ];
  return (
    <>
      <Helmet>
        <title>Photos | See Our Cleaning Services & Building Maintenance Work</title>
        <meta
          name="description"
          content="View our Photos of successful cleaning and maintenance projects in Dubai. From sofa cleaning to building maintenance, see the results of our professional services."
        />
      </Helmet>
      <Layout>
        <Common />
        <div className="p-6 bg-gray-100">
          <h1 className="mb-8 text-3xl font-bold text-center">
            A few photos shared by our happy clients.
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PhotosClicked.map((photo) => (
              <div key={photo.id} className="mb-4 border-[15px] border-green-600">
                <img
                  src={photo.image}
                  alt={`Photo ${photo.id}`}
                  className="object-cover w-full overflow-hidden transition-all duration-500 rounded-sm h-72 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Photos
