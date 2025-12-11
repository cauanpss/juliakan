import React from "react";
import "../components/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMeContent from "../components/AboutMeContent";

export default function Home() {
    return (
        <div>
            <Header />
            <AboutMeContent />
            <Footer />
        </div>
    );
}
