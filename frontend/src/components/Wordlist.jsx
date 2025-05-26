import React, { useState, useEffect } from "react";
import "./wordlist.css";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/words")
      .then(res => res.json())
      .then(data => {
        setWords(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching words:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (words.length === 0) return <p>Không có từ vựng nào.</p>;

  return (
    <ul>
      {words.map(word => (
        <li key={word._id}>
          <strong>{word.word}</strong>: {word.meaning}
        </li>
      ))}
    </ul>
  );
}
