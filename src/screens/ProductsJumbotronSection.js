import React from "react";
import { productsJumbotronData } from "../constants/productsJumbotronData";
import { ProductsJumbotronSectionEntry } from "./ProductsJumbotronSectionEntry";

export function ProductsJumbotronSection({
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <div className="products__jumbotron">
      <div className="products__jumbotron__header">
        <div className="products__jumbotron__header__heading">Products</div>
        <div className="products__jumbotron__header__info">
          Different lucrative options to be provided
        </div>
      </div>
      <div className="products__jumbotron__content">
        {productsJumbotronData.map((product) => (
          <ProductsJumbotronSectionEntry
            icon={product.icon}
            title={product.title}
            info={product.info}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            to={product.to}
          />
        ))}
      </div>
    </div>
  );
}
