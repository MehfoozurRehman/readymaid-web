import React from "react";
import { benifitsjumbotron } from "../assets";

export function BenifitsJumbotron({}) {
  return (
    <div className="about__jumbotron">
      <img
        src={benifitsjumbotron}
        alt="benifitsjumbotron"
        className="about__jumbotron__img"
      />
      <div className="about__jumbotron__overlay">
        <div className="about__jumbotron__overlay__heading">
          Benefits to Customers
        </div>
        <div className="about__jumbotron__overlay__info">
          Our customers are our most important assets. They are more than a
          family and we extend our all-out support to make their journey with us
          a memorable and comfortable one.
        </div>
      </div>
    </div>
  );
}
