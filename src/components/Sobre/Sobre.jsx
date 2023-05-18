import React from "react";
import "./sobre.css";
import Image from "../../assets/img/eu.jpeg";
import AboutBox from "./sobrebox";
import CV from "../../assets/img/Currículo Victoria Macedo da Silva.pdf";

const Sobre = ( ) => {
    return (
       <section className="about container section" id='about'>
        <h2 className="section__title">Sobre mim</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">Olá, meu nome é Victoria Macedo da Silva, tenho 16 anos e estou cursando o 3° ano do ensino médio integrado ao ensino técnico no curso de Desenvolvimento de Sistemas, na Etec.<br></br>Com este portfólio você conhecerá alguns dos meus trabalhos de curso.</p>
                    
                    <a href={CV} download='' className="btn">
                        Baixar Currículo 
                        <span className="button__icon">
                        </span>
                    </a>
                </div>                       
                  

                        <div className="skills__bar">
                            <span className="skills__percentage photography"></span>
                        </div>

                
            </div>
        </div>
        <AboutBox />
       </section>
    )
}

export default Sobre