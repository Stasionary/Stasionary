import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import "./landingpage.css";
import Checkout from "../Checkout/Checkout";
import { Cart } from "../cart/Cart";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Content />
      {/* <Checkout />
      <Cart /> */}

    </>
  );
}
