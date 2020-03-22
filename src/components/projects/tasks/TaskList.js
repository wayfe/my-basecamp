import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    onClick = () => {
        this.setState((prevState) => ({clicked: !prevState.clicked}));
    }

    render() {
        return (
            <div>
                {
                    this.props.taskList.length < 0 ?
                    <p>no tasks</p>
                    :
                    this.props.taskList.filter((task) => task.completed === false).map((task) => 
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                            taskSetId={this.props.taskSetId}
                        />
                    )
                }
                <button onClick={this.onClick}>
                    {!this.state.clicked ? "show completed tasks" : "hide completed tasks"}
                </button>
                { this.state.clicked && 
                    this.props.taskList.filter((task) => task.completed === true).map((task) =>
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                            taskSetId={this.props.taskSetId}
                        />
                    ) 
                }
            </div>
        )
    }
}

export default TaskList;



