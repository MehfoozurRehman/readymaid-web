import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimage from "../assets/signup.png";
import CheckBox from "react-checkbox-css";
import { AuthInput } from "./AuthInput";

export default function Login({}) {
  const [isChecked, setIschecked] = useState(false);
  return (
    <>
      <div className="login__container">
        <img src={loginimage} alt="login" className="login__container__img" />
        <div className="login__container__overlay">
          <div className="login__container__overlay__content">
            <div className="login__container__overlay__left">
              <div className="login__container__overlay__left__heading">
                We Provide
                <div>
                  <span>Best Quality Services</span> for your
                </div>
                <span>Home & Offices</span>
              </div>
              <div className="login__container__overlay__left__info">
                Readymaid is a one stop shop, a marketplace, a platform to
                provide services of skilled labors to both consumers &
                corporations alike. This includes provisioning of services of
                Maids, Gardeners, Guards, Chef, Chauffeurs, Nurses, Nannies,
                Janitors, Plumbers, Electricians, and other human capital
              </div>
            </div>
            <div className="login__container__overlay__right">
              <div className="login__container__overlay__right__heading">
                Welcome back! <span>Login</span>
              </div>
              <AuthInput
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.919"
                    height="11.946"
                    viewBox="0 0 17.919 11.946"
                  >
                    <g id="mail" transform="translate(0)">
                      <g
                        id="Group_202"
                        data-name="Group 202"
                        transform="translate(0)"
                      >
                        <path
                          id="Path_292"
                          data-name="Path 292"
                          d="M17,85.333H.919A.922.922,0,0,0,0,86.252V96.36a.922.922,0,0,0,.919.919H17a.922.922,0,0,0,.919-.919V86.252A.922.922,0,0,0,17,85.333Zm-.345.689L9.488,91.4a.961.961,0,0,1-1.057,0L1.264,86.022Zm-3.828,5.73,3.905,4.824.013.013H1.174l.013-.013,3.905-4.824a.345.345,0,0,0-.536-.434L.689,96.1V86.453l7.328,5.5a1.645,1.645,0,0,0,1.884,0l7.328-5.5V96.1l-3.867-4.777a.345.345,0,0,0-.536.434Z"
                          transform="translate(0 -85.333)"
                          fill="#374957"
                        />
                      </g>
                    </g>
                  </svg>
                }
                type="text"
                placeholder="Email"
              />
              <AuthInput
                icon={
                  <svg
                    id="padlock"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.192"
                    height="14.922"
                    viewBox="0 0 11.192 14.922"
                  >
                    <path
                      id="Path_293"
                      data-name="Path 293"
                      d="M12.793,18.327H4.4a1.4,1.4,0,0,1-1.4-1.4V10.4A1.4,1.4,0,0,1,4.4,9h8.394a1.4,1.4,0,0,1,1.4,1.4v6.529A1.4,1.4,0,0,1,12.793,18.327ZM4.4,9.933a.467.467,0,0,0-.466.466v6.529a.467.467,0,0,0,.466.466h8.394a.467.467,0,0,0,.466-.466V10.4a.467.467,0,0,0-.466-.466Z"
                      transform="translate(-3 -3.404)"
                      fill="#374957"
                    />
                    <path
                      id="Path_294"
                      data-name="Path 294"
                      d="M12.995,6.529a.466.466,0,0,1-.466-.466V3.731a2.8,2.8,0,1,0-5.6,0V6.062a.466.466,0,0,1-.933,0V3.731a3.731,3.731,0,1,1,7.461,0V6.062A.466.466,0,0,1,12.995,6.529Z"
                      transform="translate(-4.135)"
                      fill="#374957"
                    />
                    <path
                      id="Path_295"
                      data-name="Path 295"
                      d="M11.244,15.487a1.244,1.244,0,1,1,1.244-1.244A1.245,1.245,0,0,1,11.244,15.487Zm0-1.554a.311.311,0,1,0,.311.311A.311.311,0,0,0,11.244,13.933Z"
                      transform="translate(-5.648 -4.917)"
                      fill="#374957"
                    />
                    <path
                      id="Path_296"
                      data-name="Path 296"
                      d="M11.716,18.393a.466.466,0,0,1-.466-.466v-1.71a.466.466,0,1,1,.933,0v1.71A.466.466,0,0,1,11.716,18.393Z"
                      transform="translate(-6.12 -5.957)"
                      fill="#374957"
                    />
                  </svg>
                }
                type="password"
                placeholder="Password"
              />
              <div className="login__container__overlay__right__row">
                <CheckBox
                  value={isChecked}
                  label="Remember Me"
                  labelColor="#363636"
                  checkedColor="#FCCA25"
                  unCheckedColor="#ffffff"
                  iconColor="#ffffff"
                  style={{
                    border: isChecked
                      ? "1px solid #FCCA25"
                      : "1px solid #363636",
                    width: 22,
                    height: 22,
                  }}
                  onChange={() => {
                    isChecked ? setIschecked(false) : setIschecked(true);
                  }}
                />
                <Link
                  to="/forgot-password"
                  className="login__container__overlay__right__row__link"
                >
                  Forgot Password?
                </Link>
              </div>
              <button className="login__container__overlay__right__button">
                Login
              </button>
              <div className="login__container__overlay__right__socials">
                <button className="login__container__overlay__right__socials__entry">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.48"
                    height="22.48"
                    viewBox="0 0 22.48 22.48"
                  >
                    <g
                      id="facebook_2_"
                      data-name="facebook (2)"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_659"
                        data-name="Path 659"
                        d="M19.67,0H2.81A2.813,2.813,0,0,0,0,2.81V19.67a2.813,2.813,0,0,0,2.81,2.81H19.67a2.813,2.813,0,0,0,2.81-2.81V2.81A2.813,2.813,0,0,0,19.67,0Z"
                        transform="translate(0)"
                        fill="#1976d2"
                      />
                      <path
                        id="Path_660"
                        data-name="Path 660"
                        d="M202.538,103.025h-3.513v-2.81c0-.776.629-.7,1.405-.7h1.405V96h-2.81a4.215,4.215,0,0,0-4.215,4.215v2.81H192v3.513h2.81v7.728h4.215v-7.728h2.107Z"
                        transform="translate(-183.57 -91.785)"
                        fill="#fafafa"
                      />
                    </g>
                  </svg>
                </button>
                <button className="login__container__overlay__right__socials__entry">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.48"
                    height="22.48"
                    viewBox="0 0 22.48 22.48"
                  >
                    <path
                      id="linkedin"
                      d="M20.447,0H2.034A2.034,2.034,0,0,0,0,2.034V20.447A2.034,2.034,0,0,0,2.034,22.48H20.447a2.034,2.034,0,0,0,2.034-2.034V2.034A2.034,2.034,0,0,0,20.447,0ZM6.956,19.411A.592.592,0,0,1,6.365,20H3.845a.592.592,0,0,1-.592-.592V8.851a.592.592,0,0,1,.592-.592H6.365a.592.592,0,0,1,.592.592ZM5.105,7.264A2.393,2.393,0,1,1,7.5,4.871,2.393,2.393,0,0,1,5.105,7.264ZM20.121,19.459a.544.544,0,0,1-.544.544h-2.7a.544.544,0,0,1-.544-.544V14.505c0-.739.217-3.238-1.931-3.238-1.666,0-2,1.711-2.072,2.478v5.713a.544.544,0,0,1-.544.544H9.168a.544.544,0,0,1-.544-.544V8.8a.544.544,0,0,1,.544-.544h2.614a.544.544,0,0,1,.544.544v.921a3.711,3.711,0,0,1,3.49-1.643c4.328,0,4.3,4.044,4.3,6.266v5.111Z"
                      fill="#0077b7"
                    />
                  </svg>
                </button>
                <button className="login__container__overlay__right__socials__entry">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.48"
                    height="22.48"
                    viewBox="0 0 22.48 22.48"
                  >
                    <g id="google" transform="translate(0)">
                      <path
                        id="Path_661"
                        data-name="Path 661"
                        d="M277.034,211.479h-9.169a.733.733,0,0,0-.733.733v2.929a.733.733,0,0,0,.733.733h5.164a6.894,6.894,0,0,1-2.967,3.477l2.2,3.812a11.021,11.021,0,0,0,5.62-9.639,7.431,7.431,0,0,0-.126-1.439A.736.736,0,0,0,277.034,211.479Z"
                        transform="translate(-255.402 -202.194)"
                        fill="#167ee6"
                      />
                      <path
                        id="Path_662"
                        data-name="Path 662"
                        d="M44.14,337.271a6.84,6.84,0,0,1-5.918-3.424l-3.811,2.2a11.231,11.231,0,0,0,15.349,4.12v-.005l-2.2-3.812A6.791,6.791,0,0,1,44.14,337.271Z"
                        transform="translate(-32.9 -319.189)"
                        fill="#12b347"
                      />
                      <path
                        id="Path_663"
                        data-name="Path 663"
                        d="M261.62,394.6v-.005l-2.2-3.812A6.791,6.791,0,0,1,256,391.7v4.4A11.221,11.221,0,0,0,261.62,394.6Z"
                        transform="translate(-244.759 -373.621)"
                        fill="#0f993e"
                      />
                      <path
                        id="Path_664"
                        data-name="Path 664"
                        d="M4.4,133.734a6.791,6.791,0,0,1,.924-3.418l-3.811-2.2a11.189,11.189,0,0,0,0,11.23l3.811-2.2A6.791,6.791,0,0,1,4.4,133.734Z"
                        transform="translate(0 -122.494)"
                        fill="#ffd500"
                      />
                      <path
                        id="Path_665"
                        data-name="Path 665"
                        d="M44.14,4.4a6.81,6.81,0,0,1,4.344,1.56.73.73,0,0,0,.983-.044l2.075-2.075a.739.739,0,0,0-.042-1.08A11.216,11.216,0,0,0,34.411,5.625l3.811,2.2A6.841,6.841,0,0,1,44.14,4.4Z"
                        transform="translate(-32.9 0)"
                        fill="#ff4b26"
                      />
                      <path
                        id="Path_666"
                        data-name="Path 666"
                        d="M260.344,5.958a.73.73,0,0,0,.983-.044L263.4,3.838a.739.739,0,0,0-.042-1.08A11.206,11.206,0,0,0,256,0V4.4A6.81,6.81,0,0,1,260.344,5.958Z"
                        transform="translate(-244.759 0)"
                        fill="#d93f21"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login__container__subscription">
        <div className="login__container__subscription__heading">
          Heading Here
        </div>
        <div className="login__container__subscription__info">
          Readymaid is a one stop shop, a marketplace, a platform to provide
          services of skilled labors to both consumers & corporations alike.
          This includes provisioning of
        </div>
        <div className="login__container__subscription__row">
          <div className="login__container__subscription__row__form">
            <input
              type="text"
              className="login__container__subscription__row__form__input"
              placeholder="Some thing here..."
            />
            <button className="login__container__subscription__row__form__button">
              Subscribe
            </button>
          </div>
          <button className="login__container__subscription__row__button">
            Download App
          </button>
        </div>
      </div>
    </>
  );
}
