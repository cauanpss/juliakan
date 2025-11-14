import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
// import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";
import { useTranslation } from "react-i18next";
import card1Tela from "../assets/images/VisualArts/Tela";
import projetoClippings from "../assets/images/VisualArts/Clippings";
import cardImaginarySpaces from "../assets/images/VisualArts/ImaginarySpaces";
import cardHorizons from "../assets/images/VisualArts/Horizons";
import cardCreacionConRayosAstrales from "../assets/images/VisualArts/CreacionConRayosAstrales";
import cardBlanca from "../assets/images/VisualArts/Blanca";
import cardBau from "../assets/images/VisualArts/Bau";
import { useRef } from "react";

const hoverCardData = [
    { images: projetoClippings, text: "CardClippings", interval: 1200 },
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
    { images: cardBlanca, text: "CardBlanca", interval: 1200 },
    { images: cardBau, text: "CardBau", interval: 1200 },
];

export default function ProjectsVisualArts() {
    const { t } = useTranslation();
    const mainContainer = useRef();

    function handleOnHover(isHovering) {
        isHovering
            ? mainContainer.current?.classList.add("onHover")
            : mainContainer.current?.classList.remove("onHover");
    }

    return (
        <>
            <TranslateButtons />
            <Header />
            <main ref={mainContainer}>
                <div className="hoverCard-containers">
                    {hoverCardData.map((props, index) => (
                        <HoverCard
                            key={index}
                            images={props.images}
                            interval={props.interval}
                            text={t(props.text)}
                            onHover={handleOnHover}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
