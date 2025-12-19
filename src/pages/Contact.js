import React from "react";
import "../components/styles.css";
import ContactContent from "../components/ContactContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <div className="top-wrapper">
                <Header />
            </div>
            <ContactContent />
            <Footer />
        </div>
    );
}
