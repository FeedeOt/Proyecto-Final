import React from "react";
import "../../scss/main.scss"
import imageSliderFooter from "../../assets/img/footer-logo.svg"

const Footer = () => {
    return (
        <div id="FinalFooter">
            <h1 className="hFooter">2020 © All rights reserved.</h1>
            <img className="LogoFooter" src={imageSliderFooter} alt="Logo Footer" />
        </div>
    )
}

export default Footer;