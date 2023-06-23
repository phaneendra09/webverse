import React from "react";

import { Link } from 'react-router-dom';
import "../styles/login.css";

export default function DashboardLogin() {
  return (
    <div className="dashboard-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="BG">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
            </div>
            <div
              className="vector-wrapper"
              style={{
                backgroundImage: "url(image.png)",
              }}
            >
              <img className="vector" alt="Vector" src="vector.png" />
            </div>
          </div>
          <div className="form">
            <div className="username">
              <div className="overlap-group-2">
                <div className="text-wrapper">USERNAME</div>
                <img className="user" alt="User" src="user.png" />
              </div>
            </div>
            <div className="password">
              <div className="overlap-2">
                <div className="password-2">PASSWORD</div>
                <img className="lock" alt="Lock" src="lock.png" />
              </div>
            </div>
            <div className="login-btn">
              <div className="login-wrapper">
                <div className="login">LOGIN</div>
              </div>
            </div>
            <div className="text-wrapper-2">Forgot password?</div>
          </div>
          <h1 className="h-1">ELF INSTITUTE OF TECHNOLOGY</h1>
        </div>
      </div>
    </div>
  );
};