import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessArray = guess ? guess.split("") : range(5).map(() => "");
  
  return (
    <p className="guess">
      {guessArray.map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
