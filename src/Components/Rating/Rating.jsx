import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

const Rating = ({ rating }) => {
  const totalStars = 5;
  const redStars = Array(rating).fill(true);
  const grayStars = Array(totalStars - rating).fill(false);

  return (
    <div className="rating">
      {redStars.map((_, index) => (
        <span key={`red-${index}`} className="star red">
          <FontAwesomeIcon icon={solidStar} />
        </span>
      ))}
      {grayStars.map((_, index) => (
        <span key={`gray-${index}`} className="star gray">
          <FontAwesomeIcon icon={solidStar} />
        </span>
      ))}
    </div>
  );
};

export default Rating;
