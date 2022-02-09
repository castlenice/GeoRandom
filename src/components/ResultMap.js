import {
  LoadScript,
  GoogleMap,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { useContext } from "react";
import "../App.css";
import { Button } from "reactstrap";
import { gameContext } from "./GameContext";
import randomLocation from "random-location";
import { Link } from "react-router-dom";
import { randomCoordinates } from "./Game";

const ResultMap = (rounds) => {
  const firstCoordinates = {
    lat: 51.453825,
    lng: 7.032503,
  };

  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const {
    location,
    setLocation,
    currentGuess,
    setCurrentGuess,
    correctLocations,
    setCorrectLocations,
    guessedLocations,
    setGuessedLocations,
  } = useContext(gameContext);

  console.log(guessedLocations);
  return (
    <div className="resultmap">
      <LoadScript googleMapsApiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={firstCoordinates}
          zoom={2.9}
          options={{
            disableDefaultUI: false,
            mapTypeId: "roadmap",
            gestureHandling: "greedy",
            tilt: 45,
            minZoom: 1,
          }}
        >
          {correctLocations.length === 5 ? (
            guessedLocations.flatMap((guessedLocation, i) => {
              return (
                <>
                  <Marker position={correctLocations[i]}></Marker>
                  <Marker position={guessedLocation}></Marker>
                  <Polyline
                    path={[guessedLocation, correctLocations[i]]}
                  ></Polyline>
                </>
              );
            })
          ) : (
            <>
              <Marker position={location}></Marker>
              <Marker position={currentGuess}></Marker>
              <Polyline path={[currentGuess, location]}></Polyline>
            </>
          )}
        </GoogleMap>
      </LoadScript>
      <div className="resultmessage">
        <p>
          Your guess was {" "} 
          {randomLocation.distance(
            { latitude: location.lat, longitude: location.lng },
            { latitude: currentGuess.lat, longitude: currentGuess.lng }
          ) / 1000}{" "}
          kilometer from the right location!
        </p>
      </div>
      {correctLocations.length === 5 ? (
        <Button
          className="resultbutton"
          tag={Link}
          to="/game"
          onClick={() => {
            const nextLocation = randomCoordinates(); //.hier kommen die generierten koordinaten her
            setLocation(nextLocation); //setzt den wert von "location", der sich immer veraendert
            correctLocations.push(nextLocation); //nextLocation wird in den leeren array "correctLocations gepusht"
            setCorrectLocations([]);
            setCurrentGuess(null);
            setGuessedLocations([]);
          }}
        >
          Next game
        </Button>
      ) : (
        <Button
          className="resultbutton"
          tag={Link}
          to="/game"
          onClick={() => {
            const nextLocation = randomCoordinates(); //.hier kommen die generierten koordinaten her
            setLocation(nextLocation); //setzt den wert von "location", der sich immer veraendert
            correctLocations.push(nextLocation); //nextLocation wird in den leeren array "correctLocations gepusht"
            setCorrectLocations(correctLocations);
            setCurrentGuess(null);
          }}
        >
          Next Round
        </Button>
      )}
    </div>
  );
};

export default ResultMap;
