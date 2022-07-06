import React from "react";
import { appstore, googleplay, homejumbotron } from "../assets";
import { Fade, Reveal, Zoom } from "react-reveal";

export function HomeJumbotronSection() {
  return (
    <div className="home__jumbotron">
      <img
        src={homejumbotron}
        alt="homejumbotron"
        className="home__jumbotron__img"
      />
      <div className="home__jumbotron__overlay">
        <div className="home__jumbotron__overlay__content">
          <div className="home__jumbotron__overlay__content__heading">
            <Fade>Maid Access, Made Easy</Fade>
          </div>
          <div className="home__jumbotron__overlay__content__info">
            <Fade>
              A unique online marketplace to provide the services of skilled
              workforce to both consumers & corporations.
            </Fade>
          </div>
          <div className="home__jumbotron__overlay__content__buttons">
            <a
              href="#"
              className="home__jumbotron__overlay__content__buttons__link"
            >
              <Zoom>
                <img
                  src={appstore}
                  alt="appstore"
                  className="home__jumbotron__overlay__content__buttons__link__img"
                />
              </Zoom>
            </a>
            <a
              href="#"
              className="home__jumbotron__overlay__content__buttons__link"
            >
              <Zoom>
                <img
                  src={googleplay}
                  alt="googleplay"
                  className="home__jumbotron__overlay__content__buttons__link__img"
                />
              </Zoom>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
