import { NavLink } from "react-router-dom";
import { projectDetails } from "../data/dataProjectsVisualArtsDetails";
import "./styles.css";

export default function NavbarProjects() {
    const projects = Object.values(projectDetails);

    return (
        <nav className="projects-navbar">
            <ul>
                {projects.map((project) => (
                    <li key={project.key}>
                        <NavLink
                            to={`/projects/${project.key}`}
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
