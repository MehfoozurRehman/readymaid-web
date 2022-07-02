import React from "react";
import { HomeCareSection } from "./HomeCareSection";
import { HomeJumbotronSection } from "./HomeJumbotronSection";
import { HomeSaleSection } from "./HomeSaleSection";
import { HomeSolutionsSection } from "./HomeSolutionsSection";

export default function Home() {
  return (
    <>
      <HomeJumbotronSection />
      <HomeSaleSection />
      <HomeSolutionsSection />
      <HomeCareSection />
    </>
  );
}
