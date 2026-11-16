import React from "react";
import heroImage from "../assets/bairo-hero.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;