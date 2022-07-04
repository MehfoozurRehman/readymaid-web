import React from "react";
import { AboutConceptsSection } from "../components/AboutConceptsSection";
import { AboutJumbotronSection } from "../components/AboutJumbotronSection";
import { AboutKeyFactorsSection } from "../components/AboutKeyFactorsSection";
import { AboutOurMissionSection } from "../components/AboutOurMissionSection";
import { AboutOurStory } from "../components/AboutOurStory";
import { AboutBestServices } from "../components/AboutBestServices";
import { AboutSatisfied } from "../components/AboutSatisfied";
import { AboutOurFoundation } from "../components/AboutOurFoundation";
import { AboutOurLeader } from "../components/AboutOurLeader";

export default function AboutUs() {
  return (
    <>
      <AboutJumbotronSection />
      <AboutConceptsSection />
      <AboutKeyFactorsSection />
      <AboutOurMissionSection />
      <AboutOurStory />
      <AboutOurLeader />
      <AboutOurFoundation />
      <AboutSatisfied />
      <AboutBestServices />
    </>
  );
}
