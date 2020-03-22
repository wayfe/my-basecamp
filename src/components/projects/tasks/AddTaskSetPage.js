import React from "react";
import {connect} from "react-redux";
import uuid from "uuid";

import {addTaskSet} from "../../../actions/projects";
import TaskSetForm from "./TaskSetForm";

const AddTaskSetPage = (props) => (
    <div>
        <h3>Add a new list:</h3>
        <TaskSetForm 
            onSubmit={(taskSet) => {
                    const newTaskSet = {id: uuid(), ...taskSet}
                    props.dispatch(addTaskSet(props.project.id, newTaskSet));
                }
            }
        />
    </div>
)



export default connect()(AddTaskSetPage);