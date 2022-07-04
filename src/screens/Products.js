import React from "react";
import { ProductsJumbotronSection } from "../components/ProductsJumbotronSection";
import { ProductsBuisnessSection } from "../components/ProductsBuisnessSection";
import { ProductsBecomeResource } from "../components/ProductsBecomeResource";

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
        <ProductsBecomeResource />
      ) : selectedProduct === "Buisness" ? (
        <ProductsBuisnessSection />
      ) : null}
    </>
  );
}
