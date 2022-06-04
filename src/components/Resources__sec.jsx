import React from "react";
import resources from "../assets/img/Resources.png";

export default function Resources__sec() {
  return (
    <div className="resources__section">
      <img src={resources} className="resources__section__img" alt="" />
      <div className="resources__secton__banner">
        <div className="resources__secton__banner__content">
          <div className="resources__secton__content__heading">
            Benefit to Resources
          </div>
          <div className="resources__secton__content__text">
            Different lucrative options to be provided
          </div>
        </div>
      </div>
    </div>
  );
}
