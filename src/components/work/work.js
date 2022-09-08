import React from "react";
import Project from "../project";

import projectList from "./projects/project-list";

import "./work.css";

function Work() {

    const projects = projectList.map(pr => 
        <Project {...pr} key={pr.title} />);

    return (
        <section className="work" id="projects">
            <h3>My Projects</h3>
            <div className="projects">
                {projects}
            </div>
        </section>
    );
}

export default Work;