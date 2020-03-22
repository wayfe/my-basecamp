import React from "react";
import {connect} from "react-redux";
import AddTaskSetPage from "./AddTaskSetPage";
import TaskSetsList from "./TaskSetsList";

const ProjectTasksPage = (props) => (
    <div>
        <h1>{props.project.title} To-dos</h1>
        <AddTaskSetPage 
            project={props.project}
        />
        {props.project.taskSets.length > 0 ? 
            <TaskSetsList 
                project={props.project}
            />
            :
            <p>no tasks yet</p>
        }
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(ProjectTasksPage);


