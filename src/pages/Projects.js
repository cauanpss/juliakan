import Footer from "../components/Footer";
import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import importAll from "../util/importAll";

const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g)$/),
);

const hoverCardProps = {
    images: images,
    text: "Algum texto descritivo",
    interval: 1000,
};

export default function Projects() {
    return (
        <div>
            <HoverCard {...hoverCardProps} />
        </div>
    );
}
