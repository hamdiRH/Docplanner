import React from "react";
import "./styles.css";

const Contry = () => {
  return (
    <div className="country">
      <div className="countrybloc">
        <div className="bloc-country">
          <img
            className="imgcountry"
            src="https://www.docplanner.com/images/warsaw.png"
          />
          <div className="dicc">
            <h3 className="h3ctry">Warsaw</h3>
            <button>SEE OPENING</button>
          </div>
        </div>
        <div className="bloc-country">
          {" "}
          <img
            className="imgcountry"
            src="https://www.docplanner.com/images/barcelona.png"
          />{" "}
          <div className="dicc">
            <h3 className="h3ctry">Barcelona</h3>
            <button>SEE OPENING</button>
          </div>
        </div>
        <div className="bloc-country">
          {" "}
          <img
            className="imgcountry"
            src="https://www.docplanner.com/images/istanbul.png"
          />{" "}
          <div className="dicc">
            <h3 className="h3ctry">Istanbul</h3>
            <button>SEE OPENING</button>
          </div>
        </div>
      </div>
      <div className="countrybloc">
        <div className="bloc-country">
          {" "}
          <img
            className="imgcountry"
            src="https://www.docplanner.com/images/rome.png"
          />{" "}
          <div className="dicc">
            <h3 className="h3ctry">Rome</h3>
            <button>SEE OPENING</button>
          </div>
        </div>
        <div className="bloc-country">
          {" "}
          <img
            className="imgcountry"
            src="https://www.docplanner.com/images/mexico-city.png"
          />{" "}
          <div className="dicc">
            <h3 className="h3ctry">Mexico</h3>
            <button>SEE OPENING</button>
          </div>
        </div>
        <div className="bloc-country">
          {" "}
          <img
            className="imgcountry"
            src="https://www.docplanner.com/images/curitiba.png"
          />{" "}
          <div className="dicc">
            <h3 className="h3ctry">Curitibia</h3>
            <button>SEE OPENING</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contry;
