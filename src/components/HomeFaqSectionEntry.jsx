import React from "react";
import { Minus, Plus } from "react-feather";
import { Fade, Zoom } from "react-reveal";

export function HomeFaqSectionEntry({
  heading,
  info,
  selected,
  setSelected,
  index,
}) {
  return (
    <div className="home__faq__col__entry">
      <Fade>
        <button
          className="home__faq__col__entry__header"
          onClick={() => {
            selected === index ? setSelected(false) : setSelected(index);
          }}
        >
          <div className="home__faq__col__entry__header__heading">
            {heading}
          </div>
          <Zoom>
            <div className="home__faq__col__entry__header__icon">
              {selected === index ? (
                <Minus size={20} color="currentColor" />
              ) : (
                <Plus size={20} color="currentColor" />
              )}
            </div>
          </Zoom>
        </button>
      </Fade>
      {selected === index ? (
        <Fade>
          <div className="home__faq__col__entry__content">{info}</div>
        </Fade>
      ) : null}
    </div>
  );
}
