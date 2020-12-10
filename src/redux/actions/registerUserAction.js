import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from '../types/registerUsersTypes';
import axios from 'axios';

export const registerUserAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        const token = localStorage.getItem('token')

        const res = await axios.post(
            'https://phantom-cabal-staging.herokuapp.com/api/v1/auth/register', data, {
            headers: {
                'Authorization': token
            }
        });
        console.log('Action:\n', res)
        return dispatch(registerSuccess(res));
    } catch (error) {
        if (error.response) {
            const errorMessage = await error.response.data.message;
            return dispatch(registerFails(errorMessage));
        } 
        else {
            console.log(error)
            return dispatch(registerFails('Network Error'));
        }
    }
};

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    };
};

export const registerFails = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error,
    };
};