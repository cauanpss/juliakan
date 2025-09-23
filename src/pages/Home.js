import React from "react";
import "../components/styles.css";
import HomeContent from "../components/HomeContent";
import TranslateButtons from "../components/TranslateButton";

export default function Home() {
    return (
        <div>
            <TranslateButtons />
            <HomeContent />
        </div>
    );
}
