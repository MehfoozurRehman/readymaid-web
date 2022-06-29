import React from "react";
import imdustryimg1 from "../assets/img/industryimg1.png";
import imdustryimg2 from "../assets/img/industryimg2.png";
import imdustryimg3 from "../assets/img/industryimg3.png";

export default function Industry() {
  return (
    <div className="industry__overview">
      <div className="industry__overview__section">
        <div className="industry__overview__section__container__header">
          <div className="industry__overview__section__header">
            Creating an industry
          </div>
        </div>
        <div className="industry__overview__section__entry">
          <div className="industry__overview__section__entry__container">
            <div className="industry__overview__section__entry__container__cards">
              <img src={imdustryimg1} alt="" />
              <div className="industry__overview__section__entry__container__cards__data">
                <div className="industry__overview__section__entry__container__cards__data__header">
                  Empowering Resources
                </div>
                Better work rights Structured payments Job security
              </div>
            </div>
            <div className="industry__overview__section__entry__container__cards">
              <img src={imdustryimg2} alt="" />
              <div className="industry__overview__section__entry__container__cards__data">
                <div className="industry__overview__section__entry__container__cards__data__header">
                  Giving Back To The Society
                </div>
                Ease of processes Abundance of job opportunities
              </div>
            </div>
            <div className="industry__overview__section__entry__container__cards">
              <img src={imdustryimg3} alt="" />
              <div className="industry__overview__section__entry__container__cards__data">
                <div className="industry__overview__section__entry__container__cards__data__header">
                  Happy Customers
                </div>
                Trained Workforce Better Customer Rights Availability of
                Resources
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
