import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
// import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { projectDetails as performingProjects } from "../data/dataProjectsSetDesignDetails";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";

export default function ProjectsSetDesign() {
    const { t } = useTranslation();
    const mainContainer = useRef();

    function handleOnHover(isHovering) {
        isHovering
            ? mainContainer.current?.classList.add("onHover")
            : mainContainer.current?.classList.remove("onHover");
    }

    const projectList = Object.values(performingProjects);

    return (
        <>
            {/* <TranslateButtons /> */}
            <div className="top-wrapper">
                <Header />
            </div>{" "}
            <main ref={mainContainer}>
                <div className="hoverCard-page-containers">
                    {projectList.map((project) => (
                        <HoverCard
                            key={project.key}
                            images={project.images}
                            interval={1200}
                            text={project.title}
                            onHover={handleOnHover}
                            projectKey={project.key}
                            category={project.category}
                        />
                    ))}
                </div>
                <ScrollToTopButton />
                <Footer />
            </main>
        </>
    );
}
