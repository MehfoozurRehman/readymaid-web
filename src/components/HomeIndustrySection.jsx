import React from "react";
import {
  empoweringresources,
  givingbacktosociety,
  happycustomer,
} from "../assets";
import { HomeIndustrySectionEntry } from "../components/HomeIndustrySectionEntry";

export function HomeIndustrySection() {
  return (
    <div className="home__industry">
      <div className="home__industry__heading">Creating an Industry</div>
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
  );
}
