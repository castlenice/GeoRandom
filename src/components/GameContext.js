import { createContext, useState } from "react";
import { randomCoordinates } from "./Game";

export const gameContext = createContext();

const GameState = ({ children }) => {
  const [location, setLocation] = useState(randomCoordinates());
  const [correctLocations, setCorrectLocations] = useState([location]);

  const [guessedLocations, setGuessedLocations] = useState([]);
  const [currentGuess, setCurrentGuess] = useState();

  return (
    <gameContext.Provider
      value={{
        location,
        setLocation,
        correctLocations,
        setCorrectLocations,
        guessedLocations,
        setGuessedLocations,
        currentGuess,
        setCurrentGuess,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameState;
