import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import "./App.scss";
import "./about.scss";
import "./footer.scss";
import "swiper/scss";
import AboutUs from "./screens/AboutUs";
import Benifits from "./screens/Benifits";
import Products from "./screens/Products";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import { useState } from "react";
export default function App() {
  const [isFooter, setIsFooter] = useState(true);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benifits />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp setIsFooter={setIsFooter} />} />
        <Route path="/login" element={<Login setIsFooter={setIsFooter} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      {isFooter ? <Footer /> : null}
    </>
  );
}
