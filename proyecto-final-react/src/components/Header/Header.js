import React from 'react';
import Logo from "../../assets/img/top-logo.svg";

const Header = () =>{
    return(
        <div>
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
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Products</a>
                                </li>
                                <li>
                                    <a href="">Services</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="linea-header"></div>
                </section>
            </header>
        </div>

    );
};
export default Header