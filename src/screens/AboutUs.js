import React from "react";
import { AboutConceptsSection } from "./AboutConceptsSection";
import { AboutJumbotronSection } from "./AboutJumbotronSection";
import { AboutKeyFactorsSection } from "./AboutKeyFactorsSection";
import { AboutOurMissionSection } from "./AboutOurMissionSection";
import ourleaders from "../assets/ourleader.png";
import { AboutOurStory } from "./AboutOurStory";

export default function AboutUs() {
  return (
    <>
      <AboutJumbotronSection />
      <AboutConceptsSection />
      <AboutKeyFactorsSection />
      <AboutOurMissionSection />
      <AboutOurStory />
      <div className="about__us__our__leader_container">
        <div className="about__us__our__leader_container__overlay">
          <img  src={ourleaders} alt="" />
        </div>
        <div className="about__us__our__leader_container__heading">
          <div className="about__us__our__leader_container__heading__content__heading">
            Our leaders
          </div>
          <div className="about__us__our__leader__container__heading__content__heading__para">
            Our leaders are purpose driven and are motivated to revolutionize
            our country by technology to bring ease of processes and simplified
            lives. We are building an industry where each employee will be
            treated with utmost respect, care, and benefits. Where each customer
            will be treated with most care and dedication. We are creating one
            big family that will lead as an example for others to follow.
          </div>
          <div className="about__us__our__leader_container__heading__button">
            <button>More</button>
          </div>
        </div>
      </div>
    </>
  );
}
