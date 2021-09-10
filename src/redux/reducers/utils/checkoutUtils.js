export function getStateWithRemovedItem(state, action) {
    const items = state.items.filter(item => item.id !== action.item.id)
    return {
        ...state,
        totalItems: state.totalItems - action.item.quantity,
        items,
        totalPrice: calculateTotalPrice(items)
    }
}
export function getItemQuantityArr(increase, state, action) {
    return state.items.map(item => {
        if (item.id === action.item.id) {
            if (increase) item.quantity++
            if (!increase) item.quantity--
        }
        return item
    })
}
export function calculateTotalPrice(items) {
    let totalPrice = 0
    items.forEach(item => totalPrice += item.price * item.quantity)
    return totalPrice
}