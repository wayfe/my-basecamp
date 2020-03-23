import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "../reducers/projects";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        componseEnhancers(applyMiddleware(thunk))
    );
    return store;
}
