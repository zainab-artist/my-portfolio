export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Online Store",
      description: "A simple store built with React",
      technologies: ["React", "CSS", "JavaScript"]
    },
    // other projects...
  ];

  return (
    <div className="projects">
      <div className="container">
        <h2>My Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}