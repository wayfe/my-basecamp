import React from "react";
import AddProjectPage from "./projects/AddProjectPage";
import ProjectsList from "./projects/ProjectsList";

const DashboardPage = () => (
    <div>
        <h1>Dashboard</h1>
        <AddProjectPage />
        <ProjectsList />
    </div>
)

export default DashboardPage;