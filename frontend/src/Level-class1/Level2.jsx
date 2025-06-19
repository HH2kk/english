import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import confetti from "canvas-confetti";
import "../components/Level1.css";

const quizData = [
  {
    type: "multiple-choice",
    question: "What is the correct word for 'con mèo'?",
    image: "/img/cat-question.jpg",
    options: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: "Cat",
  },
  {
    type: "listening",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    question: "Nghe và chọn từ đúng:",
    image: "/img/listen-question.jpg",
    options: ["Cat", "Dog", "Rat", "Pig"],
    correctAnswer: "Cat",
  },
  {
    type: "writing",
    question: "Viết lại từ tiếng Anh đúng cho 'quả táo':",
    image: "/img/apple-question.jpg",
    correctAnswer: "Apple",
  },
];

export default function Level2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState([]);

  const currentQuestion = quizData[currentIndex];
  const isCorrect =
    currentQuestion?.type === "writing"
      ? textAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()
      : selected === currentQuestion?.correctAnswer;

  const correctPercent = Math.round((correctCount / quizData.length) * 100);
  const stars = Math.round(correctPercent / 20);

  const handleSubmit = () => {
    if (
      (currentQuestion.type === "writing" && textAnswer.trim() !== "") ||
      (currentQuestion.type !== "writing" && selected !== null)
    ) {
      setSubmitted(true);
      if (isCorrect) {
        setScore(score + 10);
        setCorrectCount(correctCount + 1);
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 1500);
      }
    }
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelected(null);
    setTextAnswer("");
    setPreviousQuestions([...previousQuestions, currentQuestion]);
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
      localStorage.setItem("result-level-2", JSON.stringify({
        correct: correctCount,
        total: quizData.length,
      }));
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSubmitted(false);
      setSelected(null);
      setTextAnswer("");
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">
        <Link to="/lo-trinh">← Trở về</Link>
      </h1>
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${(currentIndex / quizData.length) * 100}%` }}></div>
      </div>

      {isFinished ? (
        <div className="result-section">
          <h2>🎉 Hoàn thành rồi!</h2>
          <p>Bạn đã trả lời đúng {correctCount} / {quizData.length} câu!</p>
          <p>Điểm: {score}</p>
          <p>🌟 Ngôi sao: {"★".repeat(stars)}{"☆".repeat(5 - stars)}</p>
          <button className="check-button" onClick={() => window.location.href = '/level2'}>
            Ải tiếp theo
          </button>
        </div>
      ) : (
        <>
          <h1 className="question-title">{currentQuestion.question}</h1>

          {currentQuestion.image && (
            <img src={currentQuestion.image} alt="question" className="question-image" />
          )}

          {(currentQuestion.type === "multiple-choice" || currentQuestion.type === "listening") && (
            <>
              {currentQuestion.type === "listening" && (
                <audio controls src={currentQuestion.audioUrl} className="audio-player" />
              )}
              <div className="options-wrapper">
                {currentQuestion.options.map((option) => (
                  <div
                    key={option}
                    onClick={() => !submitted && setSelected(option)}
                    className={`option-card ${selected === option ? "selected" : ""}`}
                  >
                    <img src={`/img/${option.toLowerCase()}.png`} alt={option} className="option-image" />
                    <p className="option-label">{option}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {currentQuestion.type === "writing" && (
            <input
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              disabled={submitted}
              className="writing-input"
              placeholder="Nhập câu trả lời của bạn..."
            />
          )}

          <div className="button-wrapper">
            {currentIndex > 0 && (
              <button className="check-button" onClick={handleBack}>
                Câu trước
              </button>
            )}
            <button className="check-button" onClick={submitted ? handleNext : handleSubmit}>
              {submitted ? (currentIndex + 1 === quizData.length ? "Xem kết quả" : "Câu tiếp") : "Kiểm tra"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}