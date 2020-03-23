import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {firebase} from "./firebase/firebase";
import {startSetProjects} from "./actions/projects";
import {startLogin, startLogout, login, logout} from "./actions/auth";

import "./styles/styles.scss";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetProjects()).then(() => {
            renderApp()
            if (history.location.pathname === "/") {
                history.push("/dashboard");
            }
        });
    } else {
        store.dispatch(logout());
        renderApp()
        history.push("/");
    }
})
