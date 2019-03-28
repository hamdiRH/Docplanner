import React from "react";
import "./styles.css";

const Company = () => {
  return (
    <section className="company">
      <h2 className="companytitle">
        We are a global company with local culture{" "}
      </h2>

      <ul className="mnls">
        <li>
          <img
            className="companysvg"
            alt="logo"
            src="https://www.docplanner.com/img/sygnet.png"
          />
          <a href="" className="companylist">
            Znanylekraz
          </a>
        </li>

        <li>
          <img
            className="companysvg"
            alt="logo"
            src="https://www.docplanner.com/img/sygnet.png"
          />
          <a href="" className="companylist">
            Doctoralia
          </a>
        </li>

        <li>
          <img
            className="companysvg"
            alt="logo"
            src="https://www.docplanner.com/img/sygnet.png"
          />
          <a href="" className="companylist">
            MioDottore
          </a>
        </li>

        <li>
          <img
            className="companysvg"
            alt="logo"
            src="https://www.docplanner.com/img/sygnet.png"
          />
          <a href="" className="companylist">
            DoktorTakvimi
          </a>
        </li>

        <li>
          <img
            className="companysvg"
            alt="logo"
            src="https://www.docplanner.com/img/sygnet.png"
          />
          <a href="" className="companylist">
            Znamylekar
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Company;
