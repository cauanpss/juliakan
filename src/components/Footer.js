import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer>z
            <div class="copyright">
                <h4>© 2023 Julia Kan. {t("copyright")}</h4>
            </div>
            <div className="footer-social">
                <a
                    className="instagram"
                    href="https://www.instagram.com/juliakan___/"
                >
                    insta
                </a>
                <a className="facebook" href="facebook">
                    face
                </a>
                {/* <a className="hotglue" href="https://juliakan.hotglue.me/">
                    hotglue
                </a> */}
            </div>
        </footer>
    );
}
