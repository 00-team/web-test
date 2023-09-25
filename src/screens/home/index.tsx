import { Component } from "solid-js";
import { HeroSection } from "./heroSection";

import "./style/home.scss";

const Home: Component<{}> = () => {
    return (
        <main class="home">
            <HeroSection />
            <section
                class="test"
                style={{ height: "100vh", width: "100%", background: "white" }}
            >
                {" "}
            </section>
        </main>
    );
};

export { Home };
