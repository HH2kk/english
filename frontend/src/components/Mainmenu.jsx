import React, { useState } from "react";
import "./Mainmenu.css";
import { Link } from "react-router-dom";

export default function Mainmenu() {
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
<<<<<<< Updated upstream
          <li><Link to="/trangchu">Trang chủ</Link></li>
          <li><Link to="/flashcard">Học tập</Link></li>
          <li><Link to="/lesson">Từ vựng chủ đề</Link></li>
=======
          <li><Link to="/lop1">Trang chủ</Link></li>
          <li><Link to="/hoc-tap">Học tập</Link></li>
          <li><Link to="/tu-vung">Từ vựng chủ đề</Link></li>
>>>>>>> Stashed changes
          <li><Link to="/lo-trinh">Lộ trình</Link></li>
        </ul>
      </header>
    </div>
  );
}
