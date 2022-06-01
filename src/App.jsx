import React from "react";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Products from "./screens/Products";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="" element={<Home />} />
          <Route path="/products/become_a_resource" element={<Home />} />
          <Route
            path="/products/readymaind_for_businesses"
            element={<Home />}
          />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
