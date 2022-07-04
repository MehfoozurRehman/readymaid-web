import React from "react";
import satisfied from "../assets/satisfied.png";

export function AboutSatisfied({}) {
  return (
    <div className="satisfied__coustomer__main__container">
      <div className="satisfied__coustomer__main__container__heading">
        Our satisfied <span>coustomer </span>
      </div>
      <div className="satisfied__coustomer__main__container__heading__img">
        <img src={satisfied} alt="" />
      </div>
      <div className="satisfied__coustomer__main__container__para">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa vitae
        quidem eligendi sed distinctio dolore quis aut recusandae?
        Necessitatibus et aut enim beatae delectus. Adipisci aliquam ipsum quae
        incidunt quisquam.
      </div>
      <div className="satisfied__coustomer__main__container__para__end">
        Muhammad Bilal
      </div>
    </div>
  );
}
