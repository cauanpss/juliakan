import { useParams } from "react-router-dom";
import { allProjects } from "../data/dataAllProjects";
import ProjectContent from "../components/ProjectContent";
import "../components/styles.css";
import Header from "../components/Header";
import NavbarProjects from "../components/NavbarProjects";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function ProjectPage() {
    const { category, projectid } = useParams();

    // busca os projetos da categoria e depois pelo ID
    const data = allProjects[category]?.[projectid];

    if (!data) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <>
            {/* <TranslateButtons /> */}
            <div className="top-wrapper">
                <Header />
            </div>
            <NavbarProjects />
            <ProjectContent data={data} />
            <ScrollToTopButton />
        </>
    );
}
