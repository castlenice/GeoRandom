import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import randomLocation from "random-location";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button } from "reactstrap";

// components
import InitMap from "./Mini-Map";
import { gameContext } from "./GameContext";

const containerStyle = {
  width: "100%",
  height: "800px",
};

export const randomCoordinates = () => {
  const P = [
    {
      latitude: 50.11321, //mittelpunkt der europaeischen union
      longitude: 9.253958,
    },
    {
      latitude: 46.149804, //ungarn
      longitude: 20.24286,
    },
    {
      latitude: 32.268912, //ar rutba, irak
      longitude: 40.590456,
    },
    {
      latitude: 18.803846, //nan, thailand
      longitude: 101.233519,
    },
    {
      latitude: 41.02879171787002, //jining, mongolei
      longitude: 113.07519229093803,
    },
    {
      latitude: 47.520973, //genay, frankreich ,
      longitude: 4.263213,
    },
    {
      latitude: 40.217481763143475, //spanien
      longitude: -3.962726226726735,
    },
    {
      latitude: 40.133727, //pennsylvania, usa
      longitude: -79.022366,
    },
    {
      latitude: 37.072552, //joplin, missouri, usa
      longitude: -94.505264,
    },
    {
      latitude: 41.999902, //rich county, utah, usa
      longitude: -111.055138,
    },
    {
      latitude: 41.073267, //BRC, nevada, usa
      longitude: -119.120486,
    },
    {
      latitude: 13.125303, //San, Mali, Africa
      longitude: -4.943870,
    },
    {
      latitude: 0.654698, //Djolu, Kongo, Africa
      longitude: 22.108861,
    },
    {
      latitude: -29.101332, //Bo Karoo, South Africa
      longitude: 22.500045,
    },
    {
      latitude: -34.026708, //New South Wales, Australia
      longitude: 145.033251,
    },
    {
      latitude: -16.103179, //Northern Territory, Australia
      longitude:  132.714100,
    },
    {
      latitude: 7.066306, //El Amparo, Venezuela
      longitude:  -70.867708,
    },
    {
      latitude: -12.645210, //Manu, Peru
      longitude:  -71.666274,
    },
    {
      latitude: -39.625646, //Provinz Rio Negro, Argentina
      longitude:  -68.446586,
    },
    {
      latitude: -9.432346, //Permambuco, Brasilien
      longitude:  -40.657190,
    },
    {
      latitude: 21.133537, //Guanajuato, Mexiko
      longitude:  -101.313092,
    },
    
  ];
  const L = P[Math.floor(Math.random() * P.length)];
  //console.log(L);

  const R = 424000;
  const randomPoint = randomLocation.randomCirclePoint(L, R);
  return {
    lat: randomPoint.latitude,
    lng: randomPoint.longitude,
  };
};

const Game = () => {
  const {
    location,
    setLocation,
    currentGuess,
    guessedLocations,
    setGuessedLocations,
  } = useContext(gameContext);

  const currentLocation = {
    lat: location.lat,
    lng: location.lng,
  };

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
            minZoom: 11,
          }}
        ></GoogleMap>
      </LoadScript>

      <InitMap />

      <div className="button-game">
        <Button
          tag={Link}
          to="/game/results"
          onClick={() => {
            guessedLocations.push(currentGuess);
            setGuessedLocations(guessedLocations);
            console.log(guessedLocations);
          }}
          className="mx-1"
        >
          Submit Guess
        </Button>
        <Button onClick={() => setLocation(currentLocation)} className="mx-1">
          Back to Location
        </Button>
      </div>
    </div>
  );
};

export default Game;
