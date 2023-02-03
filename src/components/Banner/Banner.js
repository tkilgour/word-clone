import React from "react";

function Banner({ isGameWon, answer }) {
  return (
    isGameWon !== null && (
      <div className={`banner ${isGameWon ? "happy" : "sad"}`}>
        {isGameWon ? (
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>3 guesses</strong>.
          </p>
        ) : (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
      </div>
    )
  );
}

export default Banner;
