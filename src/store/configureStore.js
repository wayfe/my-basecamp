import { createStore, combineReducers } from "redux";
import projectsReducer from "../reducers/projects";
import filtersReducer from "../reducers/filters";

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
