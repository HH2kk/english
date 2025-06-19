import React, { useEffect, useState } from "react";
import "./Pass1.css";

export default function Pass1() {
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase("exit"), 2000);
    const exitTimer = setTimeout(() => setPhase("done"), 10000);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="pass1-container">
      {phase !== "done" ? (
        <div
          className={`pass1-box ${phase === "enter" ? "fade-in" : "fade-out"}`}
        >
          <h1 className="pass1-text">Ải 1</h1>
        </div>
      ) : (
        <div className="pass1-done fade-done">Giai đoạn kết thúc!</div>
      )}
    </div>
  );
}
