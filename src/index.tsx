/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import { Loading } from "layout";
import { Home } from "screens/home";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

import "./style/base.scss";
import "./style/components/buttons.scss";
import "./style/config/index.scss";
import "./style/font/imports.scss";
import "./style/theme/index.scss";

const App = () => {
    const [isLoading, setisLoading] = createSignal(true);

    createEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setisLoading(false);
        }, 3000);

        onCleanup(() => clearTimeout(loaderTimeout));
    });

    return <>{isLoading() ? <Loading /> : <Home />}</>;
};

render(() => <App />, document.getElementById("root")!);
