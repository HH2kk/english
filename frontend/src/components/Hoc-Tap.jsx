import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Mainmenu.css";
import "./hoc-tap.css";

const activities = [
    {
        name: "Nghe",
        path: "/hoc-tap/nghe",
        bg: "#ffd54f",
        icon: "/images/ear.png",
    },
    {
        name: "Nói",
        path: "/hoc-tap/noi",
        bg: "#4fc3f7",
        icon: "/images/mouth.png",
    },
    {
        name: "Đọc",
        path: "/hoc-tap/doc",
        bg: "#81c784",
        icon: "/images/book.png",
    },
    {
        name: "Viết",
        path: "/hoc-tap/viet",
        bg: "#f48fb1",
        icon: "/images/pencil.png",
    },
];

export default function LearningPage() {
    const navigate = useNavigate();
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
        <div className="learning-container">
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


            <div className="hoc-tap-page">
                <h2 className="title">Chọn kỹ năng bạn muốn học</h2>
                <div className="activity-grid">
                    {activities.map((activity) => (
                        <div
                            key={activity.name}
                            className="activity-card"
                            style={{ backgroundColor: activity.bg }}
                            onClick={() => navigate(activity.path)}
                        >
                            <img src={activity.icon} alt={activity.name} className="activity-icon" />
                            <div className="activity-name">{activity.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
