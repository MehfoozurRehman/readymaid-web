import React from "react";
import { ProductsJumbotronSection } from "../components/ProductsJumbotronSection";
import { ProductsBuisnessSection } from "../components/ProductsBuisnessSection";
import { ProductsBecomeResource } from "../components/ProductsBecomeResource";
import { ProductsGetResource } from "../components/ProductsGetResource";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState("GetResource");
  const [selectedProductData, setSelectedProductData] = React.useState(
    "Short Term Services"
  );
  const [selectedProductDetails, setSelectedProductDetails] =
    React.useState("");
  return (
    <>
      <ProductsJumbotronSection
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      {selectedProduct === "GetResource" ? (
        <ProductsGetResource
          setSelectedProductData={setSelectedProductData}
          selectedProductData={selectedProductData}
          setSelectedProductDetails={setSelectedProductDetails}
          selectedProductDetails={selectedProductDetails}
        />
      ) : selectedProduct === "BecomeResource" ? (
        <ProductsBecomeResource />
      ) : selectedProduct === "Buisness" ? (
        <ProductsBuisnessSection />
      ) : null}
    </>
  );
}
