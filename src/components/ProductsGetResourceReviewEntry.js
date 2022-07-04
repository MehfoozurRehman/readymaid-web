import React from "react";
import Rating from "react-rating";
import { user } from "../assets";

export function ProductsGetResourceReviewEntry({}) {
  return (
    <div className="products__get__resource__hire__details__content__right__content__entry">
      <div className="products__get__resource__hire__details__content__right__content__entry__left">
        <img
          src={user}
          alt="user"
          className="products__get__resource__hire__details__content__right__content__entry__left__img"
        />
        <div className="products__get__resource__hire__details__content__right__content__entry__left__content">
          <div className="products__get__resource__hire__details__content__right__content__entry__left__content__heading">
            Adams Gills
          </div>
          <Rating
            readonly
            initialRating={4}
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.63"
                height="20.103"
                viewBox="0 0 12.63 12.103"
              >
                <path
                  id="star"
                  d="M12.6,5.065a.67.67,0,0,0-.578-.462L8.374,4.273,6.932.9A.671.671,0,0,0,5.7.9L4.256,4.272.61,4.6A.672.672,0,0,0,.229,5.778L2.985,8.195l-.812,3.579a.67.67,0,0,0,1,.725L6.315,10.62,9.458,12.5a.671.671,0,0,0,1-.725L9.645,8.195,12.4,5.779a.672.672,0,0,0,.2-.714Zm0,0"
                  transform="translate(0 -0.491)"
                  fill="#b5c3c3"
                />
              </svg>
            }
            fullSymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.63"
                height="20.103"
                viewBox="0 0 12.63 12.103"
              >
                <path
                  id="star"
                  d="M12.6,5.065a.67.67,0,0,0-.578-.462L8.374,4.273,6.932.9A.671.671,0,0,0,5.7.9L4.256,4.272.61,4.6A.672.672,0,0,0,.229,5.778L2.985,8.195l-.812,3.579a.67.67,0,0,0,1,.725L6.315,10.62,9.458,12.5a.671.671,0,0,0,1-.725L9.645,8.195,12.4,5.779a.672.672,0,0,0,.2-.714Zm0,0"
                  transform="translate(0 -0.491)"
                  fill="#38ba6e"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="products__get__resource__hire__details__content__right__content__entry__right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        similique aliquam exercitationem neque saepe voluptatem aliquid itaque
      </div>
    </div>
  );
}
