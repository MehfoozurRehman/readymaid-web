import React from "react";
import New__header from "../components/New__header";
import Benefit from "../components/Benefit";
import Benefit__section__card from "../components/Benefit__section__card";
import Resources__sec from "../components/Resources__sec";

export default function Benefit__to__Customers(image, title, text) {
  return (
    <>
      <New__header />
      <Benefit />
      <Benefit__section__card />
      <Resources__sec />
    </>
  );
}
