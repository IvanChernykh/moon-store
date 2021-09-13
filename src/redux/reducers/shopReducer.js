import SHOP_DATA from "../shopData";

const initialState = {
    shopData: SHOP_DATA,
}

function shopReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer