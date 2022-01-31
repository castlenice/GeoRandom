import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import NavbarComponent from "./components/Navbar.js";
import Game from "./components/Game.js";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="Navbar">
          <NavbarComponent />
        </div>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
};
export default App;
