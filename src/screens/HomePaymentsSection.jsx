import React from "react";
import { simplifiedpayments } from "../assets";

export function HomePaymentsSection({}) {
  return (
    <div className="home__payments">
      <img
        src={simplifiedpayments}
        alt="simplifiedpayments"
        className="home__payments__img"
      />
      <div className="home__payments__overlay">
        <div className="home__payments__overlay__heading">
          Simplified Payments
        </div>
        <div className="home__payments__overlay__info">
          Easy & online payments for your resources. <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
}
