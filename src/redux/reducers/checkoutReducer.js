const TOGGLE_CART = 'TOGGLE_CART'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

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
                    action.item.quantity++
                    return [...state.items]
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
            return { ...state }
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