import React from "react";

export function ProductsBecomeResourceInput({ svg, ...props }) {
  return (
    <div className="products__become__resource__form__content__input">
      {svg}
      <input
        {...props}
        className="products__become__resource__form__content__input__field"
      />
    </div>
  );
}
