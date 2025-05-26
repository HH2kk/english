<<<<<<< Updated upstream
import React from "react";
import { Link } from 'react-router-dom';

function Allclass() {
  return (
    <div className="bia">
      <img
        className="anh1"
        src="https://babilala.vn/wp-content/uploads/2023/02/app-giai-tieng-anh.jpg"
        alt="WED học tiếng anh cho trẻ em"
      />
      <div className="chonlop show">
        <Link to="#" style={{ fontSize: "50px" }}>CHỌN LỚP ĐANG HỌC</Link>
        <Link to="/lop1"><button>Lớp 1</button></Link>
        <Link to="/lop2"><button>Lớp 2</button></Link>
        <Link to="/lop3"><button>Lớp 3</button></Link>
        <Link to="/giaodien"><button>Lớp 4</button></Link>
        <Link to="/giaodien"><button>Lớp 5</button></Link>
      </div>
    </div>
    
  );
}

export default Allclass;
=======
import React, { useRef } from "react";
import "./Allclass.css";
import { Link } from 'react-router-dom';

function Class() {
  const chonlopRef = useRef(null); // Thêm dòng này nếu muốn dùng ref

  return (
    <div className="bia">
        <img
            className="anh1"
            src="https://babilala.vn/wp-content/uploads/2023/02/app-giai-tieng-anh.jpg"
            alt="WED học tiếng anh cho trẻ em"
        />
        <div className="chonlop hidden" ref={chonlopRef}>
            <Link to="#" style={{ fontSize: "50px" }}>CHỌN LỚP ĐANG HỌC</Link>
            <Link to="/lop1"><button>Lớp 1</button></Link>
            <Link to="/lop2"><button>Lớp 2</button></Link>
            <Link to="/lop3"><button>Lớp 3</button></Link>
            <Link to="/giaodien"><button>Lớp 4</button></Link>
            <Link to="/giaodien"><button>Lớp 5</button></Link>
        </div>
    </div>
  );
}

export default Class;
>>>>>>> Stashed changes
