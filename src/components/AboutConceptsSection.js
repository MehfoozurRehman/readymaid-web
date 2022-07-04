import React from "react";
import { readymaidconcepts } from "../assets";

export function AboutConceptsSection() {
  const readymaidConceptsData = [
    "It is not about creating a marketplace or service providing platform but   creating an industry that doesn’t exist at all.",
    "It is about empowering the most neglected segment of the society.",
    "It is about providing a corporate exposure and working environment to the ones who can never think about it.",
    "It is about providing job security to the ones who find it difficult even to get (job) one. ",
    "It is not about gaining from the society but giving back to it.",
    "It is not about calling people for the job rather reaching out to them for it.",
    "It is about creating a platform where anyone can come to find a job.",
    "It is about creating an environment where people are not judged by their qualification and skill sets but their identity i.e. their existence.",
    "It is not about finding but making the right resource.",
  ];
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
