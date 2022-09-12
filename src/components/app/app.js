import React from "react";
import About from "../about";
import Contact from "../contact";
import Intro from "../intro";
import Menu from "../menu";
import Work from "../work";

import "./app.scss";

function App() {
    return (
        <main className="app">
            <Menu />
            <Intro />
            <About />
            <Work />
            <Contact />
        </main>
    );
}

export default App;