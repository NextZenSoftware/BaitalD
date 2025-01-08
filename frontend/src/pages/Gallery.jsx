import React from 'react'
import Layout from '../components/Layout/Layout'
import Common from '../components/common/Common';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery | See Our Cleaning & Maintenance Work</title>
        <meta
          name="description"
          content="View our gallery of successful cleaning and maintenance projects in Dubai. From sofa cleaning to building maintenance, see the results of our professional services."
        />
      </Helmet>
      <Layout>
        <Common />
      </Layout>
    </div>
  );
}

export default Gallery
