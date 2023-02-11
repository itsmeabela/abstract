import React from "react";

//images
import logo from "../Assets/header-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="contents">
        <div className="logo_content">
          <img src={logo} alt="logo" />
          <span> | Help Center</span>
        </div>

        <div className="signup_content">
          <button className="btn-1">Submit a request</button>
          <button className="btn-2">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
