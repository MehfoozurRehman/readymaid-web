export default function About__Card({ img, heading, para, button }) {
  console.log();
  return (
    <div className="About__section__content__card__layout">
      <div className="About__section__content__card__layout__card__img">
        <img src={img} alt="" />
      </div>
      <div className="About__section__content__card__layout__card__data">
        <div className="About__section__content__card__layout__heading">
          {heading}
        </div>
        <div className="About__section__content__card__layout__para">
          {para}
        </div>
        <div className="About__section__content__card__layout__card__data__button">
          <button>{button}</button>
        </div>
      </div>
    </div>
  );
}
