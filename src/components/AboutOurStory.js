import React from "react";
import { Zoom } from "react-reveal";
import { ourstory } from "../assets";

export function AboutOurStory() {
  return (
    <div className="about__concepts">
      <Zoom>
        <img src={ourstory} alt="ourstory" className="about__concepts__img" />
      </Zoom>
      <div
        className="about__concepts__content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="about__concepts__content__heading">Our Story</div>
        <div className="about__concepts__content__info">
          Readymaid is a unique online marketplace to provide the services of
          skilled workforce to both the consumers & corporations. Established in
          2022, we are pioneer of our field. Our vision is to not just establish
          a company but an industry that does not exist. We are a platform where
          there is job for everyone. We don’t find the right resource; we hire
          and make him right. Our extensive Learning & Development program make
          any resource market ready.
        </div>
      </div>
    </div>
  );
}
