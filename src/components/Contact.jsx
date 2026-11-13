import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="editorial-section contact-section">
    <div className="section-heading">
      <div>
        <div className="section-kicker">/04 Contact</div>
        <h2>Have an idea? <span className="accent italic-serif">Let&apos;s talk.</span></h2>
      </div>
      <p>Open to research collaborations, internships, and interesting AI projects.</p>
    </div>
    <div className="contact-grid">
      <a href="mailto:abdelilehlouhichi@gmail.com" className="contact-item">
        <Mail size={18} />
        abdelilehlouhichi@gmail.com
      </a>
      <a href="https://github.com/abdelileh-lou" target="_blank" rel="noopener noreferrer" className="contact-item">
        <Github size={18} />
        GitHub ↗
      </a>
      <a href="https://www.linkedin.com/in/abdelileh-louhichi-4a0b7431a/" target="_blank" rel="noopener noreferrer" className="contact-item">
        <Linkedin size={18} />
        LinkedIn ↗
      </a>
    </div>
  </section>
);

export default Contact;
