import clubApi from '../../api/clubApi'
import { CLUB_ERROR, EDIT_CLUB, FETCH_CLUBS, GET_CLUB } from '../types'


export const fetchClubs = () => async dispatch => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "x-auth-token": localStorage.getItem('token')
        }
    }

    try {
        const response = await clubApi.get('/api/clubs/', config)
        dispatch({ type: FETCH_CLUBS, payload: response?.data })
    } catch (err) {
        dispatch({ type: CLUB_ERROR })
        const errors = err?.response?.data?.errors
        console.log(errors);
    }
}

export const getClub = (id) => async dispatch => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "x-auth-token": localStorage.getItem('token')
        }
    }
    if (id) {
        try {
            const response = await clubApi.get(`/api/clubs/${id}`, config)
            dispatch({ type: GET_CLUB, payload: response?.data })
        } catch (err) {
            dispatch({ type: CLUB_ERROR })
            const errors = err?.response?.data?.errors
            console.error(errors);
        }
    }
}

export const editClub = (logoimg, coverimg, name, contactemail, contactmobile, president, vicepresident, secretary, treasurer, members, description, interests, achievements, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "x-auth-token": localStorage.getItem('token')
        }
    }

    const body = JSON.stringify({ logoimg, coverimg, name, contactemail, contactmobile, president, vicepresident, secretary, treasurer, members, description, interests, achievements, history })
    try {
        const response = await clubApi.post('/api/clubs/edit', body, config)
        dispatch({ type: EDIT_CLUB, payload: response?.data })
        history('/club-profile')
    } catch (err) {
        const errors = err?.response?.data?.errors
        console.error(errors);
    }
}