import React from "react";
import { Zoom } from "react-reveal";
import { homeSolutionsData } from "../constants/homeSolutionsData";
import { ProductsGetResourceReviewEntry } from "./ProductsGetResourceReviewEntry";

export function ProductsGetResource({
  setSelectedProductData,
  selectedProductData,
  setSelectedProductDetails,
  selectedProductDetails,
}) {
  return (
    <>
      <div className="products__get__resource__hire">
        <div className="products__get__resource__hire__heading">
          Hire a <span>Resource</span>
        </div>
        <div className="products__get__resource__hire__buttons">
          <button
            onClick={() => {
              setSelectedProductData("Short Term Services");
            }}
            className={
              selectedProductData === "Short Term Services"
                ? "products__get__resource__hire__buttons__button products__get__resource__hire__buttons__button__active"
                : "products__get__resource__hire__buttons__button"
            }
          >
            Short Term Services
          </button>
          <button
            onClick={() => {
              setSelectedProductData("Long Term Service");
            }}
            className={
              selectedProductData === "Long Term Service"
                ? "products__get__resource__hire__buttons__button products__get__resource__hire__buttons__button__active"
                : "products__get__resource__hire__buttons__button"
            }
          >
            Long Term Service
          </button>
        </div>
        <div className="home__solutions__content">
          {homeSolutionsData.map((solution) => (
            <Zoom>
              <a
                key={JSON.stringify(solution)}
                onClick={() => {
                  setSelectedProductDetails(solution.label);
                }}
                className={
                  solution.label === selectedProductDetails
                    ? "home__solutions__content__entry home__solutions__content__entry__active"
                    : "home__solutions__content__entry"
                }
              >
                <div className="home__solutions__content__entry__icon">
                  {solution.icon}
                </div>
                <div className="home__solutions__content__entry__text">
                  {solution.label}
                </div>
              </a>
            </Zoom>
          ))}
        </div>
      </div>
      {selectedProductDetails !== "" ? (
        <div className="products__get__resource__hire__details">
          <div className="products__get__resource__hire__details__heading">
            {selectedProductDetails}
          </div>
          <div className="products__get__resource__hire__details__content">
            <div className="products__get__resource__hire__details__content__left">
              <div className="products__get__resource__hire__details__content__left__heading">
                Info
              </div>
              <div className="products__get__resource__hire__details__content__left__content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typLorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.esetting, remaining essentially unchanged.
              </div>
              <div className="products__get__resource__hire__details__content__left__address">
                <span>Address</span>
                House #4, People's Colony Manhattan, USA.
              </div>
            </div>
            <div className="products__get__resource__hire__details__content__right">
              <div className="products__get__resource__hire__details__content__right__heading">
                Reviews
              </div>
              <div className="products__get__resource__hire__details__content__right__content">
                <ProductsGetResourceReviewEntry />
                <ProductsGetResourceReviewEntry />
                <ProductsGetResourceReviewEntry />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
