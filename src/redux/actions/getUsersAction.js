import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from '../types/getUsersType'
import axios from 'axios'

export const getUsersAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_REQUEST })
        const token = localStorage.getItem('token')

        const res = await axios.get('https://phantom-cabal-staging.herokuapp.com/api/v1/auth', {
            headers: {
                'Authorization': token
            }
        });
        
        return dispatch(getUsersSuccess(res))
        
    } catch (err) {
        if (error.response) {
            console.log(err);
            return dispatch(getUsersFail('Network Fails'))
        }
    }
}

export const getUsersSuccess = data => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    }
}

export const getUsersFail = error => {
    return {
        type: GET_USER_FAIL,
        payload: error
    }
}
