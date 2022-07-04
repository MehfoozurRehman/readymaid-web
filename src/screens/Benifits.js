import React from "react";
import { BenifitsAppCard } from "../components/BenifitsAppCard";
import { BenifitsFeature } from "../components/BenifitsFeature";
import { BenifitsJumbotron } from "../components/BenifitsJumbotron";
import { BenifitsSafty } from "../components/BenifitsSafty";
import { BenifitsSmartSolution } from "../components/BenifitsSmartSolution";

export default function Benifits() {
  return (
    <>
      <BenifitsJumbotron />
      <BenifitsFeature />
      <BenifitsSafty />
      <BenifitsSmartSolution />
      <BenifitsAppCard />
    </>
  );
}
