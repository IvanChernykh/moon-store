import { combineReducers, createStore } from "redux";
import checkoutReducer from "./reducers/checkoutReducer";
import collectionsReducer from "./reducers/collectionsReducer";
import shopReducer from "./reducers/shopReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['checkout']
}
const reducers = combineReducers({
    collections: collectionsReducer,
    shop: shopReducer,
    checkout: checkoutReducer,
})

export const store = createStore(persistReducer(persistConfig, reducers))
export const persistor = persistStore(store)