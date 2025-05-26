import Flashcard from "./Flashcard";

export function FlashcardList({ cards }) {
  return (
    <div className="flashcard-grid">
      {cards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}
