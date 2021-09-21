import { api } from "../../firebase/firebase"

const SIGN_UP = 'SIGN_UP'
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'

const initialState = {
    isAuth: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return { ...state, isAuth: true }
        case SIGN_IN:
            return { ...state, isAuth: true }
        case SIGN_OUT:
            return { ...state, isAuth: false }
        default:
            return state
    }
}
export const signUpActionCreator = (data) => ({ type: SIGN_UP, data })
export const signInActionCreator = (data) => ({ type: SIGN_IN, data })
export const signOutActionCreator = () => ({ type: SIGN_OUT })


export const signUp = data => dispatch => {
    api.signUp(data)
    dispatch(signUpActionCreator(data))
}
export const signIn = data => dispatch => {
    api.signIn(data)
    dispatch(signInActionCreator(data))
}
export const signOut = () => dispatch => {
    api.signOut()
    dispatch(signOutActionCreator())
}