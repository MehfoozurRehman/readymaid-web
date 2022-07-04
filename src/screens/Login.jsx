import React from "react";
import loginimage from "../assets/login.png";

export default function Login() {
  return (
    <>
      <div className="login__jumbotron">
        <img className="login__jumbotron__img" src={loginimage} alt="login" />
        <div className="login__jumbotron__overlay">
          <div className="login__jumbotron__overlay__content">
            <div className="login__jumbotron__overlay__left">
              <div className="login_all_first_container_content_one">
                We provide
              </div>
              <div className="login_all_first_container_content_two">
                <span>Best Quality Services </span> for you
              </div>
              <div className="login_all_first_container_content_three">
                Home & office
              </div>
              <div className="login_all_first_container_content_four">
                Readymaid is a one stop shop, a marketplace, a plateform to
                provide services of skilled labors to both consumers &
                corporations alike. this includes provisioning of Maids,
                Gardeners, Guards, Cheif, Chauffeurs, Nurses, Nannies, Janitors,
                Electricians, and other human capital.
              </div>
            </div>
            <div className="login__jumbotron__overlay__right">
              <div className="login_all_second_container_content_one">
                Let's get you started
              </div>
              <div className="login_all_second_container_content_two">
                Create an account
              </div>
              <div className="login_all_second_container_content_three">
                Enter your informationto help us you find person for you
              </div>
              <div className="login_all_second_container_input">
                <input className="input" type="Name" placeholder="Name" />
                <input className="input" type="Email" placeholder="Email" />
              </div>
              <div className="login_all_second_container_input_two">
                <input className="input" type="Address" placeholder="Address" />
                <input className="input" type="Number" placeholder="Number" />
              </div>
              <div className="login_all_second_container_input_three">
                <input
                  className="input"
                  type="Password"
                  placeholder="Password"
                />
                <input
                  className="input"
                  type="Conform password"
                  placeholder="conform password"
                />
              </div>
              <div className="login_all_second_container_checkbox">
                <input type="checkbox" />I agree with readymaid's
                <span>Terms & Conditions</span> & and data
                <span>privacy policy</span>
              </div>
              <div className="login_all_second_container_button">
                <button className="button">Create an account</button>
              </div>
              <div className="login_all_second_container_button_two">
                <a className="or" href="#">
                  or
                </a>
              </div>
              <div className="login_all_second_container_svg">
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
                <svg
                  class="svg_two"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login__jumbotron__buttons">
        <div className="login__jumbotron__end__content__heading__main">
          <div className="login__jumbotron__end__content__heading">
            <div className="login__jumbotron__end__content__heading_one">
              Heading here
            </div>
            <div className="login__jumbotron__end__content__heading_two">
              Readymaid is one stop shop, a marketplace, a palteform to provide
              services of skilled labors to both consumers & corporations alike.
              this include provisioning of
            </div>
            <div class="login__jumbotron__end__content__input">
              <div class="login__jumbotron__end__content__input__button">
                <input
                  class="end_input"
                  type="text"
                  placeholder="Some thing here......"
                />
                <button class="end_button">Subscribe</button>
              </div>
              <button class="end__button__two">Download App</button>
            </div>
          </div>
        </div>
        <div className="login__jumbotron__overlay__button">
          <button className="overlay__button">Products</button>
          <button className="overlay__button">saftey</button>
          <button className="overlay__button">Help</button>
          <button className="overlay__button">About us</button>
          <button className="overlay__button">Carrer</button>
        </div>
      </div>
    </>
  );
}
