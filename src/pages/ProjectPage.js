import { useParams } from "react-router-dom";
import { projectDetails } from "../data/dataProjectVisualArtsDetails";
import ProjectContent from "../components/ProjectContent";
import "../components/styles.css";
import Header from "../components/Header";
import TranslateButtons from "../components/TranslateButton";

export default function ProjectPage() {
    const { projectid } = useParams();

    // busca o projeto pelo ID da URL
    const data = projectDetails[projectid];

    if (!data) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <>
            <TranslateButtons />
            <Header />
            <ProjectContent data={data} />
        </>
    );
}
