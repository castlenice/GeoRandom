import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import { useState } from "react";
import randomLocation from "random-location";
import "bootstrap/dist/css/bootstrap.min.css";

// reactstrap components
import { Button } from "reactstrap";

// components

const containerStyle = {
  width: "100%",
  height: "600px",
};

// function getRandomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

const randomCoordinates = () => {
  const P = {
    latitude: 51.453825,
    longitude: 7.032503,
  };
  const R = 100000;
  const randomPoint = randomLocation.randomCirclePoint(P, R);
  return {
    lat: randomPoint.latitude,
    lng: randomPoint.longitude,
  };
};

const firstCoordinates = {
  lat: 51.453825,
  lng: 7.032503,
};

const Game = () => {
  const [location, setLocation] = useState(firstCoordinates);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={14}
          options={{
            disableDefaultUI: true,
            mapTypeId: "satellite",
            gestureHandling: "none",
            tilt: 45,
          }}
        ></GoogleMap>
      </LoadScript>
      <div className="button-1">
      <Button onClick={(e) => setLocation(randomCoordinates())}>Play</Button>
      </div>
    </>
  );
};

export default Game;
