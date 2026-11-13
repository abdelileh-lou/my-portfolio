import React from "react";

const Navbar = ({ scrollToSection }) => {
  const navItems = [
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="site-nav">
      <button className="brand-mark" onClick={() => scrollToSection("home")}>
        Abdelileh<span>*</span>
      </button>
      <div className="desktop-nav">
        {navItems.map((item, index) => (
          <button key={item.id} onClick={() => scrollToSection(item.id)}>
            <small>0{index + 1}</small> {item.label}
          </button>
        ))}
      </div>
      <div className="availability">
        <span className="status-dot" /> Available · 2026
      </div>
    </nav>
  );
};

export default Navbar;
