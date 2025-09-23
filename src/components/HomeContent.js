import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomeContent() {
    const { t, i18n } = useTranslation();

    function redirecionamentoExterno() {
        const resposta = window.confirm(
            "Você está sendo redirecionado para um link externo. Deseja continuar?"
        );
        if (resposta) {
            window.open("https://juliakan.hotglue.me/", "_blank");
        }
    }

    return (
        <main>
            <div class="logo">
                <h1>Julia Kan</h1>
            </div>
            <div class="home-menu">
                <div class="button-container">
                    <button
                        onClick={redirecionamentoExterno}
                        class="visual-arts"
                    >
                        {t("arts")}
                    </button>

                    <div class="separador">/</div>

                    <Link to="/projects">
                        <button class="performing-arts">
                            {" "}
                            {t("performing")}
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
