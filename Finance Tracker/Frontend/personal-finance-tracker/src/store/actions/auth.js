import financeApi from '../../api/financeApi'
import setAuthToken from '../../utils/setAuthToken'
import { AUTH_ERROR, FETCH_USER, LOGIN_SUCCESS } from '../types'


export const fetchUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420", //this also resolved cors error 
            "x-auth-token": localStorage.getItem('token')
        }
    }

    try {
        const response = await financeApi.get('/api/auth/', config)
        dispatch({ type: FETCH_USER, payload: response.data })
    } catch (err) {
        // dispatch({ type: AUTH_ERROR })
        const errors = err.response.data.error
        console.log(errors);
        // const errors = err.response.data.errors
    }
}

export const login = (email, password, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })
    try {
        const response = await financeApi.post('/api/auth/signin', body, config)
        localStorage.setItem('token', response.data)
        dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.error
        console.log(errors);
        // dispatch({ type: LOGIN_FAIL })
    }
}

export const signup = (name, email, mobile, password, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, mobile, password })
    try {
        const response = await financeApi.post('/api/auth/signup', body, config)
        localStorage.setItem('token', response.data)
        dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
        // dispatch({ type: LOGIN_FAIL })
    }
}

// export const editProfile = (name, email, mobile, pincode, address, history) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     const body = JSON.stringify({ name, email, mobile, pincode, address })
//     try {
//         const response = await financeApi.put('/profile-edit', body, config)
//         dispatch({ type: FETCH_USER, payload: response.data })
//         history('/profile')
//     } catch (err) {
//         const errors = err.response.data.errors
//         console.log(err);
//         // dispatch({ type: LOGIN_FAIL })
//     }
// }