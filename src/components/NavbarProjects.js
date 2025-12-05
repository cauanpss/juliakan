import { NavLink, useLocation } from "react-router-dom";

export default function NavbarProjects() {
    const location = useLocation();

    const isPerforming = location.pathname.includes("performing");
    const isVisual = location.pathname.includes("visual");

    const projects = isPerforming
        ? Object.values(
              require("../data/dataProjectsPerformingArtsDetails")
                  .projectDetails
          )
        : Object.values(
              require("../data/dataProjectsVisualArtsDetails").projectDetails
          );

    return (
        <nav className="projects-navbar">
            <ul className="projects-list">
                {projects.map((project) => (
                    <li key={project.key}>
                        <NavLink
                            to={`/projects/${
                                isPerforming ? "performing" : "visual"
                            }/${project.key}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "project-link active"
                                    : "project-link"
                            }
                        >
                            {project.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
