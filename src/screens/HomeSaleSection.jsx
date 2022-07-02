import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { salebanner } from "../assets";

export function HomeSaleSection({}) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    function slidesPerView() {
      if (window.innerWidth < 700) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1000) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    }
    slidesPerView();
    window.addEventListener("resize", slidesPerView);
  }, []);

  return (
    <div className="home__sale">
      <Swiper slidesPerView={slidesPerView} spaceBetween={30}>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="home__sale__entry">
            <img
              src={salebanner}
              alt="salebanner"
              className="home__sale__entry__img"
            />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
