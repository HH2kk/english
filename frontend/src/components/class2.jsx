import React, { useState } from 'react';
import './Class2.css';
import { Link } from 'react-router-dom';

function Class2() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="thanhdieuhuong">
      <nav className={`chiara ${isCollapsed ? 'collapsed' : ''}`} id="chiara">
        <button className="muiten" onClick={toggleSidebar}>
          <strong>≡</strong>
        </button>
        <ul>
          <li>
            <Link to="/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.293l6 6V15h-4v-4H6v4H2V9.293l6-6zM7.293 2.5l-6 6a1 1 0 001.414 1.414L8 4.914l5.293 5.293a1 1 0 001.414-1.414l-6-6a1 1 0 00-1.414 0z" />
                </svg>
              </span>
              <span style={{ fontSize: '32px' }}>Home</span>
            </Link>
          </li>
          <li><Link to="/bai-tap">Bài tập</Link></li>
          <li><Link to="/lien-he">Liên hệ</Link></li>
        </ul>
      </nav>
      <main className={`giaodien ${isCollapsed ? 'fullwidth' : ''}`}>
        <h1>Giao diện bên phải nè!</h1>
        <p>Nhấn nút mũi tên để ẩn/hiện thanh điều hướng nha.</p>
      </main>
    </div>
  );
}

export default Class2;