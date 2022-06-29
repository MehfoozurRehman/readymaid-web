import React from "react";
import Footer from "./components/Footer";
import Header from "./components/New__header";
import Home from "./screens/Home";
import Benefit from "./screens/Benefit__to__Customers";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefit />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
  s;
}
