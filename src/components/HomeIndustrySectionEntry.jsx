import React from "react";

export function HomeIndustrySectionEntry({ img, alt, title, content }) {
  return (
    <div className="home__industry__content__entry">
      <img
        src={img}
        alt={alt}
        className="home__industry__content__entry__img"
      />
      <div className="home__industry__content__entry__content">
        <div className="home__industry__content__entry__content__title">
          {title}
        </div>
        <div className="home__industry__content__entry__content__info">
          {content.map((entry) => (
            <span>{entry}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
