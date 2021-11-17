import React from "react";
import {
    // BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink,
    Router,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";

import PostPage from "../components/public/PostPage";
import ProfilePage from "../components/public/ProfilePage";
import SearchJobPage from "../components/public/SearchJobPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/post" component={PostPage} />
                <PrivateRoute path="/searchjobs" component={SearchJobPage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);
export default AppRouter;
