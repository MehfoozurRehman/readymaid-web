import React from "react";
import foundations from "../assets/foundation.png";
import founder from "../assets/founder.png";

export function AboutOurFoundation() {
  return (
    <div className="about__us__our__foundation__all__containers">
      <img src={foundations} alt="" />
      <div className="about__us__our__foundation__all__container">
        <div className="about__us__our__foundation__container">
          <div className="about__us__our__foundation__container__main">
            <div className="about__us__our__foundation__container__content">
              <img src={founder} alt="" />
            </div>
            <div className="about__us__our__foundation__container__main__two">
              <div className="about__us__our__foundation__container_heading">
                Founder
              </div>
              <div className="about__us__our__foundation__container_heading__two">
                Nasir Abdullah
              </div>
              <div className="about__us__our__foundation__container__para">
                Mr. Nasir Abdullah is a business graduate having 13 years of
                experience working at different roles. He was working with a
                leading telecom company when one day he called it a day there.
                He called it a day because he wanted to do something different.
                Something that not only converts a dream into a reality but also
                help people in need. That not only upgrade his living standards
                but also of the people around him. That not only is a business
                idea but stands out amongst the other. That is unique enough to
                Revolutionize, Revamp & Re-design the processes of the industry.
                That not only establishes a business but an industry. That has
                the protentional to grow exponentially and expand globally.
                Hence became Readymaid (Pvt) Ltd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
