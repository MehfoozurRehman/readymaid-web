import React from "react";
import Footer from "./components/Footer";
import Header from "./components/New__header";
// import Home from "./screens/Home";
import Benefit from "./screens/Benefit__to__Customers";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Benefit />} />
      </Routes>
      <Footer />
    </>
  );
}
