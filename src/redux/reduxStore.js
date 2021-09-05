import { combineReducers, createStore } from "redux";
import collectionsReducer from "./reducers/collectionsReducer";

const reducers = combineReducers({
    collections: collectionsReducer,
})

const store = createStore(reducers)
window.store = store

export default store