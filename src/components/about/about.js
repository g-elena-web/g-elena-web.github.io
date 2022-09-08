import React from "react";

import "./about.css";

function About() {
    return (
        <section className="about" id="about">
            <h3>About Me</h3>
            <h4>Skills</h4>
            <ul>
                <li><i className="fa-brands fa-html5"></i> HTML</li>
                <li><i className="fa-brands fa-css3-alt"></i> CSS</li>
                <li><i className="fa-brands fa-square-js"></i> JavaScript</li>
                <li><i className="fa-brands fa-react"></i> React</li>
                <li><i className="fa-brands fa-sass"></i> SASS</li>
                <li><i className="fa-brands fa-git"></i> Git</li>
                <li><i className="fa-solid fa-dollar-sign"></i> jQuery</li>
            </ul>
            <h4>Languages</h4>
            <ul>
                <li>Russian (Native)</li>
                <li>English (Proficient)</li>
            </ul>
            <h4>Education</h4>
            <ul>
                <li>Bachelor of Applied Informatics in Computer Design (Saratov State University)</li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/g-elena-web/responsive-web-design">
                        Responsive Web Design Developer Certification (freeCodeCamp)&nbsp;
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/g-elena-web/javascript-algorithms-and-data-structures">
                        JavaScript Algorithms and Data Structures Developer Certification (freeCodeCamp)&nbsp;
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/g-elena-web/front-end-development-libraries">
                        Front End Development Libraries Developer Certification (freeCodeCamp)&nbsp;
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default About;