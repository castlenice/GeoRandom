import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import NavbarComponent from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Game from "./components/Game.js";
import Home from "./components/Home.js";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="Navbar">
          <NavbarComponent />
        </div>
      </header>
      <main>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="Footer">
          <Footer />
        </div>
      </footer>
    </div>
  );
};
export default App;
