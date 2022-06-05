import React from "react";
import CompanyNameIcon from "../assets/BAR__company__name.png";

function InputBox({ icon, placeholder, type, pattern, list,value }) {
  if (type === "tel") {
    return (
      <div className="BAR__content__form__input__container">
        <div className="BAR__content__form__input__icon">
          <img src={icon} alt="User Icon" />
        </div>
        <div className="BAR__content__form__input__box">
          <input
            type={type}
            name={placeholder}
            placeholder={placeholder}
            pattern={pattern}
          />
        </div>
      </div>
    );
  }
  if (list) {
    return (
      <>
        <div className="BAR__content__form__input__container">
          <div className="BAR__content__form__input__icon">
            <img src={icon} alt="User Icon" />
          </div>
          <div className="BAR__content__form__input__box">
            <input
              list={list}
              name={placeholder}
              placeholder={placeholder}
            />
            <datalist id={list}>
             {value.map((item,index )=>{
                return <option key={index} value={item}>{item}</option>
             })}
            </datalist>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="BAR__content__form__input__container">
      <div className="BAR__content__form__input__icon">
        <img src={icon} alt="User Icon" />
      </div>
      <div className="BAR__content__form__input__box">
        <input type={type} name={placeholder} placeholder={placeholder}  />
      </div>
    </div>
  );
}
InputBox.defaultProps = {
  type: "text",
  icon: "CompanyNameIcon",
};
export default InputBox;
