import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
// import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";
import card1Images from "../assets/images/PerformingArts/Projeto_1_NomeDoProjeto"
import card2Images from "../assets/images/PerformingArts/Projeto_2_NomeDoProjeto"
import card3Images from "../assets/images/PerformingArts/Projeto_3_NomeDoProjeto"
import card4Images from "../assets/images/PerformingArts/Projeto_4_NomeDoProjeto"
import card5Images from "../assets/images/PerformingArts/Projeto_5_NomeDoProjeto"
import card6Images from "../assets/images/PerformingArts/Projeto_6_NomeDoProjeto"


//configurações do card
const hoverCardData = [
    { images: card1Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card2Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card3Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card4Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card5Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card6Images, text: "TextoDoProjeto", interval: 1200 },
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
                        text={t(`projects.${props.key}`)}
                    />
                ))}
            </div>
        </>
    );
}
