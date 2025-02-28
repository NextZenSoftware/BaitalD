import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Common from "../components/common/Common";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)   
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          About Us | Best Building Maintaince and Cleaning Services in Dubai
        </title>
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
              <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl animate-fadeIn aos-box" data-aos="fade-up">
                Welcome to{" "}
                <span className="text-green-600">Bait Al Tahzeeb</span> - A
                Leading Cleaning Services & Building Maintenance Provider In{" "}
                <span className="text-green-600">UAE</span>
              </h2>
              <p className="max-w-5xl mx-auto mb-4 font-semibold leading-relaxed text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                We <strong>Bait Al Tahzeeb</strong> are the top-rated leading
                cleaning services & building maintenance providers as well as
                the best professionals for cleaning services and building
                maintenance in <strong>UAE</strong> for many years. Some of our
                services, <strong>Deep Cleaning </strong>, Sofa Cleaning, Villa
                & Apartments Services, Pest Control, All Over Building
                Maintenance, Painting, Carpentry, Plumbering , Electrical & AC
                Maintaining. We provide all the services on a single platform
                wherein you may get all the hassle-free services at your
                doorstep.
              </p>
              <p className="max-w-5xl mx-auto mb-4 font-semibold leading-relaxed text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                Currently, We are providing{" "}
                <strong>
                  cleaning services ,pest control and building maintenance
                </strong>{" "}
                in all over UAE. We have a{" "}
                <strong>team of 20+ professionals</strong> who are trained &
                experienced, and thus they are capable of handling all kinds of
                work  . Moreover, our technicians are sincere and hardworking.
                They follow the time schedule strictly and deliver the services
                as per the customers convenience. We,{" "}
                <strong>
                  Bait Al Tahzeeb Cleaning Services & Building Maintenance
                </strong>
                , give them full access to use all the necessary equipment for
                getting the job done 100% hygiene and safety. Hence, you can
                expect top-notch workmanship from us.
              </p>
              <p className="max-w-5xl mx-auto font-semibold leading-relaxed text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                Besides this, we assure you, our services are quite competitive
                and thus you will get complete value for your money as well as
                work satisfaction.
              </p>
            </div>

            <div className="mt-10 mb-10">
              <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl animate-fadeIn aos-box" data-aos="fade-up">
                Why do you choose us,{" "}
                <span className="text-green-600 ">
                  Bait Al Tahzeeb Cleaning Services & Building Maintenance
                </span>
              </h2>
              <p className="max-w-3xl mx-auto mb-6 font-semibold text-center text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
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
                    className="flex items-center gap-3 text-lg lg:text-xl animate-fadeIn aos-box" data-aos="fade-up"
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
              <h2 className="mb-4 text-2xl font-bold text-black animate-fadeIn aos-box" data-aos="fade-up">
                Various <span className="text-green-600 ">cleaning services & building maintenance</span> from us
              </h2>
              <p className="text-gray-700  animate-fadeIn aos-box" data-aos="fade-up">
                Our cleaning services include{" "}
                <span className="font-semibold ">
                  Deep Cleaning, Sofa Cleaning, Villa & Apartments Services,
                  Pest Control, All Over Building Maintenance, Painting,
                  Carpentry, Plumbering , Electrical & AC Maintaining
                </span>
                , and many more.
              </p>
            </section>

            {/* About */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-black animate-fadeIn aos-box" data-aos="fade-up">
                <span className="text-green-600 ">Bait Al Tahzeeb </span> - Best
                Cleaning Services and Building Maintaince Provider in{" "}
                <span className="text-green-600 ">UAE</span>
              </h2>
              <p className="mb-4 font-semibold text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                Bait Al Tahzeeb Cleaning Services & Building Maintenance is a
                key industry vertical offering quality services in UAE. We focus
                on recruiting the right talent, train them, and providing
                continuous support to ensure superior customer experiences. Our
                services include housekeeping for residential and commercial
                areas, hospitals, hotels, banks, and more.
              </p>
              <ul className="space-y-2 font-semibold text-gray-700 list-disc list-inside ">
                <li className="animate-fadeIn aos-box" data-aos="fade-up">Villa & Apartments Services</li>
                <li className="animate-fadeIn aos-box" data-aos="fade-up">Sofa Cleaning, and Deep Cleaning</li>
                <li className="animate-fadeIn aos-box" data-aos="fade-up">Pest Control, All Over Building Maintenance</li>
                <li className="animate-fadeIn aos-box" data-aos="fade-up">
                  Painting, Carpentry, Plumbering, Electrical & AC Maintaining
                </li>
              </ul>
            </section>

            {/* Mission and Vision */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl md:text-2xl animate-fadeIn aos-box" data-aos="fade-up">
                Our <span className="text-green-600">Vision</span>
              </h2>
              <p className="max-w-3xl mx-auto mb-6 font-semibold text-center text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                Our vision is to be a leading professional facilities management
                team, widely recognized for creating and maintaining
                eco-friendly and clean environments.
              </p>

              <h2 className="mb-4 text-2xl font-bold text-center text-black lg:text-3xl md:text-2xl animate-fadeIn aos-box" data-aos="fade-up">
                Our <span className="text-green-600 ">Mission</span>
              </h2>
              <p className="max-w-3xl mx-auto font-semibold text-center text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                Our mission is to be the finest custodial and facility services
                company in UAE, providing consistent and quality customer
                service with a commitment to excellence.
              </p>
            </section>

            <div>
              {/* Team Members Section */}
              <div className="w-full pb-3 font-bold text-center pt-11 ">
                <h1 className="animate-fadeIn aos-box text-2xl text-black lg:text-3xl md:text-2xl" data-aos="fade-up">
                  Our{" "}
                  <span className="text-2xl text-green-600 lg:text-3xl md:text-2xl">
                    Team
                  </span>
                </h1>
              </div>
              <div>
                <p className="max-w-3xl mx-auto font-semibold text-center text-gray-700 animate-fadeIn aos-box" data-aos="fade-up">
                  <span className="text-green-600">
                    Bait Al Tahzeeb Cleaning Services & Building Maintenance
                  </span>{" "}
                  Support is directed by an experienced team that is dedicated
                  to innovation, excellence and committed to delivering the very
                  best cleaning services and building maintenance to our UAE client base.
                </p>
              </div>
            </div>            
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
