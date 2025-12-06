import React, {useRef} from "react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

export default function ProjectContent({ data }) {
    const { t } = useTranslation();
    const videoRef = useRef(null);

    const isMobile = window.innerWidth <= 768;

    const enterFullscreen = () => {
        if (!isMobile || !videoRef.current) return;

        const element = videoRef.current;

        if (element.requestFullscreen) element.requestFullscreen();
        else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
        else if(element.msRequestFullscreen) element.msRequestFullscreen();
    };

    return (
        <main className="project-content">
            {/* <h1>{data.title}</h1> */}

            <Carousel images={data.images} />
            
            {/* :Bloco do vídeo */}
            {/* Caso seja link */}
            {data.video && (
                <div className="project-video">
                    {typeof data.video === "string" &&
                    data.video.includes("youtube.com") ? (
                        <iframe
                            ref={videoRef}
                            src={data.video.replace("watch?v=", "embed/")}
                            title={data.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-pircture"
                            allowFullScreen
                            onClick={enterFullscreen}
                        ></iframe>
                    ) : (
                        // Caso seja video local (.mp4, .mov, .avi etc...)
                        <video 
                            ref={videoRef}
                            controls
                            onClick={enterFullscreen}
                        >
                            <source src={data.video} />
                            Seu navegador não suporta a reprodução do vídeo.
                        </video>
                    )}
                </div>
            )}

            <p>{data.description}</p>

        </main>
    );
}
