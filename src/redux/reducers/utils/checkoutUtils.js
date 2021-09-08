export function getStateWithRemovedItem(state, action) {
    return {
        ...state,
        totalItems: state.totalItems - action.item.quantity,
        items: state.items.filter(item => item.id !== action.item.id)
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
