import React from "react";
import Simplified from "../components/Simplified";
import Solution from "../components/Solution";
import Carouselslide from "../components/Carousel";
import About__Section from "../components/About__Section";
import Industry from "../components/Industry";
import Qualityservices from "../components/Qualityservices";
import Accordian from "../components/Accordian";
import HomeSection from "../components/HomeSection";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <Carouselslide />
      <Solution />
      <About__Section />
      <Simplified />
      <Industry />
      <Qualityservices />
      <Accordian />
    </>
  );
}
