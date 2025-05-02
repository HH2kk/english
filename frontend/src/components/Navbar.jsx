import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

// dựng hàm Home
function Home() {
  const rocketRef = useRef(null);
  const chonlopRef = useRef(null);
  const introRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonnElement = buttonRef.current;
    const rocketElement = rocketRef.current;
    const chonlopElement = chonlopRef.current;
    const introElement = introRef.current;

    if (buttonnElement && rocketElement && chonlopElement && introElement) {
      const handleClick = () => {
        rocketElement.classList.add('rocket-fly');
        setTimeout(() => {
          introElement.style.display = 'none';
          chonlopElement.classList.remove('hidden');
          chonlopElement.classList.add('show');
        }, 2000);
      };
      buttonnElement.addEventListener('click', handleClick);
      return () => {
        buttonnElement.removeEventListener('click', handleClick);
      };
    }
  }, []);
  // gọi Trang chính 
  return (
    <div className="bia">
      <img
        className="anh1"
        src="https://babilala.vn/wp-content/uploads/2023/02/app-giai-tieng-anh.jpg"
        alt="WED học tiếng anh cho trẻ em"
      />
      <div className="intro" ref={introRef}>
        <img
          id="rocket"
          ref={rocketRef}
          src="https://cdn.pixabay.com/photo/2017/06/25/22/00/rocket-2442125_1280.png"
          alt="Rocket"
        />
        <Link to="#" className="button-btn" ref={buttonRef}>
          Bấm vào đây
        </Link>
      </div>
      <div className="chonlop hidden" ref={chonlopRef}>
        <Link to="#" style={{ fontSize: "50px" }}>CHỌN LỚP ĐANG HỌC</Link>
        <Link to="/lop1"><button>Lớp 1</button></Link> {/* Chuyển đến trang Flashcard */}
        <Link to="/lop2"><button>Lớp 2</button></Link> {/* Chuyển đến trang Lesson */}
        <Link to="/lop3"><button>Lớp 3</button></Link> {/* Chuyển đến trang GiaoDien */}
        <Link to="/giaodien"><button>Lớp 4</button></Link> {/* Chuyển đến trang GiaoDien */}
        <Link to="/giaodien"><button>Lớp 5</button></Link> {/* Chuyển đến trang GiaoDien */}
      </div>
    </div>
  );
}

// Gọi hàm Home
export default Home;