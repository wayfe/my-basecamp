import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const ProjectDetailPage = (props) => (
    <div>
        <h1>{props.project.title}</h1>
        <h3>{props.project.description}</h3>
        <p>{moment(props.project.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>

        <Link className="link" to={`/projects/${props.project.id}/tasks`}>
            <h3>{props.project.title} To-dos</h3>
        </Link>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(ProjectDetailPage);


