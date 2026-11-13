import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <span>© 2026 ABDELILEH LOUHICHI</span>
    <span>Data · AI · Cloud</span>
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      Back to top ↑
    </button>
  </footer>
);

export default Footer;
