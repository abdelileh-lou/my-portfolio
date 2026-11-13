import React from "react";

const services = [
  ["01", "Machine Learning", "End-to-end workflows, feature engineering, model selection, and evaluation.", ["Python", "Scikit-learn", "Pandas"]],
  ["02", "Deep Learning & NLP", "Practical models for text, image, and language understanding.", ["PyTorch", "TensorFlow", "Transformers"]],
  ["03", "Cloud & AI Deployment", "Scalable environments for deploying and serving AI-powered applications.", ["AWS", "Docker", "APIs"]],
];

const Services = () => (
  <section id="services" className="editorial-section">
    <div className="section-heading">
      <div>
        <div className="section-kicker">/03 Services</div>
        <h2>What I do — <span className="accent italic-serif">and how it lands.</span></h2>
      </div>
      <p>Focused work across intelligent systems, data, and cloud infrastructure.</p>
    </div>
    <div className="services-grid">
      {services.map(([number, title, description, tech]) => (
        <article className="service-card" key={number}>
          <div className="service-number">S/{number}</div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="service-tech">{tech.map((item) => <span key={item}>{item}</span>)}</div>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
