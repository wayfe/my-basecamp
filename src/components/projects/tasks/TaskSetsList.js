import React from "react";
import {connect} from "react-redux";
import TaskSet from "./TaskSet";

export const TaskSetsList = (props) => (
    <div>
        <div>
            {props.project.taskSets.map((taskSet) => 
                <TaskSet key={taskSet.id} taskSet={taskSet} />
            )}
        </div>
    </div>
);


export default connect()(TaskSetsList);

