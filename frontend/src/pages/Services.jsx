import React from "react";
import Layout from "../components/Layout/Layout";
import Common from "../components/common/Common";
import CleaningAndMaintenanceServices from "../components/CleaningAndMaintenanceServices/CleaningAndMaintenanceServices ";
import Map from "../components/Map/Map";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Services | Building Maintenance & Cleaning Services in Dubai
        </title>
        <meta
          name="description"
          content="Explore our range of cleaning and maintenance services in Dubai, including sofa cleaning, building maintenance, and professional cleaning solutions. Book now!"
        />
      </Helmet>
      <Layout>
        <Common />
        <CleaningAndMaintenanceServices />
        <Map />
      </Layout>
    </>
  );
};

export default Services;
