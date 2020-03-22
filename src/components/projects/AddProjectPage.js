import React from "react";
import {connect} from "react-redux";
import uuid from "uuid";

import ProjectForm from "./ProjectForm";
import {addProject} from "../../actions/projects";

const AddProjectPage = (props) => (
    <div>
        <h3>Add A Project</h3>
        <ProjectForm 
            onSubmit={(project) => {
                    const newProject = {id: uuid(), ...project}
                    props.dispatch(addProject(newProject));
                    // props.history.push(`/projects/${newProject.id}`);
                }
            }
        />
    </div>
)

export default connect()(AddProjectPage);