// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom"; // Add this import
// import Navbar from "./components/Navbar";
// import HamburgerNav from "./components/HamburgerNav";
// import Profile from "./components/Profile";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       {" "}
//       {/* Wrap your app with Router */}
//       <div className="font-poppins">
//         <Navbar />
//         <HamburgerNav />
//         <Profile />
//         <About />
//         <Experience />
//         <Projects />
//         <Contact />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-100 text-gray-900">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
