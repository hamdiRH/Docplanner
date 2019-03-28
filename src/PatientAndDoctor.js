import React from "react";
import "./styles.css";
const PatientAndDoctor = () => {
  return (
    <section className="bloc">
      <div className="bloc1">
        <p className="pbloc1">For patients </p>
        <p className="pbloc">
          Find a doctor, book a visit and solve any health-related doubt
        </p>
        <form>
          <select name="Find a doctor" size="1" className="selectoption">
            <option>CHOOSE COUNTRY</option>
            <option>argentina</option>
            <option>australia</option>
            <option>brazil</option>
            <option>chile</option>
          </select>
        </form>

        <img
          alt="A"
          src="https://www.docplanner.com/img/screen-marketplace@2x.png"
          className="imgblog"
        />
      </div>
      <div className="bloc2">
        <p className="pbloc1">For doctors</p>
        <p className="pbloc">
          Save time managing visits and cut no-shows by half
        </p>
        <img
          alt="B"
          src="https://www.docplanner.com/img/screen-saas@2x.png"
          className="imgblog"
        />
      </div>
    </section>
  );
};

export default PatientAndDoctor;
