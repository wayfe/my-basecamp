import React from "react";
import {connect} from "react-redux";
import uuid from "uuid";
import { withRouter } from "react-router-dom";

import {addTask} from "../../../actions/projects";
import TaskItemForm from "./TaskItemForm";

const AddTask = (props) => (
    <div>
        <TaskItemForm 
            onSubmit={(task) => {
                    props.dispatch(addTask(props.projectId, props.taskSetId, task));
                }
            }
        />
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        projectId: state.projects.find((project) => project.id === props.match.params.id).id
    };
};

export default withRouter(connect(mapStateToProps)(AddTask));