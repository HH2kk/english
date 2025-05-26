import { useState } from "react";
import "./Flashcard.css";

export default function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const handleFlip = () => {
    if (!flipped) {
      speak(question);
      setTimeout(() => setFlipped(true), 500);
    } else {
      setFlipped(false);
    }
  };

  return (
    <div
      className="flashcard-wrapper"
      onClick={handleFlip}
    >
      <div
        className={`flashcard-inner ${flipped ? "flipped" : ""}`}
      >
        <div className="flashcard front">
          {question}
        </div>
        <div className="flashcard back">
          {answer}
        </div>
      </div>
    </div>
  );
}