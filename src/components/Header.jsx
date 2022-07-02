import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { X, Menu } from "react-feather";
import { logo } from "../assets";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsHeaderOpen(true);
    } else {
      setIsHeaderOpen(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setIsHeaderOpen(true);
      } else {
        setIsHeaderOpen(false);
      }
    });
  }, []);

  return (
    <div className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img
            src={logo}
            alt="readymaid"
            className="header__content__logo__img"
          />
        </Link>
        <div className="header__content__nav">
          {isHeaderOpen ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 900) {
                  setIsHeaderOpen(false);
                }
              }}
            >
              <div className="header__content__nav__links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/benefits">Benefits</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
              </div>
            </OutsideClickHandler>
          ) : null}
          <div className="header__content__nav__buttons">
            <button className="header__content__nav__buttons__button header__content__nav__buttons__button__primary">
              Login
            </button>
            <button className="header__content__nav__buttons__button header__content__nav__buttons__button__secondary">
              Sign Up
            </button>
            <button
              className="header__content__nav__buttons__button header__content__nav__buttons__button__menu"
              onClick={() => {
                setIsHeaderOpen(!isHeaderOpen);
              }}
            >
              {isHeaderOpen ? (
                <X size={20} strokeWidth={1.5} color="currentColor" />
              ) : (
                <Menu size={20} strokeWidth={1.5} color="currentColor" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
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
      />
      <div className="header__content__nav__link__content">{children}</div>
    </div>
  );
}
