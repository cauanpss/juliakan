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
            <div className="curriculum">
                
                <article className="collectiveExhibitions">
                    {curriculumObj.collectiveExhibitions &&
                        renderExhibitionsByYear(
                            curriculumObj.collectiveExhibitions
                        )}
                </article>

                <article className="residences">
                    {curriculumObj.residencies && (
                        <section className="residencies">
                            <h3>
                                {curriculumObj.residencies.title ||
                                    t("aboutData.curriculum.residencies.title")}
                            </h3>
                            <ul>
                                {(curriculumObj.residencies.items || []).map(
                                    (item, idx) => (
                                        <li key={idx}>{item}</li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}
                </article>

                <article className="scholarships">
                    {curriculumObj.scholarships && (
                        <section className="scholarships">
                            <h3>
                                {curriculumObj.scholarships.title ||
                                    t(
                                        "aboutData.curriculum.scholarships.title"
                                    )}
                            </h3>

                            <ul>
                                {(curriculumObj.scholarships.items || []).map(
                                    (item, idx) => (
                                        <li key={idx}> {item} </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}
                </article>

                <article classname="education">
                    {curriculumObj.education && (
                        <section className="education">
                            <h3>
                                {curriculumObj.education.title ||
                                    t("aboutData.curriculum.education.title")}
                            </h3>

                            <ul>
                                {(curriculumObj.education.items || []).map(
                                    (item, idx) => (
                                        <li key={idx}> {item} </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}
                </article>
            
            
            </div>
        </main>
    );
}
