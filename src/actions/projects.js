import uuid from "uuid";
import moment from "moment";
import database from "../firebase/firebase";

export const startAddProject = (projectData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = "",
            description = "",
            id = "" ,
            createdAt = "",
        } = projectData;
        const project = { createdAt, title, description, taskSets: [], docs: [], messages: [] }
        return database.ref(`/users/${uid}/projects/${id}`).set(project).then(() => {
            dispatch(addProject({
                id,
                ...project
            }));
        });
    };                                                                                                                       
};

export const addProject = (project) => ({
    type: "ADD_PROJECT",
    project
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

// SET_PROJECTS
export const setProjects = (projects) => ({
    type: "SET_PROJECTS",
    projects
});


export const startSetProjects = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/projects/`).once("value").then((snapshots) => {
            const projects = [];
            snapshots.forEach((i) => {
                const taskSetArray = [] 
                const taskSets = i.val().taskSets;

                for (var key in taskSets) {
                    taskSetArray.push({...taskSets[key], id: key});
                }
                    
                const project = {...i.val(), id: i.key, taskSets: taskSetArray}
                    
                projects.push(project);
            });
            console.log(projects);
            dispatch(setProjects(projects));
        });
    };                                                                                                                       
};