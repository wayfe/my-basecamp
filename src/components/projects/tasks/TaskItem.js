import React from "react";
import { toggleTaskStatus } from "../../../actions/projects";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onToggleTaskStatus = () => {
        this.props.dispatch(toggleTaskStatus(this.props.projectId, this.props.taskSetId, this.props.task))
    }

    render () {
        return (
            <div>
                <p>{this.props.task.description}</p>
                <p>{this.props.task.details}</p>
                <input 
                    type="checkbox"
                    onClick={this.onToggleTaskStatus}
                    value={this.props.task.completed}
                />
            </div>
        )
    }
} 

const mapStateToProps = (state, props) => {
    return {
        projectId: state.projects.find((project) => project.id === props.match.params.id).id
    };
};

export default withRouter(connect(mapStateToProps)(TaskItem));


