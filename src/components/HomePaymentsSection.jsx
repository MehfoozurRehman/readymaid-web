import React from "react";
import { Fade } from "react-reveal";
import { simplifiedpayments } from "../assets";

export function HomePaymentsSection() {
  return (
    <div className="home__payments">
      <img
        src={simplifiedpayments}
        alt="simplifiedpayments"
        className="home__payments__img"
      />
      <div className="home__payments__overlay">
        <div className="home__payments__overlay__heading">
          <Fade>Simplified Payments</Fade>
        </div>
        <div className="home__payments__overlay__info">
          <Fade>
            Easy & online payments for your resources.{" "}
            <a href="#">Learn More</a>
          </Fade>
        </div>
      </div>
    </div>
  );
}
