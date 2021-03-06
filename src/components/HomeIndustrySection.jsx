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
      <div className="home__industry__heading">
        Creating an <span>Industry</span>
      </div>
      <div className="home__industry__content">
        <HomeIndustrySectionEntry
          img={empoweringresources}
          alt="empoweringresources"
          title={
            <>
            Empowering <span>Resources</span>
            </>
          }
          content={[
            "Better work rights",
            "Structured payments",
            "Job security",
          ]}
        />
        <HomeIndustrySectionEntry
          img={givingbacktosociety}
          alt="givingbacktosociety"
          title={
            <>
              Giving Back <span>To The Society</span>
            </>
          }
          content={["Ease of processes", "Abundance of job opportunities"]}
        />
        <HomeIndustrySectionEntry
          img={happycustomer}
          alt="happycustomer"
          title={
            <>
            Happy <span>Customers</span>
            </>
          }
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
