import { combineReducers, createStore } from "redux";
import collectionsReducer from "./reducers/collectionsReducer";
import shopReducer from "./reducers/shopReducer";

const reducers = combineReducers({
    collections: collectionsReducer,
    shop: shopReducer,
})
const store = createStore(reducers)
window.store = store

export default store