// import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 25.416560325495862,
    lng: 55.44224683217634,
  };

  return (
    <>
      <div className="px-1 py-1">
        <h1 className="mt-10 mb-5 text-xl font-bold text-center sm:text-2xl md:text-3xl">
          You can easily reach us through the following direction
        </h1>

        <LoadScript googleMapsApiKey="AIzaSyCi36OBV-7pkGMrqr3gYl9iSRtdChiwVz4">
          <GoogleMap
            mapContainerStyle={{
              ...containerStyle,
              height: "400px", // Medium screens
            }}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;
