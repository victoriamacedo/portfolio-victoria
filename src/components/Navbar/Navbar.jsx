import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/img/logo1.png";

const Navbar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="../Inicial/Inicial" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="../Sobre/Sobre" className="nav__link"></a>
                            <i className="icon-user"></i>
                        </li>

                        <li className="nav__item">
                            <a href="../Projetos/Projetos" className="nav__link"></a>
                            <i className="icon-folder"></i>
                        </li>

                        <li className="nav__item">
                            <a href="../Linguagens/Linguagens" className="nav__link"></a>
                            <i className="icon-organization"></i>
                        </li>

                        <li className="nav__item">
                            <a href="../Contato/Contat" className="nav__link"></a>
                            <i className="icon-envelope"></i>
                        </li>


                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2022 - 2023.</span>
            </div>
        </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" :
        "nav__toggle"} onClick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    ); 
};

export default Navbar;