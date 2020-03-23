const projectsReducerDefaultState = [];

export default (state = projectsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            return [
                ...state, action.project
            ];
        case "REMOVE_PROJECT":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_PROJECT":
            return state.map((project) => {
                if (project.id === action.id) {
                    return {
                        ...project, ...action.updates
                    };
                } else {
                    return project
                }
            });
        case "ADD_TASK_SET":
        return state.map((project) => {
            if (project.id === action.id) {
                return {
                    ...project, taskSets: [...project.taskSets, action.taskSet]
                };
            } else {
                return project
            }
        });
        case "ADD_TASK":
        return state.map((project) => {
            if (project.id === action.projectId) {
                return {
                    ...project, 
                    taskSets: project.taskSets.map((taskSet) => {
                        if (taskSet.id === action.taskSetId) {
                            return {
                                ...taskSet,  
                                taskList: [...taskSet.taskList, action.task]
                            }   
                        } else {
                            return taskSet
                        }
                    })
                };
            } else {
                return project
            }
        });
        case "TOGGLE_TASK_STATUS":
        return state.map((project) => {
            if (project.id === action.projectId) {
                return {
                    ...project, 
                    taskSets: project.taskSets.map((taskSet) => {
                        if (taskSet.id === action.taskSetId) {
                            return {
                                ...taskSet,
                                taskList: [...taskSet.taskList.filter(task => task.id !== action.task.id), {...action.task, completed: !action.task.completed}]
                            }
                        } else {
                            return taskSet
                        }
                    })
                };
            } else {
                return project
            }
        });
        case "SET_PROJECTS":
            return action.projects;
        default:
            return state;
    }
};
