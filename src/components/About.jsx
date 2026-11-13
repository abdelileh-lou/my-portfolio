import React from "react";
import abdelielhImg from "../assets/abdelileh.jpg";

const skills = ["Machine Learning", "Deep Learning", "Python", "AWS", "NLP", "Data Science"];

const About = () => (
  <section id="about" className="editorial-section">
    <div className="section-heading">
      <div>
        <div className="section-kicker">/02 About</div>
        <h2>Some notes on <span className="accent italic-serif">who I am.</span></h2>
      </div>
      <p>Data Science · Artificial Intelligence · Constantine, Algeria</p>
    </div>
    <div className="about-layout">
      <div className="portrait-frame">
        <img src={abdelielhImg} alt="Abdelileh Louhichi" />
      </div>
      <div className="about-copy">
        <p>
          I am a Master&apos;s student in Data Science and Artificial
          Intelligence, passionate about Machine Learning and Deep Learning.
        </p>
        <p>
          I enjoy exploring AI technologies, developing intelligent solutions,
          and turning data into meaningful insights through practical projects.
          I am also interested in Cloud Computing and AWS.
        </p>
        <div className="skills">
          {skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
        </div>
      </div>
    </div>
  </section>
);

export default About;
