import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            ipsa quam molestiae neque, quas exercitationem, autem incidunt,
            perspiciatis vitae nemo id quisquam similique magni error mollitia!
            Vel, facere. Nam, ullam.
          </p>
        </div>
        <div className="img container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
