import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import data from "../../Data/data.json";
import "./Gallery.scss";

const Gallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="gallery">
      {items.map((item) => (
        <Link to={`/details/${item.id}`} key={item.id}>
          <Card cover={item.cover} title={item.title} />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
