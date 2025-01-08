// import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {

  const containerStyle = {
    width: "100%",
    height: "400px",    
  };

  
  const center = {
    lat: 28.635308,
    lng: 77.22496, 
  };

  return (
    <>
       <div className="px-1 py-1">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-5 mt-10">
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
