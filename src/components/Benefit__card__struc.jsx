import React from "react";

export default function Benefit__card__struc({ image, title, text }) {
  return (
    <div className="benefit__card__structure">
      <div className="benefit__card__img">{image}</div>
      <div className="benefit__card__title">{title}</div>
      <div className="benefit__card__text">{text}</div>
    </div>
  );
}
