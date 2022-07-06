import React from "react";
import { Fade, Zoom } from "react-reveal";

export function ProductsJumbotronSectionEntry({
  icon,
  title,
  info,
  selectedProduct,
  setSelectedProduct,
  to,
}) {
  return (
    <Zoom>
      <div className="products__jumbotron__content__entry">
        <input
          type="radio"
          className="products__jumbotron__content__entry__input"
          name="products__jumbotron__content__entry"
          defaultChecked={selectedProduct === to}
          onChange={() => setSelectedProduct(to)}
        />
        <div className="products__jumbotron__content__entry__content">
          <Fade>
            <div className="products__jumbotron__content__entry__content__icon">
              {icon}
            </div>
          </Fade>
          <div className="products__jumbotron__content__entry__content__sub__heading">
            {info}
          </div>
          <div className="products__jumbotron__content__entry__content__heading">
            {title}
          </div>
        </div>
      </div>
    </Zoom>
  );
}
