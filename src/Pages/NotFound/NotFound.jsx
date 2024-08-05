import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import "../GlobalStyle.scss"; // Vérifiez que ce fichier est correct
import "./NotFound.scss"; // Vérifiez que ce fichier est correct
import Footer from "../../Components/Footer/Footer";

const NotFound = () => {
  return (
    <div className="global-page">
      <Header />
      <div className="Not-found__wrapper">
        <h1 className="Not-found__title">404</h1>
        <h2 className="Not-found__message">Oups ! La page que vous demandez n'existe pas.</h2>
        <p>
          <Link to="/" className="Not-found__link">
            Retourner sur la page d'accueil.
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
