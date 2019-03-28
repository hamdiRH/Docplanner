import React from "react";
import "./styles.css";

const Platform = () => {
  return (
    <section className="largbloc">
      <div className="s4" style={{ color: "red" }}>
        <h2>The world's biggest healthcare platform</h2>
        <p className="pers">
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries.
        </p>
      </div>

      <div className="fourblocs">
        <div className="b1">
          <div className="fourbloc" style={{ marginTop: "70px" }}>
            <img src="https://www.docplanner.com/img/flag.png" />
            <h3>Leader in 10 countries</h3>
            <p>
              Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil,
              Colombia, Argentina and Chile
            </p>
          </div>

          <div className="fourbloc">
            <img src="https://www.docplanner.com/img/visits.png" />
            <h3>1 million appointments</h3>
            <p>booked last month</p>
          </div>
        </div>
        <div className="b2">
          <div className="fourbloc" style={{ marginTop: "70px" }}>
            <img src="https://www.docplanner.com/img/patients.png" />
            <h3>30 million unique patients</h3>
            <p>visit us every month</p>
          </div>

          <div className="fourbloc">
            <img src="https://www.docplanner.com/img/doctors.png " />
            <h3>2 million active doctors</h3>
            <p>trust in our solutions</p>
          </div>
        </div>
      </div>

      <img
        src="https://i.imgur.com/TdsyKDk.png"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "10%",
          width: "30%"
        }}
      />
    </section>
  );
};

export default Platform;
