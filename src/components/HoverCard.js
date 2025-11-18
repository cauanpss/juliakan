import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function HoverCard({
    images,
    text,
    projectKey,
}) {
    const [isActiveCard] = useState(false);
    const [currentIndex] = useState(0);
    const imageRef = useRef();
    const cardRef = useRef();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${projectKey}`);
    };

    

    return (
        <div
            className={`hover-card ${isActiveCard ? " hovered" : ""}`}
            ref={cardRef}
            onClick={handleClick}
        >
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={text}
                    ref={index === currentIndex ? imageRef : null} 
                    className={index === currentIndex ? "active" : ""}
                />
            ))}
            <div className="overlay flex-column">{text}</div>
        </div>
    );
}
