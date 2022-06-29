import React from "react";
import benefit from "../assets/img/Benefit__background.png";

export default function Benefit() {
  return (
    <div className="benefit__section">
      <img src={benefit} className="benefit__section__img" alt="/" />
      <div className="benefit__secton__container">
        <div className="benefit__secton__banner__data">
          <div className="benefit__secton__banner__data__heading">
            Benefits to Customers
          </div>
          <div>
            <div className="benefit__section__banner__data__heading__text">
              Our customers are our most important assets. They are more than a
              family and we extend our all-out support to make their journey
              with us a memorable and comfortable one.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
