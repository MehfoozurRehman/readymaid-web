import React from "react";
import { benfitsFeaturesData } from "../constants/benfitsFeaturesData";
import { BenifitsFeatureEntry } from "../components/BenifitsFeatureEntry";

export function BenifitsFeature({}) {
  return (
    <div className="benefits__features">
      {benfitsFeaturesData.map((feature) => (
        <BenifitsFeatureEntry key={JSON.stringify(feature)} feature={feature} />
      ))}
    </div>
  );
}
