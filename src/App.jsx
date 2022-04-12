import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
