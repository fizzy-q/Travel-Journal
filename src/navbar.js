import React from "react"
import Icon from "./globewhite.png"

export default function NavBar (){
    return(
        <nav className="navbar">
            <img src={Icon} alt="globe icon" className="nav--icon"/>
            <p>my travel journal.</p>
        </nav>
    )
}