import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function HoverCard({
    images,
    text,
    interval,
    onHover,
    projectKey,
}) {
    const [isActiveCard, setAsActiveCard] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const imageRef = useRef();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${projectKey}`);
    };

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

    return (
        <div
            className={`hover-card ${isActiveCard ? " hovered" : ""}`}
            onMouseEnter={startSlideshow}
            onMouseLeave={stopSlideshow}
            onClick={handleClick}
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
