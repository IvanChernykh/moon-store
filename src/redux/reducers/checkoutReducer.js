import { getItemQuantityArr, getStateWithRemovedItem } from "./utils/checkoutUtils"

const TOGGLE_CART = 'TOGGLE_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'

const initialState = {
    showCart: false,
    totalItems: 0,
    items: []
}

function checkoutReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CART:
            return { ...state, showCart: !state.showCart }
        case ADD_ITEM:
            const returnItems = () => {
                if (state.items.some(item => item.id === action.item.id)) {
                    return getItemQuantityArr(true, state, action)
                }
                action.item.quantity = 1
                return [...state.items, action.item]
            }
            return {
                ...state,
                totalItems: ++state.totalItems,
                items: returnItems()
            }
        case REMOVE_ITEM:
            return getStateWithRemovedItem(state, action)
        case DECREASE_QUANTITY:
            if (action.item.quantity <= 1) return getStateWithRemovedItem(state, action)
            return { ...state, totalItems: state.totalItems - 1, items: getItemQuantityArr(false, state, action) }
        default:
            return { ...state }
    }
}
export default checkoutReducer

export const toggleCart = () => {
    return { type: TOGGLE_CART }
}
export const addItem = item => {
    return { type: ADD_ITEM, item }
}
export const removeItem = item => {
    return { type: REMOVE_ITEM, item }
}
export const decreaseQuantity = item => {
    return { type: DECREASE_QUANTITY, item }
}