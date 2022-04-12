import React from "react";
import homeJumbotronSvg from "../assets/homeJumbotronSvg.svg";

function HomeServiceButton({ title, subTitle, icon }) {
  return (
    <div className="home__services__content__header__button">
      <input
        type="radio"
        className="home__services__content__header__button__input"
        name="home__services__content__header__button__input"
      />
      <div className="home__services__content__header__button__content">
        <div className="home__services__content__header__button__content__icon">
          {icon}
        </div>
        <div className="home__services__content__header__button__content__text">
          {subTitle}
          <br />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="home__jumbotron">
        <div className="home__jumbotron__content">
          <div className="home__jumbotron__content__left">
            <div className="home__jumbotron__content__left__heading">
              Maid Access, Made Easy
            </div>
            <div className="home__jumbotron__content__left__info">
              Readymaid is a one stop shop, a marketplace, a platform to provide
              services of skilled labors to both consumers & corporations alike.
              This includes provisioning of services of Maids, Gardeners,
              Guards, Chef, Chauffeurs, Nurses, Nannies, Janitors, Plumbers,
              Electricians, and other human capital
            </div>
            <div className="home__jumbotron__content__left__buttons">
              <a
                href="#"
                className="home__jumbotron__content__left__buttons__primary"
              >
                App Store
              </a>
              <a
                href="#"
                className="home__jumbotron__content__left__buttons__secondary"
              >
                Google Play
              </a>
            </div>
          </div>
          <div className="home__jumbotron__content__right">
            <img
              src={homeJumbotronSvg}
              alt="homeJumbotronSvg"
              className="home__jumbotron__content__right__img"
            />
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="home__services__content">
          <div className="home__services__content__header">
            <HomeServiceButton
              title="Resource"
              subTitle="Hire a"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43.132"
                  height="43.134"
                  viewBox="0 0 43.132 43.134"
                >
                  <path
                    id="Icon_ionic-ios-person"
                    data-name="Icon ionic-ios-person"
                    d="M47.611,46.544c-.809-3.572-5.425-5.313-7.02-5.875a52.345,52.345,0,0,0-5.852-1.123A5.946,5.946,0,0,1,32.031,38.3c-.449-.539-.18-5.538-.18-5.538a16.661,16.661,0,0,0,1.281-2.438,31.44,31.44,0,0,0,.944-4.257s.921,0,1.247-1.618c.348-1.764.9-2.449.831-3.763-.067-1.292-.775-1.258-.775-1.258a19.694,19.694,0,0,0,.764-5.762c.1-4.617-3.516-9.166-10.065-9.166C19.439,4.5,15.9,9.049,16,13.666a20.542,20.542,0,0,0,.753,5.762s-.708-.034-.775,1.258c-.067,1.314.483,2,.831,3.763.315,1.618,1.247,1.618,1.247,1.618A31.441,31.441,0,0,0,19,30.324a16.661,16.661,0,0,0,1.281,2.438s.27,5-.18,5.538a5.946,5.946,0,0,1-2.707,1.247,52.346,52.346,0,0,0-5.852,1.123c-1.6.562-6.212,2.3-7.02,5.875a.9.9,0,0,0,.887,1.09H46.735A.9.9,0,0,0,47.611,46.544Z"
                    transform="translate(-4.501 -4.5)"
                    fill="currentColor"
                  />
                </svg>
              }
            />
            <HomeServiceButton
              title="Bussiness"
              subTitle="Readymaid for"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37.742"
                  height="43.134"
                  viewBox="0 0 37.742 43.134"
                >
                  <path
                    id="Icon_awesome-building"
                    data-name="Icon awesome-building"
                    d="M36.731,40.438H35.046V2.022A2.022,2.022,0,0,0,33.024,0H4.718A2.022,2.022,0,0,0,2.7,2.022V40.438H1.011A1.011,1.011,0,0,0,0,41.449v1.685H37.742V41.449A1.011,1.011,0,0,0,36.731,40.438ZM10.783,6.4a1.011,1.011,0,0,1,1.011-1.011h3.37A1.011,1.011,0,0,1,16.175,6.4v3.37a1.011,1.011,0,0,1-1.011,1.011h-3.37a1.011,1.011,0,0,1-1.011-1.011Zm0,8.088a1.011,1.011,0,0,1,1.011-1.011h3.37a1.011,1.011,0,0,1,1.011,1.011v3.37a1.011,1.011,0,0,1-1.011,1.011h-3.37a1.011,1.011,0,0,1-1.011-1.011Zm4.381,12.468h-3.37a1.011,1.011,0,0,1-1.011-1.011v-3.37a1.011,1.011,0,0,1,1.011-1.011h3.37a1.011,1.011,0,0,1,1.011,1.011v3.37A1.011,1.011,0,0,1,15.164,26.959Zm6.4,13.479H16.175V33.361a1.011,1.011,0,0,1,1.011-1.011h3.37a1.011,1.011,0,0,1,1.011,1.011Zm5.392-14.49a1.011,1.011,0,0,1-1.011,1.011h-3.37a1.011,1.011,0,0,1-1.011-1.011v-3.37a1.011,1.011,0,0,1,1.011-1.011h3.37a1.011,1.011,0,0,1,1.011,1.011Zm0-8.088a1.011,1.011,0,0,1-1.011,1.011h-3.37a1.011,1.011,0,0,1-1.011-1.011V14.49a1.011,1.011,0,0,1,1.011-1.011h3.37a1.011,1.011,0,0,1,1.011,1.011Zm0-8.088a1.011,1.011,0,0,1-1.011,1.011h-3.37a1.011,1.011,0,0,1-1.011-1.011V6.4a1.011,1.011,0,0,1,1.011-1.011h3.37A1.011,1.011,0,0,1,26.959,6.4Z"
                    fill="currentColor"
                  />
                </svg>
              }
            />
          </div>
          <div className="home__services__content__main">
            <div className="home__services__content__main__entry">
              <div className="home__services__content__main__entry__icon"></div>
              <div className="home__services__content__main__entry__text"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
