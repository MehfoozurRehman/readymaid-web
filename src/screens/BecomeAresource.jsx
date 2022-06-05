import React from "react";
import Bar_img from "../assets/bar__img.png";
import CompanyNameIcon from "../assets/BAR__company__name.png";
import InputBox from "../components/InputBox";
import Profession from "../assets/Profession.png";
import Mail from "../assets/Mail.png";
import Phone from "../assets/Phone.png";
import Plus from "../assets/Plus.png";
import User from "../assets/User.png";
import Password from "../assets/Password.png";

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
              <div className="BAR__content__form__input__Comp__container">
                <InputBox placeholder="Company Name" icon={CompanyNameIcon} />
                <InputBox
                  placeholder="Profession"
                  icon={Profession}
                  list="Professions"
                  value={["profession 1", "profession 2", "profession 3"]}
                />
                <InputBox placeholder="Email" icon={Mail} type="email" />
                <InputBox placeholder="Years of Experience" icon={Plus} />
                <InputBox
                  placeholder="Number"
                  icon={Phone}
                  type="tel"
                  pattern="[0-9]{4}-[0-9]{7}"
                />
                <InputBox
                  placeholder="Password"
                  icon={Password}
                  type="password"
                />
                <InputBox placeholder="CNIC" icon={User} type="number" />
                <InputBox
                  placeholder="Confirm Password"
                  icon={Password}
                  type="password"
                />
              </div>

              <div className="BAR__content__form__file__container">
                <input type="file" className="BAR__content__form__file" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAresource;
