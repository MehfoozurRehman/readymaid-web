import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
