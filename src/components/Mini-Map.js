import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import "../App.css";
import { useContext } from "react";
import { gameContext } from "./GameContext";

function InitMap() {
  const containerStyle = {
    width: "100%",
    height: "475px",
  };
  const firstCoordinates = {
    lat: 29.976989,
    lng: 19.184017, //Lybien
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
            zoom={3}
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
