import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const GoogleMap = () => {

    const position = {lat: 40.650002, lng: -73.9442}

  return (
    <APIProvider apiKey="AIzaSyAbPj3sBEMFup0NbiaI-ZFdpyAF7MIhbek">
      <div className="h-3/4 w-11/12">
        <Map zoom={9} center={position} />
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
