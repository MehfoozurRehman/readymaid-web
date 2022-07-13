import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu } from "react-feather";
import { NavLink } from "./NavLink";
import { logo } from "../assets";

export default function Header() {
  const navigate = useNavigate();
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

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
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <div
      className="header"
      style={isScrolling ? { backgroundColor: "white" } : null}
    >
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
                    if (window.innerWidth < 900) {
                      setIsHeaderOpen(false);
                    }
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/benefits"
                  onClick={() => {
                    if (window.innerWidth < 900) {
                      setIsHeaderOpen(false);
                    }
                  }}
                >
                  Benefits
                </NavLink>
                <NavLink
                  to="/products"
                  onClick={() => {
                    if (window.innerWidth < 900) {
                      setIsHeaderOpen(false);
                    }
                  }}
                >
                  Products
                </NavLink>
                <NavLink
                  to="/aboutus"
                  onClick={() => {
                    if (window.innerWidth < 900) {
                      setIsHeaderOpen(false);
                    }
                  }}
                >
                  About Us
                </NavLink>
              </div>
            </OutsideClickHandler>
          ) : null}
          <div className="header__content__nav__buttons">
            <button
              onClick={() => {
                navigate("/login");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="header__content__nav__buttons__button header__content__nav__buttons__button__primary"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/signup");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="header__content__nav__buttons__button header__content__nav__buttons__button__secondary"
            >
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
