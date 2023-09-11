import React from "react";
import Header from "../header/header.component";
import "./app.component.css";
import "../../common/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />;
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
