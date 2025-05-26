import React, { useState } from "react";
import "./lo-trinh.css";
import "./Mainmenu.css";
import { useNavigate, Link } from "react-router-dom";

const levels = [
  { id: 1, name: "Ải 1", top: "60%", left: "10%" },
  { id: 2, name: "Ải 2", top: "40%", left: "25%" },
  { id: 3, name: "Ải 3", top: "65%", left: "40%" },
  { id: 4, name: "Ải 4", top: "45%", left: "60%" },
  { id: 5, name: "Ải 5", top: "65%", left: "80%" },
];

export default function LoTrinh() {
  const navigate = useNavigate();
  const [results, setResults] = useState([null, null, null, null, null]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dinoSrc, setDinoSrc] = useState("/images/dino-1-removebg-preview.png");

  const getStars = (result) => {
    if (!result || result.total === 0) return 0;
    const percent = (result.correct / result.total) * 100;
    if (percent > 80) return 3;
    if (percent > 50) return 2;
    return 1;
  };

  const stars = results.map(r => getStars(r));

  const handleLevelClick = (idx) => {
    if (idx > 0 && getStars(results[idx - 1]) < 2) return;
    if (idx === currentLevel) {
      navigate(`/lo-trinh/ai-${levels[idx].id}`);
      return;
    }
    setIsJumping(true);
    setTimeout(() => {
      setCurrentLevel(idx);
      setIsJumping(false);
      setTimeout(() => navigate(`/lo-trinh/ai-${levels[idx].id}`), 200);
    }, 600);
  };

  const renderStars = (num) => {
    if (num === 0) return <span style={{ color: "#bbb", fontSize: "0.9em" }}>★★★</span>;
    return (
      <span>
        {[1, 2, 3].map((i) => (
          <span key={i} style={{ color: i <= num ? "#FFD700" : "#ccc", fontSize: "1.2em" }}>★</span>
        ))}
      </span>
    );
  };

  const handleDinoClick = () => {
    setMenuOpen(!menuOpen);
    setDinoSrc(!menuOpen
      ? "/images/dino-2-removebg-preview.png"
      : "/images/dino-1-removebg-preview.png"
    );
  };

  return (
    <div className="lo-trinh-bg" >
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

      <h2 className="lo-trinh-title">Hành trình vượt ải</h2>

      <div className="lo-trinh-map" >
        {levels.map((level, idx) => {
          const locked = idx > 0 && getStars(results[idx - 1]) < 2;
          return (
            <div
              key={level.id}
              style={{
                position: "absolute",
                top: level.top,
                left: level.left,
                transform: "translate(-50%, -50%)",
                width: 100,
                height: 150,
                
              }}
            >
              <div
                className={`island${locked ? " locked" : ""}`}
                onClick={() => handleLevelClick(idx)}
              >
                {currentLevel === idx && (
                  <img
                    src="/images/dino-1-removebg-preview.png"
                    alt="Dino"
                    className={`lo-trinh-char ${isJumping ? "jumping" : ""}`}
                  />
                )}
              </div>
              <div className="island-label">{level.name}</div>
              <div className="island-stars">{renderStars(stars[idx])}</div>
              {locked && <div className="lo-trinh-lock">🔒</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
