import clubApi from '../../api/clubApi'
import { FETCH_USER } from '../types'


export const editProfile = (img, name, mobile, usn, collegename, gender, course, sem, dob, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": localStorage.getItem('token')
        }
    }

    const body = JSON.stringify({ img, name, mobile, gender, usn, collegename, sem, course, dob })
    try {
        const response = await clubApi.post('/api/profile/', body, config)
        dispatch({ type: FETCH_USER, payload: response?.data })
        history('/profile')
    } catch (err) {
        const errors = err?.response?.data?.errors
        console.log(errors);
    }
}
