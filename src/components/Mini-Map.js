import react from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import { Button, NavLink } from "reactstrap";
import { useContext } from "react";
import { gameContext } from "./GameContext";

function InitMap() {
  const containerStyle = {
    width: "100%",
    height: "350px",
  };
  const firstCoordinates = {
    lat: 51.453825,
    lng: 7.032503,
  };

  const {
    currentGuess,
    setCurrentGuess,
  } = useContext(gameContext);

  return (
    <>
      <div className="Mini-Map my-3">
        <LoadScript googleMapsApiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
          <GoogleMap
            onClick={(e) => {
              setCurrentGuess({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }}
            mapContainerStyle={containerStyle}
            center={currentGuess || firstCoordinates}
            zoom={1}
            options={{
              disableDefaultUI: false,
              mapTypeId: "roadmap",
              gestureHandling: "greedy",
              tilt: 45,
              minZoom: 1,
              disableDoubleClickZoom: true,
              draggableCursor: "crosshair",
            }}
          >
            <Marker position={currentGuess}></Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}
export default InitMap;
