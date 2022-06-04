import React from "react";
import Qualityservicesbanner from "../assets/img/Qualityservicebanner.png";

export default function Qualityservices() {
  return (
    <div className="quality__services__section">
      <img
        src={Qualityservicesbanner}
        className="quality__services__section__banner__img"
        alt="Qualityservicesbanner"
      />

      <div className="quality__services__section__banner__img__overlay">
        <div className="quality__services__section__banner__img__overlay__header">
          Join Our Team
        </div>
        <div className="quality__services__section__banner__img__overlay__header__middle">
          We Provide{" "}
          <span className="quality__services__section__banner__img__overlay__header__middle__text">
            Best Quality Services
          </span>{" "}
          for you
        </div>
        <div className="quality__services__section__banner__img__overlay__header__middle__detail">
          Readymaid is a one stop shop, a marketplace, a platform to provide
          services of skilled labors to both consumers & corporations alike.
          This includes provisioning of services of Maids, Gardeners, Guards,
          Chef, Chauffeurs, Nurses, Nannies, Janitors, Plumbers, Electricians,
          and other human capital
        </div>
      </div>
    </div>
  );
}
