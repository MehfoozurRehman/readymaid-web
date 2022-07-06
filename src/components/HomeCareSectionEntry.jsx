import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";

export function HomeCareSectionEntry({ heading, info, img, alt }) {
  return (
    <div className="home__care__content__entry">
      <div className="home__care__content__entry__content">
        <div className="home__care__content__entry__content__heading">
          <Fade>{heading}</Fade>
        </div>
        <div className="home__care__content__entry__content__info">
          <Fade>{info}</Fade>
        </div>
        <Fade>
          <Link
            to="/sign-up"
            className="home__care__content__entry__content__link"
          >
            Sign Up
          </Link>
        </Fade>
      </div>
      <Zoom>
        <img src={img} alt={alt} className="home__care__content__entry__img" />
      </Zoom>
    </div>
  );
}
