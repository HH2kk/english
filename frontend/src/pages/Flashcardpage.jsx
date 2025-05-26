import "./FlashcardPage.css";
import { FlashcardList } from "../components/Flashcardlist";
import { flashcards } from "../data/flashcards";

export default function FlashcardPage() {
  return (
    <div className="flashcard-page">
      <h1 className="flashcard-title"> Flashcard Demo</h1>
      <FlashcardList cards={flashcards} />
    </div>
  );
}