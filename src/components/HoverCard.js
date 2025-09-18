import React, { useState, useEffect, useRef } from "react";
import "./styles.css";



export default function HoverCard({ images, text, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  function startSlideshow() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }
  }

  function stopSlideshow() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  useEffect(() => {
    // Limpa intervalo ao desmontar o componente
    return () => stopSlideshow();
  }, []);

  return (
    <div
      className="hover-card"
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
    >
      <img src={images[currentIndex]} alt={text} />
      <div className="overlay">{text}</div>
    </div>
  );
}
