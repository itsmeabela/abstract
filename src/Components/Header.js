import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
//images
import logo from "../Assets/header-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="contents">
        <a href="google.com" className="logo_content">
          <img src={logo} alt="logo" />
          <span> | Help Center</span>
        </a>

        <div className="signup_content">
          <button className="btn-1">Submit a request</button>
          <button className="btn-2">Sign Up</button>
        </div>
        <div className="menu">
          <BiMenuAltRight />
          <div className="signup_content">
            <button className="btn-1">Submit a request</button>
            <button className="btn-2">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
