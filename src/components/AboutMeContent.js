import { useTranslation } from "react-i18next";
import dataAboutMe from "../data/dataAboutMe/dataAboutme";

export default function AboutMeContent() {
    const { t } = useTranslation();

    return (
        <main className="about-me-content">
            <p className="description">{t(dataAboutMe.description)}</p>
            <p className="curriculum">{t(dataAboutMe.curriculum)}</p>
        </main>
    );
}
