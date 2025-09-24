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
                <NavLink to="/ProjectsVisualArts" target="">
                    <strong>{t("Projects")}</strong>
                </NavLink>
                <NavLink to="/about">
                    <strong>{t("about-me")}</strong>
                </NavLink>
                <NavLink to="/contact">
                    <strong>{t("contact")}</strong>
                </NavLink>
            </nav>
        </header>
    );
}
