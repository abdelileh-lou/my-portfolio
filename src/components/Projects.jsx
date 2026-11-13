import React from "react";
import geneExpressionImage from "../assets/gene-expression.svg";
import sarcasmDetectionImage from "../assets/sarcasm-detection.svg";
import clusteringImage from "../assets/clustering.svg";

const projects = [
  {
    title: "Leukemia Gene Expression Analysis",
    description: "Feature selection and classification for high-dimensional gene-expression data using PCA, LDA, and machine learning classifiers.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    link: "https://github.com/abdelileh-lou/gene-expression-feature-selection",
    image: geneExpressionImage,
  },
  {
    title: "Algerian Darija Sarcasm Detection",
    description: "An NLP system that classifies Algerian Darija text to detect sarcasm and irony, with a web interface for model predictions.",
    tech: ["Python", "NLP", "Deep Learning"],
    link: "https://github.com/abdelileh-lou/sarcasm",
    image: sarcasmDetectionImage,
  },
  {
    title: "Balanced K-means with Genetic Algorithms",
    description: "A constrained clustering optimizer using hybrid initialization, adaptive mutation, and local search.",
    tech: ["Python", "Genetic Algorithms", "Clustering"],
    link: "https://github.com/abdelileh-lou/balanced-kmeans-genetic-algorithm",
    image: clusteringImage,
  },
];

const Projects = () => (
  <section id="projects" className="editorial-section">
    <div className="section-heading">
      <div>
        <div className="section-kicker">/01 Selected Work</div>
        <h2>Projects that <span className="accent italic-serif">earned their keep.</span></h2>
      </div>
      <p>Research-led experiments and practical systems built with curiosity.</p>
    </div>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <img src={project.image} alt={`${project.title} illustration`} />
          <div className="project-content">
            <div className="section-kicker">0{index + 1} / 03</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View project ↗</a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
