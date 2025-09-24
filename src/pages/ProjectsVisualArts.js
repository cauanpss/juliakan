import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";

//importAll de cada card (uma variável para cada card)
const card1Images = importAll(
    require.context(
        "../assets/images/Projeto_1_NomeDoProjeto",
        false,
        /\.(png|jpe?g)$/
    )
);

const card2Images = importAll(
    require.context("../assets/images/Projeto_2_NomeDoProjeto"),
    false,
    /\.(png|jpe?g)$/
);

const card3Images = importAll(
    require.context("../assets/images/Projeto_3_NomeDoProjeto"),
    false,
    /\.(png|jpe?g)$/
);

const card4Images = importAll(
    require.context("../assets/images/Projeto_4_NomeDoProjeto"),
    false,
    /\.(png|jpe?g)$/
);

const card5Images = importAll(
    require.context("../assets/images/Projeto_5_NomeDoProjeto"),
    false,
    /\.(png|jpe?g)$/
);
const card6Images = importAll(
    require.context("../assets/images/Projeto_6_NomeDoProjeto"),
    false,
    /\.(png|jpe?g)$/
);

//configurações do card
const hoverCardData = [
    { images: card1Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card2Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card3Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card4Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card5Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card6Images, text: "TextoDoProjeto", interval: 1200 },
];

export default function Projects() {
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
