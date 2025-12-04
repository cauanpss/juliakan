import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const SWIPE_THRESHOLD = 50;
    const autoplayRef = useRef(null);

    const AUTOPLAY_INTERVAL = 6000; // tempo ms

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    const openFullscreen = (index) => {
        setCurrent(index);
        setFullscreen(true);
    };

    const closeFullscreen = () => setFullscreen(false);

    /* -----------------------------------------------------
       AUTOPLAY — SOMENTE NO MODO NORMAL
    ----------------------------------------------------- */

    const startAutoplay = () => {
        stopAutoplay(); // evita duplicação
        autoplayRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, AUTOPLAY_INTERVAL);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    };

    // Controle automático do autoplay
    useEffect(() => {
        if (!fullscreen) {
            startAutoplay();
        } else {
            stopAutoplay();
        }

        // limpar interval quando o componente desmontar
        return () => stopAutoplay();
    }, [fullscreen]);

    //swipe mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;

        if (Math.abs(distance) > SWIPE_THRESHOLD) {
            if (distance > 0) {
                next(); // arrastou para esquerda → próxima imagem
            } else {
                prev(); // arrastou para direita → imagem anterior
            }
        }
    };
    return (
        <>
            {/* NORMAL CAROUSEL */}
            <div className="carousel">
                <div
                    className="carousel-window"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            className={`carousel-image ${
                                index === current ? "active" : ""
                            }`}
                            onClick={() => openFullscreen(index)}
                        />
                    ))}
                </div>

                <button
                    className="carousel-hitbox left"
                    onClick={(e) => {
                        e.stopPropagation();
                        prev();
                    }}
                ></button>

                {/* BOTÃO INVISÍVEL — LADO DIREITO */}
                <button
                    className="carousel-hitbox right"
                    onClick={(e) => {
                        e.stopPropagation();
                        next();
                    }}
                ></button>

                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${
                                index === current ? "active" : ""
                            }`}
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>
            </div>

            {/* FULLSCREEN MODE */}
            {fullscreen && (
                <div className="fullscreen-overlay" onClick={closeFullscreen}>
                    <span className="close-btn" onClick={closeFullscreen}>
                        ×
                    </span>

                    <button
                        className="fs-btn left"
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                    >
                        ‹
                    </button>

                    <div className="fullscreen-images">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className={`fullscreen-image ${
                                    index === current ? "active" : ""
                                }`}
                                onClick={(e) => e.stopPropagation()}
                            />
                        ))}
                    </div>

                    <button
                        className="fs-btn right"
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}
