import uuid from "uuid";
import moment from "moment";


export const addProject = (
    {
        title = "",
        description = "",  
    } = {}
) => ({
    type: "ADD_PROJECT",
    project: {
        id: uuid(),
        createdAt: moment(),
        title,
        description,
        taskSets: [],
        docs: [],
        messages: []
    }
});

export const removeProject = ({ id } = {}) => ({
    type: "REMOVE_PROJECT",
    id
});

export const editProject = (id, updates) => ({
    type: "EDIT_PROJECT",
    id,
    updates
});

export const addTaskSet = (id, taskSet) => ({
    type: "ADD_TASK_SET",
    id,
    taskSet
});

export const addTask = (projectId, taskSetId, task) => ({
    type: "ADD_TASK",
    projectId,
    taskSetId,
    task
});

export const toggleTaskStatus = (projectId, taskSetId, task) => ({
    type: "TOGGLE_TASK_STATUS",
    projectId,
    taskSetId,
    task
});

