import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Slider.scss";

const Slider = ({ pictures }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {pictures.length > 1 && (
        <>
          <button className="left-arrow" onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="right-arrow" onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </>
      )}
      {pictures.length > 1 && <div className="slide-number">{`${current + 1}/${pictures.length}`}</div>}
      {pictures.map((picture, id) => (
        <div className={id === current ? "slide active" : "slide"} key={id}>
          {id === current && <img src={picture} alt={`slide ${id}`} className="image" />}
        </div>
      ))}
    </section>
  );
};

export default Slider;
