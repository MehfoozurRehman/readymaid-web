import React from "react";
import { homeSolutionsData } from "../constants/homeSolutionsData";

export function HomeSolutionsSection() {
  return (
    <div className="home__solutions">
      <div className="home__solutions__heading">
        One Solution For All Your Needs
      </div>
      <div className="home__solutions__content">
        {homeSolutionsData.map((solution) => (
          <a href="#" className="home__solutions__content__entry">
            <div className="home__solutions__content__entry__icon">
              {solution.icon}
            </div>
            <div className="home__solutions__content__entry__text">
              {solution.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
