import React from "react";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import data from "../../Data/data.json";
import "../GlobalStyle.scss";
import "./CardInfo.scss";
import Slider from "../../Components/Slider/Slider";
import TagList from "../../Components/TagList/TagList";
import Collapse from "../../Components/Collapse/Collapse";
import Host from "../../Components/Host/Host";
import Rating from "../../Components/Rating/Rating";
import Footer from "../../Components/Footer/Footer";
import NotFound from "../NotFound/NotFound";

const CardDetails = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === id);

  if (!card) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div className="global-page">
      <Header />
      <Slider pictures={card.pictures} />
      <div className="All-Infos-Wrapper">
        <div className="Info-tag-wrapper">
          <div className="CardInfo">
            <h2 className="CardInfo CardInfo__title">{card.title}</h2>
            <p className="CardInfo CardInfo__location">{card.location}</p>
          </div>
          <TagList tags={card.tags} />
        </div>
        <div className="host-rating-wrapper">
          <Host name={card.host.name} picture={card.host.picture} />
          <Rating rating={parseInt(card.rating)} />
        </div>
      </div>
      <div className="collapse-wrapper">
        <div className="collapse-column">
          <Collapse title="Description">
            <p>{card.description}</p>
          </Collapse>
        </div>
        <div className="collapse-column">
          <Collapse title="Équipements">
            <ul>
              {card.equipments.map((equipment, id) => (
                <li key={id}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetails;
