import React from "react";
import "../components/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

export default function Home() {
    return (
    <div>    
        <div className="top-wrapper">
                <Header />
        </div>
        
        <div className="about-page">
            <AboutContent />
            <Footer />
        </div>
    </div>    
    );
}
