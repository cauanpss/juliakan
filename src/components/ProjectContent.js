import React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectContent({ data }) {
    const { t } = useTranslation();

    return (
        <main>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className="gallery">
                {data.images.map((img, index) => (
                    <img key={index} src={img} alt={`${data.title}-${index}`} />
                ))}
            </div>
        </main>
    );
}
