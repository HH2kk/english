// src/LoginRegisterForm.jsx
import React, { useState } from "react";
import "./LoginFrom.css";
import { useNavigate, Link } from "react-router-dom";
import ThanhDieuHuong from "./ThanhDieuHuong";

const LoginRegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setStatus("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (isLogin) {
      // Xử lý đăng nhập
      const storedPassword = localStorage.getItem(username);
      if (!storedPassword) {
        setStatus("Tài khoản không tồn tại!");
      } else if (storedPassword !== password) {
        setStatus("Mật khẩu không đúng!");
      } else {
        setStatus("Đăng nhập thành công!");
        navigate("/lop1");
      }
    } else {
      // Xử lý đăng ký
      if (localStorage.getItem(username)) {
        setStatus("Tài khoản đã tồn tại!");
      } else {
        localStorage.setItem(username, password);
        setStatus("Đăng ký thành công! Bạn có thể đăng nhập.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="trang-dang-nhap">
      <ThanhDieuHuong />
      <div className={`login-form ${isLogin ? "" : "register-mode"}`}>
        <div className="login-form-left">
          <h2>
            {isLogin ? (
              <>
                <span>LOG</span>
                <br />
                <span>IN</span>
              </>
            ) : (
              <>
                <span>SIGN</span>
                <br />
                <span>UP</span>
              </>
            )}
          </h2>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-button"
          >
            {isLogin
              ? "Chưa có tài khoản? Đăng ký"
              : "Đã có tài khoản? Đăng nhập"}
          </button>
        </div>
        <div className="login-form-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>USERNAME : </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <label>PASSWORD:</label>
              <div className="input-pass-wrap">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="show-pass-btn"
                  onClick={() => setShowPass((v) => !v)}
                  tabIndex={-1}
                  style={{
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    fontSize: "1.2rem",
                  }}
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            {status && (
              <p
                className={
                  status === "Đăng nhập thành công!" ||
                  status === "Đăng ký thành công! Bạn có thể đăng nhập."
                    ? "status-success"
                    : "error"
                }
              >
                {status}
              </p>
            )}
            <div className="button-row">
              <button type="submit">
                {isLogin ? "Đăng Nhập" : "Đăng Ký"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
