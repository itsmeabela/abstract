import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <section className="hero_section">
      <h1>How can we help?</h1>
      <div className="hero_input-content">
        <input type="text" placeholder="Search" className="hero_input" />
        <AiOutlineArrowRight />
      </div>
    </section>
  );
};

export default Hero;
