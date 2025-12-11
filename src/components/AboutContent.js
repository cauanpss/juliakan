import { useTranslation } from "react-i18next";
import dataAbout from "../data/dataAbout/dataAbout";
import "./styles.css";

export default function AboutContent() {
    const { t } = useTranslation();

    const curriculum = t(dataAbout.curriculum, { returnObjects: true });
    const curriculumObj = typeof curriculum === "object" ? curriculum : {};

    const renderExhibitionsByYear = (exhibitionsObj) => {
        if (!exhibitionsObj || typeof exhibitionsObj !== "object") return null;
        const { title, ...years } = exhibitionsObj;
        return (
            <section className="exhibitions">
                {title && <h3>{title}</h3>}
                {Object.keys(years).length === 0 && <p>Nenhuma entrada</p>}
                {Object.entries(years).map(([year, items]) => (
                    <div key={year} className="year-block">
                        <h4>{year}</h4>
                        <ul>
                            {Array.isArray(items) ? (
                                items.map((it, idx) => <li key={idx}>{it}</li>)
                            ) : (
                                <li>{String(items)}</li>
                            )}
                        </ul>
                    </div>
                ))}
            </section>
        );
    };

    return (
        <main className="about-content">
            <p className="description">{t(dataAbout.description)}</p>
            <p className="curriculum">
                {curriculumObj.collectiveExhibitions &&
                    renderExhibitionsByYear(
                        curriculumObj.collectiveExhibitions
                    )}
            </p>
        </main>
    );
}
