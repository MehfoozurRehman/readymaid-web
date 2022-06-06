import React from "react";
import Smart__back from "../assets/img/Smart__back.png";

export default function Smart__solution() {
  return (
    <div className="smart__solution__section">
      <div className="smart__wrapper">
        <img src={Smart__back} className="smart__wrapper__img" alt="" />
      </div>

      <div className="smart__solution__container">
        <div className="smart__solution__container__heading">
          Readymaid Smart Solution
        </div>
        <div className="smart__solution__container__text">
          It is a unique smart solution designed to cater the needs of our
          esteemed corporate clients.
        </div>
      </div>
    </div>
  );
}
