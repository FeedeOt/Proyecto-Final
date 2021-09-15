import React from 'react';
import Logo from "../../assets/img/top-logo.svg";
import "../../scss/main.scss"

const Header = () =>{
    return(
        <header>
            <section>
                <div id="div-nav-header">
                    <img src={Logo} alt="Logo-25Watss" />
                    <nav>
                        <ul className="display-flex-row">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#products">Products</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="linea-header"></div>
            </section>
        </header>

    );
};
export default Header