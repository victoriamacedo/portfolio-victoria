import React from 'react'
import "./linguagens.css";
import Image1 from "../../assets/img/html.png"
import Image2 from "../../assets/img/css.png"
import Image3 from "../../assets/img/csharp.png"
import Image4 from "../../assets/img/java.png"
import Image5 from "../../assets/img/sql.png"
import Image6 from "../../assets/img/js.png"

const data = [
    {
        id: 1,
        image: Image1,
        title: "HTML 5",
        description: "Criação de sites.",
    },
    {
        id: 2,
        image: Image2,
        title: "CSS 3",
        description: "Estilização de sites.",
    },
    {
        id: 3,
        image: Image3,
        title: "CSHARP",
        description: "Criação de projetos.",
    },
    {
        id: 4,
        image: Image4,
        title: "Java",
        description: "Criação de Aplicativos",
    },
    {
        id: 5,
        image: Image5,
        title: "SQL",
        description: "Criação e gerenciamento de banco de dados.",
    },
    {
        id: 5,
        image: Image6,
        title: "JavaScript",
        description: "Criação de sites.",
    },
];

const Linguagens = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Conhecimentos:</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                            </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Linguagens;
