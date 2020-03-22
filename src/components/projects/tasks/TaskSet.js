import React from "react";
import {connect} from "react-redux";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskSet = (props) => (
    <div>
        <h3>{props.taskSet.name}</h3>
        <h3>{props.taskSet.description}</h3>
        <AddTask 
            taskSetId={props.taskSet.id}
        />
        {props.taskSet.taskList.length > 0 &&
            <TaskList 
                taskList={props.taskSet.taskList}
                taskSetId={props.taskSet.id}
            />
        }
    </div>
)

export default connect()(TaskSet);


