import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Title from "./Title";
import Description from "./Description";
import PatientAndDoctor from "./PatientAndDoctor";
import Company from "./Company";
import Platform from "./Platform";
import Improve from "./Improve";
import Contry from "./Contry";
import Footer from "./Footer";

import "./styles.css";

const Docplanner = () => {
  return (
    <div>
      <Header />
      <Title />
      <Description />
      <PatientAndDoctor />
      <Company />
      <Platform />
      <Improve />
      <Contry />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Docplanner />, rootElement);
