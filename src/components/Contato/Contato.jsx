import React from "react";
import "./contato.css"

const Contato = ( ) => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Entre em contato</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Me envie uma mensagem!!!</h3>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                            placeholder="Digite seu nome" />
                        </div>
                    </div>
                    <div className="contact__form-div">
                            <input type="email" className="contact__form-input"
                            placeholder="Digite seu email" />
                        </div>
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                            placeholder="Digite o assunto" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="10"
                            className="contact__form-input" 
                            placeholder="Escreva sua mensagem">
                            </textarea>
                            </div>

                            <button className="btn">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    );
};

export default Contato;