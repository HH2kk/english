import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import "./TopicHello.css";

const lessons = [
  {
    id: 1,
    title: "Task1",
    progress: 0,
    total: 10,
    description: "Hello!",
    button: "TIẾP TỤC",
    owlImg: "/images/dino_0_1.png",
    path: "/task1"
  },
  {
    id: 2,
    title: "Phần 2",
    progress: 0,
    total: 10,
    description: "I'm starting to learn English.",
    button: "NHẢY TỚI PHẦN 2",
    owlImg: "/images/dino_0_0.png",
  },
];

export default function TopicHello() {
  const { lop } = useParams();
  return (
    <div className="lesson-list">
      <h2 className="back">
        <Link to="/lo-trinh">← Trở về</Link>
      </h2>

      {lessons.map((lesson) => {
        const percent = Math.min((lesson.progress / lesson.total) * 100, 100);

        return (
          <div className="lesson-card" key={lesson.id}>
            <div className="lesson-info">
              <h3>{lesson.title}</h3>
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <span className="progress-text">
                  {lesson.progress}/{lesson.total}
                </span>
              </div>
              <p>{lesson.description}</p>
            </div>

            <div className="lesson-actions">
              <button>{lesson.button}</button>
              <img src={lesson.owlImg} alt="Dino" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
