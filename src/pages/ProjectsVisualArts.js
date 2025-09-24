import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";

//importAll de cada card (uma variável para cada card)
const card1Tela = importAll(
    require.context("../assets/images/VisualArts/Tela", false, /\.(png|jpe?g)$/)
);

const cardImaginarySpaces = importAll(
    require.context("../assets/images/VisualArts/ImaginarySpaces"),
    false,
    /\.(png|jpe?g)$/
);

const cardHorizons = importAll(
    require.context("../assets/images/VisualArts/Horizons"),
    false,
    /\.(png|jpe?g)$/
);

const cardCreacionConRayosAstrales = importAll(
    require.context("../assets/images/VisualArts/CreacionConRalesAstrales"),
    false,
    /\.(png|jpe?g)$/
);

const cardClippings = importAll(
    require.context("../assets/images/VisualArts/Clippings"),
    false,
    /\.(png|jpe?g)$/
);

const cardBlanca = importAll(
    require.context("../assets/images/VisualArts/Blanca"),
    false,
    /\.(png|jpe?g)$/
);

const cardBau = importAll(
    require.context("../assets/images/VisualArts/Bau"),
    false,
    /\.(png|jpe?g)$/
);

//configurações do card
const hoverCardData = [
    { images: card1Tela, text: "CardProjectTela", interval: 1200 },
    {
        images: cardImaginarySpaces,
        text: "CardImaginarySpaces",
        interval: 1200,
    },
    { images: cardHorizons, text: "CardHorizons", interval: 1200 },
    {
        images: cardCreacionConRayosAstrales,
        text: "CardCreacionConRayosAstrales",
        interval: 1200,
    },
    { images: cardClippings, text: "CardClippings", interval: 1200 },
    { images: cardBlanca, text: "CardBlanca", interval: 1200 },
    { images: cardBau, text: "CardBau", interval: 1200 },
];

export default function ProjectsVisualArts() {
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
