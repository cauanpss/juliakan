import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import "./styles.css";
import TranslateButtons from "./TranslateButton";

export default function Header() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const isPerforming = location.pathname.toLowerCase().includes("performing");
    const isVisual = location.pathname.toLowerCase().includes("visual");

    const dynamicProjectsPath = isPerforming
        ? "/ProjectsPerformingArts"
        : "/ProjectsVisualArts";

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const SWIPE_THRESHOLD = 50;

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        touchEndX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchEndX.current - touchStartX.current;

        // swipe para direita → ABRIR MENU
        if (distance < -SWIPE_THRESHOLD && !isMobileMenuOpen) {
            setIsMobileMenuOpen(true);
        }

        // swipe para esquerda → FECHAR MENU
        if (distance > SWIPE_THRESHOLD && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <TranslateButtons />

            <Link to="/" className="logo">
                <h1>Julia Kan</h1>
            </Link>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z"
                        fill="#323544"
                    />
                    <path
                        opacity="0.4"
                        d="M20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125H4C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875H20Z"
                        fill="#323544"
                    />
                </svg>
            </button>

            <nav className={`nav-desktop ${isMobileMenuOpen ? "open" : ""}`}>
                <NavLink to={dynamicProjectsPath} onClick={toggleMenu}>
                    <strong>{t("Projects")}</strong>
                </NavLink>
                <NavLink to="/about" onClick={toggleMenu}>
                    <strong>{t("about-me")}</strong>
                </NavLink>
                <NavLink to="/contact" onClick={toggleMenu}>
                    <strong>{t("contact")}</strong>
                </NavLink>
            </nav>
        </header>
    );
}
