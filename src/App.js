import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import "./App.css";

// reactstrap components
import { Button } from "reactstrap";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 40.708831,
  lng: -74.0166889,
};


const configureMap = (map) => {
  //map.disableDefaultUI = true;
  console.log(map);
};

const App = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={configureMap}
        options={{
          disableDefaultUI: true,
          mapTypeId: "satellite",
          gestureHandling: "none",
          tilt:45
        }}
    
      ></GoogleMap>
    </LoadScript>
  );
};

export default App;
