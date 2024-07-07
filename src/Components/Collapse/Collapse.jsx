import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title} <FontAwesomeIcon icon={faAngleUp} className={`arrow ${isOpen ? "down" : "up"}`} />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>{children}</div>
    </div>
  );
};

export default Collapse;
