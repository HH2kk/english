import React, { useState } from "react";
import "./Class3.css";
import { Link } from 'react-router-dom'; // Nếu bạn muốn dùng Link cho điều hướng

export default function Class3() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dinoSrc, setDinoSrc] = useState("/images/dino-1-removebg-preview.png");

  const handleDinoClick = () => {
    setMenuOpen(!menuOpen);
    setDinoSrc(
      !menuOpen
        ? "/images/dino-2-removebg-preview.png"
        : "/images/dino-1-removebg-preview.png"
    );
  };

  return (
    <div>
      <div classname="container">
        <img src="/images/background-class-3.jpg" classname="full" />
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
          <li><Link to="/">Trang chủ</Link></li> {/* Sử dụng Link nếu bạn muốn điều hướng bằng React Router */}
          <li><Link to="/hoc-tap">Học tập</Link></li>
          <li><Link to="/tu-vung">Từ vựng chủ đề</Link></li>
          <li><Link to="/lo-trinh">Lộ trình</Link></li>
        </ul>
      </header>
    </div>
  );
}