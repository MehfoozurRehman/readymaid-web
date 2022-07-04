import React from "react";
import { benifitsjumbotron } from "../assets";
import { benfitsFeaturesData } from "../constants/benfitsFeaturesData";
import { BenifitsFeatureEntry } from "../components/BenifitsFeatureEntry";

export default function Benifits() {
  return (
    <>
      <div className="about__jumbotron">
        <img
          src={benifitsjumbotron}
          alt="benifitsjumbotron"
          className="about__jumbotron__img"
        />
        <div className="about__jumbotron__overlay">
          <div className="about__jumbotron__overlay__heading">
            Benefits to Customers
          </div>
          <div className="about__jumbotron__overlay__info">
            Our customers are our most important assets. They are more than a
            family and we extend our all-out support to make their journey with
            us a memorable and comfortable one.
          </div>
        </div>
      </div>
      <div className="benefits__features">
        {benfitsFeaturesData.map((feature) => (
          <BenifitsFeatureEntry
            key={JSON.stringify(feature)}
            feature={feature}
          />
        ))}
      </div>
    </>
  );
}
