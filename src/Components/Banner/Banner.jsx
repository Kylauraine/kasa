import React from "react";
import "./Banner.scss";

const Banner = ({ title, imageUrl }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" />
      <h2>{title}</h2>
    </div>
  );
};

export default Banner;
