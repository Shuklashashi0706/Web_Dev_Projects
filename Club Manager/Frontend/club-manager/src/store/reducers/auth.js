import { FETCH_USER, LOGIN_SUCCESS, AUTH_ERROR, SIGN_OUT } from "../types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case FETCH_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null
            }
        case SIGN_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                loading: true,
                user: null
            }
        default:
            return state
    }
}