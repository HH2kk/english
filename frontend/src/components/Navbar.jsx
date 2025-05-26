import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Home() {
  const rocketRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const buttonElement = buttonRef.current;
    const rocketElement = rocketRef.current;

    if (buttonElement && rocketElement) {
      const handleClick = () => {
        rocketElement.classList.add('rocket-fly');
        setTimeout(() => {
          navigate('/trangchu');
        }, 2000);
      };

      buttonElement.addEventListener('click', handleClick);
      return () => {
        buttonElement.removeEventListener('click', handleClick);
      };
    }
  }, [navigate]);

  return (
    <div className="bia">
      <img
        className="anh1"
        src="https://babilala.vn/wp-content/uploads/2023/02/app-giai-tieng-anh.jpg"
        alt="WED học tiếng anh cho trẻ em"
      />
      <div className="intro">
        <img
          id="rocket"
          ref={rocketRef}
          src="https://cdn.pixabay.com/photo/2017/06/25/22/00/rocket-2442125_1280.png"
          alt="Rocket"
        />
        <button className="button-btn" ref={buttonRef}>
          Bấm vào đây
        </button>
      </div>
    </div>
  );
}

export default Home;
