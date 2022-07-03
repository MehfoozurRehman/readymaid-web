import React from "react";
import { keyfectors } from "../assets";

export function AboutKeyFactorsSection({}) {
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
