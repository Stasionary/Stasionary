import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import "./landingpage.css";
import Checkout from "../Checkout/Checkout";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Content />
      <Checkout />
    </>
  );
}
