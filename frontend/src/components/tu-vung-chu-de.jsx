import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./tu-vung-chu-de.css";
import "./Mainmenu.css";

const topics = [
  { name: "Động vật", path: "/dong-vat", image: "/img/animal.jpg" },
  { name: "Trái cây", path: "/trai-cay", bg: "#b2ff59" },
  { name: "Màu sắc", path: "/mau-sac", bg: "#80d8ff" },
  { name: "Gia đình", path: "/gia-dinh", bg: "#ff80ab" },
  { name: "Phương Tiện", path: "/phuong-tien", bg: "#ff80ab" },
  { name: "Thực Vật", path: "/thuc-vat", bg: "#ff80ab" },
  { name: "Trò Chơi", path: "/tro-choi", bg: "#ff80ab" },
];

export default function StudyTopics() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dinoSrc, setDinoSrc] = useState("/images/dino-1-removebg-preview.png");
  const navigate = useNavigate();

  const handleDinoClick = () => {
    setMenuOpen(!menuOpen);
    setDinoSrc(
      !menuOpen
        ? "/images/dino-2-removebg-preview.png"
        : "/images/dino-1-removebg-preview.png"
    );
  };

  // Carousel vô hạn
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const scrollLeft = () => {
    setStartIndex((prev) =>
      (prev - 1 + topics.length) % topics.length
    );
  };

  const scrollRight = () => {
    setStartIndex((prev) =>
      (prev + 1) % topics.length
    );
  };

  // Lấy đúng 4 ô liên tiếp, có vòng lại nếu vượt quá
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
          <li><Link to="/lop1">Trang chủ</Link></li>
          <li><Link to="/hoc-tap">Học tập</Link></li>
          <li><Link to="/tu-vung">Từ vựng chủ đề</Link></li>
          <li><Link to="/lo-trinh">Lộ trình</Link></li>
        </ul>
      </header>

      {/* Ô chủ đề học tập */}
      <div className="o-chu-de">
        <h2>Chọn chủ đề học tập</h2>

        <button className="arrow-btn left" onClick={scrollLeft} aria-label="Trái">
          &#8592;
        </button>

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
                onClick={() => navigate(topic.path)}
              >
                {topic.name}
              </div>
            );
          })}
        </div>

        <button className="arrow-btn right" onClick={scrollRight} aria-label="Phải">
          &#8594;
        </button>
      </div>
    </div>
  );
}
