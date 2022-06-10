import React, { useState } from "react";
import BAR__last__bg from "../assets/HAR__last__bg.png";
import AppStoreLOGO from "../assets/app-store-button.png";
import PlayStoreLOGO from "../assets/google-play-button.png";
import HAR__circle from "../assets/HAR__circle.png";
import HAR__mobile from "../assets/HAR__mobile.png";
import HAR__container__second__content__right__box__left__img from "../assets/HAR__container__second__content__right__box__left__img.png";
import StarGN from "../assets/star__green.png";
import StarGY from "../assets/star__gray.png";
function HomeServiceCard() {
  return (
    <a href="#" className="home__services__content__main__entry">
      <div className="home__services__content__main__entry__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81.538"
          height="91.117"
          viewBox="0 0 81.538 91.117">
          <g
            id="Group_4173"
            data-name="Group 4173"
            transform="translate(-417.326 -1048.756)">
            <path
              id="Path_10004"
              data-name="Path 10004"
              d="M113.905,107.2a16.333,16.333,0,0,0-.162-2.658,16.98,16.98,0,0,0-10.463-13.537c-3.314-1.463-6.908-1.474-10.436-1.792a28.661,28.661,0,0,1-5.539-.688,3.587,3.587,0,0,1-2.793-2.888c-.291-1.719-.5-3.457-.638-5.194-.055-.719.782-.958,1.2-1.418.282-.306.528.118.744.25a10.957,10.957,0,0,0,7.5,1.515,11.211,11.211,0,0,0,4.88-20.2,1.19,1.19,0,0,1-.541-1.1c.016-5.012.01-10.022.01-15.033,0-.86-.034-1.716-.113-2.575A15.373,15.373,0,0,0,82.412,28q-9.293-.007-18.59,0a11.392,11.392,0,0,0-1.332.041A15.371,15.371,0,0,0,48.678,42.926c-.153,5.957-.084,11.92-.018,17.879a5.945,5.945,0,0,0,6.413,5.987c.77-.041.911.246,1.024.894.8,4.611,2.359,8.853,6.059,12a.849.849,0,0,1,.3.855c-.183,1.5-.362,3-.514,4.5a3.709,3.709,0,0,1-2.058,3.1,9.534,9.534,0,0,1-4.119.9,71.6,71.6,0,0,0-9.095.884A17.267,17.267,0,0,0,32.4,106.932c0,3.47.022,6.939-.019,10.409a2.088,2.088,0,0,0,.731,1.77h80.076a2.093,2.093,0,0,0,.73-1.771c-.04-3.379-.018-6.76-.017-10.139M89.144,92.086a.954.954,0,0,1,1.048-.568c2.121.2,4.244.382,6.372.533.617.043.427.455.428.76.011,2.934.007,5.868.007,8.8,0,1.689-.019,3.379.011,5.069.01.545-.092.753-.707.75q-10.625-.036-21.253-.006c-.469,0-.672-.069-.665-.612.031-2.338.013-4.678.013-7.221,1.821,1.56,3.5,3,5.181,4.441,1.262,1.08,1.875.98,2.726-.448,2.284-3.831,4.576-7.659,6.838-11.5M73.508,94.8c-.282.271-.436.255-.709-.008q-4.112-3.936-8.251-7.845a.722.722,0,0,1-.279-.69c.21-1.492.4-2.987.6-4.532,7.652,2.847,9.218,2.855,16.581.087.2,1.488.384,2.973.595,4.453a.718.718,0,0,1-.287.685q-4.132,3.916-8.248,7.85m13.305-3.728L80.581,101.55c-1.783-1.527-3.521-3.025-5.269-4.506-.3-.253-.109-.375.066-.541q3.833-3.643,7.66-7.293c.276-.265.42-.176.641.042a7.068,7.068,0,0,0,3.133,1.821M97.231,63.037A8.679,8.679,0,0,1,87.589,77.38c-.6-.323-.688-.543-.274-1.141a21.777,21.777,0,0,0,3.079-8.583c.112-.592.212-.887.965-.86,2.75.1,4.628-1.295,5.872-3.758m-6.025.7a35.122,35.122,0,0,0,1.083-5.922c.031-.576.267-.521.676-.345a3.5,3.5,0,0,1,2.108,3.308,3.543,3.543,0,0,1-3.379,3.536c-.44,0-.612-.025-.487-.578M51.314,61.694a3.615,3.615,0,0,1,2.068-4.243c.458-.189.79-.321.825.437a45.982,45.982,0,0,0,1.152,6.34,3.534,3.534,0,0,1-4.045-2.534m4.545-11.972c-1.268,0-1.7.436-1.717,1.7-.006,1.038.356,2.31-.119,3.044-.446.69-1.858.589-2.764,1.279-.021-.329-.045-.526-.045-.724,0-3.855-.023-7.708,0-11.562A12.792,12.792,0,0,1,61.69,30.726a12.165,12.165,0,0,1,2.471-.245c5.99.011,11.977,0,17.965.007A12.841,12.841,0,0,1,95.076,43.18c.063,4.147.011,8.3.011,12.489a8.047,8.047,0,0,0-1.817-.754c-.87-.123-1-.557-.942-1.308a22.738,22.738,0,0,0,.01-2.4,1.34,1.34,0,0,0-1.488-1.484c-.563-.013-1.126,0-1.69,0a3.542,3.542,0,0,1-3.54-2.884c-.3-1.39-.982-1.73-2.21-1.061a32.1,32.1,0,0,1-15.989,3.955c-3.854-.043-7.708-.01-11.562-.007m3.715,21.385a81.913,81.913,0,0,1-2.8-13.421c-.193-1.578-.03-3.2-.069-4.8-.012-.524.176-.647.67-.642,2.254.023,4.508.01,7.748.01a41.334,41.334,0,0,0,11.019-.946,33.793,33.793,0,0,0,6.806-2.466c.434-.218.621-.163.865.271a5.76,5.76,0,0,0,5.21,3.12c.66.011.729.25.77.824.312,4.348-.625,8.53-1.587,12.715-.416,1.811-.7,3.648-1.289,5.421A14.266,14.266,0,0,1,73.288,81.3a14.022,14.022,0,0,1-13.714-10.2M62.709,89.2c.238-.232.373-.165.578.029q3.82,3.643,7.658,7.27c.25.235.275.364-.01.606-1.63,1.371-3.25,2.751-4.848,4.159-.454.4-.515.01-.665-.24-1.964-3.293-3.921-6.588-5.938-9.978A8.135,8.135,0,0,0,62.709,89.2M49.918,92c2.041-.133,4.079-.3,6.115-.483a1.093,1.093,0,0,1,1.19.648c2.239,3.825,4.522,7.626,6.789,11.434.849,1.422,1.449,1.517,2.73.423,1.682-1.435,3.358-2.874,5.167-4.423,0,2.526-.022,4.841.014,7.153.007.563-.163.676-.695.674q-10.631-.027-21.262,0c-.574,0-.671-.176-.668-.7q.031-7.029,0-14.057c0-.493.129-.642.62-.673m-9.743,24.632c-1.568-.045-3.143-.025-4.713-.008-.384,0-.591-.034-.577-.51.1-3.733-.258-7.48.2-11.2a14.4,14.4,0,0,1,5.809-9.845v.532c0,6.761-.007,13.523.013,20.284,0,.572-.132.761-.732.744m61.865,0q-28.866-.031-57.728,0c-.746,0-.91-.181-.906-.915q.045-10.631-.006-21.26a1.093,1.093,0,0,1,.881-1.25,12.62,12.62,0,0,1,2.536-.693V108.18c0,1.448.373,1.816,1.851,1.816q24.506,0,49.01,0c1.447,0,1.812-.38,1.812-1.853,0-4.952.021-9.9-.019-14.855-.006-.755.227-.8.84-.642,2.571.661,2.573.65,2.573,3.288,0,6.613-.011,13.225.017,19.837,0,.688-.163.867-.86.866m8.68,0c-1.541-.051-3.085-.04-4.627,0-.545.012-.7-.136-.694-.69.019-6.881.013-13.76.013-20.842a14.768,14.768,0,0,1,6,11.889c.016,2.966-.008,5.931.016,8.9,0,.544-.084.77-.7.749"
              transform="translate(384.941 1020.762)"
              fill="currentColor"
            />
            <path
              id="Path_10005"
              data-name="Path 10005"
              d="M67.363,66.223a7.3,7.3,0,0,1-5.655-2.16,1.216,1.216,0,0,1-.169-1.869,1.2,1.2,0,0,1,1.874.042,5.584,5.584,0,0,0,7.623-.024,1.187,1.187,0,0,1,1.87.011,1.226,1.226,0,0,1-.162,1.811,7.183,7.183,0,0,1-5.381,2.189"
              transform="translate(390.887 1027.736)"
              fill="currentColor"
            />
            <path
              id="Path_10006"
              data-name="Path 10006"
              d="M63.221,52.341a2.957,2.957,0,1,1-2.986-2.958,2.939,2.939,0,0,1,2.986,2.958"
              transform="translate(390.088 1025.18)"
              fill="currentColor"
            />
            <path
              id="Path_10007"
              data-name="Path 10007"
              d="M76.2,52.349a2.957,2.957,0,1,1-2.98-2.966,2.911,2.911,0,0,1,2.98,2.966"
              transform="translate(392.769 1025.18)"
              fill="currentColor"
            />
            <path
              id="Path_10008"
              data-name="Path 10008"
              d="M67.407,60.776c-2.295,0-3.309-1.175-2.956-3.436.141-.9.264-1.813.451-2.709a1.243,1.243,0,0,1,1.45-1.1,1.343,1.343,0,0,1,1.028,1.611c-.132.847-.236,1.7-.419,2.536-.106.489.08.565.485.538a4.012,4.012,0,0,1,.8.013,1.2,1.2,0,0,1,1.2,1.284,1.233,1.233,0,0,1-1.237,1.257,6.1,6.1,0,0,1-.8.006"
              transform="translate(391.549 1026.032)"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <div className="home__services__content__main__entry__text">Maids</div>
    </a>
  );
}
function HireAresource() {
  const [showTabs, SetShowTabs] = useState(true);
  function toggeleTab(i) {
    SetShowTabs(i);
  }

  return (
    <div className="HAR__container__main">
      <div className="HAR__container__first">
        <div className="HAR__container__first__content">
          <div className="HAR__container__first__heading">
            <h2>
              Hire a <span>Resource</span>
            </h2>
          </div>
          <div className="HAR__container__first__tabs__container">
            <div className="HAR__container__first__tabs__tab__title__container">
              <div
                className={
                  showTabs == 1
                    ? "HAR__container__first__tabs__tab__title HAR__container__first__tabs__tab__title__active"
                    : "HAR__container__first__tabs__tab__title"
                }
                onClick={() => toggeleTab(1)}>
                Short Term Services
              </div>
              <div
                className={
                  showTabs == 2
                    ? "HAR__container__first__tabs__tab__title HAR__container__first__tabs__tab__title__active"
                    : "HAR__container__first__tabs__tab__title"
                }
                onClick={() => toggeleTab(2)}>
                Long Term Services
              </div>
            </div>
            <div className="HAR__container__first__tabs__tab__content__container">
              <div
                className={
                  showTabs == 1
                    ? "HAR__container__first__tabs__tab__content HAR__container__first__tabs__tab__content__active"
                    : "HAR__container__first__tabs__tab__content"
                }>
                <div className="home__services__content__main">
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                </div>
              </div>
              <div
                className={
                  showTabs == 2
                    ? "HAR__container__first__tabs__tab__content HAR__container__first__tabs__tab__content__active"
                    : "HAR__container__first__tabs__tab__content"
                }>
                <div className="home__services__content__main">
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                  <HomeServiceCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HAR__container__second">
        <h2 className="HAR__container__second__heading">Carpenter</h2>
        <div className="HAR__container__second__content">
          <div className="HAR__container__second__content__left">
            <div className="HAR__container__second__content__left__heading">
              Info
            </div>
            <div className="HAR__container__second__content__left__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              deleniti voluptas expedita a praesentium quod cumque beatae iure
              ipsa distinctio odit placeat aperiam reiciendis earum qui possimus
              rem ad rerum accusantium nisi debitis nemo officia nobis? Quia
              aliquam amet quidem incidunt a, voluptate minus. Aliquid, nam. Ut,
              voluptatibus? Excepturi, natus!
            </div>
            <div className="HAR__container__second__content__left__last">
              <div className="HAR__container__second__content__left__last__top">
                Address
              </div>
              <div className="HAR__container__second__content__left__last__bottom">
                House #4, People's Colony Manhattan, USA.
              </div>
            </div>
          </div>
          <div className="HAR__container__second__content__right">
            <div className="HAR__container__second__content__right__heading">
              Reviews
            </div>
            <div className="HAR__container__second__content__right__box">
              <div className="HAR__container__second__content__right__box__left">
                <div className="HAR__container__second__content__right__box__left__left">
                  <img
                    src={HAR__container__second__content__right__box__left__img}
                    alt="Profile"
                  />
                </div>
                <div className="HAR__container__second__content__right__box__left__right">
                  <div className="HAR__container__second__content__right__box__left__right__top">
                    Adams Gills
                  </div>
                  <div className="HAR__container__second__content__right__box__left__right__bottom">
                    <img src={StarGN} alt="Star" />
                    <img src={StarGN} alt="Star" />
                    <img src={StarGN} alt="Star" />
                    <img src={StarGN} alt="Star" />
                    <img src={StarGY} alt="Star" />
                  </div>
                </div>
              </div>
              <div className="HAR__container__second__content__right__box__right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                veritatis debitis ea. Dicta labore consectetur qui esse ut.
              </div>
            </div>
            <div className="HAR__container__second__content__right__box">
              <div className="HAR__container__second__content__right__box__left">
                <div className="HAR__container__second__content__right__box__left__left">
                  <img
                    src={HAR__container__second__content__right__box__left__img}
                    alt="Profile"
                  />
                </div>
                <div className="HAR__container__second__content__right__box__left__right">
                  <div className="HAR__container__second__content__right__box__left__right__top">
                    Adams Gills
                  </div>
                  <div className="HAR__container__second__content__right__box__left__right__bottom">
                    <img src={StarGN} alt="Star" />
                    <img src={StarGN} alt="Star" />
                    <img src={StarGN} alt="Star" />
                    <img src={StarGN} alt="Star" />
                    <img src={StarGY} alt="Star" />
                  </div>
                </div>
              </div>
              <div className="HAR__container__second__content__right__box__right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                veritatis debitis ea. Dicta labore consectetur qui esse ut.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HAR__container__last">
        <div className="HAR__container__img">
          <img src={BAR__last__bg} alt="World Map Background" />
        </div>
        <div className="HAR__container__last__content">
          <div className="HAR__container__last__content__left">
            <div className="HAR__container__last__content__left__heading">
              Download Our <span> App</span>
            </div>
            <div className="HAR__container__last__content__left__para">
              A unique online marketplace to provide the services of skilled
              workforce to both consumers & corporations.
            </div>
            <div className="HAR__container__last__content__left__icons">
              <div className="HAR__container__last__content__left__icon">
                <a href="#">
                  <img src={AppStoreLOGO} alt="AppStoreLogo" />
                </a>
              </div>
              <div className="HAR__container__last__content__left__icon">
                <a href="#">
                  <img src={PlayStoreLOGO} alt="PlayStoreLogo" />
                </a>
              </div>
            </div>
          </div>
          <div className="HAR__container__last__content__right">
            <div className="HAR__container__last__content__right__circle">
              <img src={HAR__circle} alt="HAR__Circle" />
            </div>
            <div className="HAR__container__last__content__right__mobile">
              <img src={HAR__mobile} alt="HAR__Circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireAresource;
