import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="container">
      <img
        className="logoDocplanner"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="Docplanner Group"
      />

      <ul className="menu">
        <li>
          <a href="" className="item1">
            About&nbsp;us
          </a>
        </li>
        <li>
          <a href="" className="item">
            Career
          </a>
        </li>
        <li>
          <a href="" className="item3">
            Departments
          </a>

          <ul className="none item4">
            <li>
              <a href="#">Marketeing</a>
            </li>
            <li>
              <a href="#">custmor Succeess</a>
            </li>
            <li>
              <a href="#">it, product</a>
            </li>
            <li>
              <a href="#">finance</a>
            </li>
            <li>
              <a href="#">HR & more</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
