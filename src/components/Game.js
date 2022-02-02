import React, { useEffect } from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import { useState } from "react";
import randomLocation from "random-location";
import "bootstrap/dist/css/bootstrap.min.css";

// reactstrap components
import { Button } from "reactstrap";

// components

const containerStyle = {
  width: "100%",
  height: "800px",
};

// function getRandomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

const randomCoordinates = () => {
  const P = {
    latitude: 51.453825,
    longitude: 7.032503,
  };
  const R = 500000;
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
  const [correctLocations, setCorrectLocations] = useState([]);

  

  const currentLocation = {
    lat: location.lat,
    lng: location.lng
  }


  console.log(correctLocations);


  // useEffect(() => {
  //   location.lat.length >= 5 && location.lat.push();
  // }, [location.lat]);

  return (
    <div className="Game">
      <LoadScript googleMapsApiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={14}
          options={{
            disableDefaultUI: true,
            mapTypeId: "satellite",
            gestureHandling: "greedy",
            tilt: 45,
            maxZoom: null,
            minZoom: 13,
          }}
        ></GoogleMap>
      </LoadScript>
      <div className="button-1">
        <Button disabled={correctLocations.length == 5} onClick={() => {
          const nextLocation = randomCoordinates();
          setLocation(nextLocation);
          correctLocations.push(nextLocation)
          setCorrectLocations(correctLocations)

        }}>Play</Button>
        <Button onClick={() => setLocation(currentLocation)}>Back to Location</Button>
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Game;
