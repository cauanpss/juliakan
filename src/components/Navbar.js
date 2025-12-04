import React from "react";
import { useTranslate } from "react-i18next";

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
</nav>;
