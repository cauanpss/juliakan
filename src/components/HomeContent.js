import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { bau } from "../assets/images/PerformingArts/Projeto_1_NomeDoProjeto";

export default function HomeContent() {
    // const { t, i18n } = useTranslation();
    const { t } = useTranslation();

    return (
        <main>
            <Link to="/" className="logo">
                <h1>Julia Kan</h1>
            </Link>
            <div
                className="home-menu"
                style={{ backgroundImage: `url(${bau})` }}
            >
                <div class="home-menu-content">
                    <div className="button-container">
                        <Link to="/ProjectsVisualArts">
                            <button className="visual-arts">{t("arts")}</button>
                        </Link>

                        <div className="separador">/</div>

                        <Link to="/ProjectsPerformingArts">
                            <button className="performing-arts">
                                {" "}
                                {t("performing")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
