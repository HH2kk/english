import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import confetti from "canvas-confetti";
import "../components/Level1.css";

const quizData = [
  {
    type: "multiple-choice",
    question: "What is the correct word for 'con mèo'?",
    options: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: "Cat",
  },
  {
    type: "listening",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    question: "Nghe và chọn từ đúng:",
    options: ["Cat", "Dog", "Rat", "Pig"],
    correctAnswer: "Cat",
  },
  {
    type: "writing",
    question: "Viết lại từ tiếng Anh đúng cho 'quả táo':",
    correctAnswer: "Apple",
  },
];

export default function Level3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

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
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });

      // ✅ Lưu kết quả vào localStorage
      localStorage.setItem("result-level-3", JSON.stringify({
        correct: correctCount,
        total: quizData.length,
      }));
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setTextAnswer("");
    setSubmitted(false);
    setShowConfetti(false);
    setScore(0);
    setCorrectCount(0);
    setIsFinished(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">
        <Link to="/lo-trinh">← Trở về</Link>
      </h1>

      {isFinished ? (
        <div className="text-center mt-10">
          <img
            src="https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif"
            alt="Chúc mừng"
            className="mx-auto w-40 h-40 mb-4"
          />
          <h2 className="text-3xl font-bold text-green-600">🎉 Hoàn thành rồi!</h2>
          <p>Bạn đã trả lời đúng {correctCount} / {quizData.length} câu!</p>
          <p>Tổng điểm: {score} XP</p>
          <p>🌟 Ngôi sao: {"★".repeat(stars)}{"☆".repeat(5 - stars)}</p>
          <button onClick={handleRestart} className="button-check mt-4">
            🔁 Làm lại
          </button>
        </div>
      ) : (
        <>
          {showConfetti && (
            <div className="text-center mb-4">
              <img
                src="https://media.giphy.com/media/LpDmM7Ih7JdXyyhUpi/giphy.gif"
                alt="Confetti"
                className="w-28 h-28 mx-auto"
              />
            </div>
          )}

          <p className="text-lg font-semibold mb-3">{currentQuestion.question}</p>

          {currentQuestion?.type === "multiple-choice" && (
            <div className="option-grid">
              {currentQuestion.options.map((option) => (
                <div
                  key={option}
                  className={`option-card ${selected === option ? "selected" : ""}`}
                  onClick={() => !submitted && setSelected(option)}
                >
                  <img src={`/img/${option.toLowerCase()}.png`} alt={option} />
                  <div className="option-label">{option}</div>
                </div>
              ))}
            </div>
          )}

          {currentQuestion?.type === "listening" && (
            <>
              <audio controls src={currentQuestion.audioUrl} className="mb-4" />
              <div className="option-grid">
                {currentQuestion.options.map((option) => (
                  <div
                    key={option}
                    className={`option-card ${selected === option ? "selected" : ""}`}
                    onClick={() => !submitted && setSelected(option)}
                  >
                    <div className="option-label">{option}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {currentQuestion?.type === "writing" && (
            <input
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              disabled={submitted}
              className="w-full p-3 mt-3 mb-4 border border-gray-400 rounded-lg text-center text-lg"
              placeholder="Nhập câu trả lời của bạn..."
            />
          )}

          <div className="relative mt-6 min-h-[48px]">
            {!submitted ? (
              <div className="flex justify-center">
                <button className="button-check" onClick={handleSubmit}>
                  Kiểm tra
                </button>
              </div>
            ) : (
              <>
                {currentIndex > 0 && (
                  <button
                    className="button-checkleft"
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                  >
                    ⬅ Câu trước
                  </button>
                )}
                <button
                  className="button-checkright"
                  onClick={handleNext}
                >
                  {currentIndex + 1 === quizData.length ? "Xem kết quả" : "Câu tiếp ➡"}
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
