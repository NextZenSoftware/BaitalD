import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Carousel from "../components/Carousel/Carousel";
import RequestEstimateForm from "../components/RequestEstimateForm/RequestEstimateForm";
import HireUs from "../components/HireUs/HireUs";
import Services from "../components/Services/Services";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel";
import Map from "../components/Map/Map";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
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
          Home | Professional Maintaince and Cleaning Services in Dubai
        </title>
        <meta
          name="description"
          content="Welcome to our cleaning and maintenance services website. Providing expert sofa cleaning, building maintenance, and cleaning services in Dubai. Contact us today!"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Professional Maintenance & Cleaning Services",
            url: "https://www.baitaltahzeeb.com",
            logo: "https://www.baitaltahzeeb.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971-504282001  +971589138900",
              contactType: "Customer Service",
            },
            sameAs: [
              "https://www.facebook.com/yourbusiness",
              "https://www.instagram.com/yourbusiness",
            ],
          })}
        </script>
      </Helmet>
      <Layout>
        <Carousel />
        <RequestEstimateForm />

        <div className="max-w-6xl px-6 mx-auto mt-16 mb-14">
          <h2 className="text-3xl font-semibold aos-box " data-aos="fade-up">
            <span className="text-green-600 "> Baitaltahzeeb -</span>{" "}
            Professional Cleaning and Maintenance Services Company:
          </h2>
          <p
            className="mt-2 text-gray-600 text-[16px] font-semibold slide-in-left animate-fadeIn aos-box "
            data-aos="fade-up"
          >
            <span className="font-bold ">We, Baitaltahzeeb </span>are a leading
            cleaning facility management company, based in{" "}
            <span className="font-bold">UAE</span>, founded with immense
            experience in the cleaning industry and is well known as an eminent
            cleaning company. We offer a variety of professional cleaning
            options for both residential and commercial spaces. Trust us,
            Safaiwale for reliable, high-quality cleaning at your home. We
            assure you that you can get world-class cleaning services such as
            house cleaning services, office cleaning, floor cleaning, pest
            control, bird netting, pigeon net for balcony, commercial cleaning
            services, and so on from Baitaltahzeeb.
          </p>
        </div>
        <HireUs />
        <Services />
        <TestimonialCarousel />
        <Map />
      </Layout>
    </>
  );
};

export default Home;
