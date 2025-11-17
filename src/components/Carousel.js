import React, { useState } from "react";
import "./styles.css";

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    const openFullscreen = (index) => {
        setCurrent(index);
        setFullscreen(true);
    };

    const closeFullscreen = () => setFullscreen(false);

    return (
        <>
            {/* NORMAL CAROUSEL */}
            <div className="carousel">
                <button className="carousel-btn left" onClick={prev}>
                    ‹
                </button>

                <div className="carousel-window">
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

                <button className="carousel-btn right" onClick={next}>
                    ›
                </button>

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

            {/* FULLSCREEN MODE  */}
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
