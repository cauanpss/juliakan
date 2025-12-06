import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function HoverCard({ images, text, projectKey, category }) {
    const [isActiveCard] = useState(false);
    const [currentIndex] = useState(0);
    const imageRef = useRef();
    const cardRef = useRef();
    const navigate = useNavigate();
    
    const [showOverlay, setShowOverlay] = useState(false);
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const longPressTimer = useRef(null);
    const touchStartTime = useRef(0);
    const touchStartY = useRef(0);

    const LONG_PRESS_DURATION = 400;

    const handleTouchStart = (e) => {
        touchStartTime.current = Date.now();
        touchStartY.current = e.touches[0].clientY;

        longPressTimer.current = setTimeout(() => {
            setShowOverlay(true);
        }, LONG_PRESS_DURATION);
    };

    const handleTouchEnd = (e) => {
        const touchTime = Date.now() - touchStartTime.current;
        const endY = e.changedTouches[0].clientY;
        const diffY = Math.abs(endY - touchStartY.current);

        clearTimeout(longPressTimer.current);

        if (diffY > 10) {
            setShowOverlay(false);
            return;
        }

        if (touchTime < LONG_PRESS_DURATION) {
            navigate(`/projects/${category}/${projectKey}`);
        } else {
            setTimeout(() => setShowOverlay(false), 150);
        }
    };

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const diffY = Math.abs(currentY - touchStartY.current);

        if (diffY > 10) {
            clearTimeout(longPressTimer.current);
            setShowOverlay(false);
        }
    };


    const handleClickDesktop = () => {
        navigate(`/projects/${category}/${projectKey}`);
    };

    return (
        <div
            className={`hover-card ${isActiveCard ? " hovered" : ""}`}
            ref={cardRef}
            onClick={handleClickDesktop}
            onTouchStart={isTouchDevice ? handleTouchStart : undefined}
            onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
            onTouchMove={isTouchDevice ? handleTouchMove : undefined}
        >
            <div className="hover-card-img-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={text}
                        ref={index === currentIndex ? imageRef : null}
                        className={index === currentIndex ? "active" : ""}
                        loading="lazy"
                    />
                ))}
            </div>
            <div className="overlay flex-column">{text}</div>
        </div>
    );
}