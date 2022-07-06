import React from "react";
import { Fade, Reveal } from "react-reveal";
import { becomeresource, getresource, readymaidforbuisness } from "../assets";
import { HomeCareSectionEntry } from "../components/HomeCareSectionEntry";

export function HomeCareSection() {
  return (
    <div className="home__care">
      <div className="home__care__header">
        <div className="home__care__header__heading">We Care About You</div>
        <div className="home__care__header__info">
          We are here to make your life easy <a href="#">Learn more.</a>
        </div>
      </div>
      <div className="home__care__content">
        <HomeCareSectionEntry
          heading="Readymaid For Business"
          info="Its just a click away"
          img={readymaidforbuisness}
          alt="readymaidforbuisness"
        />
        <HomeCareSectionEntry
          heading="Get a resource"
          info="Its just a click away"
          img={getresource}
          alt="getresource"
        />
        <HomeCareSectionEntry
          heading="Become a resource"
          info="Start Earning Today"
          img={becomeresource}
          alt="becomeresource"
        />
      </div>
    </div>
  );
}
