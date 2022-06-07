import { useState } from "react";
export default function Solution__sec__entry({
  scrollTo,
  defaultChecked,
  icon,
  label,
  iconActive,
}) {
  const [active, setActive] = useState(false);

  return (
    <a
      href="#"
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseOut={() => {
        setActive(false);
      }}
      className="home__services__content__main__entry"
    >
      <div className="home__services__content__main__entry__icon">
        {active ? iconActive : icon}
      </div>
      <div
        className="home__services__content__main__entry__text"
        title={label}
        name="name"
        defaultChecked={defaultChecked}
        id={scrollTo}
      >
        {label}
      </div>
    </a>
  );
}
