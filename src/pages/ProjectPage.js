import { useParams } from "react-router-dom";
import { projectDetails } from "../data/dataProjectsVisualArtsDetails";
import ProjectContent from "../components/ProjectContent";
import "../components/styles.css";
import Header from "../components/Header";
import NavbarProjects from "../components/NavbarProjects";

export default function ProjectPage() {
    const { projectid } = useParams();

    // busca o projeto pelo ID da URL
    const data = projectDetails[projectid];

    if (!data) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <>
            {/* <TranslateButtons /> */}
            <div className="top-wrapper">
                <Header />
                <NavbarProjects />
            </div>
            <ProjectContent data={data} />
        </>
    );
}
