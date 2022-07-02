import React from "react";
import { HomeJumbotronSection } from "./HomeJumbotronSection";
import { HomeSaleSection } from "./HomeSaleSection";
import { HomeSolutionsSection } from "./HomeSolutionsSection";

export default function Home() {
  return (
    <>
      <HomeJumbotronSection />
      <HomeSaleSection />
      <HomeSolutionsSection />
    </>
  );
}
