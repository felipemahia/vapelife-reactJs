import React from "react";
import LogoVL from "../../assets/LOGO.png"
import "../NavBar/Logo.css"

export function Logo () {
    return(
        <div className="logoContainer">
            <img className="logo" src={LogoVL} alt="" />
        </div>
    )
}