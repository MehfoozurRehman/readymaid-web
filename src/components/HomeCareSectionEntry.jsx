import React from "react";
import { Link } from "react-router-dom";

export function HomeCareSectionEntry({ heading, info, img, alt }) {
  return (
    <div className="home__care__content__entry">
      <div className="home__care__content__entry__content">
        <div className="home__care__content__entry__content__heading">
          {heading}
        </div>
        <div className="home__care__content__entry__content__info">{info}</div>
        <Link
          to="/sign-up"
          className="home__care__content__entry__content__link"
        >
          Sign Up
        </Link>
      </div>
      <img src={img} alt={alt} className="home__care__content__entry__img" />
    </div>
  );
}
