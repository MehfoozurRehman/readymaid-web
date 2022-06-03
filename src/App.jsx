import React from "react";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Products from "./screens/Products";
import RMBusiness from './screens/RMBusiness'
import BecomeAresource from "./screens/BecomeAresource";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="" element={<Home />} />
          <Route path="/products/become_a_resource" element={<BecomeAresource />} />
          <Route
            path="/products/readymaind_for_businesses"
            element={<RMBusiness />}
          />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
