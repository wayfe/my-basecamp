import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import ProjectDetailPage from "../components/projects/ProjectDetailPage";
import AddProjectPage from "../components/projects/AddProjectPage";
import ProjectTasksPage from "../components/projects/tasks/ProjectTasksPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/projects/:id" exact={true} component={ProjectDetailPage} />
                <Route path="/projects/:id/tasks" exact={true} component={ProjectTasksPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

//notest