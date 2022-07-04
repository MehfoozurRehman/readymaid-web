import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import "./App.scss";
import "swiper/scss";
import AboutUs from "./screens/AboutUs";
import Benifits from "./screens/Benifits";
import Products from "./screens/Products";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benifits />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
