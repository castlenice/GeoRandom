import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import NavbarComponent from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Game from "./components/Game.js";
import Home from "./components/Home.js";
import ResultMap from "./components/ResultMap";
import GameState from "./components/GameContext";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="Navbar">
          <NavbarComponent />
        </div>
      </header>
      <GameState>
        <main>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/game/results" element={<ResultMap />} />
            </Routes>
          </div>
        </main>
      </GameState>
      <footer>
        <div className="Footer">
          <Footer />
        </div>
      </footer>
    </div>
  );
};
export default App;
