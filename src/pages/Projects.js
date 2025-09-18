import Footer from "../components/Footer";
import Header from "../components/Header";
import HoverCard from "../components/HoverCard";
// import importAll from "../utils/importAll"

function importAll(r) {
  return r.keys().map(r);
}


const images = importAll(require.context("../assets", false, /\.(png|jpe?g|svg)$/));


export default function Projects() {
  return (
  
  <div>
      <Header />
      <HoverCard 
        images={images}
        text="Troca a cada 1 segundo"
        interval={1000}
        />
      <Footer />
  </div>
    
  )
}
