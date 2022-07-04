import React from "react";
import { productsBuisnessFeaturesData } from "../constants/productsBuisnessFeaturesData";
import { ProductsBuisnessPackageEntry } from "../components/ProductsBuisnessPackageEntry";

export function ProductsBuisnessSection() {
  return (
    <>
      <div className="products__buisness__features__heading">
        Readymaid for <span>Bussiness</span>
      </div>
      <div className="products__buisness__features">
        <div className="products__buisness__features__left">
          R4B is a segment carefully designed to cater the needs of our esteemed
          corporate clients. It has a broader ambit than that of R4P. Here we
          act as an HR Outsourcing Company and provide following services in a
          unique & professional manner.
        </div>
        <div className="products__buisness__features__right">
          {productsBuisnessFeaturesData.map((feature) => (
            <div
              className="products__buisness__features__right__entry"
              key={JSON.stringify(feature)}
            >
              <div className="products__buisness__features__right__entry__header">
                {feature.icon} {feature.title}
              </div>
              <div className="products__buisness__features__right__entry__info">
                {feature.info}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="products__buisness__packages">
        <ProductsBuisnessPackageEntry
          title="Package 1"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          price="$33"
        />
        <ProductsBuisnessPackageEntry
          title="Package 2"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          price="$44"
        />
        <ProductsBuisnessPackageEntry
          title="Package 3"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          price="$55"
        />
      </div>
    </>
  );
}
