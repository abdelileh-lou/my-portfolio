import React from "react";

const experiences = [
  {
    title: "Backend API Development",
    description:
      "RESTful APIs with Spring Boot, security, and database integration.",
    tech: ["Spring Boot", "Spring Security", "JPA", "MySQL"],
  },
  {
    title: "Microservices Architecture",
    description: "Scalable microservices with Docker and Kubernetes.",
    tech: ["Spring Cloud", "Docker", "Kubernetes", "Redis"],
  },
  {
    title: "Security & Auth",
    description: "JWT, OAuth2, role-based access, and LDAP integrations.",
    tech: ["Spring Security", "JWT", "OAuth2", "LDAP"],
  },
  {
    title: "Database Design",
    description: "Efficient schema and query optimization.",
    tech: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
];

const Services = () => (
  <section id="experience" className="py-20 bg-stone-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          What I Do
        </h2>
        <p className="text-lg text-gray-600">
          Backend development services I offer
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {exp.title}
            </h3>
            <p className="text-gray-600 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-3">
              {exp.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
