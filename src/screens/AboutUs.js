import React from "react";
import { AboutConceptsSection } from "./AboutConceptsSection";
import { AboutJumbotronSection } from "./AboutJumbotronSection";
import { AboutKeyFactorsSection } from "./AboutKeyFactorsSection";
import { AboutOurMissionSection } from "./AboutOurMissionSection";
import { AboutOurStory } from "./AboutOurStory";

export default function AboutUs() {
  return (
    <>
      <AboutJumbotronSection />
      <AboutConceptsSection />
      <AboutKeyFactorsSection />
      <AboutOurMissionSection />
      <AboutOurStory />
    </>
  );
}
