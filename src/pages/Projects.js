import Footer from "../components/Footer";
import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
import importAll from "../util/importAll";

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g)$/)
);

const hoverCardProps = {
  images: images,
  text: "Algum texto descritivo",
  interval: 3000
};


export default function Projects() {

  const array = Array.from(12)

  return (
    <div>
        <Header />
        {array.forEach(element => {
          
        })}
        <HoverCard {...hoverCardProps} />
        <Footer />
    </div>

  )
}

