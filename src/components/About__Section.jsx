import aboutleft from "../assets/img/aboutleft.png";
import aboutright from "../assets/img/aboutright.png";
import About__Cards__Arr from "../components/About__Cards__Arr";

export default function About__Section() {
  return (
    <>
      <div className="About__sec">
        <div className="About__section__container">
          <div className="About__section__container__heading">
            <span className="About__section__container__heading__main">
              We care about you
            </span>
            <p className="About__section__container__heading__second">
              We are here to make your life easy{" "}
              <a
                className="About__section__container__heading__second__learn__more"
                href="#"
              >
                Learn more.
              </a>
            </p>
          </div>
          <div className="About__section__content__cards">
            <div className="About__section__content__cards__background__img">
              <div className="About__section__content__cards__background__img__left">
                <img src={aboutleft} alt="" />
              </div>
              <div className="About__section__content__cards__background__img__right">
                <img src={aboutright} alt="" />
              </div>
            </div>
            <About__Cards__Arr />
          </div>
        </div>
      </div>
    </>
  );
}
