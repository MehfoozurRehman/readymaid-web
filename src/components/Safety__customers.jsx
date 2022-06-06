import React from "react";
import Safety__Cards from "./Safety__Cards";
import gray__abstract from "../assets/img/gray__abstract.png";

export default function Safety__customers() {
  return (
    <div className="safety__customer__section">
      <img
        src={gray__abstract}
        className="safety__customer__section__background"
        alt="/"
      />
      <div className="safety__customer__section__container">
        <div className="safety__customer__section__content">
          <div className="safety__customer__section__container__heading">
            Safety for Customers
          </div>
        </div>
        <Safety__Cards />
      </div>
    </div>
  );
}
