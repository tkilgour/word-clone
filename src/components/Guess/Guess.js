import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessArray = guess ? checkGuess(guess, answer) : range(5).map(() => "");
  
  return (
    <p className="guess">
      {guessArray.map((letterObj, index) => (
        <span className={`cell${letterObj && ` ${letterObj.status}`}`} key={index}>
          {letterObj.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
