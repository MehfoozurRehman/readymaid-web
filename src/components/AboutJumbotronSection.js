import React from "react";
import { aboutjumbotron } from "../assets";
import { Link } from "react-router-dom";

export function AboutJumbotronSection() {
  return (
    <div className="about__jumbotron">
      <img
        src={aboutjumbotron}
        alt="aboutjumbotron"
        className="about__jumbotron__img"
      />
      <div className="about__jumbotron__overlay">
        <div className="about__jumbotron__overlay__heading">About Us</div>
        <div className="about__jumbotron__overlay__info">
          Readymaid is a one stop shop, a marketplace, a platform to provide
          services of skilled labors to both consumers & corporations alike.
          This includes provisioning of services of Maids, Gardeners, Guards,
          Chef, Chauffeurs, Nurses, Nannies, Janitors, Plumbers, Electricians,
          and other human capital
        </div>
        <div className="about__jumbotron__overlay__buttons">
          <Link
            to="/"
            className="about__jumbotron__overlay__buttons__link about__jumbotron__overlay__buttons__link__primary"
          >
            More
          </Link>
          <Link
            to="/"
            className="about__jumbotron__overlay__buttons__link about__jumbotron__overlay__buttons__link__secondary"
          >
            Services
          </Link>
        </div>
      </div>
    </div>
  );
}
