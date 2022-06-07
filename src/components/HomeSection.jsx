import React from "react";
import appstore from "../assets/img/appstore.png";
import playstore from "../assets/img/playstore.png";

export default function HomeSection() {
  return (
    <>
      <div className="home__jumbotron">
        <div className="home__jumbotron__content">
          <div className="home__jumbotron__content__left">
            <div className="home__jumbotron__content__left__heading">
              Maid Access, Made Easy
            </div>
            <div className="home__jumbotron__content__left__info">
              A unique online marketplace to provide the services of skilled
              workforce to both consumers & corporations.
            </div>
            <div className="home__jumbotron__content__left__buttons">
              <div className="home__jumbotron__content__left__buttons__primary">
                <img src={appstore} alt="" />
              </div>
              <div className="home__jumbotron__content__left__buttons__secondary">
                <img src={playstore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
