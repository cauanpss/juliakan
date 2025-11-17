import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { bau } from "../assets/images/PerformingArts/Projeto_1_NomeDoProjeto";

export default function HomeContent() {
    // const { t, i18n } = useTranslation();
    const {t} = useTranslation();
    
    return (
        <main>
            <Link to="/" className="logo">
                <h1>Julia Kan</h1>
            </Link>
            <div class="home-menu" style={{backgroundImage: `url(${bau})`}}>
            
                <div class="home-menu-content">     
                    <div class="button-container">
                        <Link to="/ProjectsVisualArts">
                            <button class="visual-arts">
                            {t("arts")}
                            </button>
                            
                        </Link>
    
                        <div class="separador">/</div>
    
                        <Link to="/ProjectsPerformingArts">
                            <button class="performing-arts">
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
