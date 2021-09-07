import { combineReducers, createStore } from "redux";
import checkoutReducer from "./reducers/checkoutReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import shopReducer from "./reducers/shopReducer";

const reducers = combineReducers({
    collections: collectionsReducer,
    shop: shopReducer,
    checkout: checkoutReducer,
})
const store = createStore(reducers)

export default store