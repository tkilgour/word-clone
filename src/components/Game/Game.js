import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setFormattedGuesses] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(null);

  function setGuesses(tentativeGuesses) {
    const checkedGuess = checkGuess(tentativeGuesses.pop(), answer)
    const nextGuesses = [...guesses, checkedGuess]

    if (checkedGuess.every((letterObj) => letterObj.status === "correct")) {
      setIsGameWon(true);
    } else {
      // guess was incorrect
      if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setIsGameWon(false);
      }
    }
    
    setFormattedGuesses(nextGuesses);
  }
  
  return (
    <>
      <GuessResults guesses={guesses} setIsGameWon={setIsGameWon} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        isGameWon={isGameWon}
      />
      {isGameWon !== null && (
        <Banner
          isGameWon={isGameWon}
          answer={answer}
          numOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
