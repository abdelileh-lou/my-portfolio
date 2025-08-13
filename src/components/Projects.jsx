import React from "react";
import bankingImg from "../assets/banking.png"; // Import your local image
import blogImg from "../assets/blog.png"; // Import your local image
import attendenceImg from "../assets/tracking.png"; // Import your local image

const projects = [
  {
    title: "Smart Attendance System",
    description:
      "Web app with QR and facial recognition using Spring Boot and React.",
    tech: ["Spring Boot", "React", "MySQL"],
    link: "https://github.com/abdelileh-lou/build-time-tracker",
    image: attendenceImg,
  },
  {
    title: "Digital Banking",
    description: "Scalable APIs with Spring Security and MySQL.",
    tech: ["Spring Security", "JWT", "MySQL"],
    link: "https://github.com/abdelileh-lou/ebanking-backend",
    image: bankingImg,
  },
  {
    title: "Blog Platform",
    description:
      "Full-featured blogging platform with authentication, CRUD posts, and comments.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    link: "https://github.com/abdelileh-lou/Blog-Platform-Backend",
    image: blogImg,
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Projects
        </h2>
        <p className="text-lg text-gray-600">Some of the apps I've built</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-stone-100 rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col h-full"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">
                {project.description}
              </p>
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-auto"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
