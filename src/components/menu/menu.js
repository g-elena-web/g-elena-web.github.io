import React from "react";

import "./menu.scss";

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><a href="#home" target="_self">home</a></li>
                <li><a href="#about" target="_self">about</a></li>
                <li><a href="#projects" target="_self">projects</a></li>
                <li><a href="#contact" target="_self">contact</a></li>
            </ul>
        </nav>
    );
}

export default Menu;