import React from "react";
import { ProductsJumbotronSection } from "./ProductsJumbotronSection";
import { ProductsBuisnessSection } from "./ProductsBuisnessSection";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState("GetResource");
  return (
    <>
      <ProductsJumbotronSection
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      {selectedProduct === "GetResource" ? (
        <></>
      ) : selectedProduct === "BecomeResource" ? (
        <></>
      ) : selectedProduct === "Buisness" ? (
        <ProductsBuisnessSection />
      ) : null}
    </>
  );
}
