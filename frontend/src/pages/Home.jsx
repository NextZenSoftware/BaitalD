import React, { useEffect, useRef, useState } from "react";
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
          Home | Professional Building Maintenance and Cleaning Services in Dubai
        </title>
        <meta
          name="description"
          content="Welcome to our cleaning services and building maintenance website. Providing expert sofa cleaning, building maintenance, and cleaning services in Dubai. Contact us today!"
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
        <Carousel/>          

        <div className="px-6 mx-auto mt-16 max-w-7xl mb-14">
          <h2 className="text-3xl font-semibold aos-box " data-aos="fade-up">
            <span className="text-green-600 "> Baitaltahzeeb -</span>{" "}
            Professional Cleaning Services and Building Maintenance LLC Company:
          </h2>
          <p
            className="mt-2 text-gray-600 text-[16px] font-semibold slide-in-left animate-fadeIn aos-box "
            data-aos="fade-up"
          >
            <span className="font-bold">We Baitaltahzeeb</span> is a premier
            provider of cleaning services and building maintenance solutions,
            proudly based in the <span className="font-bold">UAE</span>. With
            extensive expertise in the industry, we have earned a reputation as
            a trusted and distinguished name in facility management. We
            specialize in delivering comprehensive cleaning and maintenance
            services tailored to both residential and commercial spaces. At
            Baitaltahzeeb, we are committed to providing reliable, high-quality
            solutions designed to meet the unique needs of our clients. Our
            portfolio includes world-class services such as deep cleaning, sofa
            cleaning, villa and apartment cleaning, pest control, and all over
            building maintenance. Additionally, we offer expert painting,
            carpentry, plumbering and ac & electrical services, ensuring your
            property remains in impeccable condition. Trust Baitaltahzeeb for
            professional and efficient cleaning and maintenance services that
            exceed expectations.
          </p>
        </div>
        <HireUs />
        <Services />
        <RequestEstimateForm />
        <TestimonialCarousel />
        <Map />
      </Layout>
    </>
  );
};

export default Home;
