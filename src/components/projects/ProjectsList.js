import React from "react";
import {connect} from "react-redux";
import ProjectListItem from "./ProjectListItem";
import selectProjects from "../../selectors/projects";
import DataListFilters from "../filters/DataListFilters";

export const ProjectsList = (props) => (
    <div>
        <DataListFilters/>
        <div>
            {props.projects.length < 1 ? <p>Add your first project!</p> : props.projects.map((project) => 
                <ProjectListItem key={project.id} project={project} />
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: selectProjects(state.projects, state.filters)
    }
};

export default connect(mapStateToProps)(ProjectsList);



