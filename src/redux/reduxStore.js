import { applyMiddleware, combineReducers, createStore } from "redux";
import checkoutReducer from "./reducers/checkoutReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import shopReducer from "./reducers/shopReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['checkout']
}
const reducers = combineReducers({
    collections: collectionsReducer,
    shop: shopReducer,
    checkout: checkoutReducer,
    auth: authReducer
})

export const store = createStore(persistReducer(persistConfig, reducers), applyMiddleware(thunk))
export const persistor = persistStore(store)