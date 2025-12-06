import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";

export default function ProjectContent({ data }) {
    const { t } = useTranslation();
    const isMobile = window.innerWidth <= 768;
    const [videoFullscreen, setVideoFullscreen] = useState(false);

    const openVideoFullscreen = () => setVideoFullscreen(true);
    const closeVideoFullscreen = () => setVideoFullscreen(false);

    return (
        <main className="project-content">
            <Carousel images={data.images} />

            <p>{data.description}</p>

            {/* Bloco do vídeo */}
            {data.video && (
                <div className="project-video">
                    {typeof data.video === "string" &&
                    data.video.includes("youtube.com") ? (
                        <>
                            <iframe
                                src={data.video.replace("watch?v=", "embed/")}
                                title={data.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                                allowFullScreen
                            ></iframe>
                            
                            {/* overlay clicável por cima do iframe */}
                            {isMobile && (
                                <div
                                    className="video-touch-overlay"
                                    onClick={openVideoFullscreen}
                                ></div>
                            )}
                                            
                    
                        </>
                    ) : (
                        <video controls onClick={openVideoFullscreen}>
                            <source src={data.video} />
                        </video>
                    )}
                </div>
            )}

            {/* FULLSCREEN DO VÍDEO */}
            {videoFullscreen && (
                <div className="video-fullscreen-overlay" onClick={closeVideoFullscreen}>
                    <span className="video-close-btn">×</span>

                    {/* Para Youtube */}
                    {typeof data.video === "string" &&
                    data.video.includes("youtube.com") ? (
                        <iframe
                            src={data.video.replace("watch?v=", "embed/")}
                            title="video-fullscreen"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                            allowFullScreen
                            className="video-fullscreen-frame"
                            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar no vídeo
                        ></iframe>
                    ) : (
                        <video
                            controls
                            autoPlay
                            className="video-fullscreen-frame"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <source src={data.video} />
                        </video>
                    )}
                </div>
            )}

        </main>
    );
}