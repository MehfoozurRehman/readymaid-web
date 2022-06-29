import React from "react";
import New__header from "../components/New__header";
import Benefit from "../components/Benefit";
import Benefit__section__card from "../components/Benefit__section__card";
import Resources__sec from "../components/Resources__sec";
import Safety__customers from "../components/Safety__customers";
import Smart__solution from "../components/Smart__solution";
import ReadymaidAppFrom from "../components/ReadymaidAppFrom";

export default function Benefit__to__Customers() {
  return (
    <>
      <New__header />
      <Benefit />
      <Benefit__section__card />
      <Resources__sec />
      <Safety__customers />
      <Smart__solution />
      <ReadymaidAppFrom />
    </>
  );
}
