import { useTranslation } from "react-i18next";
import instaImg from "../assets/images/Projetos_Pessoais/insta.jpg";

export default function ContactContent() {
    const { t } = useTranslation();

    return (
        <main className="contact-content">
            <img src="instaImg" />
        </main>
    );
}
