import React from "react";
import { HomeCareSection } from "./HomeCareSection";
import { HomeJumbotronSection } from "./HomeJumbotronSection";
import { HomePaymentsSection } from "./HomePaymentsSection";
import { HomeSaleSection } from "./HomeSaleSection";
import { HomeSolutionsSection } from "./HomeSolutionsSection";
import { HomeIndustrySection } from "./HomeIndustrySection";

export default function Home() {
  return (
    <>
      <HomeJumbotronSection />
      <HomeSaleSection />
      <HomeSolutionsSection />
      <HomeCareSection />
      <HomePaymentsSection />
      <HomeIndustrySection />
    </>
  );
}
