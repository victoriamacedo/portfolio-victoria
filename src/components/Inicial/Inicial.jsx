import React from "react";
import "./inicial.css";
import Me from "../../assets/img/eu.jpeg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Inicial = ( ) => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Victoria Silva</h1>
                <span className="home__education">Técnica em Desenvolvimento de Sistemas</span>

                <HeaderSocials />

                <ScrollDown />
            </div>
            </section>
    )
}

export default Inicial