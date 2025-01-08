import React from "react";
import Layout from "../components/Layout/Layout";
import Common from "../components/common/Common";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Best Maintaince and Cleaning Services in Dubai</title>
        <meta
          name="description"
          content="Learn more about our expert cleaning and maintenance services in Dubai. Trusted by hundreds, we provide professional sofa cleaning, building maintenance, and more."
        />
      </Helmet>
      <Layout>
        <Common />
        <div className="max-w-6xl mx-auto mt-5 ">
          <div className="px-4 py-8 rounded lg:px-10 bg-gray-50">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl">
                Welcome to{" "}
                <span className="text-green-600">Bait Al Tahzeeb</span> - A
                Leading Cleaning Services Provider In{" "}
                <span className="text-green-600">UAE</span>
              </h2>
              <p className="max-w-5xl mx-auto mb-4 font-semibold leading-relaxed text-gray-700">
                We <strong>Bait Al Tahzeeb</strong> are the top-rated leading
                cleaning services providers as well as the best professionals
                for cleaning in <strong>UAE</strong> for many years. Some of our
                services, <strong>Housekeeping Services</strong>, repair of Home
                Appliances, Interior Services, Event Organizer, Domestic,
                Commercial, and Office Cleaning. We provide all the services on
                a single platform wherein you may get all the hassle-free
                services at your doorstep.
              </p>
              <p className="max-w-5xl mx-auto mb-4 font-semibold leading-relaxed text-gray-700">
                Currently, we are providing our{" "}
                <strong>deep cleaning services</strong> in more than{" "}
                <strong>32 cities</strong> in UAE. We have a team of 100+
                professionals who are trained & experienced, and thus they are
                capable of handling all kinds of work. Moreover, our technicians
                are sincere and hardworking. They follow the time schedule
                strictly and deliver the services as per the customers
                convenience. We, <strong>Bait Al Tahzeeb</strong>, give them
                full access to use all the necessary equipment for getting the
                job done 100% hygiene and safety. Hence, you can expect
                top-notch workmanship from us.
              </p>
              <p className="max-w-5xl mx-auto font-semibold leading-relaxed text-gray-700">
                Besides this, we assure you, our services are quite competitive
                and thus you will get complete value for your money as well as
                work satisfaction.
              </p>
            </div>

            <div className="mt-10 mb-10">
              <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl">
                Why do you choose us,{" "}
                <span className="text-green-600 ">Bait Al Tahzeeb</span>
              </h2>
              <p className="max-w-3xl mx-auto mb-6 font-semibold text-center text-gray-700">
                Our mission is to deliver services at home to the customers in a
                very convenient way. Customer satisfaction is our main priority.
                No second thought in it. We promise you once you hire us, you
                will get the following benefits.
              </p>
              <ul className="space-y-4 text-gray-800 list-none">
                {[
                  "Verified Professionals",
                  "Fully Equipped Mechanism",
                  "100% Satisfaction Guaranteed",
                  "100% Eco-friendly Products",
                  "100% Quality Assured",
                  "Well Trained & Groomed Professionals",
                  "Minimum usage of water for cleaning services",
                  "Easy & Hassle Free Booking",
                  "Transparent & Affordable Pricing",
                  "No Hidden Charges",
                  "24x7 Customer Support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg lg:text-xl"
                  >
                    <span className="font-semibold text-green-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-6 font-sans bg-gray-50">
            {/* Various Cleaning Services */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black">
                Various cleaning services from us
              </h2>
              <p className="text-gray-700 ">
                Our cleaning services include{" "}
                <span className="font-semibold ">
                  Deep Cleaning, Sofa Cleaning, Villa & Apartments Services, Pest 
                  Control, All Over Building Maintenance, Painting, Carpentry, Plumbering
                  , Electrical & AC Maintaining
                </span>
                , and many more.
              </p>
            </section>

            {/* About */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black">
                <span className="text-green-600 ">Bait Al Tahzeeb</span> - Best
                Cleaning and Maintaince Services Provider in{" "}
                <span className="text-green-600 ">UAE</span>
              </h2>
              <p className="mb-4 font-semibold text-gray-700">
                Bait Al Tahzeeb is a key industry vertical offering quality
                services in UAE. We
                focus on recruiting the right talent, training them, and
                providing continuous support to ensure superior customer
                experiences. Our services include housekeeping for residential
                and commercial areas, hospitals, hotels, banks, and more.
              </p>
              <ul className="space-y-2 font-semibold text-gray-700 list-disc list-inside">
                <li>Villa & Apartments Services</li>
                <li>Sofa Cleaning, and Deep Cleaning</li>
                <li>Pest Control, All Over Building Maintenance</li>
                <li>Painting, Carpentry, Plumbering, Electrical & AC Maintaining</li>
              </ul>
            </section>

            {/* Mission and Vision */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-black">
                Our <span className="text-green-600 ">Vision</span>
              </h2>
              <p className="mb-6 font-semibold text-gray-700">
                Our vision is to be a leading professional facilities management
                team, widely recognized for creating and maintaining
                eco-friendly and clean environments.
              </p>

              <h2 className="mb-4 text-2xl font-bold text-black">
                Our <span className="text-green-600 ">Mission</span>
              </h2>
              <p className="font-semibold text-gray-700">
                Our mission is to be the finest custodial and facility services
                company in UAE, providing consistent and quality customer
                service with a commitment to excellence.
              </p>
            </section>

            <div>
              {/* Team Members Section */}
              <div className="w-full pb-3 font-bold text-center pt-11 ">
                <h1 className="text-2xl text-black lg:text-3xl md:text-2xl">
                  Our{" "}
                  <span className="text-2xl text-green-600 lg:text-3xl md:text-2xl">
                    Team
                  </span>
                </h1>
              </div>
              <div>
                <p className="text-center  text-gray-600 max-w-3xl mx-auto lg:text-[18px] md:text-[16px] text-sm px-3">
                  <span className="text-green-600">Bait Al Tahzeeb</span>{" "}
                  Support is directed by an experienced team that is dedicated
                  to innovation, excellence and committed to delivering the very
                  best web solutions to our UAE client base.
                </p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid max-w-6xl gap-2 px-4 mx-auto mt-10 mb-10 lg:grid-cols-4 lg:px-0 ">
              {/* card-1 */}
              <div className="overflow-hidden transition-all duration-500 bg-white rounded-md shadow-xl h-96">
                <div>
                  <img
                    src={"/images/team1.jpg"}
                    width={300}
                    height={300}
                    alt="Majid"
                    objectFit="contain"

                    className="w-full h-64 "

                    
                  />
                </div>
                <h4 className="text-center pt-2 font-bold text-[20px] mt-5">
                  XYZ
                </h4>
                <p className="text-center pt-1 text-gray-600 text-[16px]">
                  Founder & CEO
                </p>
              </div>
              {/* card-2 */}
              <div className="overflow-hidden transition-all duration-500 bg-white rounded-md shadow-xl h-96">
                <div>
                  <img
                    src={"/images/team6.jpg"}
                    width={300}
                    height={300}
                    alt="Hamid"
                    objectFit="contain"

                    className="w-full h-64 "
                    
                  />
                </div>
                <h4 className="text-center pt-2 font-bold text-[20px] mt-5">
                  XYZ
                </h4>
                <p className="text-center pt-1 text-gray-600 text-[16px]">
                  Co-Founder
                </p>
              </div>

              {/* card-3 */}
              <div className="overflow-hidden transition-all duration-500 bg-white rounded-md shadow-xl h-96">
                <div>
                  <img
                    src={"/images/team2.jpg"}
                    width={300}
                    height={300}
                    alt="Amaan"
                    objectFit="contain"

                    className="w-full h-64 "

                  />
                </div>
                <h4 className="text-center pt-2 font-bold text-[20px] mt-5">
                  XYZ
                </h4>
                <p className="text-center pt-1 text-gray-600 text-[16px]">
                  Project Manager
                </p>
              </div>

              {/* card-4 */}
              <div className="overflow-hidden transition-all duration-500 bg-white rounded-md shadow-xl h-96">
                <div>
                  <img
                    src={"/images/team4.jpg"}
                    width={300}
                    height={300}
                    alt="Syed"
                    objectFit="contain"

                    className="w-full h-64 "

                
                  />
                </div>
                <h4 className="text-center pt-2 font-bold text-[20px] mt-5">
                  XYZ
                </h4>
                <p className="text-center pt-1 text-gray-600 text-[16px]">
                  ML Expert
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
