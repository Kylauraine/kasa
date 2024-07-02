import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import bannerHome from "../Assets/bannerHome.png";
import Gallery from "../Components/Gallery/Gallery";
import "./GlobalStyle.scss";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="global-page">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" imageUrl={bannerHome} />
      <div className="gallery-container">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
