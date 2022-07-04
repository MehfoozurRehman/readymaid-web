import React from "react";
import { readymaidconcepts } from "../assets";
import { readymaidConceptsData } from "../constants/readymaidConceptsData";

export function AboutConceptsSection() {
  return (
    <div className="about__concepts">
      <img
        src={readymaidconcepts}
        alt="readymaidconcepts"
        className="about__concepts__img"
      />
      <div className="about__concepts__content">
        <div className="about__concepts__content__heading">
          The concept of Readymaid is simple yet powerful
        </div>
        <div className="about__concepts__content__list">
          {readymaidConceptsData.map((item) => (
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
