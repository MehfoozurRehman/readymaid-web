import React from "react";
import { keyfectors, readymaidconcepts } from "../assets";
import { AboutJumbotronSection } from "./AboutJumbotronSection";
import { AboutOurMissionSection } from "./AboutOurMissionSection";

export default function AboutUs() {
  return (
    <>
      <AboutJumbotronSection />
      <AboutConceptsSection />
      <AboutKeyFactorsSection />
      <AboutOurMissionSection />
    </>
  );
}

function AboutKeyFactorsSection({}) {
  const keyfectorsData = [
    "Unemployment rate of Pakistan is 5%.",
    "1 out of every 10 persons in the country is experiencing unemployment.",
    "With rupee devaluation, lack of stable policies, political instability, and other facts. This situation is predicted to be worsening in the coming years.",
    "The major factor of the unemployment is abundance of job seekers than creators. It laid the foundation to create a venture that not only provide ease of processes to consumers, create job opportunities, automate the processes, help giving back to the society but should also be unique in nature, lucrative",
  ];
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

function AboutConceptsSection({}) {
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
