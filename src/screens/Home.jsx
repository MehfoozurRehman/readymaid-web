import React from "react";
import { appstore, googleplay, homejumbotron } from "../assets";

export default function Home() {
  return (
    <>
      <div className="home__jumbotron">
        <img
          src={homejumbotron}
          alt="homejumbotron"
          className="home__jumbotron__img"
        />
        <div className="home__jumbotron__overlay">
          <div className="home__jumbotron__overlay__content">
            <div className="home__jumbotron__overlay__content__heading">
              Maid Access, Made Easy
            </div>
            <div className="home__jumbotron__overlay__content__info">
              A unique online marketplace to provide the services of skilled
              workforce to both consumers & corporations.
            </div>
            <div className="home__jumbotron__overlay__content__buttons">
              <a
                href="#"
                className="home__jumbotron__overlay__content__buttons__link"
              >
                <img
                  src={appstore}
                  alt="appstore"
                  className="home__jumbotron__overlay__content__buttons__link__img"
                />
              </a>
              <a
                href="#"
                className="home__jumbotron__overlay__content__buttons__link"
              >
                <img
                  src={googleplay}
                  alt="googleplay"
                  className="home__jumbotron__overlay__content__buttons__link__img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
