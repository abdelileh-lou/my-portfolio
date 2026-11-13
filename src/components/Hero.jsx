import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero editorial-grid">
      <div className="hero-meta section-kicker">Portfolio — vol. 02 / 2026</div>
      <div className="hero-copy">
        <p className="eyebrow">Hello, I&apos;m Abdelileh</p>
        <h1 className="display-serif">
          Machine Learning
          <br />
          &amp; Deep Learning{" "}
          <span className="accent italic-serif">
            <TypeAnimation
              sequence={["Engineer", 1800, "Researcher", 1800, "Builder", 1800]}
              speed={55}
              repeat={Infinity}
              wrapper="span"
            />
          </span>
        </h1>
        <p className="hero-statement">
          I turn data into thoughtful, practical solutions with Python,
          machine learning, and cloud technologies.
        </p>
      </div>
      <div className="hero-side">
        <span className="hero-orb" />
        <p>
          Master&apos;s student in Data Science and Artificial Intelligence,
          exploring intelligent systems and scalable AI applications.
        </p>
        <button className="text-link" onClick={() => scrollToSection("projects")}>
          See selected work <span>↗</span>
        </button>
      </div>
      <div className="hero-footer section-kicker">
        <span>+36.36° N · 6.61° E</span>
        <button onClick={() => scrollToSection("projects")}>Scroll ↓</button>
      </div>
    </section>
  );
}
