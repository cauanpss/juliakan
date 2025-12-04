import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { bau } from "../assets/images/PerformingArts/Projeto_1_NomeDoProjeto";

export default function HomeContent() {
    // const { translate, i18n } = useTranslation();
    const { translate } = useTranslation();

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
                            <button className="visual-arts">
                                {translate("arts")}
                            </button>
                        </Link>

                        <div className="separador">/</div>

                        <Link to="/ProjectsPerformingArts">
                            <button className="performing-arts">
                                {" "}
                                {translate("performing")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
