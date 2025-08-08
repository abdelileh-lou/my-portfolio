import React from "react";

const projects = [
  {
    title: "Smart Attendance System",
    description:
      "Web app with QR and facial recognition using Spring Boot and React.",
    tech: ["Spring Boot", "React", "MySQL"],
    link: "#",
  },
  {
    title: "E-Commerce Backend",
    description: "Scalable APIs with Spring Security and MySQL.",
    tech: ["Spring Security", "JWT", "MySQL"],
    link: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Projects
        </h2>
        <p className="text-lg text-gray-600">Some of the apps I’ve built</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-stone-100 rounded-xl p-6 shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-600 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
