import { calculateTotalPrice, getItemQuantityArr, getStateWithRemovedItem } from "./utils/checkoutUtils"

const TOGGLE_CART = 'TOGGLE_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'

const initialState = {
    showCart: false,
    totalItems: 0,
    totalPrice: 0,
    items: [],

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
            const increasedItems = returnItems()
            return {
                ...state,
                totalItems: ++state.totalItems,
                totalPrice: calculateTotalPrice(increasedItems),
                items: increasedItems
            }
        case REMOVE_ITEM:
            return getStateWithRemovedItem(state, action)
        case DECREASE_QUANTITY:
            if (action.item.quantity <= 1) return getStateWithRemovedItem(state, action)
            const decreasedItems = getItemQuantityArr(false, state, action)
            return {
                ...state,
                totalItems: state.totalItems - 1,
                decreasedItems,
                totalPrice: calculateTotalPrice(decreasedItems)
            }
        default:
            return state
    }
}
export default checkoutReducer

export const toggleCart = () => ({ type: TOGGLE_CART })
export const addItem = item => ({ type: ADD_ITEM, item })
export const removeItem = item => ({ type: REMOVE_ITEM, item })
export const decreaseQuantity = item => ({ type: DECREASE_QUANTITY, item })