import Carouselimg1 from "../assets/img/Carousel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import "swiper/css";

export default function Carousel() {
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSlidesPerPage(1.2);
    } else if (window.innerWidth <= 600) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(2.5);
    } else if (window.innerWidth === 1200) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(3);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setSlidesPerPage(1.2);
      } else if (window.innerWidth <= 600) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(2.5);
      } else if (window.innerWidth === 1200) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(3);
      }
    });
  }, []);

  return (
    <div className="Carousel__div">
      <div className="carousel">
        <Swiper spaceBetween={1} slidesPerView={slidesPerPage}>
          <SwiperSlide className="swiperslide">
            <img src={Carouselimg1} alt="/" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={Carouselimg1} alt="." />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={Carouselimg1} alt="/" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={Carouselimg1} alt="/" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
