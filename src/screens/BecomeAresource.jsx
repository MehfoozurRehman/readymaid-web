import React from "react";
import Bar_img from "../assets/bar__img.png";
import CompanyNameIcon from "../assets/BAR__company__name.png"
function BecomeAresource() {
  return (
    <div className="BAR__container__main">
      <div className="BAR__container__first">
        <div className="BAR__container__img">
          <img src={Bar_img} alt="Woman cleaning window glass" />
        </div>
        <div className="BAR__content__overlay">
          <div className="BAR__content">
            <div className="BAR__content__title">
              To become a resource
              <div>Create an account</div>
            </div>
            <form action="#" className="BAR__content__form">
                <div className="BAR__content__form__input__container">
                    <div className="BAR__content__form__input__icon">
                        <img src={CompanyNameIcon} alt="User Icon" />
                    </div>
                    <div className="BAR__content__form__input__box">
                        <input type="text" placeholder="Company Name" />
                    </div>
                    <div className="BAR__content__form__file__container">
                        <input type="file" className="BAR__content__form__file"/> 

                    </div>
                    
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAresource;
