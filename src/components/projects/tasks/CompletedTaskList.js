import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => (
    <div>
        {props.completedTasks.length < 1 ?
            <p>No completed tasks yet</p>
            :
            props.completedTasks.map((task) => 
           <TaskItem 
                key={task.id} 
                task={task} 
                taskSetId={props.taskSet.id}
            /> 
        )}
    </div>
)

export default TaskList;


