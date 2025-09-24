import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";

// Cada pasta de imagens já possui um index.js gerado pelo script
import cardProjeto1 from "../assets/images/PerformingArts/Projeto_1_NomeDoProjeto";
import cardProjeto2 from "../assets/images/PerformingArts/Projeto_2_NomeDoProjeto";
import cardProjeto3 from "../assets/images/PerformingArts/Projeto_3_NomeDoProjeto";
import cardProjeto4 from "../assets/images/PerformingArts/Projeto_4_NomeDoProjeto";
import cardProjeto5 from "../assets/images/PerformingArts/Projeto_5_NomeDoProjeto";
import cardProjeto6 from "../assets/images/PerformingArts/Projeto_6_NomeDoProjeto";

const hoverCardData = [
    { images: cardProjeto1, text: "CardProjeto1", interval: 1200 },
    { images: cardProjeto2, text: "CardProjeto2", interval: 1200 },
    { images: cardProjeto3, text: "CardProjeto3", interval: 1200 },
    { images: cardProjeto4, text: "CardProjeto4", interval: 1200 },
    { images: cardProjeto5, text: "CardProjeto5", interval: 1200 },
    { images: cardProjeto6, text: "CardProjeto6", interval: 1200 },
];

export default function ProjectsPerformingArts() {
    const { t } = useTranslation();

    return (
        <>
            <TranslateButtons />
            <Header />

            <div className="hoverCard-containers">
                {hoverCardData.map((props, index) => (
                    <HoverCard
                        key={index}
                        images={props.images}
                        interval={props.interval}
                        text={t(props.text)}
                    />
                ))}
            </div>
        </>
    );
}
