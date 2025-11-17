import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

export default function ProjectContent({ data }) {
    const { t } = useTranslation();

    return (
        <main className="project-content">
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <Carousel images={data.images} />
        </main>
    );
}
