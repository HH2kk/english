import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./tu-vung-chu-de.css";
import "./Mainmenu.css";

const topics = [
  { name: "Xin chào", path: "/xinchao", image: "/img/animal.jpg" },
  { name: "Đồ dùng học tập", path: "/đồ dùng học tập", bg: "#b2ff59" },
  { name: "Màu sắc", path: "/color", bg: "#80d8ff" },
  { name: "Gia đình", path: "/family", bg: "#ff80ab" },
  { name: "Số đếm", path: "/number", bg: "#ff80ab" },
  { name: "Quần áo", path: "/clothes", bg: "#ff80ab" },
  { name: "Ngoại hình", path: "/appearance", bg: "#ff80ab" },
  { name: "Khuôn mặt", path: "/face", bg: "#ff80ab" },
];

export default function StudyTopics() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dinoSrc, setDinoSrc] = useState("/images/dino-1-removebg-preview.png");
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const visibleCount = 5;

  const handleDinoClick = () => {
    setMenuOpen(!menuOpen);
    setDinoSrc(
      !menuOpen
        ? "/images/dino-2-removebg-preview.png"
        : "/images/dino-1-removebg-preview.png"
    );
  };

  const handleCardClick = (clickedIndex) => {
  const centerIndex = 2; // vị trí giữa trong 5 thẻ
  if (clickedIndex === centerIndex) {
    const topic = getVisibleTopics()[clickedIndex];
    navigate(topic.path); // chuyển trang
  } else {
    const newStartIndex = (startIndex + clickedIndex - centerIndex + topics.length) % topics.length;
    setStartIndex(newStartIndex);
  }
};

  const scrollLeft = () => {
    setStartIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const scrollRight = () => {
    setStartIndex((prev) => (prev + 1) % topics.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        scrollLeft();
      } else if (e.key === "ArrowRight") {
        scrollRight();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getVisibleTopics = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(topics[(startIndex + i) % topics.length]);
    }
    return result;
  };

  return (
    <div>
      <div className="container">
        <img src="/images/background.png" alt="background" />
      </div>

      <div id="dino-toggle" onClick={handleDinoClick}>
        <img
          id="dino-img"
          src={dinoSrc}
          alt="Khủng long"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      <header className={`main-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/fullclass">Trang chủ</Link></li>
          <li><Link to="/hoc-tap">Học tập</Link></li>
          <li><Link to="/tu-vung">Từ vựng chủ đề</Link></li>
          <li><Link to="/lo-trinh">Lộ trình</Link></li>
          <li><Link to="/dang-nhap">Đăng nhập</Link></li>
        </ul>
      </header>
      <div className="o-chu-de">
        <h2>Chọn chủ đề học tập</h2>
        {/* chuyển động của các thẻ */}
        <div className="the-chu-de">
          {getVisibleTopics().map((topic, i) => {
            let posClass = "";
            if (i === 2) posClass = "center";
            else if (i === 1) posClass = "left1";
            else if (i === 3) posClass = "right1";
            else if (i === 0) posClass = "left2";
            else if (i === 4) posClass = "right2";
            return (
              <div
                key={topic.path}
                className={`the ${posClass}`}
                style={{
                  backgroundImage: topic.image ? `url(${topic.image})` : undefined,
                  backgroundColor: topic.bg,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                onClick={() => handleCardClick(i)}
              >
                {topic.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}