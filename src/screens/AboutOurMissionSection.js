import React from "react";
import { ourmission } from "../assets";

export function AboutOurMissionSection() {
  return (
    <div
      className="home__payments"
      style={{
        marginTop: "5em",
      }}
    >
      <img src={ourmission} alt="ourmission" className="home__payments__img" />
      <div className="home__payments__overlay">
        <div className="home__payments__overlay__heading">Our Mission</div>
        <div className="home__payments__overlay__info">
          Our mission to create a venture that not only provide ease of
          processes to consumers, create job opportunities, automate the
          processes, give back to the society but should also be unique in
          nature, pioneer in its field and establish not just a company but an
          industry.
        </div>
      </div>
    </div>
  );
}
