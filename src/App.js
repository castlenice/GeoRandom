import React from "react";
import GoogleMap, { Marker } from "react-maps-google";
import "./App.css";

// reactstrap components
import {
  Button
 
} from "reactstrap";

// core components


const App = () => {
  return (
  <div className="App">
    <div className="Map">
      <GoogleMap apiKey="AIzaSyDN1EmofMqvJN0UTRO7noWW6ysjoscptEw">
        <Marker position={{ lat: 40.7174343, lng: -73.9930319 }} />
      </GoogleMap>
    </div>
    </div>
  )
};

export default App;
