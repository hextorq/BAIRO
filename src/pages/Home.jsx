import { useState, useEffect } from "react";
import hero5 from "../assets/BAIRO_hero/hero-5.png";
import hero1 from "../assets/BAIRO_hero/hero-1.png";
import hero2 from "../assets/BAIRO_hero/hero-2.png";
import hero6 from "../assets/BAIRO_hero/hero-6.png";
import hero7 from "../assets/BAIRO_hero/hero-7.png";
import hero3 from "../assets/BAIRO_hero/hero-3.png";
import hero4 from "../assets/BAIRO_hero/hero-4.png";

const slides = [hero5, hero1, hero2, hero6, hero7, hero3, hero4 ];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <img
        src={slides[currentSlide]}
        alt="BAIRO Premium Clothing"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;
