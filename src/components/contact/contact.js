import React from "react";
import StarSky from "../star-sky";

import "./contact.scss";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div id="back"></div>
            <StarSky />
            <h3>Contact Me</h3>
            <a href="mailto:g.elena.web@gmail.com">
                <i className="fa-solid fa-envelope"></i> g.elena.web@gmail.com
            </a>
            <a href="https://github.com/g-elena-web">
                <i className="fa-brands fa-github"></i> GitHub
            </a>
        </section>
    );
}

export default Contact;