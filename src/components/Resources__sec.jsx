import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import "swiper/css";
import resources from "../assets/img/Resources.png";
import { getText } from "../utils/getText";

export default function Resources__sec() {
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  useEffect(() => {
    if (window.innerWidth <= 398) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 550) {
      setSlidesPerPage(1.5);
    } else if (window.innerWidth <= 750) {
      setSlidesPerPage(1.5);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(2);
    } else if (window.innerWidth === 1200) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(3);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 398) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 550) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 750) {
        setSlidesPerPage(1.5);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(2);
      } else if (window.innerWidth === 1200) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(3);
      }
    });
  }, []);
  let string =
    "We treat our employees with utmost respect. They enjoy all the perks of working with a corporate sector.";
  return (
    <div className="resources__section">
      <img src={resources} className="resources__section__img" alt="" />
      <div className="resources__secton__banner">
        <div className="resources__secton__banner__content">
          <div className="resources__secton__content__heading">
            Benefit to Resources
          </div>
          <div className="resources__secton__content__text">
            Different lucrative options to be provided
          </div>
        </div>
        <Swiper
          className="resources__swiper"
          spaceBetween={1}
          slidesPerView={slidesPerPage}
        >
          <SwiperSlide className="swiper__slide__resources">
            <div className="resources__card__1">
              <div className="resources__card__1__image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.896"
                  height="54.237"
                  viewBox="0 0 56.896 54.237"
                >
                  <g
                    id="Group_12049"
                    data-name="Group 12049"
                    transform="translate(-10006.492 10957.863)"
                  >
                    <path
                      id="Path_10052"
                      data-name="Path 10052"
                      d="M1505.215-175.546c-2.321-2.315-5.741-2.135-8.15.469-1.826,1.974-3.609,3.987-5.494,6.075-2.994-4.065-1.513-8.445-1.623-12.549-.114-4.258.431-8.533.7-13.016l-19.587-5.255-1.968,7.277,12.192,3.348-.088.49h-12.351v15.371l-8.748,7.105c-.811-1.91-2.122-2.091-3.922-.876-1.558,1.052-3.227,1.946-4.884,2.841-1.512.816-1.673,1.868-.845,3.284q4.123,7.05,8.186,14.135c.8,1.4,1.8,1.589,3.125.795,1.558-.93,3.111-1.877,4.72-2.711,1.451-.752,2.667-1.555,1.816-3.567,5.984,0,11.64-.1,17.29.041a9.822,9.822,0,0,0,7.8-2.9q6.428-6.87,12.479-14.09C1507.476-171.2,1507-173.766,1505.215-175.546Zm-33.025-18.768.664-2.385,15.353,4.1-.662,2.4Zm-.651,8.108h15.7c.035.777.065,1.452.1,2.271h-15.8Zm15.813,5.06c-.043.85-.077,1.523-.116,2.287h-15.685v-2.287Zm-15.855,5.02h15.746v2.27H1471.5Zm-10.8,27.748-7.958-13.75,5.054-2.931,7.952,13.771Zm42.917-22.165c-3.675,4.382-7.408,8.721-11.27,12.938a8.984,8.984,0,0,1-7.362,2.8c-3.505-.123-7.015-.134-10.825-.1-1.709.015-3.718.048-5.726.081a2.661,2.661,0,0,1-2.766-1.641c-1.233-2.343-2.625-4.6-4.05-7.066,1.424-1.521,2.653-2.953,4.01-4.252a8.753,8.753,0,0,1,6.226-2.578c4.47.007,8.94-.007,13.41.021,2.21.014,3.688,1.183,3.721,2.852.036,1.785-1.457,2.988-3.76,3s-4.615-.083-6.911.06c-.637.04-1.232.763-1.847,1.172.591.434,1.165,1.21,1.776,1.242a40.9,40.9,0,0,0,7.945-.046,8.679,8.679,0,0,0,4.457-2.306c2.805-2.715,5.276-5.773,7.991-8.586a4.71,4.71,0,0,1,2.774-1.519A3.408,3.408,0,0,1,1503.88-173,2.645,2.645,0,0,1,1503.613-170.544Z"
                      transform="translate(8556.541 -10758.041)"
                      fill="#3cb149"
                    />
                  </g>
                </svg>
              </div>
              <div className="resources__card__1__title">Fringe Benefits </div>
              <div className="resources__card__1__text">
                We provide health facility, Insurance, EOBI & Superannuation to
                the employees
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="resources__card__1">
              <div className="resources__card__1__image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.861"
                  height="54.159"
                  viewBox="0 0 40.861 54.159"
                >
                  <g
                    id="Group_12050"
                    data-name="Group 12050"
                    transform="translate(-10033.844 10819.574)"
                  >
                    <g
                      id="Group_4231"
                      data-name="Group 4231"
                      transform="translate(10033.844 -10819.575)"
                    >
                      <path
                        id="Path_10041"
                        data-name="Path 10041"
                        d="M1600.32,178.817h-9.932c-.064-3.823-.154-7.584-.164-11.346a2.941,2.941,0,0,1,.558-1.872c2.382-2.55,4.809-5.067,7.36-7.445a2.212,2.212,0,0,1,2.15.317,2.521,2.521,0,0,1-.092,2.355c-1.422,1.708-3.094,3.208-4.665,4.793-.339.342-.814.658-.939,1.073a1.793,1.793,0,0,0,.216,1.406,1.306,1.306,0,0,0,1.238-.105c2.615-3.433,6.769-5.951,6.265-11.228-.221-2.314.267-4.688.333-7.038a2.31,2.31,0,0,1,2.505-2.481c1.616-.052,1.888,1.122,1.88,2.48-.026,4.222.055,8.446-.048,12.666a7.96,7.96,0,0,1-.98,2.778,4.3,4.3,0,0,1-.887,1.137C1601.811,169.757,1599.035,173.427,1600.32,178.817Z"
                        transform="translate(-1566.179 -129.336)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10042"
                        data-name="Path 10042"
                        d="M1522.784,178.8h-9.327c-.077-.189-.211-.354-.194-.5.532-4.574-1.209-8.25-4.484-11.3a7.958,7.958,0,0,1-2.532-6.791c.215-3.545.073-7.113.053-10.671-.008-1.319.385-2.369,1.869-2.311a2.267,2.267,0,0,1,2.489,2.3c.161,3.373.32,6.748.6,10.111a4.924,4.924,0,0,0,.966,2.413c1.306,1.73,2.731,3.374,4.169,5,.575.651,1.152,1.973,2.252.914.952-.915-.127-1.6-.732-2.216q-2.214-2.263-4.467-4.489c-.918-.907-1.446-1.928-.371-2.967.981-.948,1.983-.5,2.847.369a62.855,62.855,0,0,1,5.8,5.951,8.866,8.866,0,0,1,1.546,4.82C1523.369,172.484,1522.98,175.556,1522.784,178.8Z"
                        transform="translate(-1506.224 -129.318)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10043"
                        data-name="Path 10043"
                        d="M1569.929,159.927h-2.651c-.388-1.482.506-3.836-1.926-3.856-2.465-.021-1.614,2.312-1.986,3.845h-2.606c-1.059-4.865-.209-6.679,4.555-9.8C1569.912,152.775,1570.8,154.636,1569.929,159.927Z"
                        transform="translate(-1544.859 -131.39)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10044"
                        data-name="Path 10044"
                        d="M1595.076,261.433a22.509,22.509,0,0,1,4.131.076c.661.125,1.622,1.037,1.628,1.6a2.311,2.311,0,0,1-1.524,1.707,70.226,70.226,0,0,1-8.641.009c-.568-.034-1.377-1.041-1.537-1.725-.241-1.031.533-1.648,1.617-1.663C1592.192,261.418,1593.634,261.433,1595.076,261.433Z"
                        transform="translate(-1565.368 -210.794)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10045"
                        data-name="Path 10045"
                        d="M1531.031,261.554c1.322,0,2.644,0,3.966,0a1.585,1.585,0,0,1,1.814,1.748c0,1.205-.722,1.726-1.846,1.733q-4.056.026-8.112,0c-1.211-.007-1.983-.587-1.922-1.858.056-1.172.82-1.646,1.955-1.631C1528.267,261.567,1529.649,261.553,1531.031,261.554Z"
                        transform="translate(-1519.573 -210.92)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10046"
                        data-name="Path 10046"
                        d="M1560.554,141.975c-1.885,1.546-3.581,2.991-5.349,4.343-.373.285-1.01.224-1.525.322.18-.49.218-1.139.563-1.441,1.719-1.51,3.476-2.988,5.321-4.338a2.026,2.026,0,0,1,1.876-.084c1.943,1.42,3.789,2.978,5.6,4.562.287.25.241.882.35,1.337-.469-.088-1.052-.028-1.389-.287C1564.2,145,1562.452,143.525,1560.554,141.975Z"
                        transform="translate(-1540.095 -124.583)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10047"
                        data-name="Path 10047"
                        d="M1591.787,84.689a7.3,7.3,0,0,0-7.249,7.254,7.212,7.212,0,0,0,7.111,7.174,7.119,7.119,0,0,0,7.295-7.125A7.212,7.212,0,0,0,1591.787,84.689Zm1.851,8.987c-1.09.975,1.177,3.926-2.125,3.638-2.682-.234-.522-2.535-1.489-3.515-.961-1.148-3.959,1.16-3.673-2.134.233-2.681,2.572-.442,3.06-1.033,1.658-1.381-.683-4.189,2.406-4.136,2.941.05.753,2.654,2.038,3.919.71.771,3.367-1.526,3.3,1.563C1597.082,94.9,1594.6,92.66,1593.638,93.676Z"
                        transform="translate(-1562.119 -84.689)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10048"
                        data-name="Path 10048"
                        d="M1527.674,84.713a7.212,7.212,0,1,0,7.275,7.2A7.179,7.179,0,0,0,1527.674,84.713Zm.019,13.126a5.9,5.9,0,1,1,5.964-5.95A5.932,5.932,0,0,1,1527.693,97.839Z"
                        transform="translate(-1516.455 -84.706)"
                        fill="#3cb149"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="resources__card__1__title">
                Market Competitive Salary
              </div>
              <div className="resources__card__1__text">
                We ensure that our resource get the market competitive salary.
                It is imperative to live a respectable life. We help them in
                getting there.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="resources__card__1">
              <div className="resources__card__1__image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51.838"
                  height="59.058"
                  viewBox="0 0 51.838 59.058"
                >
                  <g
                    id="Group_12047"
                    data-name="Group 12047"
                    transform="translate(-1110.832 -2486.877)"
                  >
                    <g
                      id="Group_11975"
                      data-name="Group 11975"
                      transform="translate(-8900.074 13176.906)"
                    >
                      <path
                        id="Path_10030"
                        data-name="Path 10030"
                        d="M1504.593,371.957a1.923,1.923,0,0,1-1.237,1.905,1.74,1.74,0,0,1-2.073-.638c-1.038-1.707-2.045-3.435-2.983-5.2a1.822,1.822,0,0,1,3.206-1.7c.987,1.628,1.925,3.285,2.863,4.942A2.817,2.817,0,0,1,1504.593,371.957Z"
                        transform="translate(8522.224 -11052.062)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10031"
                        data-name="Path 10031"
                        d="M1467.687,409.183a1.969,1.969,0,0,1-2.682,1.769c-1.774-.919-3.5-1.944-5.2-2.989a1.825,1.825,0,0,1,1.81-3.146c1.758.953,3.5,1.948,5.185,3.02C1467.213,408.1,1467.4,408.725,1467.687,409.183Z"
                        transform="translate(8551.87 -11081.763)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10033"
                        data-name="Path 10033"
                        d="M1626.316,411.137a1.934,1.934,0,0,1-1.933-1.275,1.76,1.76,0,0,1,.69-2.06c1.671-1.011,3.359-1.994,5.073-2.929a1.782,1.782,0,0,1,2.384.731,1.757,1.757,0,0,1-.562,2.426c-1.646,1.006-3.328,1.952-5.005,2.905A2.537,2.537,0,0,1,1626.316,411.137Z"
                        transform="translate(8426.521 -11081.789)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10034"
                        data-name="Path 10034"
                        d="M1595.389,373.965a1.793,1.793,0,0,1-1.706-2.549c.924-1.77,1.949-3.492,3-5.192a1.742,1.742,0,0,1,2.388-.477,1.823,1.823,0,0,1,.66,2.464c-.682,1.262-1.417,2.5-2.131,3.742a5.233,5.233,0,0,1-.689,1.144,11.089,11.089,0,0,1-1.4,1.038Z"
                        transform="translate(8449.881 -11052.061)"
                        fill="#3cb149"
                      />
                      <path
                        id="Path_10037"
                        data-name="Path 10037"
                        d="M1551.67,355.778c0-.893-.016-1.786,0-2.678a1.808,1.808,0,0,1,1.783-1.883,1.786,1.786,0,0,1,1.864,1.8q.06,2.818,0,5.638a1.783,1.783,0,0,1-1.886,1.778,1.824,1.824,0,0,1-1.762-1.837c0-.047,0-.094,0-.141Q1551.67,357.117,1551.67,355.778Z"
                        transform="translate(8481.608 -11041.245)"
                        fill="#3cb149"
                      />
                      <g
                        id="Group_4232"
                        data-name="Group 4232"
                        transform="translate(10010.91 -10678.986)"
                      >
                        <path
                          id="Path_10032"
                          data-name="Path 10032"
                          d="M1630.7,506.756a4,4,0,0,1-.787-.289q-2.334-1.321-4.643-2.687a1.828,1.828,0,0,1-.766-2.543,1.847,1.847,0,0,1,2.58-.652q2.372,1.327,4.71,2.714a1.8,1.8,0,0,1,.888,2.1A1.892,1.892,0,0,1,1630.7,506.756Z"
                          transform="translate(-1584.367 -475.353)"
                          fill="#3cb149"
                        />
                        <path
                          id="Path_10035"
                          data-name="Path 10035"
                          d="M1461.1,506.69a1.9,1.9,0,0,1-1.94-1.244,1.739,1.739,0,0,1,.66-2.066c1.688-1.025,3.4-2.017,5.134-2.958a1.821,1.821,0,0,1,1.794,3.156c-1.665,1.016-3.366,1.974-5.062,2.94A2.056,2.056,0,0,1,1461.1,506.69Z"
                          transform="translate(-1459.054 -475.29)"
                          fill="#3cb149"
                        />
                        <path
                          id="Path_10036"
                          data-name="Path 10036"
                          d="M1640.237,458.213c.893,0,1.787-.017,2.68.005a1.842,1.842,0,1,1,.025,3.683q-2.75.036-5.5,0a1.843,1.843,0,0,1-.025-3.686c.047,0,.094,0,.141,0Z"
                          transform="translate(-1592.963 -443.414)"
                          fill="#3cb149"
                        />
                        <path
                          id="Path_10038"
                          data-name="Path 10038"
                          d="M1522.434,441.924h-4.761c-.659,0-1.319-.025-1.977.008-.486.024-.669-.141-.653-.639.03-.964-.008-1.93.016-2.895a.751.751,0,0,0-.5-.819c-.644-.287-1.271-.615-1.892-.949a12.886,12.886,0,1,1,12.172-.022c-.641.347-1.321.628-1.939,1.011a1.065,1.065,0,0,0-.449.736C1522.407,439.5,1522.434,440.65,1522.434,441.924Zm3.418-16.447-.036-.163h-7.075l7.069-8.857-.12-.116-14.111,8.833.069.2h7.036l-6.973,8.726.137.143Z"
                          transform="translate(-1494.54 -408.67)"
                          fill="#3cb149"
                        />
                        <path
                          id="Path_10039"
                          data-name="Path 10039"
                          d="M1543.963,550.118h7.338v3.6c-.2.018-.4.053-.605.053-2.02,0-4.04-.013-6.059.013-.521.006-.7-.145-.684-.677C1543.989,552.129,1543.963,551.147,1543.963,550.118Z"
                          transform="translate(-1523.451 -513.132)"
                          fill="#3cb149"
                        />
                        <path
                          id="Path_10040"
                          data-name="Path 10040"
                          d="M1523.376,410.524a16.586,16.586,0,1,0-24.269,17.556,1.025,1.025,0,0,1,.605,1.048q-.034,4.2,0,8.4a3.564,3.564,0,0,0,3.13,3.679c.458.078.544.3.607.686a3.679,3.679,0,0,0,7.151.456c.094-.313.139-.642.216-1.007,2.83-.7,3.63-1.722,3.63-4.617,0-2.543.009-5.085-.008-7.628a.969.969,0,0,1,.557-1A16.486,16.486,0,0,0,1523.376,410.524Zm-12.654,27.012c-.2.018-.4.053-.605.053-2.019,0-4.039-.013-6.058.013-.521.007-.7-.145-.684-.677.037-.98.01-1.963.01-2.992h7.338Zm2.454-12.652c-.641.347-1.321.628-1.939,1.011a1.065,1.065,0,0,0-.449.736c-.048,1.147-.021,2.3-.021,3.571H1506c-.659,0-1.319-.025-1.977.007-.486.024-.669-.141-.653-.639.03-.964-.009-1.93.016-2.895a.75.75,0,0,0-.495-.819c-.644-.287-1.271-.615-1.893-.949a12.886,12.886,0,1,1,12.172-.022Z"
                          transform="translate(-1482.871 -396.948)"
                          fill="#3cb149"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="resources__card__1__title">
                Learning & Development
              </div>
              <div>
                {getText(
                  "We provide extensive learning & development opportunities to our resources. We hire the resource and make him market fit. Market dynamics changes rapidly, and a right resource should be aware of the latest market trends. We ensure the same.",
                  100
                )}
                {new Date().getFullYear()}
                {new Date().getMonth()}
                {new Date().getDay()}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="resources__card__1">
              <div className="resources__card__1__image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.647"
                  height="52.414"
                  viewBox="0 0 56.647 52.414"
                >
                  <g
                    id="Group_12048"
                    data-name="Group 12048"
                    transform="translate(-1510.983 -2493.519)"
                  >
                    <g
                      id="Group_11976"
                      data-name="Group 11976"
                      transform="translate(-8503.734 13041.125)"
                    >
                      <g
                        id="Group_4233"
                        data-name="Group 4233"
                        transform="translate(10014.718 -10547.606)"
                      >
                        <path
                          id="Path_10029"
                          data-name="Path 10029"
                          d="M1523.487,663.428c-.028-4.437-2.933-7.883-6.523-7.914-2.64-.022-5.28-.006-7.92-.006h-1.563c0-1.152.013-2.181,0-3.209-.069-4.623-2.833-8.018-6.59-8.044q-5.777-.041-11.554,0c-3.562.03-6.355,3.473-6.437,7.879-.02,1.092,0,2.184,0,3.371h-1.461c-2.64,0-5.282-.066-7.919.036a6.26,6.26,0,0,0-2.872.766c-2.55,1.485-3.749,4.133-3.757,7.57-.019,7.96,0,15.921-.008,23.881-.008,5.467,2.777,8.9,7.2,8.883,5.932-.019,11.865,0,17.8,0,8.262,0,16.524.018,24.785-.006,3.908-.011,6.792-3.425,6.821-8.178Q1523.562,675.944,1523.487,663.428Zm-31.954-16.15q.437,0,.874.008c.873.011,1.747.029,2.621.037.291,0,.582,0,.873,0,.873,0,1.745-.02,2.617-.073.116-.007.232-.011.346-.012s.227,0,.338.007a4.754,4.754,0,0,1,3.935,2.233,5.959,5.959,0,0,1,.592,1.238,7.216,7.216,0,0,1,.208.715,8.694,8.694,0,0,1,.192,1.19q.02.209.031.427.023.435.01.9a13.857,13.857,0,0,1-.121,1.461h-17.684C1485.506,650.687,1487.707,647.261,1491.532,647.278Zm13.628,26.985q-5.306,4.761-10.6,9.543c-.877.79-1.75,1.586-2.629,2.371a2.491,2.491,0,0,1-4-.549c-1.108-1.548-2.234-3.076-3.359-4.606a4.054,4.054,0,0,1,.043-5.277c1.23-1.324,2.926-1.1,4.136.546l1.815,2.47c3.873-3.506,7.676-6.944,11.474-10.388a2.418,2.418,0,0,1,3.308-.336,3.589,3.589,0,0,1,1.386,3.275A4.06,4.06,0,0,1,1505.161,674.263Z"
                          transform="translate(-1466.878 -644.234)"
                          fill="#33963e"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="resources__card__1__title">Work Rights </div>
              <div className="resources__card__1__text">
                {getText(string, 100)}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}