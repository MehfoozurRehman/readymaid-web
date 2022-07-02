import React from "react";
import { Minus, Plus } from "react-feather";

export function HomeFaqSectionEntry({
  heading,
  info,
  selected,
  setSelected,
  index,
}) {
  return (
    <div className="home__faq__col__entry">
      <button
        className="home__faq__col__entry__header"
        onClick={() => {
          selected === index ? setSelected(false) : setSelected(index);
        }}
      >
        <div className="home__faq__col__entry__header__heading">{heading}</div>
        <div className="home__faq__col__entry__header__icon">
          {selected === index ? (
            <Minus size={20} color="currentColor" />
          ) : (
            <Plus size={20} color="currentColor" />
          )}
        </div>
      </button>
      {selected === index ? (
        <div className="home__faq__col__entry__content">{info}</div>
      ) : null}
    </div>
  );
}
