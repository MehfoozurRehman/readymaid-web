import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import back__img from "../assets/img/background.png";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsHeaderOpen(true);
    } else {
      setIsHeaderOpen(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setIsHeaderOpen(true);
      } else {
        setIsHeaderOpen(false);
      }
    });
  }, []);

  return (
    <div className="header">
      <div className="header__background__img">
        <img className="background__img" src={back__img} alt="" />
      </div>
      <div className="header__wrapper">
        <Link
          to="/"
          onClick={() => {
            document.getElementById("home").checked = true;
          }}
        >
          <svg
            className="brand__logo"
            id="Group_4285"
            data-name="Group 4285"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="50"
            viewBox="0 0 80.072 72.902"
          >
            <g
              id="Group_4286"
              data-name="Group 4286"
              transform="translate(0 0)"
            >
              <path
                id="Path_9750"
                data-name="Path 9750"
                d="M555.635,389.648h.041l-13.492-23.771h-8.352l9.488,16.7h-9.489L524.1,365.729l-.255.147H492.393V382.9H483.4v-26.02h6.013l48.244.46a16.756,16.756,0,0,0,7.066-2.461l0,0a19.757,19.757,0,0,0,9.777-17.35c.051-10.363-8.154-19.593-18.594-19.817-18.7-.4-37.413-.188-56.12-.326-3.018-.022-3.906,1.3-3.843,4.1.123,5.475.178,10.961-.011,16.432-.116,3.335,1.469,4.086,4.394,4.074,17.257-.069,34.514-.027,51.77-.057,3.095-.005,6.228-.588,6.137-4.482-.085-3.646-3.084-3.961-6.019-3.959q-20.079.014-40.158-.03c-2.372,0-4.744,0-7.34,0l.014-7.554c2.272,0,3.513-.021,5.1-.018,15.481.028,30.966-.093,46.442.227,5.252.108,9.466,4.987,9.99,10.214a11.3,11.3,0,0,1-7.625,12.1,29.125,29.125,0,0,1-8.569,1.039h-.78l.04.023H476.01v40.8h23.771V373.264h20.036l9.2,16.7H556Z"
                transform="translate(-475.925 -317.387)"
                fill="#3cb149"
              />
            </g>
          </svg>
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            if (window.innerWidth < 800) {
              setIsHeaderOpen(false);
            }
          }}
        >
          <button
            className="header__mobile__btn"
            onClick={() => {
              setIsHeaderOpen(!isHeaderOpen);
            }}
          >
            {isHeaderOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </OutsideClickHandler>
        {isHeaderOpen ? (
          <div className="nav">
            <Link to="/" className="nav__link__login">
              Login
            </Link>
            <Link to="/" className="nav__link__register">
              Sign Up
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
