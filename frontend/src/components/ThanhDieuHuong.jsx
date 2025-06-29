import React, {useState} from "react";
import "./ThanhDieuHuong.css";
import { Link } from "react-router-dom";

export default function ThanhDieuHuong({ username }) {
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
    <div className="main-menu-container">
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
          <li id="Ten">
            {username ? (
              <span>Xin chào, {username}</span>
            ) : (
              <details>
                <summary className="main-menu-link" id="Name">Tài Khoản</summary>
                <div className="account-dropdown">
                  <Link to="">Thông tin tài khoản</Link>
                  <Link to="/dang-nhap">Đăng Nhập</Link>
                  <Link to="">Thay đổi mật khẩu</Link>
                </div>
              </details>
            )}
          </li>
          <li>
            <Link to="/lop1">Trang chủ</Link>
          </li>
          <li>
            <Link to="/hoc-tap">Học tập</Link>
          </li>
          <li>
            <Link to="/tu-vung">Từ vựng chủ đề</Link>
          </li>
          <li>
            <Link to="/lo-trinh">Lộ trình</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}