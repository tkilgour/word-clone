import React from "react";

function Banner({ isGameWon, answer, numOfGuesses }) {
  return (
    <div className={`banner ${isGameWon ? "happy" : "sad"}`}>
      {isGameWon ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses} guess{numOfGuesses > 1 && 'es'}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
