import React from "react";
import { Zoom } from "react-reveal";
import { joinourteam } from "../assets";

export function HomeJoinTeamSection() {
  return (
    <div className="home__join__team">
      <img
        src={joinourteam}
        alt="joinourteam"
        className="home__join__team__img"
      />
      <Zoom>
        <div className="home__join__team__overlay">
          <div className="home__join__team__overlay__slogan">Join Our Team</div>
          <div className="home__join__team__overlay__sub__heading">
            We Provide
          </div>
          <div className="home__join__team__overlay__heading">
            <span>Best Quality Services</span> for you
          </div>
          <div className="home__join__team__overlay__info">
            Readymaid is a one stop shop, a marketplace, a platform to provide
            services of skilled labors to both consumers & corporations alike.
            This includes provisioning of services of Maids, Gardeners, Guards,
            Chef, Chauffeurs, Nurses, Nannies, Janitors, Plumbers, Electricians,
            and other human capital
          </div>
        </div>
      </Zoom>
    </div>
  );
}
