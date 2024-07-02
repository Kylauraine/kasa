import React from "react";
import NavBar from "../NavBar/NavBar";
import logo from "./logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
