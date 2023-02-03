import React from "react";

function GuessInput({ guesses, setGuesses, isGameWon }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      alert("Guess must be 5 letters long");
      return;
    }

    setGuesses([...guesses, guess]);    
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guess}
        required
        disabled={isGameWon !== null}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
