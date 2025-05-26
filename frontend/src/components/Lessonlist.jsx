import React, { useEffect, useState } from "react";
import "./Lessonlist.css";

function LessonList() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/lessons")
      .then((res) => res.json())
      .then((data) => {
        setLessons(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi tải bài học:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="lesson-container">
      <div className="lesson-box">
        <h1 className="lesson-title">📚 Danh sách bài học</h1>
        {loading ? (
          <p>Đang tải...</p>
        ) : lessons.length === 0 ? (
          <p>Không có bài học nào.</p>
        ) : (
          <ul className="lesson-list">
            {lessons.map((lesson) => (
              <li key={lesson._id} className="lesson-item">
                <h2>{lesson.title}</h2>
                <p>{lesson.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LessonList;
