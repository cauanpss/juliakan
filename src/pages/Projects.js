import Footer from "../components/Footer";
import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import importAll from "../util/importAll";
import TranslateButtons from "../components/TranslateButton";

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

//configurações do card
const hoverCardData = [
    { images: card1Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card2Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card3Images, text: "TextoDoProjeto", interval: 1200 },
    { images: card4Images, text: "TextoDoProjeto", interval: 1200 },
];

export default function Projects() {
    return (
        <>
            <TranslateButtons />

            <div className="hoverCard-containers">
                {hoverCardData.map((props, index) => (
                    <HoverCard key={index} {...props} />
                ))}
            </div>
        </>
    );
}
