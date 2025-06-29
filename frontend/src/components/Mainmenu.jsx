import React from "react";
import "./Mainmenu.css";
import ThanhDieuHuong from "./ThanhDieuHuong";
import { Link } from "react-router-dom";

export default function Mainmenu({ username }) {
  return (
    <>
      <div className="container">
        <img src="/images/background.png" alt="background" />
      </div>
      <ThanhDieuHuong username={username} />
    </>
  );
}
