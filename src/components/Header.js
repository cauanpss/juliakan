import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./styles.css";

export default function Header() {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header>
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
                <NavLink to="/ProjectsVisualArts" onClick={toggleMenu}>
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
