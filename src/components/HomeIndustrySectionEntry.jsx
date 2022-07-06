import React from "react";
import { Fade, Zoom } from "react-reveal";

export function HomeIndustrySectionEntry({ img, alt, title, content }) {
  return (
    <div className="home__industry__content__entry">
      <Zoom>
        <img
          src={img}
          alt={alt}
          className="home__industry__content__entry__img"
        />
      </Zoom>
      <Fade>
        <div className="home__industry__content__entry__content">
          <div className="home__industry__content__entry__content__title">
            {title}
          </div>
          <div className="home__industry__content__entry__content__info">
            {content.map((entry) => (
              <span key={JSON.stringify(entry)}>{entry}</span>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
