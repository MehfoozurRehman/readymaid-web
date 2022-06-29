import React from "react";
import AboutCard1 from "../assets/img/AboutCard1.png";
import AboutCard2 from "../assets/img/AboutCard2.png";
import AboutCard3 from "../assets/img/AboutCard3.png";
import About__section__content__card from "../components/About__Card";

export default function About__Cards__Arr() {
  const Card = [
    {
      img: AboutCard1,
      heading: "Readymaid For Business",
      para: "Its just a click away",
      button: "Sign Up",
      defaultChecked: true,
    },
    {
      img: AboutCard2,
      heading: "Get a resource",
      para: "Its just a click away",
      button: "Sign Up",
    },
    {
      img: AboutCard3,
      heading: "Become a resource",
      para: "Start Earning Today",
      button: "Sign Up",
    },
  ];
  return (
    <div className="About__section__content__cards">
      {Card.map((card1) => {
        return (
          <About__section__content__card
            img={card1.img}
            heading={card1.heading}
            para={card1.para}
            button={card1.button}
          />
        );
      })}
    </div>
  );
}
