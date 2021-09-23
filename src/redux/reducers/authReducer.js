import { api } from "../../firebase/firebase"

const LOG_IN = 'LOG_IN'
const SIGN_OUT = 'SIGN_OUT'

const initialState = {
    isAuth: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return { ...state, isAuth: true }
        case SIGN_OUT:
            return { ...state, isAuth: false, displayName: null }
        default:
            return state
    }
}
const LogInActionCreator = data => ({ type: LOG_IN, data })
const signOutActionCreator = () => ({ type: SIGN_OUT })

export const signUp = data => async dispatch => {
    api.signUp(data)
    dispatch(LogInActionCreator(data))
}
export const signIn = (data, history) => async dispatch => {
    const res = await api.signIn(data)
    if (res) {
        dispatch(LogInActionCreator(data))
        history.push('/')
    } else {
        alert('Incorrect email or password')
    }
}
export const signOut = () => async dispatch => {
    api.signOut()
    dispatch(signOutActionCreator())
}