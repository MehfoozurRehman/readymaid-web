import Simplifiedimg from "../assets/img/Simplifiedimg.png";

export default function Simplified() {
  return (
    <div className="payment__overview__section">
      <img
        src={Simplifiedimg}
        alt="Simplifiedimg"
        className="payment__overview__section__img"
      />
      <div className="payment__overview__section__overlay">
        <div className="payment__overview__section__overlay__heading">
          Simplified Payments
        </div>
        <div className="payment__overview__section__info">
          Easy & online payments for your resources. Learn More
        </div>
      </div>
    </div>
  );
}
