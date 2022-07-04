import React from "react";

export function ProductsJumbotronSectionEntry({
  icon,
  title,
  info,
  selectedProduct,
  setSelectedProduct,
  to,
}) {
  return (
    <div className="products__jumbotron__content__entry">
      <input
        type="radio"
        className="products__jumbotron__content__entry__input"
        name="products__jumbotron__content__entry"
        defaultChecked={selectedProduct === to}
        onChange={() => setSelectedProduct(to)}
      />
      <div className="products__jumbotron__content__entry__content">
        <div className="products__jumbotron__content__entry__content__icon">
          {icon}
        </div>
        <div className="products__jumbotron__content__entry__content__sub__heading">
          {info}
        </div>
        <div className="products__jumbotron__content__entry__content__heading">
          {title}
        </div>
      </div>
    </div>
  );
}
