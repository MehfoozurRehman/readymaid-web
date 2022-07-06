import React from "react";
import service from "../assets/serviceend.png";

export function AboutBestServices() {
  return (
    <div className="Best__services__coustomer__container">
      <div className="Best__services__coustomer__container__main">
        <div className="Best__services__coustomer__container__heading">
          We Provide
        </div>
        <div className="Best__services__coustomer__container__heading__two">
          <span>Best Quality Services</span>
        </div>
        <div className="Best__services__coustomer__container__para">
          Readymaid is a one stop shop, a marketplace, a plateform to provide
          services of skilled labors to both consumers & corporations alike.
          this includes provisioning of Maids, Gardeners, Guards, Cheif,
          Chauffeurs, Nurses, Nannies, Janitors, Electricians, and other human
          capital.
        </div>
        <div className="Best__services_container__heading__button">
          <button>Apply now</button>
        </div>
      </div>
      <div className="Best__services__coustomer__container__img">
        <img src={service} alt="" />
      </div>
    </div>
  );
}
