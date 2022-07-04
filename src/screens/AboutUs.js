import React from "react";
import { AboutConceptsSection } from "./AboutConceptsSection";
import { AboutJumbotronSection } from "./AboutJumbotronSection";
import { AboutKeyFactorsSection } from "./AboutKeyFactorsSection";
import { AboutOurMissionSection } from "./AboutOurMissionSection";
import ourleaders from "../assets/ourleader.png";
import foundations from "../assets/foundation.png";
import founder from "../assets/founder.png";
import service from "../assets/serviceend.png";
import satisfied from "../assets/satisfied.png";
import { AboutOurStory } from "./AboutOurStory";

export default function AboutUs() {
  return (
    <>
      <AboutJumbotronSection />
      <AboutConceptsSection />
      <AboutKeyFactorsSection />
      <AboutOurMissionSection />
      <AboutOurStory />
      <div className="about__us__our__leader_container">
        <div className="about__us__our__leader_container__overlay">
          <img  src={ourleaders} alt="" />
        </div>
        <div className="about__us__our__leader_container__heading">
          <div className="about__us__our__leader_container__heading__content__heading">
            Our leaders
          </div>
          <div className="about__us__our__leader__container__heading__content__heading__para">
            Our leaders are purpose driven and are motivated to revolutionize
            our country by technology to bring ease of processes and simplified
            lives. We are building an industry where each employee will be
            treated with utmost respect, care, and benefits. Where each customer
            will be treated with most care and dedication. We are creating one
            big family that will lead as an example for others to follow.
          </div>
          <div className="about__us__our__leader_container__heading__button">
            <button>More</button>
          </div>
        </div>
      </div>
      
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
        Mr. Nasir Abdullah is a business graduate having 13 years of experience working at different roles. He was working with a leading telecom company when one day he called it a day there. He called it a day because he wanted to do something different. Something that not only converts a dream into a reality but also help people in need. That not only upgrade his living standards but also of the people around him. That not only is a business idea but stands out amongst the other. That is unique enough to Revolutionize, Revamp & Re-design the processes of the industry. That not only establishes a business but an industry. That has the protentional to grow exponentially and expand globally. Hence became Readymaid (Pvt) Ltd
        </div>
        </div>
        </div>
      </div>
      </div>
      </div>

      <div className="satisfied__coustomer__main__container">
        <div className="satisfied__coustomer__main__container__heading">
          Our satisfied <span>coustomer </span>
        </div>
        <div className="satisfied__coustomer__main__container__heading__img">
          <img src={satisfied} alt="" />
        </div>
        <div className="satisfied__coustomer__main__container__para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa vitae quidem eligendi sed distinctio dolore quis aut recusandae? Necessitatibus et aut enim beatae delectus. Adipisci aliquam ipsum quae incidunt quisquam.
        </div>
        <div className="satisfied__coustomer__main__container__para__end">
          Muhammad Bilal
        </div>
      </div>
      <div className="Best__services__coustomer__container">
        <div className="Best__services__coustomer__container__main">
              <div className="Best__services__coustomer__container__heading">
                We provide
              </div>
              <div className="Best__services__coustomer__container__heading__two">
                <span>Best Quality Services</span>
              </div>
              <div className="Best__services__coustomer__container__heading__three">
               join us
              </div>
              <div className="Best__services__coustomer__container__para">
                Readymaid is a one stop shop, a marketplace, a plateform to
                provide services of skilled labors to both consumers &
                corporations alike. this includes provisioning of Maids,
                Gardeners, Guards, Cheif, Chauffeurs, Nurses, Nannies, Janitors,
                Electricians, and other human capital.
              </div>
              <div className="Best__services_container__heading__button">
            <button>Apply now</button>
          </div>
              </div>
              <div className="Best__services__coustomer__container__img">
                <img src={service} alt="" />
              </div>
            </div>
    </>
  );
}
