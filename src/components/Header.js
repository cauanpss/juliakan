import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header>
            <Link to="/" className="logo">
                <h1>Julia Kan</h1>
            </Link>
            <nav class="nav-desktop">
                <NavLink href="/projects" target="">
                    <strong>{t("projects")}</strong>
                </NavLink>
                <a href="/about">
                    <strong>{t("about-me")}</strong>
                </a>
                <a href="/contact">
                    <strong>{t("contact")}</strong>
                </a>
            </nav>
        </header>
    );
}
