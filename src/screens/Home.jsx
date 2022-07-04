import React from "react";
import { HomeCareSection } from "../components/HomeCareSection";
import { HomeJumbotronSection } from "../components/HomeJumbotronSection";
import { HomePaymentsSection } from "../components/HomePaymentsSection";
import { HomeSaleSection } from "../components/HomeSaleSection";
import { HomeSolutionsSection } from "../components/HomeSolutionsSection";
import { HomeIndustrySection } from "../components/HomeIndustrySection";
import { HomeJoinTeamSection } from "../components/HomeJoinTeamSection";
import { HomeFaqSection } from "../components/HomeFaqSection";

export default function Home() {
  return (
    <>
      <HomeJumbotronSection />
      <HomeSaleSection />
      <HomeSolutionsSection />
      <HomeCareSection />
      <HomePaymentsSection />
      <HomeIndustrySection />
      <HomeJoinTeamSection />
      <HomeFaqSection />
    </>
  );
}
