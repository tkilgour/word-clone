import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessArray = guess ? guess : range(5).map(() => "");
  
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
