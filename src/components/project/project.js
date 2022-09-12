import React, { useEffect, useRef, useState } from "react";

import "./project.scss";
import 'animate.css';

function Project(props) {

    const [hoverState, setHoverState] = useState(false);

    const hoverOn = () => {
        setHoverState(true);
    }

    const hoverOff = () => {
        setHoverState(false);
    }

    const { image, title, github, demo, codepen } = props;

    const innerRef = useRef(null);

    useEffect(() => {
        
        const div = innerRef.current;

        if (github || demo || codepen) {
            div.addEventListener('mouseover', hoverOn);
            div.addEventListener('mouseout', hoverOff);
        }

        return () => {
            div.removeEventListener('mouseover', hoverOn);
            div.removeEventListener('mouseout', hoverOff);
        }
    }, [innerRef]);

    const projectCardClass = (hoverState) ? "project-card project-card-hover" : "project-card";

    return (
        <section className="project" ref={innerRef}>
            <div className={projectCardClass}>
                <img src={image} />
                {hoverState &&
                    <div className="project-links animate__animated animate__fadeIn">
                        <a href={github} className="animate__animated animate__bounceIn">GitHub&nbsp;
                            <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <a href={demo} className="animate__animated animate__bounceIn">Live Demo&nbsp;
                            <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <a href={codepen} className="animate__animated animate__bounceIn">CodePen&nbsp;
                            <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                }
            </div>
            <p><span>{title}</span></p>
        </section>
    )
}

export default Project;