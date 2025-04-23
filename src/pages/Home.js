import React from "react";
import HeroSection from "../components/HeroSection";
import LiquorList from "../components/LiquorList";

function Home({ onAddToCart }) {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <LiquorList onAddToCart={onAddToCart} />
    </>
  );
}

export default Home;
