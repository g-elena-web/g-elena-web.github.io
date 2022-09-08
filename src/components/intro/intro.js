import React, { useEffect, useRef, useState } from "react";

import "./intro.css";
import 'animate.css';

function Intro() {

    const [hoverState, setHoverState] = useState(false);

    const hoverOn = () => {
        setHoverState(true);
    }

    const hoverOff = () => {
        setHoverState(false);
    }

    const innerRef = useRef(null);

    useEffect(() => {
        const div = innerRef.current;
        div.addEventListener('mouseover', hoverOn);
        div.addEventListener('mouseout', hoverOff);

        return () => {
            div.removeEventListener('mouseover', hoverOn);
            div.removeEventListener('mouseout', hoverOff);
        }
    }, [innerRef]);

    const nameClass = (hoverState) ? "name name-hover" : "name";
    const titleClass = (hoverState) ? "title title-hover" : "title";
    const tagClass = (hoverState) ? "title-tag title-tag-hover animate__animated animate__fadeInDownBig" : "title-tag";
    const titleNameClass = (hoverState) ? "title-name title-name-hover" : "title-name";

    return (
        <section className="intro" id="home">
            <div className="logo" ref={innerRef}>
                <h1 className={nameClass}>Elena Golovleva</h1>
                <div className={titleClass}>
                    <span className={tagClass}>{`<`}</span>
                    &nbsp;<h2 className={titleNameClass}>frontend developer</h2>&nbsp;
                    <span className={tagClass}>{`/>`}</span>
                </div>
            </div>
            <a className="animate__animated animate__fadeInDown animate__infinite" href="#about" target="_self">
                <i className="fa-solid fa-chevron-down"></i>
            </a>
        </section>
    );
}

export default Intro;