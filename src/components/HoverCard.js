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
    const cardRef = useRef();
    const navigate = useNavigate();
    const [scrollNeeded, setScrollNeeded] = useState(false);
    const scrollRef = useRef(0);
    const handleClick = () => {
        navigate(`/projects/${projectKey}`);
    };

    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handleContextMenu);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    useEffect(() => {
        const img = imageRef.current;
        const card = cardRef.current;
        if (img && card) {
            setScrollNeeded(img.naturalWidth > card.offsetWidth);
        }
    }, [images]);

    function startSlideshow() {
        onHover(true);
        setAsActiveCard(true);

        if (scrollNeeded) {
            const img = imageRef.current;
            const card = cardRef.current;
            let direction = 1;
            const step = 1;

            intervalRef.current = setInterval(() => {
                if (!img) return;
                scrollRef.current += step * direction;

                if (scrollRef.current > img.offsetWidth - card.offsetWidth)
                    direction = -1;
                if (scrollRef.current < 0) direction = 1;

                img.style.transform = `translateX(-${scrollRef.current}px)`;
            }, 16);
        } else {
            if (!intervalRef.current) {
                intervalRef.current = setInterval(() => {
                    setCurrentIndex((prev) => (prev + 1) % images.length);
                }, interval);
            }
        }
    }

    function stopSlideshow() {
        onHover(false);
        setAsActiveCard(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        if (scrollNeeded && imageRef.current) {
            imageRef.current.style.transform = `translateX(0)`;
        } else {
            setCurrentIndex(0);
        }
    }

    return (
        <div
            className={`hover-card ${isActiveCard ? " hovered" : ""}`}
            ref={cardRef}
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
