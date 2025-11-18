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
    const scrollRef = useRef(0);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${projectKey}`);
    };

    const resetScroll = () => {
        scrollRef.current = 0;
        if (imageRef.current)
            imageRef.current.style.transform = `translateX(0)`;
    };

    const startSlideshow = () => {
        onHover(true);
        setAsActiveCard(true);

        let direction = 1;
        const step = 1;
        let elapsedTime = 0;

        intervalRef.current = setInterval(() => {
            const img = imageRef.current;
            const card = cardRef.current;
            if (!img || !card) return;

            const needsScroll = img.naturalWidth > card.offsetWidth;

            if (needsScroll) {
                scrollRef.current += step * direction;

                if (scrollRef.current > img.offsetWidth - card.offsetWidth)
                    direction = -1;
                if (scrollRef.current < 0) direction = 1;

                img.style.transform = `translateX(-${scrollRef.current}px)`;

                // quando scroll volta ao início, passa para próxima imagem
                if (direction === 1 && scrollRef.current === 0) {
                    setCurrentIndex((prev) => {
                        resetScroll();
                        direction = 1; // reinicia direção
                        elapsedTime = 0; // reinicia contador
                        return (prev + 1) % images.length;
                    });
                }
            } else {
                elapsedTime += 16;
                if (elapsedTime >= interval) {
                    setCurrentIndex((prev) => {
                        resetScroll();
                        direction = 1; // reinicia direção
                        elapsedTime = 0; // reinicia contador
                        return (prev + 1) % images.length;
                    });
                }
            }
        }, 16);
    };

    const stopSlideshow = () => {
        onHover(false);
        setAsActiveCard(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        resetScroll();
        setCurrentIndex(0);
    };

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
                    ref={index === currentIndex ? imageRef : null} // ref apenas para a imagem atual
                    className={index === currentIndex ? "active" : ""}
                />
            ))}
            <div className="overlay flex-column">{text}</div>
        </div>
    );
}
