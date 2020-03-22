import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import {connect} from "react-redux";


export const ProjectListItem = (props) => (
        <div className="list-item-info">
            <Link className="link" to={`/projects/${props.project.id}`}>
                <h3>{props.project.title}</h3>
            </Link>
            <p>{props.project.description}</p>
            <p>{moment(props.project.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>

);

export default ProjectListItem;
