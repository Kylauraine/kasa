import React from "react";
import "./TagList.scss";

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, id) => (
        <span key={id} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
