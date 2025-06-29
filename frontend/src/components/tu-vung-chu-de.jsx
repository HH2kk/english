import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./tu-vung-chu-de.css";
import "./Mainmenu.css";
import ThanhDieuHuong from "./ThanhDieuHuong";

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
  const navigate = useNavigate();

  // Carousel vô hạn
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const scrollLeft = () => {
    setStartIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const scrollRight = () => {
    setStartIndex((prev) => (prev + 1) % topics.length);
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
    <>
      <div className="container">
        {/* Ô chủ đề học tập */}
        <div className="o-chu-de">
          <h2>Chọn chủ đề học tập</h2>

          <button
            className="arrow-btn left"
            onClick={scrollLeft}
            aria-label="Trái"
          >
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
                    backgroundImage: topic.image
                      ? `url(${topic.image})`
                      : undefined,
                    backgroundColor: topic.bg,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => navigate(topic.path)}
                >
                  {topic.name}
                </div>
              );
            })}
          </div>

          <button
            className="arrow-btn right"
            onClick={scrollRight}
            aria-label="Phải"
          >
            &#8594;
          </button>
        </div>
      </div>
      <ThanhDieuHuong />
    </>
  );
}
