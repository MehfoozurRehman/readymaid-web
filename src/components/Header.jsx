import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { X, Menu } from "react-feather";
import { NavLink } from "./NavLink";
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
    window.addEventListener("scroll", () => {
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
                <NavLink
                  to="/"
                  onClick={() => {
                    setIsHeaderOpen(false);
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/benefits"
                  onClick={() => {
                    setIsHeaderOpen(false);
                  }}
                >
                  Benefits
                </NavLink>
                <NavLink
                  to="/products"
                  onClick={() => {
                    setIsHeaderOpen(false);
                  }}
                >
                  Products
                </NavLink>
                <NavLink
                  to="/aboutus"
                  onClick={() => {
                    setIsHeaderOpen(false);
                  }}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contactus"
                  onClick={() => {
                    setIsHeaderOpen(false);
                  }}
                >
                  Contact Us
                </NavLink>
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
