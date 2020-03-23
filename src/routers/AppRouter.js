import React from "react";
import {Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/login/LoginPage";
import ProjectDetailPage from "../components/projects/ProjectDetailPage";
import AddProjectPage from "../components/projects/AddProjectPage";
import ProjectTasksPage from "../components/projects/tasks/ProjectTasksPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
                <PrivateRoute path="/projects/:id" exact={true} component={ProjectDetailPage} />
                <PrivateRoute path="/projects/:id/tasks" exact={true} component={ProjectTasksPage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

//notest