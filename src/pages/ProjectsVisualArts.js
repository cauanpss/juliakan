import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
// import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { projectDetails } from "../data/dataProjectVisualArtsDetails";

export default function ProjectsVisualArts() {
    const { t } = useTranslation();
    const mainContainer = useRef();

    function handleOnHover(isHovering) {
        isHovering
            ? mainContainer.current?.classList.add("onHover")
            : mainContainer.current?.classList.remove("onHover");
    }

    const projectList = Object.values(projectDetails);

    return (
        <>
            <TranslateButtons />
            <Header />
            <main ref={mainContainer}>
                <div className="hoverCard-containers">
                    {projectList.map((project) => (
                        <HoverCard
                            key={project.key}
                            images={project.images}
                            interval={1200}
                            text={project.title}
                            onHover={handleOnHover}
                            projectKey={project.key}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
