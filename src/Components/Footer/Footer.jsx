import React from "react";
import logo from "./logowhite.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" />
        <p>© 2024 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
