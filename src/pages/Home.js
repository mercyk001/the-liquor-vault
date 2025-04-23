import React from "react";
import HeroSection from "../components/HeroSection";
import LiquorList from "../components/LiquorList";

function Home({ onAddToCart }) {
  return (
    <>
      <HeroSection />
      <LiquorList onAddToCart={onAddToCart} />
    </>
  );
}

export default Home;
