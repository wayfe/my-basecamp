import React from "react";
import {connect} from "react-redux";
import uuid from "uuid";
import { withRouter } from "react-router-dom";
import moment from "moment";
import ProjectForm from "./ProjectForm";
import {startAddProject} from "../../actions/projects";

const AddProjectPage = (props) => (
    <div>
        <h3>Add A Project</h3>
        <ProjectForm 
            onSubmit={(project) => {
                const newProject = {id: uuid(), createdAt: moment(), ...project}
                props.dispatch(startAddProject(newProject)).then(() => {
                    props.history.push(`/projects/${newProject.id}`)
                }) 
            }}
        />
    </div>
)

export default withRouter(connect()(AddProjectPage));