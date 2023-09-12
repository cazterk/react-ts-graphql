import React from "react";
import Header from "../header/header.component";
import "./app.component.css";
import "../../common/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../../pages/about/about.page";
import Home from "../../pages/home/home.page";
import { ApolloProvider } from "@apollo/client";
import client from "../../common/apollo-client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
