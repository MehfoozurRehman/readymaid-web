import React from "react";
import { keyfectors } from "../assets";
import { keyfectorsData } from "../constants/keyfectorsData";

export function AboutKeyFactorsSection() {
  return (
    <div className="about__concepts about__keyfactors">
      <img src={keyfectors} alt="keyfectors" className="about__concepts__img" />
      <div className="about__concepts__content">
        <div className="about__concepts__content__heading">Key factors</div>
        <div className="about__concepts__content__list">
          {keyfectorsData.map((item) => (
            <div
              className="about__concepts__content__list__item"
              key={JSON.stringify(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
