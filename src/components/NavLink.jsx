import React from "react";
import { useNavigate } from "react-router-dom";

export function NavLink({ to, children, onClick }) {
  const navigate = useNavigate();
  return (
    <div className="header__content__nav__link">
      <input
        type="radio"
        className="header__content__nav__link__input"
        name="header__content__nav__link"
        defaultChecked={window.location.pathname === to}
        id={children}
        onChange={() => navigate(to)}
        onClick={onClick}
      />
      <div className="header__content__nav__link__content">{children}</div>
    </div>
  );
}
