import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound/NotFound";
import CardInfo from "./Pages/CardInfo/CardInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details/:id" element={<CardInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
