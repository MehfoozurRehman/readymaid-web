import React from "react";
import { Zoom } from "react-reveal";
import ourleaders from "../assets/ourleader.png";

export function AboutOurLeader() {
  return (
    <div className="about__us__our__leader_container">
      <div className="about__us__our__leader_container__overlay">
        <Zoom>
          <img src={ourleaders} alt="" />
        </Zoom>
      </div>
      <div className="about__us__our__leader_container__heading">
        <div className="about__us__our__leader_container__heading__content__heading">
          Our <span>Leader</span>
        </div>
        <div className="about__us__our__leader__container__heading__content__heading__para">
          Our leaders are purpose driven and are motivated to revolutionize our
          country by technology to bring ease of processes and simplified lives.
          We are building an industry where each employee will be treated with
          utmost respect, care, and benefits. Where each customer will be
          treated with most care and dedication. We are creating one big family
          that will lead as an example for others to follow.
        </div>
      </div>
    </div>
  );
}
