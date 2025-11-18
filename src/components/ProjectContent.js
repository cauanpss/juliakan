import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

export default function ProjectContent({ data }) {
    const { t } = useTranslation();

    return (
        <main className="project-content">
            <h1>{data.title}</h1>

            {/* :Bloco do vídeo */}
            {/* Caso seja link */}
            {data.video && (
                <div className="project-video">
                    {typeof data.video === "string" &&
                    data.video.includes("youtube.com") ? (
                        <iframe
                            src={data.video.replace("watch?v=", "embed/")}
                            title={data.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-pircture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        // Caso seja video local (.mp4, .mov, .avi etc...)
                        <video controls>
                            <source src={data.video} />
                            Seu navegador não suporta a reprodução do vídeo.
                        </video>
                    )}
                </div>
            )}

            <p>{data.description}</p>

            <Carousel images={data.images} />
        </main>
    );
}
