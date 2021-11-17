import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";
// import { setTextFilter } from "./actions/filters";
// import getVisibleExpense from "./selectors/expenses";

// css
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();

        if (history.location.pathname === "/") {
            history.push("/dashboard");
        }
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        // console.log(user.email);
    } else {
        // User is signed out
        // ...
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});
