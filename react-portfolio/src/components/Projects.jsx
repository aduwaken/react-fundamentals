import "./Projects.css";

function Projects () {
    var projects = [
        {
            id: 1,
            name: "Expense Tracker",
            description:
            "A web application for adding, filtering and managing personal expenses.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/aduwaken/expense-tracker"
        },
        {
            id: 2,
            name: "Admin Dashboard",
            description:
            "A responsive dashboard layout for displaying business and management information.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/aduwaken/dashboard"
        },
        {
            id: 3,
            name: "Music Landing Page",
            description:
            "A responsive landing page for a fictional music streaming platform.",
            tech: ["HTML", "CSS"],
            link: "https://github.com/aduwaken/landing-page"
        },
        {
            id: 4,
            name: "Profile Page",
            description:
            "A responsive personal profile page created using modern web design techniques.",
            tech: ["HTML", "CSS"],
            link: "https://github.com/aduwaken/profile-page"
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
                {projects.map(function (project) {
                    return (
                        <div className="project-card" key={project.id}>
                            <h3>{project.name}</h3>

                            <p>{project.description}</p>

                            <div className="tech-tags">
                                {project.tech.map(function (technology) {
                                    return (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    );
                                })}
                            </div>

                            <a href={project.link} target="_blank" rel="noreferrer" className="code-button">View Code</a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;