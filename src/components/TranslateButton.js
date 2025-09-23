import { useTranslation } from "react-i18next";
import { setLanguage } from "../util/language";

export default function TranslateButtons() {
    const { i18n } = useTranslation();

    return (
        <div className="translate">
            <button onClick={() => setLanguage(i18n, "pt")}>pt</button>
            <div className="separador">/</div>
            <button onClick={() => setLanguage(i18n, "en")}>en</button>
        </div>
    );
}
