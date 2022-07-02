import React from "react";
import {
  empoweringresources,
  givingbacktosociety,
  happycustomer,
} from "../assets";
import { HomeCareSection } from "./HomeCareSection";
import { HomeJumbotronSection } from "./HomeJumbotronSection";
import { HomePaymentsSection } from "./HomePaymentsSection";
import { HomeSaleSection } from "./HomeSaleSection";
import { HomeSolutionsSection } from "./HomeSolutionsSection";

export default function Home() {
  return (
    <>
      <HomeJumbotronSection />
      <HomeSaleSection />
      <HomeSolutionsSection />
      <HomeCareSection />
      <HomePaymentsSection />
      <div className="home__industry">
        <div className="home__industry__heading">Creating an industry</div>
        <div className="home__industry__content">
          <HomeIndustrySectionEntry
            img={empoweringresources}
            alt="empoweringresources"
            title="Empowering Resources"
            content={[
              "Better work rights",
              "Structured payments",
              "Job security",
            ]}
          />
          <HomeIndustrySectionEntry
            img={givingbacktosociety}
            alt="givingbacktosociety"
            title="Giving Back To The Society"
            content={["Ease of processes", "Abundance of job opportunities"]}
          />
          <HomeIndustrySectionEntry
            img={happycustomer}
            alt="happycustomer"
            title="Happy Customers"
            content={[
              "Trained Workforce",
              "Better Customer Rights",
              "Availability of Resources",
            ]}
          />
        </div>
      </div>
    </>
  );
}

function HomeIndustrySectionEntry({ img, alt, title, content }) {
  return (
    <div className="home__industry__content__entry">
      <img
        src={img}
        alt={alt}
        className="home__industry__content__entry__img"
      />
      <div className="home__industry__content__entry__content">
        <div className="home__industry__content__entry__content__title">
          {title}
        </div>
        <div className="home__industry__content__entry__content__info">
          {content.map((entry) => (
            <span>{entry}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
