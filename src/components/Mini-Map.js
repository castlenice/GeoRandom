import react from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import "../App.css";
import { Button } from "reactstrap";
// const MiniMap = () => {

//     const getInitialState = () => {
//         return {
//             marker: null,
//             size: "small"
//         };
//     },

//     const mapOptions = () => {

//         google.maps.MapOptions = {
//             center: { lat: 0, lng: 0 },
//             zoom: 1,
//             zoomControl: true,
//             streetViewControl: false,
//             mapTypeControl: false,
//             draggableCursor: 'crosshair'

//         };
//     }

// export default MiniMap

function InitMap() {
  //     const myLatlng = { lat: -25.363, lng: 131.044 };
  //     const map = new google.maps.Map(document.getElementById("map"), {
  //       zoom: 4,
  //       center: myLatlng,
  //     });
  //     const marker = new google.maps.Marker({
  //       position: myLatlng,
  //       map,
  //       title: "Click to zoom",
  //     });

  //     map.addListener("center_changed", () => {
  //       // 3 seconds after the center of the map has changed, pan back to the
  //       // marker.
  //       window.setTimeout(() => {
  //         map.panTo(marker.getPosition());
  //       }, 3000);
  //     });
  //     marker.addListener("click", () => {
  //       map.setZoom(8);
  //       map.setCenter(marker.getPosition());
  //     });
  const containerStyle = {
    width: "500px",
    height: "350px",
  };
  const firstCoordinates = {
    lat: 51.453825,
    lng: 7.032503,
  };
  const [guessedLocations, setGuessedLocations] = useState([]);
  const [currentGuess, setCurrentGuess] = useState();

  return (
    <div className="Mini-Map">
      <LoadScript googleMapsApiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
        <GoogleMap
          onClick={(e) => {
            setCurrentGuess(e.latLng);
          }}
          mapContainerStyle={containerStyle}
          center={firstCoordinates}
          zoom={1}
          options={{
            disableDefaultUI: false,
            mapTypeId: "roadmap",
            gestureHandling: "greedy",
            tilt: 45,
            minZoom: 1,
          }}
        >
          <Marker position={currentGuess}></Marker>
        </GoogleMap>
      </LoadScript>
      <Button
        onClick={() => {
          guessedLocations.push(currentGuess);
          console.log(guessedLocations);
          setGuessedLocations(guessedLocations);
        }}
      >
        Submit Guess
      </Button>
    </div>
  );
}
export default InitMap;
