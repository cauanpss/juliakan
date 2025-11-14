import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function HoverCard({ images, text, interval, onHover }) {
    const [isActiveCard, setAsActiveCard] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    function startSlideshow() {
        onHover(true);
        setAsActiveCard(true);
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, interval);
        }
    }

    function stopSlideshow() {
        onHover(false);
        setAsActiveCard(false);

        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handleContextMenu);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    const imageRef = useRef();

    return (
        <div
            className={`hover-card ${isActiveCard ? " hovered" : ""}`}
            onMouseEnter={startSlideshow}
            onMouseLeave={stopSlideshow}
        >
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={text}
                    ref={imageRef}
                    className={index === currentIndex ? "active" : ""}
                />
            ))}
            <div className="overlay flex-column">{text}</div>
        </div>
    );
}
