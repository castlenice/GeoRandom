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
  height: "800px",
};

// function getRandomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }

const randomCoordinates = () => {
  const P = [
    { 
      //key: 1,
      latitude: 50.11321, //mittelpunkt der europaeischen union
      longitude: 9.253958
    },
    { 
      //key: 2,
      latitude: 46.149804, //ungarn 
      longitude: 20.242860
    },
    { 
      //key: 3,
      latitude: 32.268912, //ar rutba, irak
      longitude: 40.590456
    },
    { 
      //key: 3,
      latitude: 18.803846, //nan, thailand
      longitude: 101.233519
    },
    { 
      //key: 3,
      latitude: 41.02879171787002, //jining, mongolei
      longitude: 113.07519229093803
    },
    { 
      //key: 3,
      latitude: 47.520973,  //genay, frankreich , 
      longitude: 4.263213
    },
    { 
      //key: 3,
      latitude: 40.217481763143475, //spanien 
      longitude: -3.962726226726735
    },
    { 
      //key: 3,
      latitude: 40.133727, //pennsylvania, usa 
      longitude: -79.022366
    },
    { 
      //key: 3,
      latitude: 37.072552, //joplin, missouri, usa 
      longitude: -94.505264
    },
    { 
      //key: 3,
      latitude: 41.999902, //rich county, utah, usa 
      longitude: -111.055138
    },
    { 
      //key: 3,
      latitude: 41.073267, //BRC, nevada, usa 
      longitude: -119.120486
    },
  ];
  const L = P[Math.floor(Math.random() * P.length)];
  console.log(L);

  const R = 424000;
  const randomPoint = randomLocation.randomCirclePoint(L, R);
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
      <div className="button-1">
        <Button
          disabled={correctLocations.length === 5}
          onClick={() => {
            const nextLocation = randomCoordinates();
            setLocation(nextLocation);
            correctLocations.push(nextLocation);
            setCorrectLocations(correctLocations);
            // function setCorrectLocations({ lat, lng }) {
            //   const latLng = 'Your ' + lat + lng + '.';
            //   return latLng;
            // }
          }}
        >
          Play
        </Button>
        <Button onClick={() => setLocation(currentLocation)}>
          Back to Location
        </Button>
      </div>
      <div className="random-coordinate-list">
        {correctLocations.map((coordinate, index) => (
          <ul>
            <li key={index}>Latitude: {coordinate.lat}</li>
            <li key={index}>Longitude: {coordinate.lng}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Game;
